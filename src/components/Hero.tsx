

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-40 lg:pt-48 lg:pb-64">
      {/* Background Illustration Container */}
      <div
        className="absolute bottom-0 left-0 w-full h-[60%] sm:h-[70%] lg:h-[80%] -z-0 bg-bottom bg-no-repeat bg-cover mix-blend-multiply opacity-50"
        style={{
          backgroundImage: "url(/hero-bg2.png)",
          maskImage: "linear-gradient(to bottom, transparent, black 30%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 30%)",
        }}
      />

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          {/* Top Tag */}
          <div className="inline-flex items-center gap-2 text-slate-950 font-medium text-sm sm:text-base mb-8">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-950"></span>
            </span>
            Structuring Progress, Delivering Results
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-7xl lg:text-[84px] font-bold tracking-tight mb-8 leading-[1.05] text-black max-w-4xl">
            Move from scattered effort to{" "}
            <span className="text-yellow-10">structured progress.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-900 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            We are Pan-African execution and performance brand helping
            individuals, startups, and businesses improve productivity,
            strengthen execution, manage projects effectively, and achieve
            sustainable growth through structure, systems, and strategic
            advisory.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="#services"
              className="w-full sm:w-auto px-6 py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
