"use client";

import Image from "next/image";
import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/section-title";
import { UiIcon } from "@/components/ui-icon";
import { featured, heroStats, links, navItems, projects, socials } from "@/lib/links-data";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function LinksPage() {
  return (
    <main className="page-shell min-h-screen px-4 py-5 text-white sm:px-6">
      <div className="studio-grid pointer-events-none fixed inset-0 opacity-20" />
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.08, delayChildren: 0.08 }}
        className="safe-bottom relative mx-auto flex w-full max-w-[430px] flex-col gap-5"
      >
        <Hero />
        <FeaturedCards />
        <Portfolio />
        <Agenda />
        <Socials />
      </motion.div>
      <BottomNav />
    </main>
  );
}

function Hero() {
  return (
    <motion.section
      id="inicio"
      variants={fadeUp}
      className="liquid-card scroll-mt-5 rounded-[30px] p-5 pt-6 text-ink"
    >
      <div className="relative z-10 mb-5 flex items-center justify-between">
        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-brand-red">
          / STUDIO DIGITAL
        </p>
        <div className="red-rule" />
      </div>
      <div className="relative z-10 flex items-start gap-4">
        <div className="relative h-[92px] w-[92px] shrink-0 overflow-hidden rounded-full border border-white/70 bg-white/50 shadow-[0_12px_32px_rgb(var(--color-ink)_/_0.12)]">
          <Image
            src="/images/profile/martin-matos-profile.jpg"
            alt="Foto de perfil de Martin Matos"
            fill
            priority
            sizes="92px"
            className="object-cover object-center"
          />
        </div>
        <div className="min-w-0 flex-1 pt-1">
          <div className="flex items-center gap-2">
            <h1 className="truncate text-2xl font-bold tracking-normal">Martin Matos</h1>
            <UiIcon
              name="badge"
              className="h-5 w-5 shrink-0"
              style={{
                color: "rgb(var(--color-brand-red))",
                stroke: "rgb(var(--color-brand-red))",
              }}
            />
          </div>
          <p className="mt-1 whitespace-pre-line text-sm font-medium leading-5 text-ink/58">
            💻 Founder @MatosDev{"\n"}🚀 Creador de Monexity
          </p>
        </div>
      </div>

      <p className="relative z-10 mt-5 text-[15px] leading-6 text-ink/68">
        Desarrollo webs, sistemas y contenido digital para negocios que quieren verse más
        profesionales.
      </p>

      <div className="relative z-10 mt-5 grid gap-2.5">
        <div className="grid grid-cols-2 gap-2">
          {heroStats.primary.map((stat) => (
            <div
              key={stat}
              className="primary-action-pill flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-white/95 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,255,255,0.58))] px-3 py-2.5 text-center shadow-[0_16px_36px_rgba(17,16,14,0.14),inset_0_1px_1px_rgba(255,255,255,0.98),inset_0_-12px_22px_rgba(17,16,14,0.055)] backdrop-blur-2xl"
            >
              <UiIcon
                name={stat === "+15 Proyectos" ? "folder" : "map-pin"}
                className="h-5 w-5 shrink-0 text-[#ff2b2b] [color:#ff2b2b] [&_*]:stroke-[#ff2b2b]"
                strokeWidth={2}
                style={{
                  color: "#ff2b2b",
                  stroke: "#ff2b2b",
                }}
              />
              <p className="whitespace-nowrap text-[12px] font-semibold leading-4 text-ink/88">{stat}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {heroStats.services.map((stat) => (
            <div
              key={stat}
              className="primary-action-pill flex min-h-[44px] items-center justify-center gap-1.5 rounded-full border border-white/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(255,255,255,0.56))] px-2 py-2 text-center shadow-[0_14px_30px_rgba(17,16,14,0.12),inset_0_1px_1px_rgba(255,255,255,0.96),inset_0_-10px_20px_rgba(17,16,14,0.05)] backdrop-blur-2xl"
            >
              <UiIcon
                name={stat === "Webs" ? "globe" : stat === "SaaS" ? "layers" : "branding"}
                className="h-5 w-5 shrink-0 text-[#ff2b2b] [color:#ff2b2b] [&_*]:stroke-[#ff2b2b]"
                strokeWidth={2}
                style={{
                  color: "#ff2b2b",
                  stroke: "#ff2b2b",
                }}
              />
              <p className="whitespace-nowrap text-[12px] font-semibold leading-4 text-ink/86">{stat}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-5 flex gap-3">
        <motion.a
          whileHover={{ y: -2, scale: 1.015 }}
          whileTap={{ scale: 0.975 }}
          href={links.cal}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-red-200/60 bg-[linear-gradient(180deg,rgba(255,72,72,0.94),rgba(255,43,43,0.88))] px-4 text-sm font-semibold text-white shadow-[0_16px_38px_rgba(255,43,43,0.30),inset_0_1px_1px_rgba(255,255,255,0.55),inset_0_-12px_20px_rgba(130,0,0,0.18)] outline-none backdrop-blur-xl transition focus-visible:ring-2 focus-visible:ring-red-200/70"
        >
          <UiIcon name="calendar" className="h-5 w-5 text-white" strokeWidth={2} />
          Agendar llamada
        </motion.a>
        <motion.a
          whileHover={{ y: -2, scale: 1.015 }}
          whileTap={{ scale: 0.975 }}
          href={links.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-white/85 bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(255,255,255,0.56))] px-4 text-sm font-semibold text-ink shadow-[0_14px_32px_rgba(17,16,14,0.12),inset_0_1px_1px_rgba(255,255,255,0.96),inset_0_-10px_18px_rgba(17,16,14,0.05)] outline-none backdrop-blur-xl transition focus-visible:ring-2 focus-visible:ring-white/80"
        >
          <UiIcon name="message" className="h-5 w-5 text-whatsapp" strokeWidth={2} />
          WhatsApp
        </motion.a>
      </div>
    </motion.section>
  );
}

function FeaturedCards() {
  return (
    <section className="grid gap-4">
      {featured.map((item) => (
        <motion.article
          key={item.id}
          id={item.id}
          variants={fadeUp}
          whileHover={{ y: -3 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          className={`${item.id === "monexity" ? "monexity-card" : "liquid-card"} ${
            item.id === "matosdev-web" ? "relative overflow-hidden" : ""
          } scroll-mt-6 rounded-[28px] p-5 text-ink`}
        >
          {item.id === "matosdev-web" ? (
            <>
              <div className="pointer-events-none absolute -right-10 -top-8 h-36 w-36 rounded-full bg-brand-red/25 blur-3xl" />
              <div className="pointer-events-none absolute right-6 top-0 h-[2px] w-20 bg-brand-red/70" />
            </>
          ) : null}
          <div className="relative z-10 mb-5 flex items-center justify-between">
            <div>
              <p
                className={`text-[11px] font-medium uppercase tracking-[0.18em] ${
                  item.id === "monexity" ? "text-monexity-green" : "text-brand-red"
                }`}
              >
                / {item.eyebrow}
              </p>
              <h2 className="mt-1 text-2xl font-black tracking-normal text-ink">{item.title}</h2>
            </div>
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-[18px] ${
                item.id === "monexity"
                  ? "bg-transparent"
                  : item.id === "matosdev-web"
                    ? "border border-white/70 bg-white/45 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] backdrop-blur-xl"
                  : "bg-transparent"
              }`}
            >
              {item.id === "matosdev" || item.id === "matosdev-web" ? (
                <Image
                  src={item.logo}
                  alt={item.id === "matosdev-web" ? "MatosDev.xyz" : "MatosDev"}
                  width={48}
                  height={48}
                  className={`${item.id === "matosdev-web" ? "h-9 w-9" : "h-12 w-12"} object-contain`}
                />
              ) : item.id === "monexity" ? (
                <Image
                  src={item.logo}
                  alt="Monexity"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
              ) : (
                <UiIcon name={item.icon} className="h-6 w-6" />
              )}
            </div>
          </div>
          <p className="relative z-10 text-[15px] leading-6 text-ink/65">{item.text}</p>
          <motion.a
            href={item.href}
            target="_blank"
            rel={item.id === "matosdev-web" ? "noopener noreferrer" : "noreferrer"}
            whileTap={{ scale: 0.98 }}
            className={`relative z-10 mt-5 flex min-h-12 items-center justify-between rounded-[18px] border px-4 text-sm font-bold backdrop-blur-xl ${
              item.id === "monexity"
                ? "border-monexity-green/40 bg-[linear-gradient(135deg,rgba(0,230,118,0.88),rgba(0,174,239,0.76))] text-white shadow-[0_16px_38px_rgba(0,230,118,0.22),inset_0_1px_1px_rgba(255,255,255,0.5),inset_0_-12px_20px_rgba(0,80,90,0.14)]"
                : "border-red-200/60 bg-[linear-gradient(180deg,rgba(255,72,72,0.94),rgba(255,43,43,0.88))] text-white shadow-[0_16px_38px_rgba(255,43,43,0.30),inset_0_1px_1px_rgba(255,255,255,0.55),inset_0_-12px_20px_rgba(130,0,0,0.18)]"
            }`}
          >
            {item.button}
            <UiIcon name="chevron" className="h-4 w-4 text-white" />
          </motion.a>
        </motion.article>
      ))}
    </section>
  );
}

function Portfolio() {
  return (
    <motion.section id="proyectos" variants={fadeUp} className="scroll-mt-6">
      <SectionTitle eyebrow="Portfolio" title="Proyectos recientes" />
      <div className="grid gap-3">
        {projects.map((project) => (
          <motion.a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="liquid-card group relative overflow-hidden rounded-[24px] p-4 text-ink"
          >
            <div
              className="pointer-events-none absolute -left-8 top-2 z-0 h-28 w-28 rounded-full opacity-25 blur-3xl"
              style={{ background: "accentGradient" in project ? project.accentGradient : project.accentColor }}
            />
            <div className="relative z-10 flex items-center gap-4">
              <div className="liquid-inset flex h-16 w-16 shrink-0 items-center justify-center rounded-[20px] text-lg font-black text-ink">
                {project.logo ? (
                  <Image
                    src={project.logo}
                    alt={project.name}
                    width={52}
                    height={52}
                    className="max-h-12 max-w-12 object-contain"
                  />
                ) : (
                  <span className="px-1 text-center text-[9px] font-semibold leading-tight text-ink/80">
                    {project.name}
                  </span>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.18em] text-brand-red">
                  / PROYECTO
                </p>
                <h3 className="text-lg font-black tracking-normal text-ink">{project.name}</h3>
                <p className="mt-1 text-sm leading-5 text-ink/65">{project.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-brand-red">
                  Ver proyecto
                  <UiIcon name="external" className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}

function Agenda() {
  return (
    <motion.section
      id="agenda"
      variants={fadeUp}
      className="liquid-card relative overflow-hidden scroll-mt-6 rounded-[28px] p-5 text-ink"
    >
      <div className="pointer-events-none absolute -right-10 -top-8 h-36 w-36 rounded-full bg-brand-red/25 blur-3xl" />
      <div className="pointer-events-none absolute right-6 top-0 h-[2px] w-20 bg-brand-red/70" />
      <div className="relative z-10 flex items-center gap-3">
        <div className="liquid-inset flex h-12 w-12 items-center justify-center rounded-[18px] text-brand-red shadow-[0_12px_26px_rgba(255,43,43,0.12)]">
          <UiIcon name="calendar" className="h-6 w-6" />
        </div>
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-brand-red">/ AGENDA</p>
          <h2 className="text-xl font-black tracking-normal text-ink">Hablemos de tu proyecto</h2>
        </div>
      </div>
      <p className="relative z-10 mt-4 text-[15px] leading-6 text-ink/70">
        Reserva una reunión corta para revisar idea, alcance y siguiente paso.
      </p>
      <div className="relative z-10 mt-4 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/48 px-3 py-2 text-xs font-semibold text-ink/75 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] backdrop-blur-xl">
        <UiIcon name="calendar" className="h-3.5 w-3.5 text-brand-red" />
        30 min · Cal.com
      </div>
      <div className="relative z-10 mt-5 flex">
        <motion.a
          whileHover={{ y: -2, scale: 1.015 }}
          whileTap={{ scale: 0.975 }}
          href={links.cal}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-red-200/60 bg-[linear-gradient(180deg,rgba(255,72,72,0.94),rgba(255,43,43,0.88))] px-4 text-sm font-semibold text-white shadow-[0_16px_38px_rgba(255,43,43,0.30),inset_0_1px_1px_rgba(255,255,255,0.55),inset_0_-12px_20px_rgba(130,0,0,0.18)] outline-none backdrop-blur-xl transition focus-visible:ring-2 focus-visible:ring-red-200/70"
        >
          <UiIcon name="calendar" className="h-5 w-5 text-white" strokeWidth={2} />
          Agendar reunión
        </motion.a>
      </div>
    </motion.section>
  );
}

function Socials() {
  return (
    <motion.section id="contacto" variants={fadeUp} className="scroll-mt-6">
      <SectionTitle eyebrow="Contacto" title="Redes y canales" />
      <div className="grid grid-cols-2 gap-3">
        {socials.map((social) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.97 }}
            className="group relative flex min-h-[88px] overflow-hidden rounded-[28px] border border-white/75 bg-[linear-gradient(145deg,rgba(255,255,255,0.72),rgba(255,255,255,0.42))] px-3 py-3 shadow-[0_18px_42px_rgba(17,16,14,0.11),inset_0_1px_1px_rgba(255,255,255,0.98),inset_0_-14px_24px_rgba(255,255,255,0.18)] backdrop-blur-2xl"
          >
            <div
              className="pointer-events-none absolute -left-7 -top-8 h-28 w-28 rounded-full opacity-30 blur-3xl"
              style={{ background: social.accent }}
            />
            <div className="pointer-events-none absolute inset-x-2 top-0 h-1/2 rounded-t-[28px] bg-white/24 blur-xl" />
            <div className="relative z-10 flex w-full items-center gap-2.5">
              <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border border-white/75 bg-[linear-gradient(145deg,rgba(255,255,255,0.82),rgba(255,255,255,0.46))] shadow-[0_10px_24px_rgba(17,16,14,0.14),inset_0_1px_1px_rgba(255,255,255,0.98),inset_0_-10px_18px_rgba(17,16,14,0.04)] backdrop-blur-xl">
                <SocialBrandIcon label={social.label} />
              </div>
              <span className="min-w-0 flex-1 text-[13px] font-extrabold leading-4 text-ink sm:text-sm">
                {social.label}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}

function SocialBrandIcon({ label }: { label: string }) {
  if (label.startsWith("Instagram")) {
    const gradientId = label.includes("personal") ? "instagram-personal-gradient" : "instagram-matosdev-gradient";

    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[44px] w-[44px] fill-none">
        <defs>
          <linearGradient id={gradientId} x1="4" y1="20" x2="20" y2="4" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f97316" />
            <stop offset="0.5" stopColor="#ec4899" />
            <stop offset="1" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <rect x="5" y="5" width="14" height="14" rx="4.2" stroke={`url(#${gradientId})`} strokeWidth="2.3" />
        <circle cx="12" cy="12" r="3.35" stroke={`url(#${gradientId})`} strokeWidth="2.3" />
        <circle cx="16.35" cy="7.65" r="1.15" fill="#ec4899" />
      </svg>
    );
  }

  if (label === "X") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[44px] w-[44px] text-ink">
        <path
          d="M5.1 4.5h4.2l3.5 5 4.3-5h2.2l-5.5 6.4 6.1 8.6h-4.2l-3.9-5.5-4.8 5.5H4.8l6-6.9L5.1 4.5Zm3.1 1.7 8.3 11.6h1.2L9.4 6.2H8.2Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (label === "TikTok") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[44px] w-[44px]">
        <path
          d="M14.2 3.6c.35 2.5 1.85 4.1 4.3 4.25v2.75a7.2 7.2 0 0 1-4.15-1.3v5.6a5.25 5.25 0 1 1-5.25-5.25c.35 0 .7.03 1.03.1v2.95a2.28 2.28 0 1 0 1.38 2.1V3.6h2.7Z"
          fill="#22d3ee"
          opacity="0.82"
          transform="translate(-.75 .45)"
        />
        <path
          d="M14.2 3.6c.35 2.5 1.85 4.1 4.3 4.25v2.75a7.2 7.2 0 0 1-4.15-1.3v5.6a5.25 5.25 0 1 1-5.25-5.25c.35 0 .7.03 1.03.1v2.95a2.28 2.28 0 1 0 1.38 2.1V3.6h2.7Z"
          fill="#ff2b2b"
          opacity="0.82"
          transform="translate(.75 -.25)"
        />
        <path
          d="M14.2 3.6c.35 2.5 1.85 4.1 4.3 4.25v2.75a7.2 7.2 0 0 1-4.15-1.3v5.6a5.25 5.25 0 1 1-5.25-5.25c.35 0 .7.03 1.03.1v2.95a2.28 2.28 0 1 0 1.38 2.1V3.6h2.7Z"
          fill="#101010"
        />
      </svg>
    );
  }

  if (label === "GitHub") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[44px] w-[44px] text-ink">
        <path
          d="M12 3.15a8.85 8.85 0 0 0-2.8 17.25c.45.08.62-.2.62-.43v-1.55c-2.52.55-3.05-1.08-3.05-1.08-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.37 2.1.98 2.62.75.08-.58.31-.98.57-1.2-2.02-.23-4.14-1.01-4.14-4.48 0-.99.35-1.8.93-2.43-.09-.23-.4-1.15.09-2.4 0 0 .76-.24 2.48.93A8.55 8.55 0 0 1 12 7.26c.76 0 1.52.1 2.24.3 1.72-1.17 2.47-.93 2.47-.93.5 1.25.19 2.17.1 2.4.58.63.92 1.44.92 2.43 0 3.48-2.13 4.25-4.15 4.48.32.28.61.83.61 1.67v2.36c0 .23.16.51.62.43A8.85 8.85 0 0 0 12 3.15Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[44px] w-[44px] text-[#ff0000]">
      <rect x="3.5" y="6.3" width="17" height="11.4" rx="3.3" fill="currentColor" />
      <path d="M10.4 9.35v5.3l4.8-2.65-4.8-2.65Z" fill="white" />
    </svg>
  );
}

function BottomNav() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section))
      .sort((a, b) => a.offsetTop - b.offsetTop);

    const updateActiveSection = () => {
      const viewportAnchor = window.innerHeight * 0.38;
      const pageBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 12;

      if (pageBottom) {
        setActiveSection("contacto");
        return;
      }

      const current = sections.reduce((active, section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= viewportAnchor ? section.id : active;
      }, sections[0]?.id ?? "inicio");

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
    setActiveSection(id);
  };

  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 mx-auto w-full max-w-[430px] px-4 pb-[calc(14px+env(safe-area-inset-bottom))]">
      <div className="nav-card grid grid-cols-5 gap-1 rounded-[26px] p-2">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const isMonexity = item.id === "monexity";

          return (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => handleNavClick(event, item.id)}
              className={`relative flex min-h-[56px] flex-col items-center justify-center gap-1 rounded-[22px] text-[10px] font-bold transition ${
                isMonexity && isActive
                  ? "border border-monexity-green/30 bg-[linear-gradient(135deg,rgb(var(--color-monexity-green)/0.24),rgb(var(--color-monexity-blue)/0.18))] text-ink shadow-[0_8px_24px_rgb(var(--color-monexity-green)_/_0.18),inset_0_1px_0_rgb(255_255_255_/_0.72)]"
                  : isActive
                    ? "bg-white/70 text-brand-red shadow-[inset_0_1px_0_rgb(255_255_255_/_0.72)]"
                    : isMonexity
                      ? "text-ink/70 hover:bg-white/42 hover:text-ink"
                      : "text-ink/60 hover:bg-white/38 hover:text-ink"
              }`}
            >
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full ${
                  isMonexity
                    ? "bg-[linear-gradient(135deg,rgb(var(--color-monexity-green)/0.22),rgb(var(--color-monexity-blue)/0.18))] text-[11px] font-black text-ink ring-1 ring-monexity-green/20"
                    : ""
                }`}
              >
                {isMonexity && item.logo ? (
                  <Image
                    src={item.logo}
                    alt="Monexity"
                    width={22}
                    height={22}
                    className="h-5 w-5 object-contain"
                  />
                ) : (
                  <UiIcon name={item.icon} className="h-5 w-5" strokeWidth={2.2} />
                )}
              </span>
              <span>{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
