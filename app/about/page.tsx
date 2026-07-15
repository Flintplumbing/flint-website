const phoneNumber = "07932 423309";
const phoneHref = "tel:07932423309";

const navItems = [["Home", "/"], ["Services", "/services"], ["About", "/about"]];

const introParagraphs = [
  "FLINT Plumbing is a local plumbing and heating company built around honest work, fair prices and treating every customer properly.",
  "The aim is simple: give clear advice, do quality work, and never take advantage of customers when they need help. Whether it is a small repair, heating issue, bathroom job or emergency call-out, the focus is always on finding the right solution at a fair price.",
  "We work with homeowners and local property contacts across Newcastle, Cramlington, Northumberland and the surrounding North East areas.",
];

const detailSections = [
  [
    "Qualified engineers",
    "Reliable workmanship matters on every job. All engineers are qualified and experienced in the plumbing industry, with ACS and City & Guilds training, plus Gas Safe registered engineers for relevant gas work.",
  ],
  [
    "Landlords and letting agents",
    "FLINT works with landlords and letting agents who need dependable plumbing support for rental properties, maintenance call-outs, repairs and clear communication when tenants need help quickly.",
  ],
  [
    "Local community",
    "As a local business, FLINT is proud to work within the local community. The goal is to build long-term trust by being approachable, fair, respectful and consistent on every visit.",
  ],
];

const values = [
  ["Reliable", "We turn up when we say we will and keep you updated from start to finish."],
  ["Straightforward", "Clear advice, honest pricing and no pressure to choose work you do not need."],
  ["Quality finish", "Tidy pipework, clean working habits and a finish that feels properly looked after."],
];

