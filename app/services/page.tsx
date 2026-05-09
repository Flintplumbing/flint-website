const services = [
  {
    title: "General Plumbing",
    label: "Plumbing",
    tags: ["Leaks", "Pipework", "Taps", "Toilets", "Repairs", "Maintenance"],
  },
  {
    title: "Heating Installs",
    label: "Heating",
    tags: ["Boilers", "Radiators", "Servicing", "Repairs", "Heating Upgrades"],
  },
  {
    title: "Bathroom Installs",
    label: "Bathrooms",
    tags: ["Full Refits", "Showers", "Baths", "Tiling", "Modern Finishes"],
  },
  {
    title: "Ongoing Support",
    label: "Maintenance",
    tags: ["Small Works", "Fault Finding", "Landlord Work", "Upgrades"],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#151515] px-2 py-2 text-white sm:px-4 md:px-6 md:py-3">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[1.25rem] bg-[#1f1f1f] shadow-2xl md:rounded-[2rem]">
        <section className="relative min-h-[620px] overflow-hidden px-4 sm:px-6 md:h-[60vh] md:min-h-[520px] md:px-10">
          <div className="absolute inset-0">
            <img
              src="/images/services/services-main.jpg"
              alt="FLINT services"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/70" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-black/80 md:bg-gradient-to-r md:from-black/90 md:via-black/55 md:to-transparent" />
          </div>

          <nav className="relative z-10 flex items-center justify-between gap-4 py-5 md:py-6">
            <div>
              <h1 className="text-2xl font-bold tracking-[0.22em] md:text-3xl">
                FLINT.
              </h1>
              <p className="mt-1 text-[8px] uppercase tracking-[0.28em] text-neutral-300 md:text-[10px]">
                Plumbing & Heating
              </p>
            </div>

            <div className="flex items-center gap-3 md:gap-10">
              <a
                href="/"
                className="text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-300 hover:text-white md:text-xs md:tracking-[0.18em]"
              >
                Home
              </a>
              <a
                href="/services"
                className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white md:text-xs md:tracking-[0.18em]"
              >
                Services
              </a>
              <a
                href="/about"
                className="text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-300 hover:text-white md:text-xs md:tracking-[0.18em]"
              >
                About
              </a>
              <a
                href="/#estimator"
                className="hidden rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-black md:block"
              >
                Estimate
              </a>
            </div>
          </nav>

          <div className="relative z-10 flex min-h-[500px] items-center md:h-[calc(60vh-96px)] md:min-h-[400px]">
            <div className="max-w-3xl">
              <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-neutral-400 md:text-xs md:tracking-[0.3em]">
                Services
              </p>

              <h2 className="text-[42px] font-bold leading-[0.92] sm:text-5xl md:text-7xl">
                PLUMBING.
                <br />
                HEATING.
                <br />
                BATHROOMS.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-200 md:mt-6">
                Reliable plumbing, heating and bathroom work across Newcastle,
                Cramlington, Northumberland and the North East.
              </p>

              <a
                href="/#estimator"
                className="mt-7 inline-block rounded-full bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-black md:hidden"
              >
                Get Estimate
              </a>
            </div>
          </div>
        </section>

        <section className="grid gap-3 px-3 py-6 sm:px-4 md:grid-cols-2 md:gap-4 md:px-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[1.5rem] border border-white/5 bg-[#262626] p-5 md:rounded-[2rem] md:p-8"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 md:text-xs md:tracking-[0.3em]">
                {service.label}
              </p>

              <h3 className="mt-3 text-2xl font-bold md:mt-4 md:text-3xl">
                {service.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
                {service.tags.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-neutral-300 md:px-4 md:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        <footer className="border-t border-white/5 px-5 py-8 text-sm text-neutral-400 md:px-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h2 className="text-2xl font-bold tracking-[0.25em] text-white">
                FLINT.
              </h2>
              <p className="mt-2 text-[10px] uppercase tracking-[0.35em]">
                Plumbing & Heating
              </p>
            </div>

            <p>
              Plumbing
              <br />
              Heating
              <br />
              Bathrooms
            </p>

            <p className="break-words">
              07932423309
              <br />
              flint.plumbing.heating@gmail.com
            </p>

            <p>
              Newcastle
              <br />
              Cramlington
              <br />
              Northumberland
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}