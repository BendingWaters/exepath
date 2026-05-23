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
      className="py-24 bg-slate-50 relative border-t border-slate-200"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">
            Client Success
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600">
            Hear from the professionals and businesses who have transformed
            their execution with our systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-blue-50 opacity-50 group-hover:text-blue-100 transition-colors" />
              <div className="relative z-10">
                <div className="flex gap-1 text-amber-400 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">
                      {testimonial.author}
                    </h5>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
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

export default Testimonials;
