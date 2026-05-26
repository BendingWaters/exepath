const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/exepath?igsh=YzljYTk1ODg3Zg==",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    className:
      "hover:border-transparent hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-fuchsia-600 hover:text-white",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1AunhbZo6m/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    className: "hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/achieveit-accountability-service/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    className: "hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white",
  },
];

const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-black/5 bg-white pt-16 pb-8">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-yellow-40/15 blur-3xl" />
      <div className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-yellow-20/15 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="rounded-4xl border border-black/5 bg-light p-6 shadow-[0_18px_60px_rgba(0,0,0,0.05)] sm:p-8 lg:p-10">
          <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
            {/* Brand */}
            <div className="flex max-w-sm flex-col items-center gap-4 lg:items-start">
              <a href="#" className="group flex items-center gap-3">
                <img src="/logo.png" alt="logo" className="w-10 h-10" />

                <span className="text-2xl font-black tracking-tight text-black">
                  Exepath
                </span>
              </a>

              <p className="text-sm leading-6 text-gray/65">
                Structuring progress and delivering measurable results for your
                business.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-sm transition-all duration-300 hover:-translate-y-0.5 ${social.className}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <nav
              aria-label="Footer legal links"
              className="flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm font-bold text-black"
            >
              {legalLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="transition-colors duration-300 hover:text-yellow-40"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-black/10 pt-8 text-center text-sm text-gray/55 md:flex-row md:text-left">
            <p>© {new Date().getFullYear()} Exepath. All rights reserved.</p>
            <p className="font-medium text-black/45">
              Built for structure and growth.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
