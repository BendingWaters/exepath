import {
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

const services = [
  {
    number: "01",
    label: "Accountability",
    title: "Accountability & Performance Systems",
    icon: Target,
    description:
      "We help individuals, professionals, founders, and teams stay consistent with goals, responsibilities, and execution through structured accountability and performance support systems.",
    offerings: [
      "Accountability sessions",
      "Goal tracking and review",
      "Performance monitoring",
      "Progress evaluation",
      "Execution follow-ups",
      "Consistency support systems",
    ],
    idealFor: [
      "Professionals",
      "Entrepreneurs",
      "Students",
      "Startup founders",
      "Teams and organizations",
    ],
  },
  {
    number: "02",
    label: "Productivity",
    title: "Productivity & Execution Systems",
    icon: Workflow,
    description:
      "We help individuals and businesses improve productivity, workflow efficiency, focus, and execution through structured systems and operational clarity.",
    offerings: [
      "Productivity planning",
      "Workflow structuring",
      "Task and priority management",
      "Execution systems",
      "Time management support",
      "Performance tracking systems",
    ],
    idealFor: [
      "Professionals",
      "Remote workers",
      "Creatives and freelancers",
      "Founders and teams",
      "Growing businesses",
    ],
  },
  {
    number: "03",
    label: "Strategy",
    title: "Business Structure & Growth Strategy",
    icon: TrendingUp,
    description:
      "We help startups and SMEs build operational structure, strategic direction, and growth systems for sustainable business development.",
    offerings: [
      "Business clarity sessions",
      "Growth strategy planning",
      "Brand positioning support",
      "Operational structuring",
      "Workflow and process systems",
      "Team coordination systems",
      "Sustainable growth planning",
    ],
    idealFor: [
      "Startups",
      "SMEs",
      "Growing brands",
      "Early-stage businesses",
      "Business owners seeking structure",
    ],
  },
  {
    number: "04",
    label: "Advisory",
    title: "Project Management & Strategic Advisory",
    icon: Briefcase,
    description:
      "We help businesses plan, coordinate, manage, and execute projects more effectively while providing strategic guidance for operational improvement and growth.",
    offerings: [
      "Project planning and coordination",
      "Timeline and workflow management",
      "Team coordination support",
      "Project execution tracking",
      "Strategic business advisory",
      "Operational improvement guidance",
      "Performance and execution reviews",
    ],
    idealFor: [
      "Businesses and organizations",
      "Startups and SMEs",
      "Project teams",
      "Business executives",
      "Growing operations",
    ],
  },
];

const ServiceCard = ({
  service,
}: {
  service: (typeof services)[0];
}) => {
  const Icon = service.icon;

  return (
    <div className="group relative bg-white border border-[#E8E8E8] overflow-hidden transition-all duration-300 hover:border-yellow-10 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-8px_rgba(244,201,15,0.15)]">
      {/* Animated left accent bar */}
      <div className="absolute left-0 top-0 w-0.75 h-0 bg-yellow-10 group-hover:h-full transition-all duration-500 ease-out" />

      <div className="p-8 lg:p-10">
        {/* Card header row */}
        <div className="flex items-start justify-between mb-8">
          {/* Number + label */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] font-bold tracking-[0.18em] text-yellow-10">
              {service.number}
            </span>
            <span className="w-6 h-px bg-[#E8E8E8]" />
            <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#434343]/50">
              {service.label}
            </span>
          </div>

          {/* Icon box */}
          <div className="w-12 h-12 bg-[#F5F5F5] flex items-center justify-center transition-all duration-300 group-hover:bg-yellow-10">
            <Icon
              className="w-5 h-5 text-[#434343] transition-colors duration-300 group-hover:text-white"
              strokeWidth={1.8}
            />
          </div>
        </div>

        {/* Title */}
        <h3 className="font-bold text-xl leading-snug tracking-tight text-[#1a1a1a] mb-4 transition-colors duration-200 group-hover:text-[#434343]">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#434343]/60 leading-relaxed font-light mb-8 pb-8 border-b border-[#F0F0F0]">
          {service.description}
        </p>

        {/* Two-column lists */}
        <div className="grid grid-cols-2 gap-6">
          {/* Offerings */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-10 flex-shrink-0" />
              <Zap className="w-3 h-3 text-[#434343]/40" strokeWidth={2} />
              <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#434343]">
                What We Offer
              </span>
            </div>
            <ul className="space-y-2.5">
              {service.offerings.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="w-3.5 h-3.5 text-yellow-10 flex-shrink-0 mt-[3px]"
                    strokeWidth={2}
                  />
                  <span className="text-[12.5px] text-[#434343]/70 leading-tight">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ideal for */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#434343] flex-shrink-0" />
              <Users className="w-3 h-3 text-[#434343]/40" strokeWidth={2} />
              <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#434343]">
                Ideal For
              </span>
            </div>
            <ul className="space-y-2.5">
              {service.idealFor.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ChevronRight
                    className="w-3 h-3 text-[#434343]/30 flex-shrink-0 mt-[3px]"
                    strokeWidth={2}
                  />
                  <span className="text-[12.5px] text-[#434343]/70 leading-tight">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceSection = () => {
  return (
    <section id="services" className="relative">
      {/* Dark header */}
      <div className="bg-[#1a1a1a] px-6 py-16 lg:px-16 lg:py-20 relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border-[56px] border-yellow-10/10 pointer-events-none" />
        {/* Decorative square */}
        <div className="absolute -bottom-10 left-28 w-36 h-36 bg-yellow-10/5 rotate-45 pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <span className="w-7 h-0.5 bg-yellow-10" />
            <span className="text-yellow-10 text-[11px] font-bold tracking-[0.18em] uppercase">
              Our Services
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight max-w-lg">
              Systems built for{" "}
              <span className="text-yellow-10">performance</span> & growth
            </h2>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs font-light lg:text-right lg:pb-1">
              Comprehensive systems and strategies designed to elevate your
              performance and business growth.
            </p>
          </div>
        </div>
      </div>

      {/* Cards grid — flush to header, no extra padding top */}
      <div className="bg-light px-6 pb-16 lg:px-16 lg:pb-20">
        <div className="max-w-6xl mx-auto">
          {/* 2px gap between cards creates a "panelled" editorial feel */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-light">
            {services.map((service) => (
              <ServiceCard key={service.number} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;