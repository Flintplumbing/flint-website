const phoneNumber = "07932 423309";
const phoneHref = "tel:07932423309";

const services = [
  ["Boiler installations", "New boiler installs with clear advice, tidy pipework and a proper handover."],
  ["Boiler servicing", "Annual servicing and checks to keep your heating running safely and efficiently."],
  ["Estate agent & landlord work", "Responsive plumbing support for managed properties, rental homes and maintenance call-outs."],
  ["Radiators & heating systems", "Radiator fitting, replacements, upgrades and heating system improvements."],
  ["Bathroom installations", "Bathroom plumbing, showers, baths, basins, toilets and clean final finishes."],
  ["General plumbing", "Taps, toilets, valves, pipework, repairs and small plumbing jobs around the home."],
  ["Leaks & pipe repairs", "Fast fault finding and reliable repairs for leaks, bursts and damaged pipework."],
  ["Unvented cylinders", "Hot water cylinder installation, repair and servicing by a qualified professional."],
];

const fixedPrices = [
  ["Outside tap install", "\u00A390", "Supply and fit a quality outside tap, including pipework and testing."],
  ["Radiator fit", "\u00A3120", "You supply the radiator. We remove the old one, install and test the new one."],
  ["Emergency call out", "\u00A350", "Call out fee plus any work carried out for urgent plumbing and heating issues."],
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden flint-page-texture flint-subtle-grain text-[#f2eee8]">
      <div className="mx-auto max-w-[1500px] overflow-hidden flint-page-texture shadow-2xl shadow-black/40">
      <SiteHeader active="Services" />

      <section className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-14 xl:px-20">
        <div className="absolute inset-0">
          <img src="/images/services/services-main.jpg" alt="Plumbing and heating services" className="h-full w-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#262626_0%,rgba(38,38,38,0.92)_45%,rgba(38,38,38,0.65)_100%)]" />
        </div>
        <div className="relative max-w-4xl">
          <p className="text-[12px] font-bold uppercase tracking-[0.26em] text-[#b89572]">Our services</p>
          <h1 className="mt-6 text-5xl font-black uppercase leading-none tracking-[0.03em] text-white sm:text-6xl lg:text-8xl">
            Plumbing for the whole home.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#d5ccc0]">
            From small repairs to heating upgrades and bathroom plumbing, FLINT covers reliable plumbing and heating work across Newcastle, Cramlington, Northumberland and the North East.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href={phoneHref} className="inline-flex justify-center rounded-sm bg-[#b89572] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#15110e] hover:bg-[#c9a47d]">Call now</a>
            <a href="/#contact" className="inline-flex justify-center rounded-sm border border-[#b89572]/65 px-8 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white hover:bg-[#b89572]/10">Get a free quote</a>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:px-14 xl:px-20">
        <SectionTitle title="Service list" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map(([title, text]) => (
            <article key={title} className="rounded-lg border border-[#b89572]/25 flint-card-texture p-7 shadow-xl shadow-black/10">
              <h2 className="text-2xl font-black uppercase leading-tight tracking-[0.04em] text-white">{title}</h2>
              <p className="mt-5 text-sm leading-7 text-[#d5ccc0]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-14 sm:px-8 lg:px-14 xl:px-20">
        <SectionTitle title="Fixed price work" />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {fixedPrices.map(([title, price, text]) => (
            <article key={title} className="rounded-lg border border-[#b89572]/40 flint-card-texture p-7">
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#b89572]">Fixed price</p>
              <h2 className="mt-4 text-2xl font-black uppercase tracking-[0.05em] text-white">{title}</h2>
              <p className="mt-4 text-6xl font-black text-[#b89572]">{price}</p>
              <p className="mt-5 text-sm leading-7 text-[#d5ccc0]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
      </div>
    </main>
  );
}

function SiteHeader({ active }: { active: string }) {
  const items = [["Home", "/"], ["Services", "/services"], ["About", "/about"]];
  return (
    <>
      <nav className="relative flex items-center justify-between gap-6 flint-nav-texture min-h-[120px] px-5 py-4 shadow-2xl sm:min-h-[140px] lg:min-h-[150px] shadow-black/30 sm:px-8 lg:px-14 xl:px-20">
        <a href="/" aria-label="FLINT Plumbing home" className="block min-h-20 w-36 shrink-0 sm:w-56 lg:w-80" />
        <div className="hidden items-center gap-10 lg:absolute lg:left-1/2 lg:flex lg:-translate-x-1/2">{items.map(([label, href]) => <a key={label} href={href} className={`text-sm font-semibold uppercase tracking-[0.2em] transition hover:text-[#c9a47d] ${active === label ? "text-[#c9a47d]" : "text-[#eee8df]"}`}>{label}</a>)}</div>
        <a href={phoneHref} className="inline-flex items-center gap-2 rounded-sm border border-[#d7b690]/45 flint-bronze-cta px-2.5 py-2 text-xs font-black uppercase tracking-[0.1em] shadow-xl shadow-black/25 hover:brightness-110 sm:gap-3 sm:px-4 sm:text-lg lg:px-5 lg:text-xl"><svg viewBox="0 0 24 24" className="h-6 w-6 text-[#111110]" fill="currentColor" aria-hidden="true"><path d="M6.6 3.8 9 6.2 7.4 9c1.3 2.7 3.4 4.8 6.1 6.1l2.8-1.6 2.4 2.4-1.1 3.2c-.3.8-1.1 1.2-1.9 1.1C9.3 19.2 4.8 14.7 3.8 8.3c-.1-.8.3-1.6 1.1-1.9l1.7-.6Z" /></svg><span>{phoneNumber}</span></a>
      </nav>
      <div className="mobile-nav-links flex items-center justify-center gap-2 border-t border-[#b89572]/15 bg-[#242424]/75 px-5 py-3 lg:hidden"><a href="/" className="rounded-sm px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#eee8df]">Home</a><a href="/services" className="rounded-sm px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#eee8df]">Services</a><a href="/about" className="rounded-sm px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#eee8df]">About</a></div>
    </>
  );
}

function SectionTitle({ title }: { title: string }) {
  return <div className="flex items-center gap-6"><div className="h-px flex-1 bg-[#b89572]/35" /><h2 className="text-center text-[13px] font-bold uppercase tracking-[0.25em] text-white">{title}</h2><div className="h-px flex-1 bg-[#b89572]/35" /></div>;
}

function SiteFooter() {
  return <footer className="border-t border-[#b89572]/15 flint-footer-texture px-5 py-10 text-sm text-[#d5ccc0] sm:px-8 lg:px-14 xl:px-20"><div className="grid gap-8 md:grid-cols-4"><a href="/" className="inline-block" aria-label="FLINT Plumbing home"><span className="block text-3xl font-black uppercase tracking-[0.28em] text-white">FLINT.</span><span className="mt-2 block text-[11px] font-semibold uppercase tracking-[0.42em] text-[#b89572]">Plumbing</span></a><p>Plumbing<br />Heating<br />Bathrooms</p><p>{phoneNumber}<br />flint.plumbing.heating@gmail.com</p><p>Newcastle<br />Cramlington<br />Northumberland</p></div></footer>;
}

