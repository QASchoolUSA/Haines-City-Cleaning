"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close mobile menu on outside click/touch
  useEffect(() => {
    function handleOutside(event: MouseEvent | TouchEvent) {
      if (!open) return;
      const target = event.target as Node;
      const clickedButton = buttonRef.current?.contains(target);
      const clickedMenu = menuRef.current?.contains(target);
      if (!clickedButton && !clickedMenu) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [open]);
  return (
    <header className="sticky top-0 z-40 w-full bg-gradient-to-b from-zinc-50 to-white shadow-sm ring-1 ring-slate-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Haines City Cleaning" width={36} height={36} />
            <span className="text-lg font-semibold tracking-tight text-black text-shadow-sm">Haines City Cleaning</span>
          </Link>
          <nav className="hidden gap-8 md:flex">
            <Link href="#services" className="text-sm font-medium text-slate-700 hover:text-purple-700">Services</Link>
            <Link href="#benefits" className="text-sm font-medium text-slate-700 hover:text-purple-700">Why Us</Link>
            <Link href="#testimonials" className="text-sm font-medium text-slate-700 hover:text-purple-700">Reviews</Link>
            <Link href="#contact" className="text-sm font-medium text-slate-700 hover:text-purple-700">Contact</Link>
          </nav>
          <div className="hidden md:flex">
            <Link href="#booking" className="rounded-full bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-700">Get a Quote</Link>
          </div>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            ref={buttonRef}
            className="md:hidden rounded-md p-2 text-slate-900 hover:bg-slate-100"
            onClick={() => setOpen(!open)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4" ref={menuRef} id="mobile-menu">
            <div className="mx-auto mt-2 w-full max-w-xs rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <nav className="flex flex-col items-center gap-3 text-center">
                <Link href="#services" className="text-sm font-medium text-slate-700 hover:text-purple-700" onClick={() => setOpen(false)}>Services</Link>
                <Link href="#benefits" className="text-sm font-medium text-slate-700 hover:text-purple-700" onClick={() => setOpen(false)}>Why Us</Link>
                <Link href="#testimonials" className="text-sm font-medium text-slate-700 hover:text-purple-700" onClick={() => setOpen(false)}>Reviews</Link>
                <Link href="#contact" className="text-sm font-medium text-slate-700 hover:text-purple-700" onClick={() => setOpen(false)}>Contact</Link>
                <Link href="#booking" className="rounded-full bg-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-700" onClick={() => setOpen(false)}>Get a Quote</Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}