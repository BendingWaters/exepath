"use client";

import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const navLinks = [
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Why Us",
    href: "#why-us",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const headerRef = useRef<HTMLElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const mobileLinkRefs = useRef<HTMLAnchorElement[]>([]);

  useGSAP(
    () => {
      if (!mobileMenuRef.current) return;

      if (isOpen) {
        document.body.style.overflow = "hidden";

        gsap.set(mobileMenuRef.current, {
          pointerEvents: "auto",
        });

        gsap.fromTo(
          mobileMenuRef.current,
          {
            autoAlpha: 0,
            y: -16,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.35,
            ease: "power3.out",
          }
        );

        gsap.fromTo(
          mobileLinkRefs.current,
          {
            autoAlpha: 0,
            y: 18,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.35,
            stagger: 0.06,
            delay: 0.08,
            ease: "power3.out",
          }
        );
      } else {
        document.body.style.overflow = "";

        gsap.to(mobileMenuRef.current, {
          autoAlpha: 0,
          y: -16,
          duration: 0.25,
          ease: "power2.in",
          onComplete: () => {
            gsap.set(mobileMenuRef.current, {
              pointerEvents: "none",
            });
          },
        });
      }

      return () => {
        document.body.style.overflow = "";
      };
    },
    {
      dependencies: [isOpen],
      scope: headerRef,
    }
  );

  const closeMenu = () => {
    setIsOpen(false);
  };

  const setMobileLinkRef = (el: HTMLAnchorElement | null, index: number) => {
    if (!el) return;
    mobileLinkRefs.current[index] = el;
  };

  return (
    <header
      ref={headerRef}
      className="fixed left-0 right-0 top-0 z-50 bg-white/85 shadow-sm"
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="group flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Exepath logo"
            className="h-11 w-11 rounded-2xl object-contain"
          />

          <span className="text-2xl font-black tracking-tight text-black transition-colors duration-300 group-hover:text-black">
            Exepath
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 text-sm font-bold text-gray/70 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-300 hover:text-yellow-50"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-black px-6 py-3 font-black text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-50 hover:text-black hover:shadow-xl active:scale-95"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-light text-gray shadow-sm transition-all duration-300 hover:bg-yellow-40 md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="pointer-events-none invisible absolute left-0 right-0 top-20 z-40 border-b border-black/5 bg-white/95 px-5 py-5 opacity-0 shadow-xl backdrop-blur-xl md:hidden"
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-3">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              ref={(el) => setMobileLinkRef(el, index)}
              href={link.href}
              onClick={closeMenu}
              className="rounded-2xl border border-black/5 bg-light px-5 py-4 text-base font-bold text-gray transition-all duration-300 hover:border-yellow-40/40 hover:bg-yellow-40 hover:text-black"
            >
              {link.label}
            </a>
          ))}

          <a
            ref={(el) => setMobileLinkRef(el, navLinks.length)}
            href="#contact"
            onClick={closeMenu}
            className="mt-2 rounded-2xl bg-black px-5 py-4 text-center text-base font-black text-white shadow-lg transition-all duration-300 hover:bg-yellow-50 hover:text-black active:scale-[0.98]"
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
