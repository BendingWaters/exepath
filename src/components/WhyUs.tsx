import { ShieldCheck, Target, Zap, LayoutGrid, Eye, Link } from "lucide-react";

const principles = [
  {
    title: "Clarity",
    icon: Eye,
    description: "Uncovering your true path with crystal clear vision.",
    visual: (
      <div className="relative flex h-32 w-full items-center justify-center">
        <div className="absolute h-24 w-24 rounded-full border border-yellow-40/30 bg-yellow-40/10 blur-xl"></div>
        <div className="absolute h-16 w-16 rounded-full border border-gray-200"></div>
        <div className="absolute h-8 w-8 rounded-full border border-gray-300 bg-white"></div>
        <Eye className="relative h-6 w-6 text-gray-800" />
      </div>
    )
  },
  {
    title: "Structure",
    icon: LayoutGrid,
    description: "Building a solid framework for sustainable success.",
    visual: (
      <div className="relative flex h-32 w-full items-center justify-center gap-2">
        <div className="flex flex-col gap-2">
          <div className="h-8 w-8 rounded-lg border border-gray-200 bg-white shadow-sm"></div>
          <div className="h-8 w-8 rounded-lg border border-gray-200 bg-white shadow-sm"></div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="h-8 w-8 rounded-lg border border-yellow-40/50 bg-yellow-40/20"></div>
          <div className="h-16 w-8 rounded-lg border border-gray-200 bg-white shadow-sm"></div>
        </div>
      </div>
    )
  },
  {
    title: "Systems",
    icon: Link,
    description: "Streamlined processes that work efficiently for you.",
    visual: (
      <div className="relative flex h-32 w-full items-center justify-center">
        <div className="absolute h-full w-full bg-[radial-gradient(circle_at_center,rgba(254,200,8,0.1)_0%,transparent_70%)]"></div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm">
            <div className="h-3 w-3 rounded-full bg-yellow-40"></div>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm">
            <div className="h-3 w-3 rounded-full bg-yellow-40"></div>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm">
            <div className="h-3 w-3 rounded-full bg-yellow-40"></div>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm">
            <div className="h-3 w-3 rounded-full bg-yellow-40"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Accountability",
    icon: ShieldCheck,
    description: "Taking ownership to ensure guaranteed outcomes.",
    visual: (
      <div className="relative flex h-32 w-full items-center justify-center">
        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-md">
          <ShieldCheck className="h-10 w-10 text-gray-800" />
        </div>
      </div>
    )
  },
  {
    title: "Disciplined Execution",
    icon: Zap,
    description: "Relentless action combined with strategic precision.",
    visual: (
      <div className="relative flex h-32 w-full items-center justify-center overflow-hidden">
        <div className="absolute bottom-0 w-full px-4">
          <div className="flex items-end justify-between gap-2 opacity-50">
            {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
              <div key={i} className="w-full rounded-t-sm bg-gray-200" style={{ height: `${h}%` }}></div>
            ))}
          </div>
        </div>
        <Zap className="relative z-10 h-10 w-10 text-yellow-40 drop-shadow-sm" />
      </div>
    )
  },
];

const WhyUs = () => {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-white py-20 text-gray-900 sm:py-24 lg:py-28"
    >
      {/* Subtle dotted background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#000000 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Decorative glows */}
      <div className="pointer-events-none absolute -left-28 top-20 h-72 w-72 rounded-full bg-yellow-40/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-20/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-20">
          <span className="mb-5 inline-flex rounded-full border border-yellow-40/30 bg-yellow-40/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-gray-900 shadow-sm">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl text-gray-900">
            Why Choose <span className="text-yellow-40">Exepath</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            At Exepath, we believe sustainable growth is built on a foundation
            of solid principles. We are dedicated to transforming potential
            into measurable success.
          </p>
        </div>

        {/* The Exepath Formula (Hero Card above Grid) */}
        <div className="relative mb-12 w-full overflow-hidden rounded-[2.5rem] border border-gray-200 bg-gray-50 p-8 shadow-sm sm:p-12 lg:p-16 text-center">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-yellow-40" />
          <div className="absolute inset-0 rounded-[2.5rem] bg-yellow-40/5 blur-3xl" />

          <div className="relative z-10">
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-yellow-40 text-black shadow-lg">
              <Target className="h-10 w-10" />
            </div>

            <h3 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              The Exepath Formula
            </h3>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              Moving you from scattered effort to structured progress and
              measurable results.
            </p>

            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
              {["Plan", "Execute", "Measure"].map((item, index) => (
                <div
                  key={item}
                  className="relative group rounded-2xl border border-gray-200 bg-white px-6 py-5 text-center shadow-sm transition-all duration-300 hover:border-yellow-40 hover:shadow-md"
                >
                  <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-40 text-sm font-bold text-black shadow-sm transition-transform group-hover:scale-110">
                    {index + 1}
                  </div>
                  <span className="text-lg font-bold text-gray-900">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bento Grid: 5 Cards Layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          {/* Top Row: 2 Large Cards */}
          {principles.slice(0, 2).map((principle) => (
            <div 
              key={principle.title}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-50 p-8 shadow-sm transition-all duration-300 hover:border-yellow-40/50 hover:shadow-md lg:col-span-3"
            >
              <div className="mb-8 w-full rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                {principle.visual}
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-40 text-black shadow-sm">
                  <principle.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-wider">{principle.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {principle.description}
              </p>
            </div>
          ))}

          {/* Bottom Row: 3 Smaller Cards */}
          {principles.slice(2, 5).map((principle) => (
            <div 
              key={principle.title}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-50 p-8 shadow-sm transition-all duration-300 hover:border-yellow-40/50 hover:shadow-md md:col-span-1 lg:col-span-2"
            >
              <div className="mb-6 w-full rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                {principle.visual}
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 uppercase tracking-wider">{principle.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyUs;
