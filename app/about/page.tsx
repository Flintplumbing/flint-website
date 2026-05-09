export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#151515] px-3 py-3 text-white md:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#1f1f1f] shadow-2xl">
        {/* HERO */}
        <section className="relative h-[60vh] min-h-[520px] overflow-hidden px-6 md:px-10">
          <div className="absolute inset-0">
            <img
              src="/images/about/about-main.jpg"
              alt="FLINT plumbing and heating"
              className="h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/65" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent" />
          </div>

          <nav className="relative z-10 flex items-center justify-between py-6">
            <div>
              <h1 className="text-3xl font-bold tracking-[0.25em]">
                FLINT.
              </h1>

              <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-neutral-300">
                Plumbing & Heating
              </p>
            </div>

            <div className="flex items-center gap-6 md:gap-10">
              <a
                href="/"
                className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-300 hover:text-white"
              >
                Home
              </a>

              <a
                href="/services"
                className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-300 hover:text-white"
              >
                Services
              </a>

              <a
                href="/about"
                className="text-xs font-semibold uppercase tracking-[0.18em] text-white"
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

          <div className="relative z-10 flex h-[calc(60vh-96px)] min-h-[400px] items-center">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-400">
                About FLINT.
              </p>

              <h2 className="text-5xl font-bold leading-[0.95] md:text-7xl">
                CLEAN WORK.
                <br />
                HONEST PRICES.
                <br />
                PROPER FINISH.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-200">
                A modern plumbing and heating company built around simple
                communication, reliable work and a high-quality finish.
              </p>
            </div>
          </div>
        </section>

        {/* INFO CARDS */}
        <section className="grid gap-4 px-6 py-6 md:grid-cols-3 md:px-10">
          {[
            ["Reliable", "Turn up when agreed and keep the job moving."],
            ["Clean", "Respectful work, tidy finish and minimal mess."],
            ["Straightforward", "Clear pricing, simple advice and no pressure."],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-[2rem] border border-white/5 bg-[#262626] p-8"
            >
              <h3 className="text-2xl font-bold">{title}</h3>

              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                {text}
              </p>
            </div>
          ))}
        </section>

        {/* AREAS */}
        <section className="px-6 pb-10 md:px-10">
          <div className="rounded-[2rem] bg-[#E7E2DA] p-8 text-black md:p-12">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
              Areas Covered
            </p>

            <h3 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Plumbing, heating and bathrooms across the North East.
            </h3>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Newcastle",
                "Cramlington",
                "Blyth",
                "Whitley Bay",
                "Morpeth",
                "Northumberland",
                "North Tyneside",
                "Gateshead",
              ].map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-black px-4 py-2 text-sm text-white"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/5 px-6 py-8 text-sm text-neutral-400 md:px-10">
          <div className="grid gap-6 md:grid-cols-4">
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

            <p>
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