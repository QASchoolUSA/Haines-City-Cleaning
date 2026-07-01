"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SERVICE_LINKS = [
  { href: "/residential-cleaning", label: "Residential Cleaning" },
  { href: "/house-cleaning", label: "House Cleaning" },
  { href: "/move-out-cleaning", label: "Move Out Cleaning" },
  { href: "/move-in-cleaning", label: "Move In Cleaning" },
  { href: "/commercial-cleaning", label: "Commercial Cleaning" },
  { href: "/post-construction-cleaning", label: "Post-Construction" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleOutside(event: MouseEvent | TouchEvent) {
      if (!open) return;
      const target = event.target as Node;
      if (!buttonRef.current?.contains(target) && !menuRef.current?.contains(target)) {
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
    <header
      className={`sticky top-0 z-40 w-full transition duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-[4.5rem]">
          <Link href="/" className="flex shrink-0 items-center">
            <Image src="/haines-city-cleaning-logo.svg" alt="Haines City Cleaning" width={180} height={40} priority />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            <div className="group relative">
              <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#FF7A00]">
                Services
                <svg className="h-4 w-4 text-slate-400 transition group-hover:text-[#FF7A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="invisible absolute left-0 top-full z-50 w-60 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="rounded-2xl border border-slate-100 bg-white p-2 shadow-xl shadow-slate-200/50">
                  {SERVICE_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-xl px-4 py-2.5 text-sm text-slate-700 transition hover:bg-[#FFB730]/10 hover:text-[#FF7A00]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="#benefits" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#FF7A00]">Why Us</Link>
            <Link href="#testimonials" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#FF7A00]">Reviews</Link>
            <Link href="#contact" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#FF7A00]">Contact</Link>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="tel:+18633587388" className="text-sm font-medium text-slate-600 transition hover:text-[#FF7A00]">
              (863) 358-7388
            </a>
            <Link href="#booking" className="btn-primary px-5 py-2.5 text-sm">Get a Quote</Link>
          </div>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            ref={buttonRef}
            className="rounded-xl p-2.5 text-slate-900 transition hover:bg-slate-100 md:hidden"
            onClick={() => setOpen(!open)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {open ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="pb-4 md:hidden" ref={menuRef} id="mobile-menu">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-lg">
              <nav className="flex flex-col gap-1">
                <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-slate-400">Services</p>
                {SERVICE_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-[#FFB730]/10 hover:text-[#FF7A00]"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="my-2 h-px bg-slate-100" />
                <Link href="#benefits" className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" onClick={() => setOpen(false)}>Why Us</Link>
                <Link href="#testimonials" className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" onClick={() => setOpen(false)}>Reviews</Link>
                <Link href="#contact" className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" onClick={() => setOpen(false)}>Contact</Link>
                <a href="tel:+18633587388" className="rounded-xl px-3 py-2 text-sm font-medium text-[#FF7A00]">(863) 358-7388</a>
                <Link href="#booking" className="btn-primary mt-2 text-center" onClick={() => setOpen(false)}>Get a Quote</Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
