"use client";

import Link from "next/link";
import { useState } from "react";

const phoneNumber = "07932 423309";
const phoneHref = "tel:07932423309";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

const trustItems = [
  { icon: "shield", title: "Fully qualified & insured", text: "Insured & certified" },
  { icon: "clock", title: "Reliable & punctual", text: "Clear times and updates" },
  { icon: "thumb", title: "Quality workmanship", text: "Tidy, careful finish" },
  { icon: "home", title: "Local & trusted", text: "Recommended by homeowners" },
];

const services = [
  { icon: "boiler", title: "Boiler installations" },
  { icon: "service", title: "Boiler servicing" },
  { icon: "home", title: "Estate agent & landlord work" },
  { icon: "radiator", title: "Radiators & heating systems" },
  { icon: "shower", title: "Bathroom installations" },
  { icon: "tap", title: "General plumbing" },
  { icon: "pipe", title: "Leaks & pipe repairs" },
  { icon: "cylinder", title: "Unvented cylinders" },
];

const deals = [
  {
    title: "Outside tap install",
    price: "£90",
    image: "/images/deals/outside-tap-card.jpg",
    imageAlt: "Outside tap installation",
    points: [
      "Supply & fit quality outside tap",
      "Pipework included",
      "Tested & leak free",
      "Tidy, professional finish",
    ],
  },
  {
    title: "Radiator - you supply we fit",
    price: "£120",
    image: "/images/deals/radiator-card.jpg",
    imageAlt: "Radiator installation",
    points: [
      "Remove & dispose of old radiator",
      "Install & connect",
      "Tested & heating checked",
      "Professional fit, no shortcuts",
    ],
  },
];

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [postcode, setPostcode] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  async function sendQuote() {
    setSending(true);

    const response = await fetch("/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        postcode,
        message,
        estimate: "General plumbing enquiry",
      }),
    });

    setSending(false);

    if (response.ok) {
      setSent(true);
      setName("");
      setPhone("");
      setPostcode("");
      setMessage("");
    }
  }

  return (
    <main className="min-h-screen overflow-x-hidden flint-page-texture flint-subtle-grain text-[#f2eee8]">
      <div className="mx-auto max-w-[1500px] overflow-hidden flint-page-texture shadow-2xl shadow-black/40">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/bathroom.jpg"
              alt="Modern dark bathroom sink and tap"
              className="h-full w-full object-cover object-center opacity-55"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_36%,rgba(198,168,134,0.18),transparent_28%),linear-gradient(90deg,#262626_0%,rgba(38,38,38,0.95)_37%,rgba(38,38,38,0.62)_62%,rgba(36,36,36,0.92)_100%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#262626]" />
          </div>

          <div className="relative z-10 px-4 py-6 sm:px-8 lg:px-14 xl:px-20">
            <nav className="-mx-4 -mt-6 relative flex min-h-[96px] items-center justify-between flint-nav-texture px-6 py-4 shadow-2xl shadow-black/30 sm:-mx-8 sm:min-h-[140px] sm:gap-6 sm:px-8 lg:-mx-14 lg:min-h-[150px] lg:px-14 xl:-mx-20 xl:px-20">
              <Link href="/" aria-label="FLINT Plumbing home" className="block h-16 w-44 shrink-0 sm:min-h-20 sm:w-56 lg:w-80" />

              <div className="hidden items-center gap-10 lg:absolute lg:left-1/2 lg:flex lg:-translate-x-1/2">
                {navItems.map((item, index) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`relative text-sm font-semibold uppercase tracking-[0.2em] transition hover:text-[#c9a47d] ${
                      index === 0 ? "text-[#c9a47d]" : "text-[#eee8df]"
                    }`}
                  >
                    {item.label}

                  </Link>
                ))}
              </div>

              <a
                href={phoneHref}
                className="hidden w-auto items-center justify-center gap-1.5 rounded-sm border border-[#d7b690]/45 flint-bronze-cta px-3 py-2 text-[12px] font-black uppercase tracking-[0.04em] shadow-xl shadow-black/25 transition hover:brightness-110 sm:inline-flex sm:gap-3 sm:px-4 sm:text-lg sm:tracking-[0.1em] lg:px-5 lg:text-xl"
              >
                <Icon name="phone" className="h-4 w-4 shrink-0 text-[#111110] sm:h-6 sm:w-6" />
                <span>{phoneNumber}</span>
              </a>
              <button
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                onClick={() => setMenuOpen((open) => !open)}
                className="flex h-10 w-10 items-center justify-center text-[#c49d78] sm:hidden"
              >
                <Icon name="menu" className="h-7 w-7" />
              </button>
            </nav>
            {menuOpen && (
              <div id="mobile-menu" className="grid border-t border-[#b89572]/15 bg-[#202020]/95 px-6 py-3 sm:hidden">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`border-b border-white/10 py-3 text-[12px] font-bold uppercase tracking-[0.18em] last:border-b-0 ${item.label === "Home" ? "text-[#c9a47d]" : "text-[#eee8df]"}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
            <div className="bg-[#242424]/92 px-6 pb-3 pt-2 lg:hidden"><a href={phoneHref} className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-[#d7b690]/45 flint-bronze-cta px-3 py-2.5 text-[12px] font-black uppercase tracking-[0.04em] shadow-lg shadow-black/20"><Icon name="phone" className="h-4 w-4 shrink-0 text-[#111110]" /><span>{phoneNumber}</span></a></div>

            <div className="grid min-h-[455px] items-center pt-6 sm:min-h-[650px] lg:grid-cols-[0.92fr_1.08fr] lg:pt-0">
              <div className="max-w-2xl pb-8 pt-4 lg:pb-24 lg:pt-20">
                <p className="mb-5 hidden text-[10px] font-semibold uppercase tracking-[0.14em] text-[#b89572] sm:mb-8 sm:block sm:text-[11px] sm:tracking-[0.26em]">
                  Quality work. Honest prices. Local & reliable.
                </p>

                <h1 className="text-[34px] font-black uppercase leading-[0.98] tracking-[0.03em] text-white min-[380px]:text-[40px] sm:text-6xl md:text-7xl xl:text-8xl">
                  Plumbing.
                  <br />
                  Heating.
                  <br />
                  <span className="text-[#c49d78] sm:text-white">Bathrooms.</span>
                </h1>

                <p className="mt-6 max-w-md text-[15px] leading-7 text-[#d6d1c9] sm:mt-8 sm:text-lg sm:leading-8">
                  Local, reliable and professional plumbing services you can trust.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-3 rounded-sm bg-[#b89572] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#15110e] transition hover:bg-[#c9a47d] sm:px-8 sm:py-4 sm:text-[12px] sm:tracking-[0.18em]"
                  >
                    Get a free quote
                    <span aria-hidden="true">→</span>
                  </a>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-sm border border-[#b89572]/65 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#b89572]/10 sm:px-8 sm:py-4 sm:text-[12px] sm:tracking-[0.18em]"
                  >
                    Our services
                  </Link>
                </div>

                <div id="trust" className="mt-8 grid grid-cols-4 overflow-hidden rounded-md border border-white/10 bg-[#2b2b2b]/78 sm:mt-10 sm:gap-4 sm:overflow-visible sm:rounded-none sm:border-0 sm:bg-transparent sm:grid-cols-4">
                  {trustItems.map((item) => (
                    <div key={item.title} className="flex min-h-24 flex-col items-center justify-center gap-2 border-r border-[#b89572]/20 px-2 text-center last:border-r-0 sm:min-h-0 sm:flex-row sm:justify-start sm:gap-4 sm:px-0 sm:text-left">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#b89572] text-[#b89572] sm:h-11 sm:w-11">
                        <Icon name={item.icon} className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-[8px] font-bold uppercase leading-3 tracking-[0.07em] text-white sm:text-[11px] sm:leading-normal sm:tracking-[0.14em]">
                          {item.title}
                        </span>
                        <span className="mt-1 hidden text-xs text-[#bcb4aa] sm:block">{item.text}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="px-4 py-8 sm:px-8 sm:py-12 lg:px-14 xl:px-20">
          <SectionTitle title="Our services" />

          <div className="mt-6 grid grid-cols-2 gap-y-4 sm:mt-10 sm:grid-cols-4 sm:gap-y-8 lg:grid-cols-8">
            {services.map((service) => (
              <a
                key={service.title}
                href="#contact"
                className="group flex min-h-20 flex-col items-center justify-center border-r border-[#b89572]/20 px-2 text-center last:border-r-0 sm:min-h-32 sm:px-3"
              >
                <Icon name={service.icon} className="h-8 w-8 text-[#b89572] transition group-hover:scale-105 sm:h-12 sm:w-12" />
                <span className="mt-3 text-[9px] font-semibold uppercase leading-4 tracking-[0.08em] text-[#efeae2] sm:mt-5 sm:text-[11px] sm:leading-5 sm:tracking-[0.13em]">
                  {service.title}
                </span>
              </a>
            ))}
          </div>
        </section>

        <section id="deals" className="px-4 pb-8 sm:px-8 lg:px-14 xl:px-20">
          <SectionTitle title="Seasonal deals" />
          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-1 sm:gap-7 lg:grid-cols-2">
            {deals.map((deal) => (
              <article
                key={deal.title}
                className="grid overflow-hidden rounded-lg border border-[#b89572]/55 flint-card-texture shadow-2xl shadow-black/20 sm:grid-cols-[0.42fr_0.58fr]"
              >
                <div className="relative min-h-28 sm:min-h-full">
                  <img src={deal.image} alt={deal.imageAlt} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#2c2c2c]/35" />
                </div>
                <div className="p-3 sm:p-9">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#b89572] sm:text-[13px] sm:tracking-[0.18em]">Fixed price</p>
                  <h2 className="mt-2 max-w-sm text-[15px] font-black uppercase leading-tight tracking-[0.02em] text-white sm:mt-3 sm:text-3xl sm:tracking-[0.05em]">
                    {deal.title}
                  </h2>
                  <p className="mt-2 text-3xl font-black tracking-tight text-[#b89572] sm:mt-5 sm:text-6xl">{deal.price}</p>

                  <ul className="mt-7 hidden space-y-3 text-sm text-[#ddd7ce] sm:block">
                    {deal.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-0.5 shrink-0 text-[#b89572]">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 pb-8 sm:px-8 lg:px-14 xl:px-20">
          <div className="grid min-w-0 grid-cols-[1fr_auto] gap-4 overflow-hidden rounded-lg border border-red-600/75 flint-card-texture p-4 shadow-2xl shadow-black/25 sm:p-6 lg:grid-cols-[0.9fr_1.1fr_0.45fr] lg:gap-8 lg:p-9">
            <div className="min-w-0">
              <div className="flex items-center gap-3 sm:gap-5">
                <Icon name="alarm" className="h-12 w-12 shrink-0 text-red-500 sm:h-16 sm:w-16" />
                <h2 className="text-3xl font-black uppercase leading-none tracking-[0.03em] text-white sm:text-4xl sm:tracking-[0.04em]">
                  <span className="block text-red-500">Emergency</span>
                  Call out
                </h2>
              </div>
              <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#b89572] sm:mt-6 sm:text-[13px] sm:tracking-[0.18em]">
                We&apos;re here when you need us most.
              </p>
              <p className="mt-2 max-w-md text-xs leading-5 text-[#d5ccc0] sm:mt-3 sm:text-sm sm:leading-7">
                Plumbing or heating emergency? We respond quickly, assess the problem and get it sorted fast.
              </p>
            </div>

            <div className="col-span-2 grid min-w-0 grid-cols-3 gap-3 border-y border-red-500/30 py-4 sm:gap-5 sm:py-6 lg:col-span-1 lg:border-x lg:border-y-0 lg:px-8 lg:py-0">
              <EmergencyPoint icon="clock" title="Fast response" text="We aim to be with you as quickly as possible." />
              <EmergencyPoint icon="shield" title="Expert solutions" text="We identify the issue and resolve it efficiently and safely." />
              <EmergencyPoint icon="wrench" title="Getting it sorted" text="We make sure the problem is fully dealt with so you can get on with life." />
            </div>

            <div className="min-w-0 text-right lg:text-left">
              <p className="text-[11px] font-black uppercase tracking-[0.14em] text-red-500 sm:text-[13px] sm:tracking-[0.18em]">Call out fee</p>
              <p className="mt-2 text-5xl font-black text-white sm:text-7xl">£50</p>
              <p className="mt-1 text-[10px] font-black uppercase leading-4 tracking-[0.08em] text-red-500 sm:mt-2 sm:text-[13px] sm:leading-6 sm:tracking-[0.12em]">
                Plus any work carried out
              </p>
              <p className="mt-3 hidden text-sm leading-7 text-[#d5ccc0] sm:block">
                For leaks, no water, burst pipes, blocked drains, boiler and heating issues and more.
              </p>
            </div>

            <a
              href={phoneHref}
              className="col-span-2 flex min-w-0 items-center gap-3 rounded border border-red-500/70 px-4 py-3 text-sm text-[#eee8df] transition hover:bg-red-500/10 sm:gap-5 sm:px-7 sm:py-5 lg:col-span-3"
            >
              <Icon name="phone" className="h-8 w-8 shrink-0 text-red-500 sm:h-9 sm:w-9" />
              <span className="flex min-w-0 flex-col gap-1">
                <strong className="text-[11px] font-black uppercase tracking-[0.16em] text-red-500 sm:text-[12px] sm:tracking-[0.22em]">Click to call</strong>
                <span className="text-xl font-black tracking-[0.02em] text-white min-[360px]:text-2xl sm:text-4xl sm:tracking-[0.04em]">{phoneNumber}</span>
                <span className="hidden text-sm leading-6 text-[#d5ccc0] sm:block">Day or night - getting there fast, solving the problem and getting your home back to normal.</span>
              </span>
            </a>
          </div>
        </section>

        <section className="px-5 pb-10 sm:px-8 lg:px-14 xl:px-20">
          <div className="grid items-center gap-6 rounded-lg border border-[#b89572]/20 bg-white/[0.03] p-6 md:grid-cols-[1fr_auto_auto] md:p-8">
            <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#b89572]">
              Fully qualified & accredited
            </p>
            <p className="text-3xl font-black leading-none text-white">
              City<span className="text-red-500">&</span>
              <br />Guilds
            </p>
            <p className="text-3xl font-light uppercase tracking-[0.08em] text-white">
              ACS<span className="ml-2 text-blue-400">✓</span>
            </p>
          </div>
        </section>

        <section id="contact" className="border-t border-[#b89572]/15 flint-footer-texture px-5 py-10 sm:px-8 lg:px-14 xl:px-20">
          <div className="grid gap-9 lg:grid-cols-[0.8fr_1fr_0.9fr]">
            <div>
              <Link href="/" className="inline-block" aria-label="FLINT Plumbing home">
                <span className="block text-3xl font-black uppercase tracking-[0.28em] text-white">FLINT.</span>
                <span className="mt-2 block text-[11px] font-semibold uppercase tracking-[0.42em] text-[#b89572]">Plumbing</span>
              </Link>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h2 className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#b89572]">Contact us</h2>
                <p className="mt-4 text-sm leading-7 text-[#d5ccc0]">
                  <a href={phoneHref} className="hover:text-white">{phoneNumber}</a>
                  <br />
                  flint.plumbing.heating@gmail.com
                  <br />
                  flintplumbing.co.uk
                </p>
              </div>
              <div>
                <h2 className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#b89572]">Covering</h2>
                <p className="mt-4 text-sm leading-7 text-[#d5ccc0]">
                  Newcastle, Cramlington, Northumberland and the North East.
                </p>
              </div>
            </div>

            <form className="grid gap-3">
              <input value={name} onChange={(e) => setName(e.target.value)} className="rounded border border-white/10 bg-black/25 px-4 py-3 text-sm text-white outline-none placeholder:text-[#8d867d]" placeholder="Name" />
              <input value={phone} onChange={(e) => setPhone(e.target.value)} className="rounded border border-white/10 bg-black/25 px-4 py-3 text-sm text-white outline-none placeholder:text-[#8d867d]" placeholder="Phone number" />
              <input value={postcode} onChange={(e) => setPostcode(e.target.value)} className="rounded border border-white/10 bg-black/25 px-4 py-3 text-sm text-white outline-none placeholder:text-[#8d867d]" placeholder="Postcode" />
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="min-h-28 rounded border border-white/10 bg-black/25 px-4 py-3 text-sm text-white outline-none placeholder:text-[#8d867d]" placeholder="Tell us what you need" />
              <button type="button" onClick={sendQuote} className="inline-flex items-center justify-center gap-3 rounded-sm bg-[#b89572] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#15110e] transition hover:bg-[#c9a47d]">
                {sending ? "Sending..." : "Get a free quote"}
                <span aria-hidden="true">→</span>
              </button>
              {sent && <p className="text-sm text-[#d5ccc0]">Thanks - your enquiry has been sent.</p>}
              <p className="text-xs leading-6 text-[#a59b90]">
                No obligation. We&apos;ll assess your needs and provide a clear, honest quote.
              </p>
            </form>
          </div>
        </section>

        <footer className="border-t border-[#b89572]/15 px-5 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-[#b89572] sm:px-8">
          Quality work. Honest prices. Local & reliable.
        </footer>
      </div>
    </main>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-6">
      <div className="h-px flex-1 bg-[#b89572]/35" />
      <h2 className="text-center text-[13px] font-bold uppercase tracking-[0.25em] text-white">{title}</h2>
      <div className="h-px flex-1 bg-[#b89572]/35" />
    </div>
  );
}

function EmergencyPoint({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="text-center">
      <Icon name={icon} className="mx-auto h-10 w-10 text-red-500" />
      <h3 className="mt-4 text-[12px] font-bold uppercase tracking-[0.15em] text-white">{title}</h3>
      <p className="mt-2 text-xs leading-6 text-[#cfc7bd]">{text}</p>
    </div>
  );
}

function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "phone":
      return <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true"><path d="M6.6 3.8 9 6.2 7.4 9c1.3 2.7 3.4 4.8 6.1 6.1l2.8-1.6 2.4 2.4-1.1 3.2c-.3.8-1.1 1.2-1.9 1.1C9.3 19.2 4.8 14.7 3.8 8.3c-.1-.8.3-1.6 1.1-1.9l1.7-.6Z" /></svg>;
    case "star":
      return <svg viewBox="0 0 24 24" className={className} {...common}><path d="m12 3 2.7 5.5 6 .9-4.3 4.2 1 5.9-5.4-2.8-5.4 2.8 1-5.9-4.3-4.2 6-.9L12 3Z" /></svg>;
    case "shield":
      return <svg viewBox="0 0 24 24" className={className} {...common}><path d="M12 3 5 6v5c0 4.4 2.8 8.2 7 10 4.2-1.8 7-5.6 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-5" /></svg>;
    case "home":
      return <svg viewBox="0 0 24 24" className={className} {...common}><path d="m3 11 9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></svg>;
    case "clock":
      return <svg viewBox="0 0 24 24" className={className} {...common}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l4 2" /></svg>;
    case "menu":
      return <svg viewBox="0 0 24 24" className={className} {...common}><path d="M5 7h14" /><path d="M5 12h14" /><path d="M5 17h14" /></svg>;
    case "thumb":
      return <svg viewBox="0 0 24 24" className={className} {...common}><path d="M7 11v9H4v-9h3Z" /><path d="M7 11l4-8 1.8 1.4c.5.4.7 1 .5 1.6l-.8 3H18c1.2 0 2.1 1 1.9 2.2l-1 6.4A3 3 0 0 1 16 20H7" /></svg>;
    case "alarm":
      return <svg viewBox="0 0 24 24" className={className} {...common}><path d="M6 18h12" /><path d="M8 18v-6a4 4 0 0 1 8 0v6" /><path d="M4 14H2" /><path d="M22 14h-2" /><path d="m5 6-2-2" /><path d="m19 6 2-2" /><path d="M12 2v3" /></svg>;
    case "boiler":
      return <svg viewBox="0 0 48 48" className={className} {...common}><rect x="14" y="6" width="20" height="36" rx="2" /><circle cx="24" cy="30" r="4" /><path d="M18 14h12M18 20h12" /></svg>;
    case "service":
      return <svg viewBox="0 0 48 48" className={className} {...common}><rect x="10" y="10" width="28" height="28" rx="2" /><path d="M16 18h16M16 26h5" /><circle cx="29" cy="29" r="4" /></svg>;
    case "radiator":
      return <svg viewBox="0 0 48 48" className={className} {...common}><path d="M12 14h24M12 34h24" /><path d="M14 14v20M20 14v20M26 14v20M32 14v20" /><path d="M10 20h-3M41 20h-3" /></svg>;
    case "shower":
      return <svg viewBox="0 0 48 48" className={className} {...common}><path d="M28 13a10 10 0 0 1 10 10H18a10 10 0 0 1 10-10Z" /><path d="M28 13V7" /><path d="M17 29v2M24 29v2M31 29v2M38 29v2" /><path d="M16 38h24" /></svg>;
    case "tap":
      return <svg viewBox="0 0 48 48" className={className} {...common}><path d="M10 28h24" /><path d="M17 28v-8h13a6 6 0 0 1 6 6v2" /><path d="M22 16h8" /><path d="M26 12v8" /><path d="M38 31c2 2 2 5 0 7-2-2-2-5 0-7Z" /></svg>;
    case "pipe":
      return <svg viewBox="0 0 48 48" className={className} {...common}><path d="M9 30h12V18h18" /><path d="M21 24h18" /><path d="M37 14v8" /><path d="M13 26v8" /><path d="M31 31c2 2 2 5 0 7-2-2-2-5 0-7Z" /></svg>;
    case "wrench":
      return <svg viewBox="0 0 48 48" className={className} {...common}><path d="M32 8a10 10 0 0 0 8 13L21 40l-8-8 19-19A10 10 0 0 0 32 8Z" /><path d="m15 34-3 3" /></svg>;
    case "cylinder":
      return <svg viewBox="0 0 48 48" className={className} {...common}><rect x="15" y="7" width="18" height="34" rx="3" /><circle cx="24" cy="27" r="4" /><path d="M18 13h12" /></svg>;
    default:
      return <svg viewBox="0 0 24 24" className={className} {...common}><circle cx="12" cy="12" r="8" /></svg>;
  }
}
