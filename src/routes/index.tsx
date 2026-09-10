import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Instagram, MapPin } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useState } from "react";

import logoAsset from "@/assets/dd-logo.png.asset.json";
import donutHero from "@/assets/donut-hero.jpg";
import lagosNutty from "@/assets/lagos-nutty.jpg";
import miloMadness from "@/assets/milo-madness.jpg";
import northernSpice from "@/assets/northern-spice.jpg";
import zoboRush from "@/assets/zobo-rush.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Donut District | Premium Donuts in Benin City" },
      { name: "description", content: "Discover Donut District's premium Nigerian-inspired donuts, baked fresh in Benin City. Join the waitlist for launch day." },
      { property: "og:title", content: "Donut District | Benin City's Donut Counter" },
      { property: "og:description", content: "Street-level donuts, glazed with intent. Join the launch waitlist." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products = [
  { name: "Lagos Nutty Traffic", label: "Signature", price: "₦1,800", description: "Caramel glaze, roasted groundnuts, sea salt.", image: lagosNutty },
  { name: "Milo Madness", label: "Bold", price: "₦1,600", description: "Choc malt cream fill, dark choc glaze, Milo dust.", image: miloMadness },
  { name: "Zobo Sweet Rush", label: "Fresh", price: "₦1,700", description: "Hibiscus zobo glaze, dried berries, coconut flakes.", image: zoboRush },
  { name: "Northern Spice Street", label: "Spiced", price: "₦1,700", description: "Nutmeg and ginger dough with a rich coffee glaze.", image: northernSpice },
];

function Index() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, 90]);
  const [submitted, setSubmitted] = useState(false);

  const submitWaitlist = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-cream font-sans text-ink selection:bg-brand/25">
      <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-5 pt-6 sm:px-8">
        <a href="#top" className="flex items-center" aria-label="Donut District home">
          <motion.img
            src={logoAsset.url}
            alt="Donut District logo"
            width={140}
            height={48}
            className="h-12 w-auto"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.25 }}
          />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink/70 md:flex" aria-label="Main navigation">
          <a href="#collection" className="nav-link">Collection</a>
          <a href="#waitlist" className="nav-link">Waitlist</a>
          <a href="#contact" className="nav-link">Visit</a>
        </nav>
        <Button asChild variant="accent" size="compact"><a href="#waitlist">Join waitlist</a></Button>
      </header>

      <main id="top">
        <section className="mx-auto grid min-h-[calc(100vh-64px)] max-w-6xl items-center gap-12 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pt-8">
          <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.11 } } }}>
            <motion.p variants={rise} className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase text-accent">
              <span className="size-1.5 rounded-full bg-accent" /> Benin City · Opening soon
            </motion.p>
            <motion.h1 variants={rise} className="font-display text-5xl font-semibold leading-[0.98] sm:text-6xl lg:text-7xl">
              Street-level donuts,<br /><span className="text-brand">glazed with intent.</span>
            </motion.h1>
            <motion.p variants={rise} className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
              A small-batch pastry counter bringing premium local flavours to Benin City—baked fresh, full of character, no shortcuts.
            </motion.p>
            <motion.form variants={rise} onSubmit={submitWaitlist} className="mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <input required type="email" aria-label="Email address" placeholder="you@email.com" className="min-w-0 flex-1 rounded-full border border-ink/15 bg-surface px-5 py-3.5 text-sm outline-none transition-colors placeholder:text-ink/40 focus:border-accent" />
              <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}><Button type="submit" size="large">Get on the list <ArrowRight size={16} /></Button></motion.div>
            </motion.form>
            <motion.p variants={rise} aria-live="polite" className="mt-3 text-xs text-ink/50">{submitted ? "You're on the list. We’ll see you at launch." : "Free to join. Your first launch-day donut is on us."}</motion.p>
          </motion.div>

          <motion.div style={{ y: heroY }} initial={{ opacity: 0, scale: 0.94, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="aspect-[9/10] overflow-hidden rounded-2xl bg-sand">
              <motion.img whileHover={{ scale: 1.035 }} transition={{ duration: 0.7 }} src={donutHero} alt="A selection of glossy artisan donuts on a dark wooden table" width={1080} height={1200} className="h-full w-full object-cover" />
            </div>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-5 left-3 rounded-xl border border-ink/10 bg-cream px-5 py-4 shadow-soft sm:-left-4">
              <p className="text-xs font-semibold uppercase text-brand">This week</p>
              <p className="mt-1 font-display text-lg font-semibold">Lagos Nutty Traffic</p>
            </motion.div>
          </motion.div>
        </section>

        <section id="collection" className="bg-ink py-20 text-cream">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} className="mb-9 flex items-end justify-between gap-4">
              <div><p className="mb-3 text-xs font-semibold uppercase text-brand">Naija Street Collection</p><h2 className="font-display text-4xl font-semibold sm:text-5xl">The first four</h2></div>
              <span className="hidden text-xs uppercase text-cream/40 sm:block">Launch menu</span>
            </motion.div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product, index) => (
                <motion.article key={product.name} initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }} whileHover={{ y: -8 }} className="group border-t border-cream/15 pt-4">
                  <div className="mb-5 aspect-square overflow-hidden rounded-xl bg-cream/10">
                    <img src={product.image} alt={`${product.name} donut`} width={700} height={700} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <p className="text-[11px] font-semibold uppercase text-brand">{product.label}</p>
                  <h3 className="mt-1 min-h-14 font-display text-2xl font-semibold leading-tight">{product.name}</h3>
                  <p className="mt-1.5 min-h-16 text-sm leading-relaxed text-cream/55">{product.description}</p>
                  <p className="mt-3 text-sm font-semibold">{product.price}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="waitlist" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.65 }} className="grid items-center gap-8 rounded-3xl bg-accent px-7 py-12 text-cream sm:px-14 lg:grid-cols-2">
            <div><h2 className="font-display text-4xl font-semibold leading-tight">Be first on the counter.</h2><p className="mt-4 max-w-sm leading-relaxed text-cream/75">Pick your flavours now, get served first on launch day, and enjoy a free donut.</p></div>
            <div className="w-full max-w-md lg:justify-self-end">
              <form onSubmit={submitWaitlist} className="flex flex-col gap-3 sm:flex-row">
                <input required type="email" aria-label="Waitlist email address" placeholder="Your email" className="min-w-0 flex-1 rounded-full border border-cream/25 bg-cream/10 px-5 py-3.5 text-sm outline-none placeholder:text-cream/45 focus:border-cream/60" />
                <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}><Button type="submit" variant="light" size="large">Reserve</Button></motion.div>
              </form>
              <p aria-live="polite" className="mt-3 text-xs text-cream/55">{submitted ? "Spot reserved. Thank you!" : "We’ll only send the good stuff."}</p>
            </div>
          </motion.div>
        </section>
      </main>

      <footer id="contact" className="border-t border-ink/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 px-5 py-10 sm:px-8 md:flex-row md:items-center">
          <div><p className="font-display text-xl font-semibold">Donut District</p><p className="mt-2 flex items-center gap-2 text-sm text-ink/55"><MapPin size={15} /> Benin City, Edo State, Nigeria</p></div>
          <div className="flex flex-wrap items-center gap-5 text-sm font-medium">
            <a href="https://instagram.com/donutdistricthq" target="_blank" rel="noreferrer" className="nav-link inline-flex items-center gap-1.5"><Instagram size={15} /> Instagram</a>
            <a href="https://tiktok.com/@donutdistricthq" target="_blank" rel="noreferrer" className="nav-link">TikTok</a>
            <a href="tel:+2347014298844" className="nav-link">0701 429 8844</a>
            <a href="mailto:donutdistrictfood@gmail.com" className="nav-link">Email</a>
          </div>
        </div>
        <p className="pb-8 text-center text-xs text-ink/35">© 2026 Donut District · Baked in Benin City</p>
      </footer>
    </div>
  );
}

const rise = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
