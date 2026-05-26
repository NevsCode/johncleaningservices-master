import Image from "next/image";
import { ContactForm } from "./components/ContactForm";

const services = [
  {
    title: "Event Cleaning",
    description:
      "Meticulous before-and-after event support to ensure your venue dazzles guests and resets quickly.",
    image: "/house-cleaning.png",
    imageAlt: "Cleaning specialist preparing a residence for an event",
    imageWrapperClassName: "bg-white/80",
  },
  {
    title: "Grout & Deep Cleaning",
    description:
      "High-impact steam and detail work for kitchens, bathrooms, and tiles that restores original shine.",
    image: "/bathroom-cleaning.png",
    imageAlt: "Technician detailing bathroom tiles during a deep clean",
    imageWrapperClassName: "bg-white",
  },
  {
    title: "Office Cleaning",
    description:
      "Reliable daily and periodic office care that keeps workspaces healthy, productive, and client-ready.",
    image: "/window-cleaning.png",
    imageAlt: "Cleaning team maintaining a modern office",
    imageWrapperClassName: "bg-white",
  },
  {
    title: "Carpet Cleaning",
    description:
      "Advanced extraction to lift stains, refresh fibres, and extend the life of your carpets and rugs.",
    image: "/office-cleaning.png",
    imageAlt: "Detail crew refreshing high-traffic carpets",
    imageWrapperClassName: "bg-white/90",
  },
  {
    title: "Window Cleaning",
    description:
      "Crystal-clear window and glass care for streak-free views from ground floor suites to high rises.",
    image: "/carpet-cleaning.png",
    imageAlt: "Technician polishing floor-to-ceiling windows",
    imageWrapperClassName: "bg-white",
  },
  {
    title: "Commercial Cleaning",
    description:
      "Custom cleaning programs for retail, hospitality, and industrial sites with flexible scheduling.",
    image: "/deep-cleaning.png",
    imageAlt: "Crew performing intensive commercial deep cleaning",
    imageWrapperClassName: "bg-white/80",
  },
  {
    title: "Post-Construction Cleaning",
    description:
      "Dust, debris, and final detailing handled so new builds are spotless, safe, and ready to hand over.",
    image: "/kitchen-cleaning.png",
    imageAlt: "Cleaner wiping down newly installed kitchen cabinetry",
    imageWrapperClassName: "bg-white",
  },
  {
    title: "Pool Cleaning",
    description:
      "Balanced water chemistry, debris removal, and maintenance to keep your pool inviting year-round.",
    image: "/pool-cleaning.png",
    imageAlt: "Technician vacuuming a residential pool",
    imageWrapperClassName: "bg-white",
  },
  {
    title: "Gardening",
    description:
      "Landscape care, trimming, and seasonal planting that keeps your outdoor spaces thriving.",
    image: "/garden-cleaning.png",
    imageAlt: "Gardener pruning plants in a landscaped garden",
    imageWrapperClassName: "bg-white",
  },
];

