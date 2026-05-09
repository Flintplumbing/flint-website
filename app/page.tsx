"use client";

import { useState } from "react";

const sizes = [
  { id: "small", name: "Small", desc: "Approx. 4m² bathroom", sqm: 4 },
  { id: "medium", name: "Medium", desc: "Approx. 6m² bathroom", sqm: 6 },
  { id: "large", name: "Large", desc: "Approx. 10m² bathroom", sqm: 10 },
];

const tileQualities = [
  { id: "budget", name: "Budget", price: 55 },
  { id: "moderate", name: "Moderate", price: 80 },
  { id: "luxury", name: "Luxury", price: 150 },
];

export default function Home() {
  const [step, setStep] = useState(1);
  const [size, setSize] = useState(sizes[1]);
  const [wallFinish, setWallFinish] = useState<"half" | "full" | "cladding">("half");
  const [floorTiles, setFloorTiles] = useState(true);
  const [tileQuality, setTileQuality] = useState(tileQualities[1]);

  const [freestandingBath, setFreestandingBath] = useState(false);
  const [wallHungToilet, setWallHungToilet] = useState(false);
  const [floatingVanity, setFloatingVanity] = useState(false);
  const [semiPedestal, setSemiPedestal] = useState(false);
  const [countertopBasin, setCountertopBasin] = useState(false);
  const [blackFittings, setBlackFittings] = useState(false);
  const [brassFittings, setBrassFittings] = useState(false);
  const [ledMirror, setLedMirror] = useState(false);
  const [heatedRail, setHeatedRail] = useState(false);
  const [showerNiche, setShowerNiche] = useState(false);
  const [wallPanels, setWallPanels] = useState(false);
  const [rainfallShower, setRainfallShower] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [postcode, setPostcode] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const standardBathroomSuite = 900;
  const fittingLabour = 1000;
  const tilingLabour = 600;

  const wallArea =
    wallFinish === "full" || wallFinish === "cladding"
      ? size.sqm * 3.2
      : size.sqm * 1.6;

  const wallMaterialPrice = wallFinish === "cladding" ? 100 : tileQuality.price;
  const wallMaterialCost = wallArea * wallMaterialPrice;
  const floorTileCost = floorTiles ? size.sqm * tileQuality.price : 0;

  const upgradeCost =
    (freestandingBath ? 500 : 0) +
    (wallHungToilet ? 400 : 0) +
    (floatingVanity ? 250 : 0) +
    (semiPedestal ? 120 : 0) +
    (countertopBasin ? 280 : 0) +
    (blackFittings ? 350 : 0) +
    (brassFittings ? 550 : 0) +
    (ledMirror ? 120 : 0) +
    (heatedRail ? 180 : 0) +
    (showerNiche ? 180 : 0) +
    (wallPanels ? 600 : 0) +
    (rainfallShower ? 220 : 0);

  const total =
    standardBathroomSuite +
    fittingLabour +
    tilingLabour +
    wallMaterialCost +
    floorTileCost +
    upgradeCost;

  const low = Math.round(total / 100) * 100;
  const high = Math.round((total * 1.12) / 100) * 100;

  async function sendQuote() {
    setSending(true);

    const estimate = `£${low.toLocaleString()} – £${high.toLocaleString()}`;

    const response = await fetch("/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, phone, postcode, message, estimate }),
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
    <main className="bg-[#151515] px-2 text-white sm:px-4 md:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[1.25rem] bg-[#1f1f1f] shadow-2xl md:rounded-[2rem]">
        {/* HERO */}
        <section className="relative min-h-[680px] overflow-hidden px-4 sm:px-6 md:min-h-[76vh] md:px-10">
          <div className="absolute inset-0">
            <img
              src="/images/bathroom.jpg"
              alt="Luxury bathroom"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/70" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/80 md:bg-gradient-to-r md:from-black/90 md:via-black/55 md:to-transparent" />
          </div>

          <nav className="relative z-10 flex items-center justify-between gap-4 py-5">
            <div>
              <h2 className="text-2xl font-bold tracking-[0.22em] md:text-3xl">
                FLINT.
              </h2>
              <p className="mt-1 text-[8px] uppercase tracking-[0.28em] text-neutral-300 md:text-[10px]">
                Plumbing & Heating
              </p>
            </div>

            <div className="flex items-center gap-3 md:gap-10">
              <a href="/" className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white md:text-xs">
                Home
              </a>
              <a href="/services" className="text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-300 hover:text-white md:text-xs">
                Services
              </a>
              <a href="/about" className="text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-300 hover:text-white md:text-xs">
                About
              </a>
              <a href="#estimator" className="hidden rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-black md:block">
                Estimate
              </a>
            </div>
          </nav>

          <div className="relative z-10 flex min-h-[540px] items-center md:min-h-[58vh]">
            <div className="max-w-3xl">
              <h1 className="text-[42px] font-bold leading-[0.92] sm:text-5xl md:text-7xl">
                PLUMBING.
                <br />
                HEATING.
                <br />
                BATHROOMS.
              </h1>

              <p className="mt-5 max-w-lg text-base leading-relaxed text-neutral-200 md:text-lg">
                Modern plumbing, heating and bathroom installations across
                Newcastle, Cramlington, Northumberland and the North East.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href="#estimator" className="rounded-full bg-white px-6 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-black">
                  Bathroom Estimator
                </a>
                <a href="#contact" className="rounded-full border border-white/40 px-6 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.16em]">
                  Book a Visit
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ESTIMATOR */}
        <section id="estimator" className="px-3 py-8 text-black sm:px-4 md:px-10 md:py-10">
          <div className="rounded-[1.5rem] bg-[#E7E2DA] p-4 md:rounded-[2rem] md:p-8">
            <div className="mb-6 flex flex-col gap-4 md:mb-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-neutral-600 md:text-xs">
                  Bathroom Estimator
                </p>
                <h2 className="text-3xl font-bold leading-tight md:text-5xl">
                  Build your guide quote.
                </h2>
              </div>

              <div className="rounded-2xl bg-black px-5 py-4 text-white">
                <p className="text-[10px] uppercase tracking-[0.22em] text-neutral-400 md:text-xs">
                  Estimated Range
                </p>
                <p className="mt-1 text-xl font-bold md:text-2xl">
                  £{low.toLocaleString()} – £{high.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="rounded-[1.5rem] bg-white p-4 shadow-2xl md:rounded-[2rem] md:p-8">
              <div className="mb-6 flex gap-2 md:mb-7">
                {[1, 2, 3, 4].map((number) => (
                  <div
                    key={number}
                    className={`h-2 flex-1 rounded-full ${
                      number <= step ? "bg-black" : "bg-neutral-200"
                    }`}
                  />
                ))}
              </div>

              {step === 1 && (
                <div>
                  <h3 className="text-xl font-bold md:text-2xl">
                    How big is your bathroom?
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    Pick the closest room layout.
                  </p>

                  <div className="mt-5 grid gap-3 md:mt-6 md:grid-cols-3">
                    {sizes.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setSize(item)}
                        className={`rounded-2xl border p-4 text-left transition md:rounded-3xl md:p-5 ${
                          size.id === item.id
                            ? "border-black bg-black text-white"
                            : "border-neutral-200 hover:bg-neutral-50"
                        }`}
                      >
                        <BathroomLayout type={item.id} active={size.id === item.id} />
                        <h4 className="mt-4 text-lg font-semibold md:text-xl">
                          {item.name}
                        </h4>
                        <p className="mt-1 text-sm opacity-70">{item.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 className="text-xl font-bold md:text-2xl">
                    Bathroom style & upgrades
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    Bath, toilet and basin are included as standard.
                  </p>

                  <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    <Toggle label="Freestanding bath" value={freestandingBath} setValue={setFreestandingBath} />
                    <Toggle label="Wall hung toilet" value={wallHungToilet} setValue={setWallHungToilet} />
                    <Toggle label="Floating vanity unit" value={floatingVanity} setValue={setFloatingVanity} />
                    <Toggle label="Semi pedestal basin" value={semiPedestal} setValue={setSemiPedestal} />
                    <Toggle label="Countertop basin" value={countertopBasin} setValue={setCountertopBasin} />
                    <Toggle label="Matt black fittings" value={blackFittings} setValue={setBlackFittings} />
                    <Toggle label="Brushed brass fittings" value={brassFittings} setValue={setBrassFittings} />
                    <Toggle label="LED mirror" value={ledMirror} setValue={setLedMirror} />
                    <Toggle label="Heated towel rail" value={heatedRail} setValue={setHeatedRail} />
                    <Toggle label="Built-in shower niche" value={showerNiche} setValue={setShowerNiche} />
                    <Toggle label="Wall panels" value={wallPanels} setValue={setWallPanels} />
                    <Toggle label="Rainfall shower" value={rainfallShower} setValue={setRainfallShower} />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h3 className="text-xl font-bold md:text-2xl">Wall & floor finish</h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    Choose tiles or cladding, then select your floor option.
                  </p>

                  <div className="mt-5 grid gap-3 md:grid-cols-3">
                    <Choice active={wallFinish === "half"} onClick={() => setWallFinish("half")} title="Half-height tiles" text="Standard tiled finish." />
                    <Choice active={wallFinish === "full"} onClick={() => setWallFinish("full")} title="Full-height tiles" text="Fully tiled premium finish." />
                    <Choice active={wallFinish === "cladding"} onClick={() => setWallFinish("cladding")} title="Wall cladding" text="Modern panel finish at £100/m²." />
                  </div>

                  <button
                    onClick={() => setFloorTiles(!floorTiles)}
                    className={`mt-4 rounded-2xl border px-5 py-4 text-sm font-semibold ${
                      floorTiles ? "border-black bg-black text-white" : "border-neutral-200 hover:bg-neutral-50"
                    }`}
                  >
                    {floorTiles ? "✓ " : "+ "}Tile the floor
                  </button>

                  {wallFinish !== "cladding" && (
                    <div className="mt-5 grid gap-2 md:grid-cols-3">
                      {tileQualities.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setTileQuality(item)}
                          className={`rounded-2xl border p-4 text-left text-sm font-semibold ${
                            tileQuality.id === item.id ? "border-black bg-black text-white" : "border-neutral-200 hover:bg-neutral-50"
                          }`}
                        >
                          {item.name} tiles
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {step === 4 && (
                <div>
                  <h3 className="text-xl font-bold md:text-2xl">Your guide estimate</h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    Final quote confirmed after a home visit.
                  </p>

                  <div className="mt-5 rounded-2xl bg-black p-5 text-white md:rounded-3xl md:p-7">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-neutral-400 md:text-sm">
                      Estimated Price
                    </p>

                    <p className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
                      £{low.toLocaleString()} – £{high.toLocaleString()}
                    </p>

                    <p className="mt-5 max-w-2xl text-sm leading-relaxed text-neutral-400">
                      Estimate includes bathroom installation, plumbing work,
                      wall finish, flooring choice and selected upgrades.
                    </p>

                    <a
                      href="#contact"
                      className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-black md:px-7 md:py-4"
                    >
                      Get a Proper Quote
                    </a>
                  </div>
                </div>
              )}

              <div className="mt-7 flex justify-between">
                <button onClick={() => setStep(Math.max(1, step - 1))} className="rounded-full border border-black/20 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em]">
                  Back
                </button>
                <button onClick={() => setStep(Math.min(4, step + 1))} className="rounded-full bg-black px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                  {step === 4 ? "Done" : "Next"}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="px-3 pb-8 sm:px-4 md:px-10 md:pb-10">
          <div className="grid gap-5 rounded-[1.5rem] bg-[#2b2b2b] p-5 md:grid-cols-2 md:rounded-[2rem] md:p-8">
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-neutral-400 md:text-xs">
                Get a Proper Quote
              </p>
              <h2 className="text-3xl font-bold md:text-4xl">Book a visit.</h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-300">
                Send a few details and FLINT. can arrange a visit to confirm the price properly.
              </p>

              <div className="mt-6 rounded-2xl bg-black/30 p-5 text-sm text-neutral-300 md:mt-8">
                <p className="text-white">Your current guide estimate:</p>
                <p className="mt-2 text-xl font-bold text-white md:text-2xl">
                  £{low.toLocaleString()} – £{high.toLocaleString()}
                </p>
              </div>
            </div>

            <form className="grid gap-3">
              <input value={name} onChange={(e) => setName(e.target.value)} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm outline-none" placeholder="Name" />
              <input value={phone} onChange={(e) => setPhone(e.target.value)} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm outline-none" placeholder="Phone number" />
              <input value={postcode} onChange={(e) => setPostcode(e.target.value)} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm outline-none" placeholder="Postcode" />
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="min-h-32 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm outline-none" placeholder="Tell us briefly what you need" />

              <button type="button" onClick={sendQuote} className="rounded-full bg-white px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-black">
                {sending ? "Sending..." : "Send Enquiry"}
              </button>

              {sent && <p className="text-sm text-neutral-300">Thanks — your enquiry has been sent.</p>}
            </form>
          </div>
        </section>

        {/* PHONE */}
        <section className="px-3 pb-8 sm:px-4 md:px-10 md:pb-10">
          <div className="rounded-[1.5rem] bg-[#E7E2DA] p-6 text-black md:rounded-[2rem] md:p-12">
            <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-600 md:text-xs">
              Prefer to talk?
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Or just give me a ring.
            </h2>
            <a href="tel:07932423309" className="mt-5 block break-words text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
              07932423309
            </a>
          </div>
        </section>

        <footer className="border-t border-white/5 px-5 py-8 text-sm text-neutral-400 md:px-6">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h2 className="text-2xl font-bold tracking-[0.25em] text-white">FLINT.</h2>
              <p className="mt-2 text-[10px] uppercase tracking-[0.35em]">Plumbing & Heating</p>
            </div>
            <p>Plumbing<br />Heating<br />Bathrooms</p>
            <p>07932423309<br />flint.plumbing.heating@gmail.com</p>
            <p>Newcastle<br />Cramlington<br />Northumberland</p>
          </div>
        </footer>
      </div>
    </main>
  );
}

function Toggle({ label, value, setValue }: { label: string; value: boolean; setValue: (value: boolean) => void }) {
  return (
    <button onClick={() => setValue(!value)} className={`rounded-2xl border p-4 text-left text-sm font-semibold ${value ? "border-black bg-black text-white" : "border-neutral-200 hover:bg-neutral-50"}`}>
      {value ? "✓ " : "+ "}{label}
    </button>
  );
}

function Choice({ active, onClick, title, text }: { active: boolean; onClick: () => void; title: string; text: string }) {
  return (
    <button onClick={onClick} className={`rounded-2xl border p-4 text-left md:rounded-3xl md:p-6 ${active ? "border-black bg-black text-white" : "border-neutral-200 hover:bg-neutral-50"}`}>
      <h4 className="text-lg font-semibold md:text-xl">{title}</h4>
      <p className="mt-2 text-sm opacity-70">{text}</p>
    </button>
  );
}

function BathroomLayout({ type, active }: { type: string; active: boolean }) {
  const stroke = active ? "white" : "black";

  return (
    <svg viewBox="0 0 140 100" className="h-24 w-full rounded-2xl bg-white/10 md:h-28" fill="none">
      <rect x="10" y="10" width="120" height="80" rx="5" stroke={stroke} strokeWidth="3" />
      <rect x="18" y="18" width={type === "small" ? "38" : type === "medium" ? "44" : "52"} height="20" rx="4" stroke={stroke} strokeWidth="3" />
      <circle cx={type === "small" ? "55" : type === "medium" ? "78" : "100"} cy={type === "small" ? "60" : "68"} r="10" stroke={stroke} strokeWidth="3" />
      <rect x={type === "small" ? "88" : type === "medium" ? "102" : "108"} y={type === "small" ? "22" : "18"} width="16" height="16" rx="3" stroke={stroke} strokeWidth="3" />
    </svg>
  );
}