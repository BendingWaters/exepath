"use client";

import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Mail,
  Phone,
} from "lucide-react";
import WhatsAppIcon from "./svg/WhatsAppIcon";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  service: string;
  message: string;
};

const initialFormState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  service: "",
  message: "",
};

const contactItems = [
  {
    label: "Email Us",
    value: "exepathconsults@gmail.com",
    href: "mailto:exepathconsults@gmail.com",
    icon: Mail,
  },
  {
    label: "Call Us",
    value: "+234 814 3407 527",
    href: "tel:+234 814 3407 527",
    icon: Phone,
  },
];

const Contact = () => {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setIsSubmitting(true);

      // Replace this with your API request later.
      // Example:
      // await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formState),
      // });

      console.log("Contact form submitted:", formState);

      setFormState(initialFormState);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-yellow-40/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-yellow-20/20 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto overflow-hidden rounded-4xl border border-black/5 bg-white shadow-[0_24px_90px_rgba(0,0,0,0.1)] lg:grid lg:grid-cols-5">
          {/* Contact Info Column */}
          <aside className="relative overflow-hidden bg-black p-6 text-white sm:p-8 lg:col-span-2 lg:p-12">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-yellow-40/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <span className="mb-5 inline-flex rounded-full border border-yellow-40/30 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-40 backdrop-blur">
                  Contact Us
                </span>

                <h2 className="max-w-sm text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                  Let&apos;s Talk
                </h2>

                <p className="mt-5 max-w-md text-base leading-8 text-white/70">
                  Reach out to discuss how we can build structures for your
                  success.
                </p>

                <div className="mt-10 space-y-5">
                  {contactItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur transition-all duration-300 hover:border-yellow-40/40 hover:bg-white/9"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-40 text-gray shadow-[0_12px_30px_rgba(254,200,8,0.25)] transition-transform duration-300 group-hover:scale-105">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div>
                          <p className="mb-1 text-sm text-white/50 transition-colors duration-300 group-hover:text-white/70">
                            {item.label}
                          </p>

                          <p className="font-bold text-white transition-colors duration-300 group-hover:text-yellow-40">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    );
                  })}

                  {/* WhatsApp Integration */}
                  <a
                    href="https://wa.me/2348143407527"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-fit items-center gap-4 rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur transition-all duration-300 hover:border-[#25D366]/40 hover:bg-white/9"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-40 text-gray shadow-[0_12px_30px_rgba(254,200,8,0.25)] transition-colors duration-300 group-hover:bg-[#25D366] group-hover:text-white">
                      <WhatsAppIcon />
                    </div>

                    <div>
                      <p className="mb-1 text-sm text-white/50 transition-colors duration-300 group-hover:text-white/70">
                        WhatsApp
                      </p>

                      <p className="font-bold text-white transition-colors duration-300 group-hover:text-[#25D366]">
                        Chat with us
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-10 rounded-3xl border border-white/10 bg-white/6 p-6 backdrop-blur">
                <h4 className="font-black text-white">Response Time</h4>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  We typically respond within 24 business hours to all
                  inquiries.
                </p>
              </div>
            </div>
          </aside>

          {/* Form Column */}
          <div className="bg-light p-6 sm:p-8 lg:col-span-3 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="text-sm font-bold text-gray"
                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formState.firstName}
                    onChange={handleInputChange}
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-gray outline-none transition-all placeholder:text-gray/40 focus:border-yellow-40 focus:ring-4 focus:ring-yellow-40/20"
                    placeholder="Jane"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="text-sm font-bold text-gray"
                  >
                    Last Name
                  </label>

                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formState.lastName}
                    onChange={handleInputChange}
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-gray outline-none transition-all placeholder:text-gray/40 focus:border-yellow-40 focus:ring-4 focus:ring-yellow-40/20"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-gray">
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleInputChange}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-gray outline-none transition-all placeholder:text-gray/40 focus:border-yellow-40 focus:ring-4 focus:ring-yellow-40/20"
                  placeholder="jane@company.com"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="service"
                  className="text-sm font-bold text-gray"
                >
                  Service of Interest
                </label>

                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    required
                    value={formState.service}
                    onChange={handleInputChange}
                    className="w-full cursor-pointer appearance-none rounded-2xl border border-black/10 bg-white px-4 py-3 pr-12 text-gray outline-none transition-all focus:border-yellow-40 focus:ring-4 focus:ring-yellow-40/20"
                  >
                    <option value="" disabled>
                      Select a service...
                    </option>
                    <option value="accountability">
                      Accountability & Performance
                    </option>
                    <option value="productivity">
                      Productivity & Execution
                    </option>
                    <option value="business-structure">
                      Business Structure & Growth
                    </option>
                    <option value="project-management">
                      Project Management & Advisory
                    </option>
                    <option value="other">Other</option>
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray/50" />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-bold text-gray"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={handleInputChange}
                  className="w-full resize-none rounded-2xl border border-black/10 bg-white px-4 py-3 text-gray outline-none transition-all placeholder:text-gray/40 focus:border-yellow-40 focus:ring-4 focus:ring-yellow-40/20"
                  placeholder="Tell us about your current challenges..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-yellow-40 px-8 py-4 font-black text-gray shadow-[0_16px_35px_rgba(254,200,8,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-50 hover:shadow-[0_20px_45px_rgba(254,200,8,0.4)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending Request..." : "Send Message"}

                {!isSubmitting && (
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
