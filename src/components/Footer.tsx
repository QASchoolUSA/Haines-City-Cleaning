import Link from "next/link";
import Image from "next/image";

const SERVICE_LINKS = [
  { href: "/residential-cleaning", label: "Residential Cleaning" },
  { href: "/house-cleaning", label: "House Cleaning" },
  { href: "/move-out-cleaning", label: "Move Out Cleaning" },
  { href: "/move-in-cleaning", label: "Move In Cleaning" },
  { href: "/commercial-cleaning", label: "Commercial Cleaning" },
  { href: "/post-construction-cleaning", label: "Post-Construction Cleaning" },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center">
              <Image src="/haines-city-cleaning-logo.svg" alt="Haines City Cleaning" width={180} height={40} />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
              Exceptional residential, commercial, and post-construction cleaning across Haines City and surrounding areas.
            </p>
            <p className="mt-4 text-xs font-medium text-slate-500">Licensed & Insured · Satisfaction Guaranteed</p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <a href="mailto:hello@hainescitycleaning.com" className="font-medium text-[#FF7A00] hover:underline">
                  hello@hainescitycleaning.com
                </a>
              </li>
              <li>
                <a href="tel:+18633587388" className="font-medium text-[#FF7A00] hover:underline">
                  (863) 358-7388
                </a>
              </li>
              <li>Hours: Mon–Sat 8:00–18:00</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-600 transition hover:text-[#FF7A00]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Service Areas</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Haines City, Davenport, Winter Haven, Lakeland, Kissimmee, and nearby communities.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Haines City Cleaning. All rights reserved.</p>
          <Link href="#booking" className="text-xs font-semibold text-[#FF7A00] hover:underline">
            Book a cleaning →
          </Link>
        </div>
      </div>
    </footer>
  );
}