const differentiators = [
  {
    title: "Trained & Vetted Team",
    detail: "Trusted professionals with hospitality-grade training and verified backgrounds.",
  },
  {
    title: "Eco-Conscious Products",
    detail: "Low-tox solutions that are tough on grime but gentle on your home and the environment.",
  },
  {
    title: "Flexible Scheduling",
    detail: "Early mornings, late evenings, and weekend slots to minimise disruption to your routine.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-(--background) text-(--foreground)">
      <header className="relative overflow-hidden bg-[#003049] text-white">
        <div className="absolute -left-24 top-12 hidden h-72 w-72 rounded-full bg-[#f77f00]/30 blur-3xl md:block" />
        <div className="absolute -right-24 bottom-10 hidden h-64 w-64 rounded-full bg-[#d62828]/30 blur-3xl md:block" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 md:flex-row md:items-center md:px-12">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white p-2 shadow-md shadow-[#003049]/10 md:h-20 md:w-20 md:p-3">
                <Image
                  src="/johnhavencleaningservices-logo.svg"
                  alt="John Janitorial Cleaning Services logo"
                  width={80}
                  height={80}
                  className="h-12 w-12 object-contain md:h-16 md:w-16"
                  priority
                />
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-[#FCBF49]">
                John Janitorial Cleaning Services
              </span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Sparkling spaces, inside and out, across Rosebank and Cape Town
            </h1>
            <p className="max-w-xl text-lg text-white/80">
              From once-off deep cleans to ongoing commercial care, our trusted team delivers
              spotless results tailored to your schedule, your property, and your guests.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[#F77F00] px-8 py-3 text-base font-semibold text-[#003049] shadow-lg shadow-[#F77F00]/40 transition hover:-translate-y-0.5 hover:bg-[#f68a1a]"
                href="#contact"
              >
                Request a quote
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
                href="#services"
              >
                Explore services
              </a>
            </div>
            <dl className="grid grid-cols-1 gap-4 text-sm text-white/70 sm:grid-cols-3">
              <div>
                <dt className="font-semibold text-white">Service area</dt>
                <dd>Rosebank • Cape Town Metro</dd>
              </div>
              <div>
                <dt className="font-semibold text-white">Available</dt>
                <dd>Monday – Saturday · 07:00–17:00</dd>
              </div>
              <div>
                <dt className="font-semibold text-white">Contact</dt>
                <dd>
                  <a href="mailto:Johnjanitorialcleaningservices@gmail.com">Johnjanitorialcleaningservices@gmail.com</a>
                  <br />
                  (068) 083 0576
                </dd>
              </div>
            </dl>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <figure className="relative rounded-3xl bg-white/10 p-6 backdrop-blur-lg">
              <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-[#FCBF49]/90 blur-xl" />
              <div className="absolute -bottom-6 -right-4 h-24 w-24 rounded-full bg-[#D62828]/40 blur-2xl" />
              <Image
                className="relative z-10 rounded-2xl object-cover shadow-2xl"
                src="/house-cleaning.png"
                alt="Professional cleaner preparing equipment"
                width={420}
                height={420}
                priority
              />
            </figure>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-24 px-6 py-16 md:px-12">
        <section id="services" className="space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-[#003049]">What we offer</h2>
              <p className="max-w-2xl text-base text-[#003049]/70">
                Every service is delivered with detailed checklists, colour-coded tools, and a client
                satisfaction follow-up so you always know your space is in caring hands.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fcbf49]/40 px-4 py-2 text-sm font-medium text-[#003049]">
              Tailored packages · Flexible contracts
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#003049]/10 bg-white/85 shadow-sm shadow-[#003049]/5 transition hover:-translate-y-1 hover:border-[#F77F00]/60 hover:shadow-xl"
              >
                <div
                  className={`relative h-48 w-full overflow-hidden ${service.imageWrapperClassName ?? "bg-white"}`}
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={400}
                    height={260}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#003049]/15 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="text-xl font-semibold text-[#003049]">{service.title}</h3>
                  <p className="text-sm text-[#003049]/70">{service.description}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#F77F00]">
                    <span className="h-2 w-2 rounded-full bg-[#F77F00]" />
                    Available on recurring or once-off plans
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 rounded-3xl bg-[#003049]/5 p-8 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-[#003049]">Why homes & businesses trust us</h2>
            <p className="text-base text-[#003049]/70">
              We combine careful planning with agile teams so every visit feels considered, personal,
              and expertly executed. From regular maintenance to urgent turnarounds, we bring the
              same dedication to spotless results.
            </p>
            <ul className="grid gap-4">
              {differentiators.map((item) => (
                <li key={item.title} className="flex gap-4 rounded-2xl bg-white/70 p-5 shadow-sm">
                  <div className="mt-1 h-10 w-10 shrink-0 rounded-full bg-[#D62828]/20 text-[#D62828]">
                    <span className="flex h-full items-center justify-center text-lg">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#003049]">{item.title}</h3>
                    <p className="text-sm text-[#003049]/70">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6 rounded-3xl border border-[#003049]/10 bg-white/80 p-6 shadow-lg shadow-[#003049]/10">
            <h3 className="text-xl font-semibold text-[#003049]">Let’s tailor your clean</h3>
            <p className="text-sm text-[#003049]/70">
              Tell us about your space, your priorities, and your scheduling needs—we’ll create a
              personalised cleaning plan and quote within 24 hours.
            </p>
            <a
              className="inline-flex w-full items-center justify-center rounded-full bg-[#D62828] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ba1f1f]"
              href="mailto:Johnjanitorialcleaningservices@gmail.com?subject=Cleaning%20Quote%20Request"
            >
              Email our team
            </a>
            <div className="rounded-2xl bg-[#003049]/5 p-4 text-sm text-[#003049]/70">
              <p className="font-semibold text-[#003049]">Call-out ready for:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Emergency clean-ups</li>
                <li>Move-in & move-out handovers</li>
                <li>Airbnb turnover services</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-[#003049]">Contact details</h2>
            <p className="text-base text-[#003049]/70">
              We’re based in Rosebank with crews across the City of Cape Town. Reach out anytime for
              bookings, site inspections, or tailored proposals.
            </p>
            <div className="rounded-3xl border border-[#003049]/10 bg-white/80 p-6 shadow-sm">
              <dl className="grid gap-4 text-sm text-[#003049]/80">
                <div>
                  <dt className="font-semibold text-[#003049]">Email</dt>
                  <dd>
                    <a
                      className="text-[#D62828] underline-offset-4 hover:underline"
                        href="mailto:Johnjanitorialcleaningservices@gmail.com"
                      >
                        Johnjanitorialcleaningservices@gmail.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#003049]">Address</dt>
                  <dd>Rosehope Apartment, 49 Main Road, Rosebank, Cape Town 7700</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#003049]">Service hours</dt>
                  <dd>Monday – Saturday · 07:00–17:00 · Sundays by appointment</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-3xl bg-[#003049] p-6 text-[#EAE2B7] shadow-lg">
            <h3 className="text-2xl font-semibold">Ready for a fresher space?</h3>
            <p className="text-sm text-[#EAE2B7]/80">
              Share a few details about your property size, problem areas, and preferred dates. Our
              specialists will respond with a tailored checklist and investment estimate.
            </p>
            <ContactForm services={services} />
          </div>
        </section>
      </main>

      <footer className="bg-[#003049] py-10 text-center text-sm text-[#EAE2B7]/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 md:flex-row md:items-center md:justify-between md:px-12">
          <p className="text-[#EAE2B7]">© {new Date().getFullYear()} John Janitorial Cleaning Services. All rights reserved.</p>
          <p>Rosehope Apartment · 49 Main Road · Rosebank · Cape Town 7700</p>
        </div>
      </footer>
    </div>
  );
}
