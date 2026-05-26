import { createFileRoute } from "@tanstack/react-router";
import logoPBD from "@/assets/logo-pbd.jpeg";
import logoVanMinde from "@/assets/logo-vanminde.jpeg";
import logoGetin from "@/assets/logo-getin.jpeg";
import logoCultureKids from "@/assets/logo-culturekids.jpeg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "19 Collective. We bring captaincy to brands." },
      {
        name: "description",
        content:
          "19 Collective: four independent agencies operating as one. Brand and growth, film, activation, social. Senior-led. Antwerp-based, globally bound. We plug in where the work needs us.",
      },
      { property: "og:title", content: "19 Collective. We bring captaincy to brands." },
      {
        property: "og:description",
        content:
          "Four independent agencies operating as one. Captained by an Olympic gold medalist. Antwerp-based, globally bound.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "icon",
        type: "image/svg+xml",
        href:
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' fill='%230E0E0F'/><text x='50%25' y='50%25' dy='.35em' text-anchor='middle' font-family='monospace' font-size='40' font-weight='700' fill='%23D4FF3A'>[ ]</text></svg>",
      },
    ],
  }),
});

function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-mono font-medium tracking-tight text-ink ${className}`}>
      <span className="text-volt">[</span>
      <span>19</span>
      <span className="text-volt">]</span>
      <span> COLLECTIVE</span>
    </span>
  );
}

function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function CTAButton({ targetId, children }: { targetId: string; children: React.ReactNode }) {
  return (
    <a
      href={`#${targetId}`}
      onClick={(e) => smoothScroll(e, targetId)}
      className="group inline-flex items-center gap-3 bg-ink px-6 py-4 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-colors hover:bg-volt hover:text-ink"
    >
      {children}
      <span aria-hidden>→</span>
    </a>
  );
}

function IndexMarker({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 font-mono text-xs uppercase tracking-[0.18em] text-stone-3">
      {children}
    </div>
  );
}

