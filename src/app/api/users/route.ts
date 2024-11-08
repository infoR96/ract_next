// src/app/api/users/route.ts
'use server';

import { NextResponse } from 'next/server';
import sql from '@/lib/db'; // Asegúrate de que esta ruta sea correcta
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
const secretKey = process.env.SECRET_KEY ;
// Ruta GET para obtener los usuarios
export async function GET() {
  try {
    // Consultar todos los usuarios
    const { rows } = await sql`SELECT * FROM users`;

    // Mostrar los resultados en la consola (solo para depuración)
    console.log('Usuarios:', rows);

    // Devolver los usuarios en formato JSON
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

// Ruta POST para crear un nuevo usuario
export async function POST(request: Request) {
  try {
    // Obtener los datos del request body
    const { name, email, password } = await request.json();

    // Generar un "salt" y encriptar la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Mostrar el nombre, correo y contraseña encriptada en la consola (solo para depuración)
    console.log('Nuevo usuario:', { name, email, hashedPassword });

    // Insertar el nuevo usuario en la base de datos con la contraseña encriptada
    await sql`
      INSERT INTO users (id, name, email, password)
      VALUES (gen_random_uuid(), ${name}, ${email}, ${hashedPassword});
    `;
    const result = await sql`SELECT * FROM users WHERE email = ${email};`;
    const user = result.rows[0];
    if (!secretKey) {
      throw new Error("La clave secreta (SECRET_KEY) no está definida en el entorno.");
    }

  const token = jwt.sign({ userId: user.id, email: user.email }, secretKey, {
    expiresIn: "10h",
  });
    // Respuesta exitosa
    return NextResponse.json({ message: 'Usuario creado satisfactoriamente',
                              name: user.name,
                              token:token,
                              email:user.email

     });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}

