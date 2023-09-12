'use client';
import "./globals.css";
import { Inter } from "next/font/google";
import { AuthContextProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Royalty Portal",
  description: "Gamification App",
};

export default function RootLayout({ children }) {  
  return (
    <html lang="en">
      <body className="p-4 bg-gray-900 h-screen">
        <AuthContextProvider>
          <Navbar/>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
