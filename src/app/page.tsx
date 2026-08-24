import Image from "next/image";
import type { ReactNode } from "react";
import SiteHeader from "@/components/SiteHeader";
import { line, forest, rust } from "@/lib/theme";

const stats = [
  { number: "5+", label: "African Countries Engaged" },
  { number: "500+", label: "Healthcare Workers Trained" },
  { number: "20+", label: "Partner Institutions" },
  { number: "24/7", label: "Commitment to Communities" },
];

const coreValues = [
  "Excellence",
  "Integrity",
  "Professionalism",
  "Innovation",
  "Collaboration",
  "Transparency",
  "Accountability",
  "Compassion",
  "Equity",
  "Evidence-Based Practice",
];

const pillars = [
  {
    number: "01",
    title: "Training",
    body: "We train nurses, clinicians, and community health workers to recognize and treat envenoming fast — because the first hour often decides the outcome.",
    numberColor: "oklch(0.33 0.075 155 / 0.22)",
    image: "/training-illustration1.jpg",
    imageWidth: 1456,
    imageHeight: 1088,
    imageAlt: "Community health worker training illustration",
    bullets: [
      "Clinical protocols for recognizing and staging envenoming",
      "Hands-on antivenom administration and adverse-reaction management",
      "Referral and transport decision-making for rural facilities",
    ],
  },
  {
    number: "02",
    title: "Research",
    body: "From venom biology to treatment outcomes, our research fills the evidence gaps that keep snakebite under-prioritized and under-funded.",
    numberColor: "oklch(0.58 0.14 38 / 0.25)",
    image: "/research.jpg",
    imageWidth: 1184,
    imageHeight: 896,
    imageAlt: "Researcher studying snakebite treatment outcomes",
  },
  {
    number: "03",
    title: "Advocacy",
    body: "We push snakebite onto national health agendas — for the funding, policy, and political attention this crisis has long been denied.",
    numberColor: "oklch(0.33 0.075 155 / 0.22)",
    image: "/advocacy.jpg",
    imageWidth: 1184,
    imageHeight: 896,
    imageAlt: "Advocacy for national snakebite health policy",
  },
  {
    number: "04",
    title: "Antivenom Access & Supply",
    body: "We work to make effective, affordable antivenom available where bites actually happen — not just where health systems are strongest.",
    numberColor: "oklch(0.58 0.14 38 / 0.25)",
    image: "/antivenom-supply.jpg",
    imageWidth: 1184,
    imageHeight: 896,
    imageAlt: "Antivenom supply reaching a rural clinic",
  },
  {
    number: "05",
    title: "Community Engagement",
    body: "Through local outreach, we replace fear and harmful folk remedies with practical knowledge: how to avoid a bite, and what to do if one happens.",
    numberColor: "oklch(0.33 0.075 155 / 0.22)",
    image: "/community-engagement.jpg",
    imageWidth: 1184,
    imageHeight: 896,
    imageAlt: "Community outreach on snakebite prevention",
  },
];

const impactAreas = [
  "Health workers who can recognize and treat envenoming",
  "Evidence that shapes national treatment guidelines",
  "Communities that know how to prevent and respond to bites",
  "Faster, better-equipped rural referral pathways",
  "Policy attention snakebite has historically lacked",
  "Antivenom reaching clinics that used to go without",
  "Cross-border knowledge sharing and coordination",
  "A growing pipeline of trained local researchers",
  "Partnerships that outlast any single funding cycle",
];

const partnerTypes = [
  "Governments",
  "Ministries of Health",
  "Universities",
  "Teaching Hospitals",
  "Research Institutions",
  "Professional Associations",
  "Development Partners",
  "NGOs",
  "International Agencies",
  "Community-Based Organizations",
  "Private Sector Organizations",
];

const involvementWays = [
  "Become a member",
  "Volunteer",
  "Partner with us",
  "Support research initiatives",
  "Sponsor training programmes",
  "Donate",
  "Participate in outreach activities",
  "Advocate for improved snakebite care",
];

