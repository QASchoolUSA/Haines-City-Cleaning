import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center">
              <Image src="/haines-city-cleaning-logo.svg" alt="Haines City Cleaning" width={180} height={40} />
            </Link>
            <p className="mt-2 text-sm text-slate-600">Exceptional residential, commercial, and post-construction cleaning across Haines City and surrounding areas.</p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">Contact</h3>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li>Email: <a href="mailto:hello@hainescitycleaning.com" className="text-[#FF7A00] hover:underline">hello@hainescitycleaning.com</a></li>
              <li>Phone: <a href="tel:+18633587388" className="text-[#FF7A00] hover:underline">(863) 358-7388</a></li>
              <li>Hours: Mon–Sat 8:00–18:00</li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">Services</h3>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li><Link href="/residential-cleaning" className="text-[#FF7A00] hover:underline">Residential Cleaning</Link></li>
              <li><Link href="/commercial-cleaning" className="text-[#FF7A00] hover:underline">Commercial Cleaning</Link></li>
              <li><Link href="/post-construction-cleaning" className="text-[#FF7A00] hover:underline">Post-Construction Cleaning</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">Service Areas</h3>
            <p className="mt-2 text-sm text-slate-600">Haines City, Davenport, Winter Haven, Lakeland, Kissimmee, and nearby communities.</p>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Haines City Cleaning. All rights reserved.</p>
          <p className="text-xs text-slate-500">Licensed & Insured • Satisfaction Guaranteed</p>
        </div>
      </div>
    </footer>
  );
}