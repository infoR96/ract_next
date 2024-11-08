// src/app/api/users/route.ts
'use server';

import { NextResponse } from 'next/server';
import sql from '@/lib/db'; // Asegúrate de que esta ruta sea correcta
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
const secretKey = process.env.SECRET_KEY ;

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Buscar al usuario por su email
    const result = await sql`SELECT * FROM users WHERE email = ${email};`;
    const user = result.rows[0];

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Verificar la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    // Generar un token JWT
    if (!secretKey) {
        throw new Error("La clave secreta (SECRET_KEY) no está definida en el entorno.");
      }
    const token = jwt.sign({ userId: user.id, email: user.email }, secretKey, {
      expiresIn: "10h",
    });

    return NextResponse.json({ token });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Failed to login" }, { status: 500 });
  }
}