function Eyebrow({ children, color = rust }: { children: ReactNode; color?: string }) {
  return (
    <div
      className="mb-3 text-[13px] font-bold tracking-[0.08em] uppercase"
      style={{ color }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <SiteHeader />

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-[92vh] items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.98 0.008 100) 0%, oklch(0.94 0.02 145) 100%)",
        }}
      >
        <div className="relative mx-auto grid w-full max-w-[1280px] grid-cols-[1.1fr_0.9fr] items-center gap-10 px-8 py-[60px] max-[900px]:grid-cols-1 max-[600px]:px-5">
          <div className="animate-fade-up">
            <div
              className="mb-7 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[13px] font-bold tracking-[0.04em] uppercase"
              style={{
                background: "oklch(0.33 0.075 155 / 0.1)",
                color: "oklch(0.3 0.075 155)",
                borderColor: "oklch(0.33 0.075 155 / 0.25)",
              }}
            >
              Snakebite Control Network
            </div>
            <h1 className="m-0 mb-2 flex flex-wrap items-center gap-3.5 font-display text-[54px] leading-[1.08] font-extrabold tracking-[-0.02em] max-[900px]:text-[38px] max-[600px]:text-[30px]">
              <span style={{ color: "oklch(0.2 0.02 150)" }}>Making every</span>
              <span
                className="inline-block rounded-lg px-4.5 py-1 text-white"
                style={{ background: rust }}
              >
                snakebite
              </span>
            </h1>
            <h1 className="m-0 mb-6 font-display text-[54px] leading-[1.08] font-extrabold tracking-[-0.02em] max-[900px]:text-[38px] max-[600px]:text-[30px]">
              <span style={{ color: forest }}>survivable.</span>
            </h1>
            <p
              className="m-0 mb-8 max-w-[600px] text-lg"
              style={{ color: "oklch(0.4 0.02 150)" }}
            >
              S-CONET unites clinicians, researchers, and communities across
              sub-Saharan Africa to close the gap between a bite and
              life-saving care.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <a
                href="#get-involved"
                className="btn-rust-pill inline-flex items-center gap-2 rounded-full px-7 py-[15px] text-[15px] font-bold text-white"
              >
                Join Our Mission →
              </a>
              <a
                href="#about"
                className="btn-outline rounded-full px-7 py-[15px] text-[15px] font-bold"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/s-conet_hero.png"
              alt="The snakebite care cycle: prevention, first aid, transport, treatment, recovery"
              width={2000}
              height={2000}
              priority
              className="h-auto w-full max-w-[820px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b bg-white" style={{ borderColor: line }}>
        <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-6 px-8 py-10 max-[600px]:px-5">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-[34px] font-extrabold" style={{ color: forest }}>
                {s.number}
              </div>
              <div className="mt-1 text-sm" style={{ color: "oklch(0.45 0.02 150)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-[1200px] px-8 py-[90px] max-[900px]:py-14 max-[600px]:px-5"
      >
        <Eyebrow>About Us</Eyebrow>
        <h2 className="m-0 mb-6 font-display text-[26px] font-extrabold tracking-[-0.01em] sm:text-[36px]">
          Who We Are
        </h2>
        <div className="grid grid-cols-[1.1fr_0.9fr] items-center gap-12 max-[900px]:grid-cols-1">
          <div>
            <p className="text-[17px]" style={{ color: "oklch(0.35 0.02 150)" }}>
              Every five minutes, someone in sub-Saharan Africa is bitten by a
              snake — and too often, the outcome depends on where they live,
              not how serious the bite is. S-CONET brings together clinicians,
              researchers, governments, academic institutions, and the
              communities most at risk to close that gap: better prevention,
              faster diagnosis, stronger treatment, and antivenoms that
              actually reach the people who need them.
            </p>
            <p
              className="mb-0 text-[17px] font-semibold"
              style={{ color: "oklch(0.35 0.02 150)" }}
            >
              We believe a snakebite should never cost someone their life,
              their limb, or their livelihood.
            </p>
          </div>
          <Image
            src="/a-warm-group-portrait-of-clinicians.jpg"
            alt="S-CONET team and community fieldwork"
            width={1456}
            height={1088}
            className="h-[220px] w-full rounded-[14px] object-cover sm:h-[280px] lg:h-[340px]"
          />
        </div>
        <div className="mt-12">
          <div
            className="mb-4 text-[13px] font-bold tracking-[0.06em] uppercase"
            style={{ color: "oklch(0.5 0.02 150)" }}
          >
            Our Core Values
          </div>
          <div className="flex flex-wrap gap-2.5">
            {coreValues.map((v) => (
              <span
                key={v}
                className="rounded-full px-4 py-2 text-sm font-semibold"
                style={{ background: "oklch(0.35 0.09 150 / 0.08)", color: "oklch(0.28 0.075 155)" }}
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* VISION + MISSION */}
      <section id="vision" className="border-t border-b bg-white" style={{ borderColor: line }}>
        <div className="mx-auto max-w-[1200px] px-8 py-[90px] max-[900px]:py-14 max-[600px]:px-5">
          <div className="grid grid-cols-2 items-stretch gap-6 max-[900px]:grid-cols-1">
            <div
              className="flex flex-col rounded-2xl p-6 sm:p-8 lg:p-11"
              style={{ background: "oklch(0.94 0.02 145)" }}
            >
              <div className="mb-6 flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-[10px] font-display text-[15px] font-extrabold text-white"
                  style={{ background: forest }}
                >
                  01
                </span>
                <span
                  className="text-[13px] font-bold tracking-[0.08em] uppercase"
                  style={{ color: "oklch(0.3 0.075 155)" }}
                >
                  Our Vision
                </span>
              </div>
              <p
                className="m-0 text-xl leading-[1.35] font-display font-bold tracking-[-0.015em] sm:text-2xl"
                style={{ color: "oklch(0.2 0.02 150)" }}
              >
                A sub-Saharan Africa where every snakebite victim, regardless
                of where they live, has fast access to skilled care and
                effective antivenom.
              </p>
            </div>
            <div
              id="mission"
              className="flex flex-col rounded-2xl p-6 sm:p-8 lg:p-11"
              style={{ background: "oklch(0.26 0.065 158)" }}
            >
              <div className="mb-6 flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-[10px] font-display text-[15px] font-extrabold text-white"
                  style={{ background: rust }}
                >
                  02
                </span>
                <span
                  className="text-[13px] font-bold tracking-[0.08em] uppercase"
                  style={{ color: "oklch(0.75 0.09 40)" }}
                >
                  Our Mission
                </span>
              </div>
              <p className="m-0 text-xl leading-[1.35] font-display font-bold tracking-[-0.015em] text-white sm:text-2xl">
                We turn evidence into action — training frontline health
                workers, driving research, securing antivenom supply, and
                shifting policy, together with the communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section
        id="what-we-do"
        className="border-t border-b bg-white"
        style={{ borderColor: line }}
      >
        <div className="mx-auto max-w-[1200px] px-8 py-[90px] max-[900px]:py-14 max-[600px]:px-5">
          <Eyebrow>What We Do</Eyebrow>
          <h2 className="m-0 mb-10 font-display text-[26px] font-extrabold tracking-[-0.01em] sm:text-[36px]">
            How We Get There
          </h2>
          <div>
            {pillars.map((p, i) => {
              const imageFirst = i % 2 === 0;
              return (
                <div
                  key={p.title}
                  className={`grid min-w-0 grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] items-center gap-14 py-10 max-[900px]:grid-cols-1 max-[900px]:gap-6 ${
                    imageFirst ? "" : "grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]"
                  } ${i === 0 ? "" : "border-t"} ${i === pillars.length - 1 ? "pb-0" : ""}`}
                  style={i === 0 ? undefined : { borderColor: "oklch(0.92 0.008 150)" }}
                >
                  {imageFirst ? (
                    <>
                      <Image
                        src={p.image}
                        alt={p.imageAlt}
                        width={p.imageWidth}
                        height={p.imageHeight}
                        className="aspect-[4/3] w-full rounded-[14px] object-cover max-[900px]:order-1"
                      />
                      <PillarText pillar={p} className="max-[900px]:order-2" />
                    </>
                  ) : (
                    <>
                      <PillarText pillar={p} className="max-[900px]:order-2" />
                      <Image
                        src={p.image}
                        alt={p.imageAlt}
                        width={p.imageWidth}
                        height={p.imageHeight}
                        className="aspect-[4/3] w-full rounded-[14px] object-cover max-[900px]:order-1"
                      />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="mx-auto grid max-w-[1200px] grid-cols-[0.9fr_1.1fr] items-center gap-14 px-8 py-[90px] max-[900px]:grid-cols-1 max-[900px]:gap-6 max-[900px]:py-14 max-[600px]:px-5">
        <Image
          src="/farmer-walking-through-tall-grass-at-dusk.jpg"
          alt="Rural community outreach on snakebite prevention"
          width={1456}
          height={1088}
          className="aspect-[4/3] w-full rounded-xl object-cover"
        />
        <div>
          <Eyebrow>Why Snakebite Matters</Eyebrow>
          <h2 className="m-0 mb-5 text-[24px] font-display font-extrabold tracking-[-0.01em] sm:text-[32px]">
            A crisis hiding in plain sight
          </h2>
          <p className="text-base" style={{ color: "oklch(0.35 0.02 150)" }}>
            The people most affected are farmers, herders, hunters, women, and
            children in rural communities furthest from care. When treatment
            is delayed, a survivable bite can become an amputation, a
            lifelong disability, a trauma that never fully heals, or a family
            pushed into poverty.
          </p>
          <p className="text-base font-semibold" style={{ color: "oklch(0.35 0.02 150)" }}>
            None of that is inevitable. With earlier awareness, trained health
            workers, and antivenoms that reach rural clinics in time, most of
            these outcomes are preventable.
          </p>
        </div>
      </section>

      {/* IMPACT */}
      <section id="impact" style={{ background: "oklch(0.26 0.065 158)" }}>
        <div className="mx-auto max-w-[1200px] px-8 py-[90px] max-[900px]:py-14 max-[600px]:px-5">
          <Eyebrow color="oklch(0.75 0.09 40)">Our Impact</Eyebrow>
          <h2 className="m-0 mb-10 text-[24px] font-display font-extrabold tracking-[-0.01em] text-white sm:text-[32px]">
            What our work builds, bite by bite
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
            {impactAreas.map((a) => (
              <div
                key={a}
                className="flex items-center gap-3 rounded-[10px] border px-5 py-[18px]"
                style={{
                  background: "oklch(1 0 0 / 0.06)",
                  borderColor: "oklch(1 0 0 / 0.12)",
                }}
              >
                <span
                  className="h-2 w-2 flex-shrink-0 rounded-full"
                  style={{ background: "oklch(0.72 0.13 40)" }}
                />
                <span className="text-[15px] font-semibold text-white">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIPS */}
      <section className="mx-auto max-w-[1200px] px-8 py-[90px] max-[900px]:py-14 max-[600px]:px-5">
        <Eyebrow>Partnerships</Eyebrow>
        <h2 className="m-0 mb-4 text-[24px] font-display font-extrabold tracking-[-0.01em] sm:text-[32px]">
          No single organization solves this alone
        </h2>
        <p className="mb-9 max-w-[640px] text-base" style={{ color: "oklch(0.35 0.02 150)" }}>
          Snakebite envenoming sits at the intersection of health, policy, and
          rural livelihoods. We build partnerships across all three — and
          welcome organizations ready to join us.
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3.5">
          {partnerTypes.map((p) => (
            <div
              key={p}
              className="rounded-lg border p-4 text-center text-sm font-semibold"
              style={{ borderColor: line, color: "oklch(0.3 0.02 150)" }}
            >
              {p}
            </div>
          ))}
        </div>
      </section>

      {/* GET INVOLVED */}
      <section id="get-involved" className="border-t border-b bg-white" style={{ borderColor: line }}>
        <div className="mx-auto max-w-[1200px] px-8 py-[90px] max-[900px]:py-14 max-[600px]:px-5">
          <Eyebrow>Get Involved</Eyebrow>
          <h2 className="m-0 mb-10 font-display text-[26px] font-extrabold tracking-[-0.01em] sm:text-[36px]">
            Your role in ending a preventable crisis
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5">
            {involvementWays.map((w) => (
              <div
                key={w}
                className="involve-card rounded-[10px] border p-[22px] text-center"
                style={{ borderColor: line }}
              >
                <p className="m-0 text-[15px] font-semibold">{w}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3.5">
            <a
              href="#contact"
              className="btn-rust rounded-full px-6.5 py-3.5 text-[15px] font-bold text-white"
            >
              Partner With Us
            </a>
            <a
              href="#contact"
              className="btn-forest rounded-full px-6.5 py-3.5 text-[15px] font-bold text-white"
            >
              Donate
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto grid max-w-[1200px] grid-cols-2 gap-14 px-8 py-[90px] max-[900px]:grid-cols-1 max-[900px]:gap-6 max-[900px]:py-14 max-[600px]:px-5"
      >
        <div>
          <Eyebrow>Contact Us</Eyebrow>
          <h2 className="m-0 mb-5 text-[24px] font-display font-extrabold tracking-[-0.01em] sm:text-[32px]">
            Let&apos;s talk
          </h2>
          <p className="text-base" style={{ color: "oklch(0.35 0.02 150)" }}>
            Clinician, researcher, policymaker, student, donor, or community
            partner — if you&apos;re working toward a future without
            preventable snakebite deaths, we want to hear from you.
          </p>
          <div className="mt-6 grid gap-3.5 text-[15px]">
            <div>
              <strong>Email:</strong> <a href="mailto:info@s-conet.org">info@s-conet.org</a>
            </div>
            <div>
              <strong>Phone:</strong> [Add Phone Number]
            </div>
            <div>
              <strong>Address:</strong> [Add Office Address]
            </div>
          </div>
        </div>
        <div
          className="grid gap-3.5 rounded-xl p-6 sm:p-8"
          style={{ background: "oklch(0.96 0.006 150)" }}
        >
          <input
            type="text"
            placeholder="Your name"
            className="rounded-md border px-3.5 py-3 text-sm"
            style={{ borderColor: "oklch(0.85 0.01 150)" }}
          />
          <input
            type="email"
            placeholder="Your email"
            className="rounded-md border px-3.5 py-3 text-sm"
            style={{ borderColor: "oklch(0.85 0.01 150)" }}
          />
          <textarea
            placeholder="Your message"
            rows={4}
            className="resize-y rounded-md border px-3.5 py-3 text-sm"
            style={{ borderColor: "oklch(0.85 0.01 150)" }}
          />
          <button
            type="button"
            className="btn-forest rounded-full py-3.5 text-[15px] font-bold text-white"
          >
            Send Message
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "oklch(0.26 0.065 158)", color: "oklch(0.85 0.01 150)" }}>
        <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10 px-8 pt-14 pb-8 max-[600px]:px-5">
          <div>
            <div className="mb-3 flex items-center gap-2.5 font-display text-[17px] font-extrabold text-white">
              <span
                className="flex h-[30px] w-[30px] items-center justify-center rounded-[7px] text-sm"
                style={{ background: rust }}
              >
                S
              </span>
              S-CONET
            </div>
            <p className="m-0 max-w-[320px] text-sm">
              A network of clinicians, researchers, and communities working to
              end preventable death and disability from snakebite across
              sub-Saharan Africa.
            </p>
          </div>
          <div>
            <div className="mb-3.5 text-sm font-bold text-white">Quick Links</div>
            <div className="grid gap-2.5 text-sm">
              <a href="#about" style={{ color: "oklch(0.85 0.01 150)" }}>
                About Us
              </a>
              <a href="#what-we-do" style={{ color: "oklch(0.85 0.01 150)" }}>
                What We Do
              </a>
              <a href="#get-involved" style={{ color: "oklch(0.85 0.01 150)" }}>
                Get Involved
              </a>
              <a href="#contact" style={{ color: "oklch(0.85 0.01 150)" }}>
                Contact
              </a>
            </div>
          </div>
          <div>
            <div className="mb-3.5 text-sm font-bold text-white">Contact</div>
            <div className="grid gap-2.5 text-sm">
              <a href="mailto:info@s-conet.org" style={{ color: "oklch(0.85 0.01 150)" }}>
                info@s-conet.org
              </a>
              <span>[Add Phone Number]</span>
            </div>
          </div>
        </div>
        <div
          className="mx-auto max-w-[1200px] border-t px-8 py-5 text-center text-[13px] max-[600px]:px-5"
          style={{ borderColor: "oklch(0.35 0.05 158)" }}
        >
          © 2026 Snakebite Control Network (S-CONET). All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

function PillarText({
  pillar,
  className,
}: {
  pillar: (typeof pillars)[number];
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="mb-3.5 flex items-baseline gap-3.5">
        <span
          className="font-display text-[32px] leading-none font-extrabold sm:text-[42px]"
          style={{ color: pillar.numberColor }}
        >
          {pillar.number}
        </span>
        <h3 className="m-0 font-display text-[22px] font-extrabold tracking-[-0.01em] sm:text-[28px]">
          {pillar.title}
        </h3>
      </div>
      <p
        className="m-0 max-w-[620px] text-[16.5px]"
        style={{ color: "oklch(0.35 0.02 150)", marginBottom: pillar.bullets ? 20 : 0 }}
      >
        {pillar.body}
      </p>
      {pillar.bullets && (
        <div className="grid gap-2.5">
          {pillar.bullets.map((b) => (
            <div
              key={b}
              className="flex items-start gap-2.5 text-[15px]"
              style={{ color: "oklch(0.4 0.02 150)" }}
            >
              <span
                className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                style={{ background: rust }}
              />
              <span>{b}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
