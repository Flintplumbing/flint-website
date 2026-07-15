const phoneNumber = "07932 423309";
const phoneHref = "tel:07932423309";

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

      <section className="px-5 py-20 sm:px-8 lg:px-14 xl:px-20">
        <div className="max-w-5xl">
          <p className="text-[12px] font-bold uppercase tracking-[0.26em] text-[#b89572]">About FLINT</p>
          <h1 className="mt-6 text-5xl font-black uppercase leading-none tracking-[0.03em] text-white sm:text-6xl lg:text-8xl">
            Local plumbing with the customer in mind.
          </h1>
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-[#d5ccc0]">
            <p>
              FLINT Plumbing is a local plumbing and heating company built around honest work, fair prices and treating every customer properly.
            </p>
            <p>
              The aim is simple: give clear advice, do quality work, and never take advantage of customers when they need help. Whether it is a small repair, heating issue, bathroom job or emergency call-out, the focus is always on finding the right solution at a fair price.
            </p>
            <p>
              We work with homeowners and local property contacts across Newcastle, Cramlington, Northumberland and the surrounding North East areas.
            </p>
            <p>
              Reliable workmanship matters on every job. All engineers are qualified and experienced in the plumbing industry, with ACS and City & Guilds training, plus Gas Safe registered engineers for relevant gas work. Every job is approached safely, neatly and to a high standard.
            </p>
            <p>
              FLINT also works with landlords and letting agents who need dependable plumbing support for rental properties, maintenance call-outs, repairs and clear communication when tenants need help quickly.
            </p>
            <p>
              As a local business, FLINT is proud to work within the local community. The goal is to build long-term trust with customers by being approachable, fair, respectful and consistent on every visit.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:px-14 xl:px-20">
        <div className="grid gap-5 md:grid-cols-3">
          {values.map(([title, text]) => (
            <article key={title} className="rounded-lg border border-[#b89572]/25 flint-card-texture p-8">
              <h2 className="text-3xl font-black uppercase tracking-[0.04em] text-white">{title}</h2>
              <p className="mt-5 text-sm leading-7 text-[#d5ccc0]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-14 sm:px-8 lg:px-14 xl:px-20">
        <div className="rounded-lg border border-[#b89572]/35 flint-card-texture p-8 lg:p-12">
          <p className="text-[12px] font-bold uppercase tracking-[0.26em] text-[#b89572]">Areas covered</p>
          <h2 className="mt-5 max-w-4xl text-4xl font-black uppercase leading-tight text-white lg:text-6xl">Plumbing and heating across Newcastle, Cramlington, Northumberland and nearby areas.</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {areas.map((area) => <span key={area} className="rounded-sm border border-[#b89572]/35 bg-[#2c2c2c] px-4 py-3 text-sm font-semibold text-[#eee8df]">{area}</span>)}
          </div>
        </div>
      </section>

      <SiteFooter />
      </div>
    </main>
  );
}

function SiteHeader({ active }: { active: string }) {
  const items = [["Home", "/"], ["Services", "/services"], ["About", "/about"]];
  return <>`r`n    <nav className="relative flex items-center justify-between gap-6 flint-nav-texture min-h-[120px] px-5 py-4 shadow-2xl sm:min-h-[140px] lg:min-h-[150px] shadow-black/30 sm:px-8 lg:px-14 xl:px-20"><a href="/" aria-label="FLINT Plumbing home" className="block min-h-20 w-36 shrink-0 sm:w-56 lg:w-80" /><div className="hidden items-center gap-10 lg:absolute lg:left-1/2 lg:flex lg:-translate-x-1/2">{items.map(([label, href]) => <a key={label} href={href} className={`text-sm font-semibold uppercase tracking-[0.2em] transition hover:text-[#c9a47d] ${active === label ? "text-[#c9a47d]" : "text-[#eee8df]"}`}>{label}</a>)}</div><a href={phoneHref} className="inline-flex items-center gap-2 rounded-sm border border-[#d7b690]/45 flint-bronze-cta px-2.5 py-2 text-xs font-black uppercase tracking-[0.1em] shadow-xl shadow-black/25 hover:brightness-110 sm:gap-3 sm:px-4 sm:text-lg lg:px-5 lg:text-xl"><svg viewBox="0 0 24 24" className="h-6 w-6 text-[#111110]" fill="currentColor" aria-hidden="true"><path d="M6.6 3.8 9 6.2 7.4 9c1.3 2.7 3.4 4.8 6.1 6.1l2.8-1.6 2.4 2.4-1.1 3.2c-.3.8-1.1 1.2-1.9 1.1C9.3 19.2 4.8 14.7 3.8 8.3c-.1-.8.3-1.6 1.1-1.9l1.7-.6Z" /></svg><span>{phoneNumber}</span></a>`r`n    </nav>`r`n    <div className="mobile-nav-links flex items-center justify-center gap-2 border-t border-[#b89572]/15 bg-[#242424]/75 px-5 py-3 lg:hidden"><a href="/" className="rounded-sm px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#eee8df]">Home</a><a href="/services" className="rounded-sm px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#eee8df]">Services</a><a href="/about" className="rounded-sm px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#eee8df]">About</a></div>`r`n  </>;
}

function SiteFooter() {
  return <footer className="border-t border-[#b89572]/15 flint-footer-texture px-5 py-10 text-sm text-[#d5ccc0] sm:px-8 lg:px-14 xl:px-20"><div className="grid gap-8 md:grid-cols-4"><a href="/" className="inline-block" aria-label="FLINT Plumbing home"><span className="block text-3xl font-black uppercase tracking-[0.28em] text-white">FLINT.</span><span className="mt-2 block text-[11px] font-semibold uppercase tracking-[0.42em] text-[#b89572]">Plumbing</span></a><p>Plumbing<br />Heating<br />Bathrooms</p><p>{phoneNumber}<br />flint.plumbing.heating@gmail.com</p><p>Newcastle<br />Cramlington<br />Northumberland</p></div></footer>;
}

