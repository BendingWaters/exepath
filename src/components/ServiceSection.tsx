import { Briefcase, CheckCircle2, ChevronRight, Target, TrendingUp, Users, Workflow, Zap } from "lucide-react";

const services = [
  {
    title: "Accountability & Performance Systems",
    icon: <Target className="w-8 h-8 text-blue-600" />,
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
    title: "Productivity & Execution Systems",
    icon: <Workflow className="w-8 h-8 text-blue-600" />,
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
    title: "Business Structure & Growth Strategy",
    icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
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
    title: "Project Management & Strategic Advisory",
    icon: <Briefcase className="w-8 h-8 text-blue-600" />,
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

const ServiceSection = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">
            Our Services
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600">
            Comprehensive systems and strategies designed to elevate your
            performance and business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="relative z-10 flex-grow">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 mb-8 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-amber-500" /> What We Offer
                    </h4>
                    <ul className="space-y-2.5">
                      {service.offerings.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-slate-600"
                        >
                          <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <Users className="w-4 h-4 text-emerald-500" /> Ideal For
                    </h4>
                    <ul className="space-y-2.5">
                      {service.idealFor.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-slate-600"
                        >
                          <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
