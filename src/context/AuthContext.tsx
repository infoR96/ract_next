// // src/context/AuthContext.tsx

// import { createContext, useContext, useState, ReactNode } from 'react';

// // Define el tipo de user según tu lógica (puede ser un objeto o `null`).
// type User = {
//   id: string;
//   name: string;
// } | null;

// interface AuthContextProps {
//   user: User; // Usuario autenticado
//   login: (email: string, password: string) => Promise<void>;
//   logout: () => void;
//   signOut: () => void; // Agrega la propiedad signOut aquí
//   // Otras propiedades y métodos que necesites en el contexto...
// }

// const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<User>(null);

//   const login = async (email: string, password: string) => {
//     // Tu lógica de autenticación
//     setUser({ id: "123", name: "John Doe" }); // Ejemplo
//   };

//   const logout = () => {
//     setUser(null);
//   };

//   // Define la función signOut
//   const signOut = () => {
//     // Lógica para cerrar la sesión (ejemplo: limpiar el estado del usuario)
//     setUser(null);
//     console.log("Sesión cerrada");
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, signOut }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth debe ser usado dentro de un AuthProvider");
//   }
//   return context;
// };
