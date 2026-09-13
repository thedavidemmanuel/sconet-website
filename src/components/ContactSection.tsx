import Image from "next/image";
import { gold } from "@/lib/theme";

type ContactSectionProps = {
  email?: string;
  phone?: string;
  address?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function ContactSection({
  email = "hello@sconetafrica.org",
  phone = "[Add Phone Number]",
  address = "[Add Office Address]",
  imageSrc = "/contact.png",
  imageAlt = "A community health worker treating a snakebite patient's leg under a tree near a rural clinic",
}: ContactSectionProps) {
  const hasPhone = !phone.trim().startsWith("[");
  const hasAddress = !address.trim().startsWith("[");

  return (
    <section
      id="contact"
      className="mx-auto max-w-[1200px] px-8 py-[90px] max-[900px]:py-14 max-[600px]:px-5"
    >
      <div
        data-reveal
        className="grid grid-cols-[1fr_1.2fr] items-center gap-10 rounded-2xl p-10 max-[900px]:grid-cols-1 max-[900px]:gap-8 max-[600px]:p-6"
        style={{ background: "oklch(0.96 0.006 150)" }}
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 900px) 100vw, 480px"
            className="object-cover"
          />
        </div>
        <div>
          <div
            className="mb-3 text-[13px] font-bold tracking-[0.08em] uppercase"
            style={{ color: gold }}
          >
            Contact Us
          </div>
          <h2 className="m-0 mb-5 font-display text-[32px] font-extrabold tracking-[-0.01em]">
            Let&apos;s talk
          </h2>
          <p className="m-0 text-base" style={{ color: "oklch(0.35 0.02 150)" }}>
            Clinician, researcher, policymaker, student, donor, or community
            partner — if you&apos;re working toward a future without
            preventable snakebite deaths, we want to hear from you.
          </p>
          <div className="mt-6 grid gap-3.5 text-[15px]">
            <div>
              <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
            </div>
            <div>
              <strong>Phone:</strong>{" "}
              {hasPhone ? (
                <a href={`tel:${phone.replace(/[^+\d]/g, "")}`}>{phone}</a>
              ) : (
                phone
              )}
            </div>
            <div>
              <strong>Address:</strong>{" "}
              {hasAddress ? (
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {address}
                </a>
              ) : (
                address
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
