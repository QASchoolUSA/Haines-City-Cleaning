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
          <Link href="/" className="flex items-center">
            <Image src="/haines-city-cleaning-logo.svg" alt="Haines City Cleaning" width={180} height={40} />
          </Link>
          <nav className="hidden gap-8 md:flex items-center">
            {/* Desktop Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-[#FF7A00] focus:outline-none">
                Services
                <svg className="w-4 h-4 text-slate-500 group-hover:text-[#FF7A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className="absolute left-0 top-full pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out transform group-hover:translate-y-0 translate-y-2">
                <div className="rounded-xl bg-white p-2 shadow-lg ring-1 ring-slate-200/50 flex flex-col gap-1">
                  <Link href="/residential-cleaning" className="block rounded-lg px-4 py-2 text-sm text-slate-700 hover:bg-[#FFB730]/10 hover:text-[#FF7A00]">Residential Cleaning</Link>
                  <Link href="/house-cleaning" className="block rounded-lg px-4 py-2 text-sm text-slate-700 hover:bg-[#FFB730]/10 hover:text-[#FF7A00]">House Cleaning</Link>
                  <Link href="/move-out-cleaning" className="block rounded-lg px-4 py-2 text-sm text-slate-700 hover:bg-[#FFB730]/10 hover:text-[#FF7A00]">Move Out Cleaning</Link>
                  <Link href="/move-in-cleaning" className="block rounded-lg px-4 py-2 text-sm text-slate-700 hover:bg-[#FFB730]/10 hover:text-[#FF7A00]">Move In Cleaning</Link>
                  <Link href="/commercial-cleaning" className="block rounded-lg px-4 py-2 text-sm text-slate-700 hover:bg-[#FFB730]/10 hover:text-[#FF7A00]">Commercial Cleaning</Link>
                  <Link href="/post-construction-cleaning" className="block rounded-lg px-4 py-2 text-sm text-slate-700 hover:bg-[#FFB730]/10 hover:text-[#FF7A00]">Post-Construction</Link>
                </div>
              </div>
            </div>

            <Link href="#benefits" className="text-sm font-medium text-slate-700 hover:text-[#FF7A00]">Why Us</Link>
            <Link href="#testimonials" className="text-sm font-medium text-slate-700 hover:text-[#FF7A00]">Reviews</Link>
            <Link href="#contact" className="text-sm font-medium text-slate-700 hover:text-[#FF7A00]">Contact</Link>
          </nav>
          <div className="hidden md:flex">
            <Link href="#booking" className="rounded-full bg-[#FF7A00] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#FFB730]">Get a Quote</Link>
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
                <div className="w-full border-b border-slate-100 pb-2 mb-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 block">Services</span>
                  <Link href="/residential-cleaning" className="block py-1 text-sm font-medium text-slate-700 hover:text-[#FF7A00]" onClick={() => setOpen(false)}>Residential</Link>
                  <Link href="/house-cleaning" className="block py-1 text-sm font-medium text-slate-700 hover:text-[#FF7A00]" onClick={() => setOpen(false)}>House Cleaning</Link>
                  <Link href="/move-out-cleaning" className="block py-1 text-sm font-medium text-slate-700 hover:text-[#FF7A00]" onClick={() => setOpen(false)}>Move Out</Link>
                  <Link href="/move-in-cleaning" className="block py-1 text-sm font-medium text-slate-700 hover:text-[#FF7A00]" onClick={() => setOpen(false)}>Move In</Link>
                  <Link href="/commercial-cleaning" className="block py-1 text-sm font-medium text-slate-700 hover:text-[#FF7A00]" onClick={() => setOpen(false)}>Commercial</Link>
                  <Link href="/post-construction-cleaning" className="block py-1 text-sm font-medium text-slate-700 hover:text-[#FF7A00]" onClick={() => setOpen(false)}>Post-Construction</Link>
                </div>

                <Link href="#benefits" className="text-sm font-medium text-slate-700 hover:text-[#FF7A00]" onClick={() => setOpen(false)}>Why Us</Link>
                <Link href="#testimonials" className="text-sm font-medium text-slate-700 hover:text-[#FF7A00]" onClick={() => setOpen(false)}>Reviews</Link>
                <Link href="#contact" className="text-sm font-medium text-slate-700 hover:text-[#FF7A00]" onClick={() => setOpen(false)}>Contact</Link>
                <Link href="#booking" className="rounded-full bg-[#FF7A00] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#FFB730]" onClick={() => setOpen(false)}>Get a Quote</Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
