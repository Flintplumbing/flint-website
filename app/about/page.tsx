export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#151515] px-2 py-2 text-white sm:px-4 md:px-6 md:py-3">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[1.25rem] bg-[#1f1f1f] shadow-2xl md:rounded-[2rem]">
        {/* HERO */}
        <section className="relative min-h-[640px] overflow-hidden px-4 sm:px-6 md:h-[60vh] md:min-h-[520px] md:px-10">
          <div className="absolute inset-0">
            <img
              src="/images/about/about-main.jpg"
              alt="FLINT plumbing and heating"
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
                className="text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-300 hover:text-white md:text-xs md:tracking-[0.18em]"
              >
                Services
              </a>

              <a
                href="/about"
                className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white md:text-xs md:tracking-[0.18em]"
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

          <div className="relative z-10 flex min-h-[520px] items-center md:h-[calc(60vh-96px)] md:min-h-[400px]">
            <div className="max-w-3xl">
              <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-neutral-400 md:text-xs md:tracking-[0.3em]">
                About FLINT.
              </p>

              <h2 className="text-[39px] font-bold leading-[0.92] sm:text-5xl md:text-7xl">
                CLEAN WORK.
                <br />
                HONEST PRICES.
                <br />
                PROPER FINISH.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-200 md:mt-6">
                A modern plumbing and heating company built around simple
                communication, reliable work and a high-quality finish.
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

        {/* INFO CARDS */}
        <section className="grid gap-3 px-3 py-6 sm:px-4 md:grid-cols-3 md:gap-4 md:px-10">
          {[
            ["Reliable", "Turn up when agreed and keep the job moving."],
            ["Clean", "Respectful work, tidy finish and minimal mess."],
            ["Straightforward", "Clear pricing, simple advice and no pressure."],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-[1.5rem] border border-white/5 bg-[#262626] p-5 md:rounded-[2rem] md:p-8"
            >
              <h3 className="text-2xl font-bold">{title}</h3>

              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                {text}
              </p>
            </div>
          ))}
        </section>

        {/* AREAS */}
        <section className="px-3 pb-8 sm:px-4 md:px-10 md:pb-10">
          <div className="rounded-[1.5rem] bg-[#E7E2DA] p-6 text-black md:rounded-[2rem] md:p-12">
            <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-600 md:text-xs md:tracking-[0.3em]">
              Areas Covered
            </p>

            <h3 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              Plumbing, heating and bathrooms across the North East.
            </h3>

            <div className="mt-6 flex flex-wrap gap-2 md:mt-8">
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
                  className="rounded-full bg-black px-3 py-2 text-xs text-white md:px-4 md:text-sm"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
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