const Navbar = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
              <span className="text-white font-bold text-xl tracking-tighter">E</span>
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-900">Exepath</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#why-us" className="hover:text-blue-600 transition-colors">Why Us</a>
            <a href="#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</a>
            <a href="#contact" className="px-6 py-2.5 bg-slate-900 text-white rounded-full hover:bg-blue-600 transition-all shadow-md hover:shadow-xl hover:shadow-blue-600/20 active:scale-95">
              Get Started
            </a>
          </nav>
        </div>
      </header>
};

export default Navbar;