const areas = ["Newcastle", "Cramlington", "Blyth", "Whitley Bay", "Morpeth", "Northumberland", "North Tyneside", "Gateshead"];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden flint-page-texture flint-subtle-grain text-[#f2eee8]">
      <div className="mx-auto max-w-[1500px] overflow-hidden flint-page-texture shadow-2xl shadow-black/40">
        <SiteHeader active="About" />

        <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-14 xl:px-20">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.26em] text-[#b89572]">About FLINT</p>
              <h1 className="mt-5 max-w-4xl text-4xl font-black uppercase leading-[1.02] tracking-[0.03em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Local plumbing with the customer in mind.
              </h1>
              <div className="mt-7 max-w-3xl space-y-5 text-base leading-8 text-[#d5ccc0] sm:text-lg">
                {introParagraphs.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
            </div>

            <aside className="rounded-lg border border-[#b89572]/30 flint-card-texture p-6 shadow-2xl shadow-black/20 sm:p-8">
              <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#b89572]">Contact</p>
              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">Need a fair quote?</h2>
              <p className="mt-4 text-sm leading-7 text-[#d5ccc0]">
                Call FLINT for straightforward plumbing advice, clear pricing and tidy work across the North East.
              </p>
              <a href={phoneHref} className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-sm flint-bronze-cta px-5 py-4 text-lg font-black tracking-[0.08em] text-[#111110] shadow-xl shadow-black/25 sm:text-xl">
                <PhoneIcon />
                <span>{phoneNumber}</span>
              </a>
            </aside>
          </div>
        </section>

        <section className="px-5 pb-12 sm:px-8 lg:px-14 xl:px-20">
          <div className="grid gap-5 md:grid-cols-3">
            {values.map(([title, text]) => (
              <article key={title} className="rounded-lg border border-[#b89572]/25 flint-card-texture p-6 sm:p-8">
                <h2 className="text-2xl font-black uppercase tracking-[0.04em] text-white sm:text-3xl">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#d5ccc0]">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-5 pb-12 sm:px-8 lg:px-14 xl:px-20">
          <div className="grid gap-5 lg:grid-cols-3">
            {detailSections.map(([title, text]) => (
              <article key={title} className="rounded-lg border border-[#b89572]/25 flint-card-texture p-6 sm:p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#b89572]">FLINT standard</p>
                <h2 className="mt-4 text-2xl font-black uppercase leading-tight text-white">{title}</h2>
                <p className="mt-5 text-sm leading-7 text-[#d5ccc0]">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-5 pb-14 sm:px-8 lg:px-14 xl:px-20">
          <div className="rounded-lg border border-[#b89572]/35 flint-card-texture p-6 sm:p-8 lg:p-10">
            <p className="text-[12px] font-bold uppercase tracking-[0.26em] text-[#b89572]">Areas covered</p>
            <h2 className="mt-5 max-w-4xl text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
              Plumbing and heating across Newcastle, Cramlington, Northumberland and nearby areas.
            </h2>
            <div className="mt-7 flex flex-wrap gap-3">
              {areas.map((area) => (
                <span key={area} className="rounded-sm border border-[#b89572]/35 bg-[#2c2c2c] px-4 py-3 text-sm font-semibold text-[#eee8df]">{area}</span>
              ))}
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}

function SiteHeader({ active }: { active: string }) {
  return (
    <>
      <nav className="relative flex min-h-[120px] items-center justify-between gap-6 flint-nav-texture px-5 py-4 shadow-2xl shadow-black/30 sm:min-h-[140px] sm:px-8 lg:min-h-[150px] lg:px-14 xl:px-20">
        <a href="/" aria-label="FLINT Plumbing home" className="block min-h-20 w-36 shrink-0 sm:w-56 lg:w-80" />
        <div className="hidden items-center gap-10 lg:absolute lg:left-1/2 lg:flex lg:-translate-x-1/2">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className={`text-sm font-semibold uppercase tracking-[0.2em] transition hover:text-[#c9a47d] ${active === label ? "text-[#c9a47d]" : "text-[#eee8df]"}`}>
              {label}
            </a>
          ))}
        </div>
        <a href={phoneHref} className="inline-flex items-center gap-2 rounded-sm border border-[#d7b690]/45 flint-bronze-cta px-2.5 py-2 text-xs font-black uppercase tracking-[0.1em] shadow-xl shadow-black/25 hover:brightness-110 sm:gap-3 sm:px-4 sm:text-lg lg:px-5 lg:text-xl">
          <PhoneIcon />
          <span>{phoneNumber}</span>
        </a>
      </nav>
      <div className="mobile-nav-links flex items-center justify-center gap-2 border-t border-[#b89572]/15 bg-[#242424]/75 px-5 py-3 lg:hidden">
        {navItems.map(([label, href]) => (
          <a key={label} href={href} className={`rounded-sm px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] ${active === label ? "text-[#c9a47d]" : "text-[#eee8df]"}`}>
            {label}
          </a>
        ))}
      </div>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 text-[#111110]" fill="currentColor" aria-hidden="true">
      <path d="M6.6 3.8 9 6.2 7.4 9c1.3 2.7 3.4 4.8 6.1 6.1l2.8-1.6 2.4 2.4-1.1 3.2c-.3.8-1.1 1.2-1.9 1.1C9.3 19.2 4.8 14.7 3.8 8.3c-.1-.8.3-1.6 1.1-1.9l1.7-.6Z" />
    </svg>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-[#b89572]/15 flint-footer-texture px-5 py-10 text-sm text-[#d5ccc0] sm:px-8 lg:px-14 xl:px-20">
      <div className="grid gap-8 md:grid-cols-4">
        <a href="/" className="inline-block" aria-label="FLINT Plumbing home">
          <span className="block text-3xl font-black uppercase tracking-[0.28em] text-white">FLINT.</span>
          <span className="mt-2 block text-[11px] font-semibold uppercase tracking-[0.42em] text-[#b89572]">Plumbing</span>
        </a>
        <p>Plumbing<br />Heating<br />Bathrooms</p>
        <p>{phoneNumber}<br />flint.plumbing.heating@gmail.com</p>
        <p>Newcastle<br />Cramlington<br />Northumberland</p>
      </div>
    </footer>
  );
}
