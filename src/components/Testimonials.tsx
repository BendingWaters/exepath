const testimonials = [
  {
    quote:
      "I had business goals but no systems to execute them consistently. Exepath provided the structure I needed — starting with a clarity session that turned my intentions into actionable plans, followed by coordinated execution that delivered real results.",
    author: "Adegbule Abigail",
    role: "CEO, Dandy Designs",
  },
  {
    quote:
      "Exepath is a good accountability partner to work with for your business or as an individual. They ensure you stay committed to the goal till it's achieved. I highly recommend Exepath.",
    author: "Oyindamola",
    role: "Founder, T.I.E Procurements & Logistics Ltd",
  },
  {
    quote:
      "Big appreciation to our project management brand (Exepath) for the amazing work and support towards the growth of my brand, FÈMÍ ÀJỌ́ PLACE. Your creativity, guidance, and dedication have truly helped improve the brand in many ways. Thank you for always pushing the vision forward.",
    author: "Femi",
    role: "CEO, Femi Ajo Place",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#0D0D0D] py-24 px-6"
    >
      {/* Ambient glow decorations */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[28rem] w-[28rem] rounded-full bg-yellow-40/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-[28rem] w-[28rem] rounded-full bg-yellow-40/8 blur-3xl" />

      {/* Subtle dot texture */}
      <div className="absolute inset-0 opacity-[0.025] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">

        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-5 inline-flex rounded-full border border-yellow-40/30 bg-yellow-40/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-yellow-40">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            What our clients say
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-white/50">
            Real results from real people who chose structure over scattered effort.
          </p>
        </div>

        {/* Featured testimonial */}
        <article className="group relative mb-5 overflow-hidden rounded-2xl border border-white/5 bg-[#111111] p-8 transition-all duration-500 hover:border-yellow-40/20 sm:p-10 lg:p-12">
          {/* Top accent line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-40/50 to-transparent" />

          {/* Hover radial glow */}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(254,200,8,0.05),transparent_60%)]" />

          {/* Decorative oversized quote mark */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-4 right-8 select-none font-black leading-none text-[11rem] text-yellow-40/10 transition-colors duration-500 group-hover:text-yellow-40/15"
          >
            &ldquo;
          </span>

          <div className="relative z-10">
            <p className="mb-8 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl sm:leading-9 lg:text-2xl lg:leading-10">
              &ldquo;{testimonials[0].quote}&rdquo;
            </p>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-40 text-base font-black text-gray shadow-[0_0_24px_rgba(254,200,8,0.3)]">
                {testimonials[0].author.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="font-bold text-white">{testimonials[0].author}</p>
                <p className="mt-0.5 text-sm text-white/40">{testimonials[0].role}</p>
              </div>
            </div>
          </div>
        </article>

        {/* Secondary testimonials */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {testimonials.slice(1).map((testimonial) => (
            <article
              key={testimonial.author}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#1A1A1A] p-7 transition-all duration-500 hover:border-yellow-40/20 sm:p-8"
            >
              {/* Top accent line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-500 group-hover:via-yellow-40/40" />

              {/* Hover radial glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(254,200,8,0.05),transparent_60%)]" />

              {/* Decorative quote mark */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-2 right-5 select-none font-black leading-none text-[7rem] text-yellow-40/8 transition-colors duration-500 group-hover:text-yellow-40/13"
              >
                &ldquo;
              </span>

              <div className="relative z-10">
                <p className="mb-7 text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 border-t border-white/5 pt-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-40 text-sm font-black text-gray shadow-[0_0_16px_rgba(254,200,8,0.25)]">
                    {testimonial.author.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{testimonial.author}</p>
                    <p className="mt-0.5 text-xs text-white/40">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
