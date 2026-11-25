import {
  CheckCircle2,
  ChevronRight,
  Target,
  TrendingUp,
  Users,
  Workflow,
  ArrowDownToLine,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Accountability & Performance Systems",
    tagline: "Turn goals into consistent action and measurable progress.",
    description:
      "We help individuals and teams establish the structure, accountability, and tracking required to stay focused and follow through.",
    offerings: [
      "Goal & Action Planning",
      "Accountability Systems",
      "Progress Tracking",
      "Performance Reviews",
      "Productivity & Execution Support",
      "Performance Improvement",
    ],
    idealFor: ["Individuals", "Professionals", "Founders", "Teams"],
  },
  {
    number: "02",
    title: "Business Structure, Systems & Processes",
    tagline: "Build the structure and processes required for effective operations.",
    description:
      "We help startups and SMEs create clearer workflows, defined responsibilities, documented processes, and systems that support consistent execution.",
    offerings: [
      "Business Structure",
      "Process Mapping",
      "Workflow Design",
      "SOP Development & Documentation",
      "Roles & Responsibilities",
      "Process Improvement",
      "Workflow Optimization",
    ],
    idealFor: ["Startups", "SMEs", "Growing Businesses", "Teams"],
  },
  {
    number: "03",
    title: "Project Management & Delivery",
    tagline: "Turn project plans into coordinated and controlled delivery.",
    description:
      "We provide practical project management support to help teams plan, coordinate, monitor, and deliver projects effectively.",
    offerings: [
      "Project Planning & Scheduling",
      "Scope & Deliverables Management",
      "Resource Coordination",
      "Stakeholder Coordination",
      "Risk & Issue Management",
      "Project Monitoring & Reporting",
      "Project Closure & Review",
    ],
    idealFor: [
      "Startups",
      "SMEs",
      "Organizations",
      "Project Teams",
      "Events & Initiatives",
    ],
  },
  {
    number: "04",
    title: "Execution Support & Capability Development",
    tagline: "Build the practical capabilities required for stronger execution.",
    description:
      "We help individuals, teams, and organizations develop the skills, practices, and capabilities required to improve execution and performance.",
    offerings: [
      "Training & Workshops",
      "Execution Coaching",
      "Capability Building",
      "Performance Development",
      "Team Development",
      "Communication Support",
    ],
    idealFor: [
      "Individuals",
      "Professionals",
      "Teams",
      "Organizations",
      "Growing Businesses",
    ],
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const renderVisual = () => {
    switch (index) {
      case 0:
        return (
          <div className="w-full max-w-65 mx-auto z-10 relative">
            <div className="flex justify-center gap-1.5 mb-5 bg-white p-1.5 rounded-full w-fit mx-auto shadow-sm border border-gray-100">
              <div className="bg-yellow-10 text-white text-[11px] px-3.5 py-1.5 font-bold rounded-full flex items-center justify-center">
                Admins
              </div>
              <div className="flex items-center justify-center text-gray-500 text-[11px] font-bold px-3.5 py-1.5 rounded-full">
                Members
              </div>
              <div className="items-center justify-center text-gray-500 text-[11px] font-bold px-3.5 py-1.5 rounded-full hidden sm:flex">
                Not Joined
              </div>
            </div>
            <div className="space-y-2.5">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-[16px] p-2.5 pr-4 flex items-center gap-3 shadow-sm border border-gray-50"
                >
                  <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 border border-gray-100">
                    <Users className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <div className="h-2 w-16 bg-gray-200 rounded-full mb-1.5"></div>
                    <div className="h-1.5 w-10 bg-gray-100 rounded-full"></div>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-yellow-10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 1:
        return (
          <div className="relative w-full h-full flex items-center justify-center z-10">
            <div className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-100 w-[180px] flex flex-col items-center z-10 relative">
              <div className="w-16 h-16 rounded-full bg-[#0066FF]/5 flex items-center justify-center mb-4">
                <Workflow className="w-8 h-8 text-yellow-10" />
              </div>
              <div className="h-2.5 w-20 bg-gray-200 rounded-full mb-2"></div>
              <div className="h-1.5 w-14 bg-gray-100 rounded-full"></div>
            </div>
            <div className="absolute top-[15%] left-[10%] bg-black text-white text-[11px] font-bold px-4 py-2 rounded-xl -rotate-12 shadow-lg flex items-center gap-2">
              <Target className="w-3 h-3" /> Execute
            </div>
            <div className="absolute bottom-[20%] right-[5%] bg-black text-white text-[11px] font-bold px-4 py-2 rounded-xl rotate-12 shadow-lg">
              Workflow
            </div>
          </div>
        );
      case 2:
        return (
          <div className="relative w-full h-full flex items-center justify-center z-10">
            <div className="absolute w-55 h-[220px] rounded-full border border-gray-200/60"></div>
            <div className="absolute w-35 h-[140px] rounded-full border border-gray-200/80"></div>
            <div className="w-[84px] h-21 bg-yellow-10 rounded-full flex items-center justify-center z-10 shadow-lg shadow-blue-500/20">
              <TrendingUp className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
            <div className="absolute top-8 left-[15%] w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-50">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>
            <div className="absolute bottom-8 right-[20%] w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-50">
              <div className="w-4 h-4 bg-black rounded-full" />
            </div>
            <div className="absolute top-[40%] right-[10%] w-8 h-8 bg-black rounded-full shadow-md flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="relative w-full h-full flex items-center justify-center z-10">
            <div className="bg-white w-40 h-52.5 rounded-[20px] shadow-sm border border-gray-100 p-5 flex flex-col gap-4 relative z-0">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-lg"></div>
                <div className="flex-1 flex flex-col gap-2 pt-1">
                  <div className="h-2 w-full bg-gray-200 rounded-full"></div>
                  <div className="h-1.5 w-3/4 bg-gray-100 rounded-full"></div>
                </div>
              </div>
              <div className="h-px w-full bg-gray-50 my-1"></div>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm bg-gray-100"></div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute z-10 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 text-yellow-10">
              <ArrowDownToLine className="w-7 h-7" strokeWidth={2.5} />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#F8F9FA] rounded-4xl p-6 sm:p-8 md:p-10 flex flex-col h-full border border-gray-100/50">
      {/* Top Visual Area */}
      <div className="h-56 md:h-65 w-full rounded-2xl mb-8 md:mb-10 relative flex items-center justify-center overflow-hidden">
        {/* Subtle background radial gradient for the visual area to pop */}
        <div className="absolute inset-0 bg-linear-to-b from-white/60 to-transparent opacity-50"></div>
        {renderVisual()}
      </div>

      {/* Title */}
      <h3 className="text-[22px] md:text-2xl font-black uppercase text-[#111111] mb-3 leading-snug tracking-tight">
        {service.title}
      </h3>

      {/* Tagline */}
      <p className="text-[#111111] font-bold leading-snug mb-3 text-base">
        {service.tagline}
      </p>

      {/* Description */}
      <p className="text-[#555555] font-medium leading-relaxed mb-8 text-[15px]">
        {service.description}
      </p>

      {/* Restyled Lists */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8 mt-auto pt-8 border-t border-gray-200/70">
        <div>
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-10 shrink-0" />
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-black">
              What We Provide
            </span>
          </div>
          <ul className="space-y-3">
            {service.offerings.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2
                  className="w-4 h-4 text-yellow-10 shrink-0 mt-px"
                  strokeWidth={2.5}
                />
                <span className="text-[13px] text-[#555555] font-medium leading-tight">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#111111] shrink-0" />
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#111111]">
              Ideal For
            </span>
          </div>
          <ul className="space-y-3">
            {service.idealFor.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <ChevronRight
                  className="w-4 h-4 text-[#111111]/30 flex-shrink-0 mt-[1px]"
                  strokeWidth={3}
                />
                <span className="text-[13px] text-[#555555] font-medium leading-tight">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ServiceSection = () => {
  return (
    <section id="services" className="bg-white py-20 lg:py-32">
      <div className="max-w-300 mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block mb-6 rounded-full border border-[#FFD600]/40 bg-[#FFD600]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#7A6500]">
            Our Solutions
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black uppercase tracking-tighter leading-[1.05] mb-4 md:mb-6">
            Built for<span className="text-yellow-10"> Execution</span>
          </h2>
          <p className="text-[#555555] text-base sm:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            We provide practical execution and performance solutions that help
            individuals and businesses move from goals and plans to structured
            action, effective delivery, and measurable results.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;