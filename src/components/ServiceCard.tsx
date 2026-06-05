import {
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Users,
  Zap,
} from "lucide-react";
import { Service } from "../constants/service-data";


interface Props {
  service: Service;
}

export default function ServiceCard({ service }: Props) {
  const Icon = service.icon;

  return (
    <article
      className="
      service-card
      group
      relative
      overflow-hidden
      bg-black
      border
      border-[#E8E8E8]
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-yellow-10/40
      hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]
      "
    >
      <div
        className="
        absolute
        inset-0
        opacity-0
        transition-opacity
        duration-500
        group-hover:opacity-100
        bg-[radial-gradient(circle_at_top_right,rgba(244,201,15,0.08),transparent_40%)]
      "
      />

      <div
        className="
        absolute
        left-0
        top-0
        h-0
        w-0.75
        bg-yellow-10
        transition-all
        duration-700
        group-hover:h-full
      "
      />

      <div className="relative z-10 p-8 lg:p-10">
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] font-bold tracking-[0.18em] text-yellow-10">
              {service.number}
            </span>

            <span className="w-6 h-px bg-[#E8E8E8]" />

            <span className="uppercase text-[10px] tracking-[0.14em] text-gray/50 font-bold">
              {service.label}
            </span>
          </div>

          <div
            className="
            w-14
            h-14
            flex
            items-center
            justify-center
            border
            border-[#ECECEC]
            bg-linear-to-br
            from-[#FAFAFA]
            to-[#F2F2F2]
            transition-all
            duration-500
            group-hover:bg-yellow-10
            group-hover:shadow-[0_0_40px_rgba(244,201,15,0.25)]
          "
          >
            <Icon
              aria-hidden="true"
              className="
              w-6
              h-6
              text-[#434343]
              transition-all
              duration-500
              group-hover:text-white
              group-hover:rotate-6
              "
            />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-[#1A1A1A] leading-tight mb-4">
          {service.title}
        </h3>

        <p className="text-[15px] leading-relaxed text-[#434343]/70 mb-8">
          {service.description}
        </p>

        <div className="mb-8">
          <span className="block text-[10px] uppercase tracking-[0.16em] font-bold text-[#434343]/50 mb-4">
            Expected Outcomes
          </span>

          <div className="flex flex-wrap gap-2">
            {service.outcomes.map((item) => (
              <span
                key={item}
                className="
                px-3
                py-2
                text-xs
                font-medium
                bg-yellow-10/10
                border
                border-yellow-10/20
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap aria-hidden="true" className="w-3.5 h-3.5 text-yellow-10" />

              <span className="uppercase text-[10px] tracking-[0.14em] font-bold">
                Capabilities
              </span>
            </div>

            <ul className="space-y-3">
              {service.offerings.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2
                    aria-hidden="true"
                    className="w-4 h-4 text-yellow-10 mt-[2px]"
                  />

                  <span className="text-sm text-[#434343]/75">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Users
                aria-hidden="true"
                className="w-3.5 h-3.5 text-[#434343]/50"
              />

              <span className="uppercase text-[10px] tracking-[0.14em] font-bold">
                Ideal For
              </span>
            </div>

            <ul className="space-y-3">
              {service.idealFor.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <ChevronRight
                    aria-hidden="true"
                    className="w-4 h-4 text-[#434343]/40 mt-[2px]"
                  />

                  <span className="text-sm text-[#434343]/75">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-[#F1F1F1]">
          <button
            className="
            inline-flex
            items-center
            gap-2
            text-sm
            font-semibold
            transition-colors
            group-hover:text-yellow-10
          "
          >
            Learn More
            <ArrowUpRight
              className="
              w-4
              h-4
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
            />
          </button>
        </div>
      </div>
    </article>
  );
}
