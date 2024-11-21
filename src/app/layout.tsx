// src/app/data/layout.tsx
"use client";

// import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import SideNav from '@/app/ui/navegacion/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  // const { user } = useAuth();



  return (
    <html lang="en">
    <head>
      <title>Your App Title</title>
    </head>
    <body>{children}</body>
    {/* <SideNav /> */}
  </html>

  );
}
