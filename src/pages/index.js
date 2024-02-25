import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Featured from "@/components/Featured";
import Register from "@/components/Register";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      
     <Navbar />
     <Featured />
     <Register />

    </div>
  );
}
