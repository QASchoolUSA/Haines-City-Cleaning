"use client";
import { useState, useRef, type ReactNode } from "react";

export default function Accordion({ title, children }: { title: string; children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-slate-200">
      <button
        className="flex w-full items-center justify-between py-4 text-left font-semibold text-slate-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </span>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight : 0 }}
        className="overflow-hidden transition-all duration-300"
      >
        <div className="pb-4 text-slate-700">{children}</div>
      </div>
    </div>
  );
}