function Section({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`border-t border-ink/10 px-6 py-24 md:px-12 md:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

const agencies = [
  {
    n: "(01)",
    city: "BELFAST",
    tag: "BRAND · DIGITAL · GROWTH",
    name: "PBD",
    desc:
      "Pale Blue Dot. Brand systems and visual identity for businesses with something worth saying. Web development and growth marketing to make sure they're heard.",
    link: "palebluedot.tv",
    href: "https://palebluedot.tv",
    logo: logoPBD,
    logoAlt: "Pale Blue Dot logo",
  },
  {
    n: "(02)",
    city: "ROTTERDAM",
    tag: "MOVING IMAGE + FILM",
    name: "&VanMinde",
    desc: "Moving image and film. The work that earns the watch.",
    link: "vanminde.com",
    href: "https://vanminde.com",
    logo: logoVanMinde,
    logoAlt: "&VanMinde logo",
    logoLight: true,
  },
  {
    n: "(03)",
    city: "LIEGE",
    tag: "ACTIVATION",
    name: "Getin",
    desc: "Brand activations, live and retail. Where brands meet people in person.",
    link: "getin.be",
    href: "https://getin.be",
    logo: logoGetin,
    logoAlt: "Getin logo",
  },
  {
    n: "(04)",
    city: "ANTWERP",
    tag: "SOCIAL",
    name: "Culture Kids Group",
    desc:
      "Social content, day in and day out. The work that keeps a brand in the conversation.",
    link: "culturekids.be",
    href: "https://culturekids.be",
    logo: logoCultureKids,
    logoAlt: "Culture Kids Group logo",
  },
];

function Index() {
  const anchors = [
    { id: "manifesto", label: "(02) THE MANIFESTO" },
    { id: "four", label: "(03) THE FOUR" },
    { id: "captain", label: "(04) THE CAPTAIN" },
    { id: "contact", label: "(05) CONTACT" },
  ];

  return (
    <div className="min-h-screen bg-paper text-ink antialiased">
      {/* (00) Sticky header */}
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
          <Logo className="text-sm md:text-base" />
          <a
            href="#contact"
            onClick={(e) => smoothScroll(e, "contact")}
            className="font-mono text-xs uppercase tracking-[0.15em] text-ink hover:text-stone-3"
          >
            <span className="hidden md:inline">Get in touch</span>
            <span className="md:hidden">Contact</span>
          </a>
        </div>
      </header>

      {/* (01) Hero */}
      <section
        id="hero"
        className="flex min-h-[calc(100vh-65px)] flex-col justify-center px-6 py-24 md:px-12"
      >
        <div className="mx-auto w-full max-w-6xl">
          <IndexMarker>(01) THE COLLECTIVE</IndexMarker>
          <h1 className="font-sans text-[clamp(2.75rem,9vw,8rem)] font-medium leading-[0.95] tracking-[-0.03em] text-ink">
            We bring captaincy
            <br />
            to brands.
          </h1>
          <p className="mt-10 max-w-2xl font-sans text-xl leading-snug text-stone-2 md:text-2xl">
            Four independent agencies, operating as one.
            <br />
            Captained by an Olympic gold medalist. Antwerp-based, globally bound.
          </p>
          <div className="mt-12">
            <CTAButton targetId="contact">Work with us</CTAButton>
          </div>
          <ul className="mt-16 space-y-2 font-mono text-xs uppercase tracking-[0.15em]">
            {anchors.map((a) => (
              <li key={a.id}>
                <a
                  href={`#${a.id}`}
                  onClick={(e) => smoothScroll(e, a.id)}
                  className="text-stone-3 hover:text-ink"
                >
                  {a.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* (02) Manifesto */}
      <Section id="manifesto">
        <IndexMarker>(02) THE MANIFESTO</IndexMarker>
        <div className="max-w-[720px] font-serif text-ink">
          <p className="text-3xl leading-[1.25] md:text-5xl md:leading-[1.15]">
            We bring captaincy to brands.
          </p>
          <div className="mt-10 space-y-6 text-xl leading-[1.55] md:text-2xl md:leading-[1.5]">
            <p>
              Captaincy is a discipline. A direction held under pressure. A shared standard,
              repeated every day. A team that wins because every player makes the others better.
            </p>
            <p>
              19 Collective is four independent agencies operating as one. PBD, &amp;VanMinde, Getin
              and Culture Kids Group. Brand and growth, film, activation, social. Captained by
              Felix Denayer. Olympic gold medalist in field hockey, former captain of the Belgian
              Red Lions. The senior people are the people on the work.
            </p>
            <p>
              We assemble around the work. Sometimes one discipline is enough. Sometimes the work
              needs all four. Either way, the same senior people start it and finish it.
            </p>
            <p>
              We work with ambitious brands and challenger businesses. The kind that want a captain
              on their work.
            </p>
            <p>Senior thinking, integrated. Antwerp-based, globally bound.</p>
            <p className="pt-4 text-2xl italic md:text-3xl">We assemble around the work.</p>
          </div>
        </div>
      </Section>

      {/* (03) The Four */}
      <Section id="four">
        <IndexMarker>(03) THE FOUR</IndexMarker>
        <div className="grid grid-cols-1 gap-px bg-ink/15 md:grid-cols-2">
          {agencies.map((a) => (
            <article key={a.name} className="flex flex-col bg-paper p-8 md:p-12">
              <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.15em] text-stone-3">
                <span>{a.n}</span>
                <span>{a.city}</span>
              </div>
              <div
                className={`mt-10 flex h-24 w-24 items-center justify-center ${
                  a.logoLight ? "bg-paper ring-1 ring-ink/15" : "bg-ink"
                }`}
              >
                <img
                  src={a.logo}
                  alt={a.logoAlt}
                  className="max-h-16 max-w-16 object-contain"
                  loading="lazy"
                />
              </div>
              <div className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-stone-2">
                {a.tag}
              </div>
              <h3 className="mt-4 font-sans text-4xl font-medium tracking-tight md:text-5xl">
                {a.name}
              </h3>
              <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-stone-2">
                {a.desc}
              </p>
              <div className="mt-10 pt-6">
                <a
                  href={a.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border-b border-ink/30 pb-1 font-mono text-xs uppercase tracking-[0.15em] text-ink hover:border-ink"
                >
                  {a.link} <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* (04) The Captain */}
      <Section id="captain">
        <IndexMarker>(04) THE CAPTAIN</IndexMarker>
        <div className="max-w-[720px]">
          <h2 className="font-sans text-5xl font-medium tracking-tight md:text-6xl">
            Felix Denayer.
          </h2>
          <div className="mt-10 space-y-6 font-sans text-base leading-relaxed text-stone-1 md:text-lg">
            <p>
              Five-time Olympian. Olympic gold medalist in field hockey. Former captain of the
              Belgian Red Lions.
            </p>
            <p>
              Felix has spent his career building high-performing teams and translating that
              discipline into business. 19 Collective is the application of that work to brands. He
              captains the collective the same way he captained the Red Lions. Direction.
              Standards. Daily details. The work that makes everyone around him better.
            </p>
          </div>
        </div>
      </Section>

      {/* (05) Contact */}
      <Section id="contact">
        <IndexMarker>(05) CONTACT</IndexMarker>
        <div className="font-mono text-sm leading-relaxed text-ink md:text-base">
          <div className="space-y-1 uppercase tracking-[0.1em]">
            <div>19 COLLECTIVE</div>
            <div>Steenhouwersvest 19</div>
            <div>2000 Antwerpen</div>
            <div>Belgium</div>
          </div>
          <div className="mt-10 space-y-3">
            <div>
              <a
                href="mailto:felix@19collective.co"
                className="inline-flex items-center gap-2 border-b border-ink/30 pb-1 hover:border-ink"
              >
                felix@19collective.co<span className="ml-2" aria-hidden>→</span>
              </a>
            </div>
            <div>
              <a
                href="#"
                className="inline-flex items-center gap-2 border-b border-ink/30 pb-1 hover:border-ink"
              >
                LinkedIn <span aria-hidden>→</span>
              </a>
            </div>
            <div>
              <a
                href="#"
                className="inline-flex items-center gap-2 border-b border-ink/30 pb-1 hover:border-ink"
              >
                Instagram <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* (06) Footer */}
      <footer className="border-t border-ink/10 px-6 py-8 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-2 font-mono text-xs uppercase tracking-[0.15em] text-stone-3 md:flex-row md:items-center md:gap-6">
          <Logo className="text-xs" />
          <span className="hidden md:inline">·</span>
          <span>Antwerp-based, globally bound.</span>
          <span className="hidden md:inline">·</span>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  );
}
