export default function Home() {
  return (
    <main className="page-shell relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-10 text-ink">
      <div className="absolute inset-0 bg-paper/55" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 to-white/65" aria-hidden="true" />

      <section className="liquid-card relative z-10 w-full max-w-[390px] rounded-[32px] px-6 py-8 text-center">
        <div className="relative z-10 flex flex-col items-center">
          <img
            src="/assets/logos/projects/matosdev/matosdev-logo.png"
            alt="MatosDev"
            className="mb-6 h-14 w-auto object-contain"
          />

          <p className="mb-4 inline-flex rounded-full border border-brand-red/18 bg-white/60 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-brand-red shadow-[inset_0_1px_0_rgb(255_255_255/0.85)] backdrop-blur-xl">
            / WEB EN CONSTRUCCIÓN
          </p>

          <h1 className="text-balance text-[34px] font-black leading-[0.98] text-ink">
            MatosDev está en construcción
          </h1>

          <p className="mt-5 text-pretty text-[15px] font-medium leading-6 text-ink/70">
            Estamos preparando una nueva experiencia digital. Mientras tanto, puedes ver nuestros enlaces, proyectos y canales oficiales.
          </p>

          <a
            href="https://links.matosdev.xyz"
            className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/70 bg-brand-red px-6 text-center text-[15px] font-extrabold text-white shadow-[0_16px_36px_rgb(var(--color-brand-red)/0.34),inset_0_1px_0_rgb(255_255_255/0.45)] transition duration-200 hover:bg-brand-red/95 active:scale-[0.98]"
          >
            Volver a links.matosdev.xyz
          </a>

          <p className="mt-7 text-[11px] font-black uppercase tracking-[0.22em] text-ink/45">
            MatosDev · EST. 2026
          </p>
        </div>
      </section>
    </main>
  );
}
