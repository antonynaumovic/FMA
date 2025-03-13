import { Link } from "@heroui/react";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";


import Footer from "@/components/footer";

export default function LandingLayout({ children }) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
