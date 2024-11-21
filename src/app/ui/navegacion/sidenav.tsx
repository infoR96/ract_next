// src/app/ui/navegacion/sidenav.tsx
"use client"
import Link from 'next/link';
import NavLinks from '@/app/ui/navegacion/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import Logo from '@/app/components/LogoApp';
// import { useAuth } from '@/context/AuthContext';

export default function SideNav() {
  // const { signOut } = useAuth();

  return (
    <div className="flex h-screen flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <Logo src={'/imagenes/logocodea.jpeg'} alt={'Magnetic Space'} />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block "></div>
        <button
          // onClick={signOut} // Llama a la función de cerrar sesión
          className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
        >
          <PowerIcon className="w-5 h-5" />
          <div className="hidden md:block">Sign Out</div>
        </button>
      </div>
    </div>
  );
}
