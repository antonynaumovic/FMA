import { Link } from "@heroui/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function LandingLayout({ children }) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="w-full h-screen">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href=""
          title=""
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">Your Mum</p>
        </Link>
      </footer>
    </div>
  );
}
