"use client";


import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import SideNav from '@/app/ui/navegacion/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();




  return (
    <div>
      <SideNav />
      <main>{children}</main>
    </div>
  );
}
