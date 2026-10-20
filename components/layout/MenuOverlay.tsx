"use client";

import { useEffect } from "react";
import Link from "next/link";
import { nav, contact } from "@/data/site";
import PlacedImage from "@/components/ui/PlacedImage";

export default function MenuOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      id="menu-overlay"
      aria-hidden={!open}
      className={`fixed inset-0 z-[60] bg-ink-900 text-paper transition-[clip-path] duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
        open
          ? "[clip-path:inset(0_0_0_0)] pointer-events-auto"
          : "[clip-path:inset(0_0_100%_0)] pointer-events-none"
      }`}
    >
      <div className="u-container flex h-full flex-col justify-between pt-24 pb-10 md:grid md:grid-cols-12 md:items-center md:gap-10">
        <nav className="md:col-span-7" aria-label="Navegação principal">
          <ul className="space-y-1">
            {nav.map((item, i) => (
              <li key={item.href} className="overflow-hidden">
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-baseline gap-4 py-2"
                  style={{
                    transform: open ? "translateY(0)" : "translateY(110%)",
                    opacity: open ? 1 : 0,
                    transition: `transform 700ms cubic-bezier(0.16,1,0.3,1) ${
                      120 + i * 70
                    }ms, opacity 500ms linear ${120 + i * 70}ms`,
                  }}
                >
                  <span className="u-label text-ink-300">0{i + 1}</span>
                  <span className="d-1 font-display transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3 group-hover:text-clay">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:col-span-5 md:block">
          <div className="aspect-[4/5] w-full">
            <PlacedImage
              seed="menu"
              w={800}
              h={1000}
              alt="Profissional de costas, com o logo da Conatus no uniforme, acompanha uma aluna no leg press."
              className="h-full w-full"
              sizes="40vw"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 md:col-span-12">
          <div className="u-rule mb-4" />
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="u-label text-ink-300">Vila Mariana — São Paulo</p>
              <p className="mt-1 font-display text-lg">
                {contact.address.street}
              </p>
            </div>
            <a
              href={contact.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="u-action inline-flex min-h-12 items-center gap-2 bg-whatsapp px-5 text-white transition-colors hover:bg-whatsapp-dark"
            >
              WhatsApp {contact.phoneDisplay} ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
