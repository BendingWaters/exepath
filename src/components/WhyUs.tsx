import { ShieldCheck, Target } from "lucide-react";

const principles = [
  "Clarity",
  "Structure",
  "Systems",
  "Accountability",
  "Disciplined Execution",
];

const WhyUs = () => {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-black py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Subtle dotted background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Decorative glows */}
      <div className="pointer-events-none absolute -left-28 top-20 h-72 w-72 rounded-full bg-yellow-40/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-20/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div>
            <span className="mb-5 inline-flex rounded-full border border-yellow-40/30 bg-black px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-40 backdrop-blur">
              Why Choose Us
            </span>

            <h2 className="max-w-2xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Why Choose <span className="text-yellow-40">Exepath</span>
            </h2>

            <div className="mt-6 h-1.5 w-24 rounded-full bg-yellow-40" />

            <p className="mt-8 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
              At Exepath, we believe sustainable growth is built on a foundation
              of solid principles. We are dedicated to transforming potential
              into measurable success.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {principles.map((item) => (
                <div
                  key={item}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-yellow-40/40 hover:bg-white/[0.09]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-40 text-gray shadow-[0_12px_30px_rgba(254,200,8,0.25)] transition-transform duration-300 group-hover:scale-105">
                    <ShieldCheck className="h-5 w-5" />
                  </div>

                  <span className="text-base font-bold text-white sm:text-lg">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card */}
          <div className="relative w-full">
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              <div className="absolute inset-0 rounded-[2.5rem] bg-yellow-40/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-10">
                <div className="absolute inset-x-0 top-0 h-1.5 bg-yellow-40" />

                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-8 text-center">
                  <div className="mx-auto mb-7 flex h-24 w-24 items-center justify-center rounded-3xl bg-yellow-40 text-gray shadow-[0_18px_45px_rgba(254,200,8,0.28)]">
                    <Target className="h-12 w-12" />
                  </div>

                  <h3 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                    The Exepath Formula
                  </h3>

                  <p className="mx-auto mt-5 max-w-sm text-base leading-8 text-white/65 sm:text-lg">
                    Moving you from scattered effort to structured progress and
                    measurable results.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {["Plan", "Execute", "Measure"].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-black/10 px-3 py-4 text-center"
                    >
                      <span className="text-sm font-bold text-yellow-40">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
