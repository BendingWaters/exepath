import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Exepath completely transformed how our leadership team operates. Their accountability systems turned our scattered ideas into measurable, consistent execution.",
    author: "Sarah Jenkins",
    role: "Founder, TechFlow",
  },
  {
    quote:
      "The business structure clarity session was an eye-opener. We now have a solid operational framework that allows us to scale without the usual growing pains.",
    author: "David Okafor",
    role: "Operations Director, CoreSME",
  },
  {
    quote:
      "I used to struggle with prioritizing tasks as a freelance creative. Exepath's productivity workflows gave me back my time and drastically improved my output.",
    author: "Elena Rodriguez",
    role: "Creative Director",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-t border-black/5 bg-light py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative background glows */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-yellow-40/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-20/20 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16 lg:mb-20">
          <span className="mb-4 inline-flex rounded-full border border-yellow-40/40 bg-white px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-gray shadow-sm">
            Testimonials
          </span>

          <h2 className="text-4xl font-black tracking-tight text-black sm:text-5xl lg:text-6xl">
            Client Success
          </h2>

          <div className="mx-auto mt-6 h-1.5 w-24 rounded-full bg-yellow-40" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray/90 sm:text-lg">
            Hear from the professionals and businesses who have transformed
            their execution with our systems.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.author}
              className="group relative flex h-full flex-col overflow-hidden rounded-4xl border border-black/5 bg-white p-6 shadow-[0_18px_60px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(0,0,0,0.1)] sm:p-8"
            >
              {/* Top accent */}
              <div className="absolute inset-x-0 top-0 h-1.5 bg-yellow-40" />

              {/* Quote icon */}
              <Quote className="absolute right-6 top-8 h-14 w-14 text-yellow-40/20 transition-colors duration-300 group-hover:text-yellow-40/30" />

              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-yellow-40/20 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 flex h-full flex-col">
                {/* Rating */}
                <div className="mb-7 flex gap-1 text-yellow-40">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                <p className="flex-1 text-base italic leading-8 text-gray/80">
                  “{testimonial.quote}”
                </p>

                {/* Author */}
                <div className="mt-8 flex items-center gap-4 border-t border-black/5 pt-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-40 text-lg font-black text-gray shadow-[0_12px_30px_rgba(254,200,8,0.25)]">
                    {testimonial.author.charAt(0)}
                  </div>

                  <div>
                    <h5 className="font-black text-gray">
                      {testimonial.author}
                    </h5>
                    <p className="mt-1 text-sm leading-5 text-gray/60">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Card number */}
                <span className="absolute bottom-7 right-0 text-sm font-black text-gray/20">
                  0{index + 1}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
