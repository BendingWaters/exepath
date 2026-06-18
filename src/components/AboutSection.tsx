import {
  Target,
  Workflow,
  TrendingUp,
  Briefcase,
  Rocket,
  Eye,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

const pillars = [
  { icon: Target,    title: "Accountability & Performance Systems" },
  { icon: Workflow,  title: "Productivity & Execution Systems" },
  { icon: TrendingUp, title: "Business Structure & Growth Strategy" },
  { icon: Briefcase, title: "Project Management & Strategic Advisory" },
];

const philosophies = [
  {
    keyword: "Clarity",
    text: "Every person and organisation must first gain clarity — about their purpose, priorities, and what success looks like for them specifically.",
  },
  {
    keyword: "Structure",
    text: "Structure is the bridge between intention and execution. Without it, great ideas and strong ambitions remain unrealised.",
  },
  {
    keyword: "Accountability",
    text: "Accountability transforms commitment into results. It is the engine of consistent delivery and the antidote to procrastination.",
  },
  {
    keyword: "Systems",
    text: "Sustainable results come from systems, not willpower. We design repeatable processes that work reliably without constant supervision.",
  },
];

export default function AboutSection() {
  return (
    <div id="about">

      {/* ── 1. About Exepath ──────────────────────────────────────────── */}
      <section className="bg-[#0D0D0D] py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <span className="inline-block mb-6 rounded-full border border-[#FFD600]/30 bg-[#FFD600]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FFD600]">
            About Us
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 max-w-3xl">
            The{" "}
            <span className="text-[#FFD600]">Pan-African</span>{" "}
            Execution &amp; Performance Brand
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-16">
            Exepath is a Pan-African execution and performance brand helping individuals,
            startups, and businesses move from scattered effort to structured progress.
            We deliver real, measurable results through accountability systems, productivity
            frameworks, business growth strategy, and project management advisory.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {pillars.map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 flex items-start gap-4 hover:border-[#FFD600]/30 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FFD600]/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#FFD600]" aria-hidden="true" />
                </div>
                <h3 className="text-white font-bold text-base leading-snug self-center">
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. Mission & Vision ───────────────────────────────────────── */}
      <section className="bg-[#F9F9F9] py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <span className="inline-block mb-10 rounded-full border border-[#FFD600]/40 bg-[#FFD600]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#7A6500]">
            Purpose
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-[#FFD600]/40 transition-colors duration-300">
              <div className="w-12 h-12 rounded-full bg-[#FFD600]/10 flex items-center justify-center mb-5">
                <Rocket className="w-5 h-5 text-[#FFD600]" aria-hidden="true" />
              </div>
              <span className="block text-xs font-bold uppercase tracking-[0.18em] text-gray-400 mb-3">
                Our Mission
              </span>
              <p className="text-gray-800 text-xl font-extrabold leading-snug">
                To help individuals, startups, and businesses across Africa and beyond build
                the structure, systems, and execution habits they need to achieve consistent,
                sustainable results.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-[#FFD600]/40 transition-colors duration-300">
              <div className="w-12 h-12 rounded-full bg-[#FFD600]/10 flex items-center justify-center mb-5">
                <Eye className="w-5 h-5 text-[#FFD600]" aria-hidden="true" />
              </div>
              <span className="block text-xs font-bold uppercase tracking-[0.18em] text-gray-400 mb-3">
                Our Vision
              </span>
              <p className="text-gray-800 text-xl font-extrabold leading-snug">
                To become Africa's most trusted execution and performance brand — where every
                ambitious individual and growing business has access to the clarity, structure,
                and accountability they need to thrive.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. Our Story ──────────────────────────────────────────────── */}
      <section className="bg-[#0D0D0D] py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <span className="inline-block mb-6 rounded-full border border-[#FFD600]/30 bg-[#FFD600]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FFD600]">
            Our Story
          </span>

          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-10 max-w-2xl">
            Built From a Simple Observation
          </h2>

          <div className="max-w-3xl space-y-6">
            <blockquote className="border-l-4 border-[#FFD600] pl-6 italic text-gray-200 text-xl lg:text-2xl leading-relaxed font-light">
              "Most people don't fail because of a lack of ideas or ambition — they fail
              because they lack structure, accountability, and the right execution systems."
            </blockquote>

            <p className="text-gray-300 text-lg leading-relaxed">
              Exepath was founded on this simple but powerful observation. Watching talented
              individuals, passionate entrepreneurs, and capable teams fall short — not from
              lack of effort, but from lack of structure — made one thing clear: execution
              is the missing link.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              What began as a focus on personal accountability and productivity grew into a
              full-service execution and performance brand. Today, Exepath works with
              individuals, startups, and businesses across Africa, helping them install the
              systems, processes, and accountability structures that turn effort into
              measurable progress.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              We are not just consultants — we are execution partners. We sit with our
              clients in the work, ensuring that strategies become actions and actions
              become results.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. Our Philosophy ─────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <span className="inline-block mb-6 rounded-full border border-[#FFD600]/40 bg-[#FFD600]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#7A6500]">
            Our Philosophy
          </span>

          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-4 max-w-2xl">
            We Believe Progress Is Engineered
          </h2>

          <p className="text-gray-600 text-lg mb-12 max-w-2xl">
            Everything we do is rooted in four core beliefs that shape how we work and
            the results we help our clients achieve.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {philosophies.map(({ keyword, text }) => (
              <div
                key={keyword}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:border-[#FFD600]/40 hover:shadow-md transition-all duration-300"
              >
                <span className="block text-[#FFD600] font-extrabold text-lg mb-2">
                  {keyword}
                </span>
                <p className="text-gray-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-900 font-black italic text-xl lg:text-2xl max-w-2xl">
            "We don't believe in working harder. We believe in working within better systems."
          </p>

        </div>
      </section>

      {/* ── 5. Our Community ──────────────────────────────────────────── */}
      <section className="bg-[#0D0D0D] py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <span className="inline-block mb-6 rounded-full border border-[#FFD600]/30 bg-[#FFD600]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FFD600]">
            Community
          </span>

          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6 max-w-2xl mx-auto">
            Join the Exepath{" "}
            <span className="text-[#FFD600]">Community</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-4">
            Our WhatsApp community is built for{" "}
            <span className="text-white font-semibold">entrepreneurs</span>,{" "}
            <span className="text-white font-semibold">professionals</span>,{" "}
            <span className="text-white font-semibold">startup founders</span>,{" "}
            <span className="text-white font-semibold">freelancers</span>, and{" "}
            <span className="text-white font-semibold">business owners</span>{" "}
            who are committed to growth, structure, and consistent execution.
          </p>

          <p className="text-gray-400 text-base leading-relaxed max-w-xl mx-auto mb-10">
            Inside, you get access to productivity insights, accountability check-ins,
            business strategy tips, and a network of driven peers all moving forward together.
          </p>

          <a
            href="https://chat.whatsapp.com/HJPdcEYt5FQGgxZodyXrBm?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#FFD600] text-black font-bold px-8 py-4 rounded-full text-base hover:bg-yellow-300 transition-colors duration-200 shadow-lg"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Join the Community on WhatsApp
          </a>

        </div>
      </section>

      {/* ── 6. About the Founder ──────────────────────────────────────── */}
      <section className="bg-[#F9F9F9] py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <span className="inline-block mb-10 rounded-full border border-[#FFD600]/40 bg-[#FFD600]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#7A6500]">
            The Founder
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* Image placeholder */}
            <div className="aspect-[3/4] bg-gray-200 rounded-2xl flex items-end justify-center overflow-hidden">
              {/* IMAGE: founder portrait — replace with <img src="..." alt="Shina Oriyomi" className="w-full h-full object-cover" /> */}
              <span className="mb-6 text-sm text-gray-400 font-medium select-none">
                Founder Portrait
              </span>
            </div>

            {/* Bio */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-2">
                Shina Oriyomi
              </h2>

              <p className="text-[#FFD600] font-bold text-sm uppercase tracking-[0.14em] mb-8">
                Founder &amp; Lead Strategist, Exepath
              </p>

              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  Shina Oriyomi is the founder of Exepath — a Pan-African execution and
                  performance brand built on a singular conviction: that most people don't
                  fail from lack of ambition, but from lack of structure.
                </p>
                <p>
                  With a background in project management, productivity systems, and strategic
                  advisory, Shina has worked with individuals, professionals, founders, and
                  businesses across Africa to help them build the clarity, systems, and
                  execution habits that produce real, consistent results.
                </p>
                <p>
                  His approach is direct, structured, and results-focused. He believes every
                  ambitious person deserves access to the same operational clarity that
                  high-performing organisations are built on — and he has dedicated Exepath
                  to making that a reality.
                </p>
                <p>
                  Through Exepath, Shina continues to build, advise, and equip the next
                  generation of structured African achievers.
                </p>
              </div>

              <p className="text-[#FFD600] font-black text-xl italic">
                Clarity. Structure. Execution.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
