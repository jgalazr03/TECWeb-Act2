import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white text-gray-900 p-4 font-[family-name:var(--font-geist-sans)]">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <Image
            src="/google_logo.png"
            alt="Google Logo"
            width={50}
            height={50}
          />
        </Link>

        <div className="space-x-6">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/pag1" className="hover:text-gray-400">
            Pag1
          </Link>
          <Link href="/pag2" className="hover:text-gray-400">
            Pag2
          </Link>
        </div>
      </div>
    </nav>
  );
}
