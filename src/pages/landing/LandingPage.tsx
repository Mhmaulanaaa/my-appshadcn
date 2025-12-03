import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MainNavbar from "@/components/navbar/MainNavbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Star,
  Users,
  CheckCircle,
  Quote,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Mail,
  ShieldCheck,
  RadioTower,
  Cpu,
  Wifi,
  Globe,
  Info,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Send,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useNavigate } from "react-router-dom";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=1600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80&auto=format&fit=crop",
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">
      <MainNavbar />

      <HeroCarousel />

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FeaturesSection />
      </motion.section>

      <AboutSection />

      <PricingSection />

      <TestimonialSection />

      <FAQSection />

      <CTASection />

      <ContactSection />

      <ProfessionalFooter />
    </div>
  );
}

/* ---------------------------------------------------
   HERO CAROUSEL (with images + overlay)
   --------------------------------------------------- */
function HeroCarousel() {
  const slides = [
    {
      title: "Garuda Fiber Group — Internet Cepat & Stabil",
      subtitle:
        "Jaringan fiber optic berkecepatan tinggi untuk rumah, bisnis, dan kota pintar. Konektivitas yang andal untuk masa depan digital Indonesia.",
      cta: "Cek Paket",
      image: HERO_IMAGES[0],
    },
    {
      title: "Solusi Bisnis & Enterprise",
      subtitle:
        "Layanan dedicated fiber, SLA terbaik, dan dukungan 24/7 untuk operasional bisnis Anda tanpa hambatan.",
      cta: "Ke Dashboard",
      image: HERO_IMAGES[1],
    },
    {
      title: "Konektivitas untuk Komunitas dan Pemerintah",
      subtitle:
        "Proyek kota pintar, broadband publik, dan infrastruktur telekomunikasi yang mendorong transformasi digital.",
      cta: "Hubungi Tim Kami",
      image: HERO_IMAGES[2],
    },
  ];

  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[70vh] md:h-[91vh] overflow-hidden">
      {/* background images */}
      {slides.map((s, i) => (
        <motion.img
          key={i}
          src={s.image}
          alt={s.title}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{
            opacity: i === index ? 1 : 0,
            scale: i === index ? 1 : 1.05,
          }}
          transition={{ duration: 0.8 }}
          style={{ zIndex: i === index ? 0 : -1 }}
        />
      ))}

      {/* overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/25 to-black/10 dark:from-black/50 dark:to-black/60" />

      {/* content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-center text-white"
        >
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-4 drop-shadow-md">
            {slides[index].title}
          </h1>

          <p className="text-white/90 mb-6 text-lg sm:text-xl drop-shadow-sm">
            {slides[index].subtitle}
          </p>

          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="px-6"
              onClick={() => {
                // CTA behavior: navigate to dashboard for enterprise slide, contact for third, pricing for first
                if (index === 1) navigate("/dashboard");
                else if (index === 2) location.href = "/?page=contact";
                else location.href = "/?page=pricing";
              }}
            >
              {slides[index].cta}
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="px-6"
              onClick={() => (location.href = "/?page=about")}
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>

      {/* small pager */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-10 h-2 rounded-full transition-all ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------
   FEATURES
   --------------------------------------------------- */

function FeaturesSection() {
  const counters = [
    { label: "Pelanggan Aktif", value: 120 },
    { label: "Kota Tercover", value: 28 },
    { label: "Proyek Infrastruktur", value: 350 },
  ];

  const data = [
    {
      icon: <Star className="w-10 h-10 text-yellow-400" />,
      title: "High-speed Fiber",
      desc: "Kecepatan hingga 1Gbps dengan latency ultra rendah.",
      aos: "fade-up",
    },
    {
      icon: <Users className="w-10 h-10 text-blue-400" />,
      title: "Enterprise SLA",
      desc: "Dukungan 24/7, uptime tinggi & solusi dedicated.",
      aos: "fade-up",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-green-400" />,
      title: "Nationwide Coverage",
      desc: "Jaringan luas dari residensial hingga pemerintahan.",
      aos: "fade-up",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-purple-400" />,
      title: "Keamanan Tingkat Tinggi",
      desc: "Enkripsi E2E & monitoring real-time.",
      aos: "zoom-in",
    },
    {
      icon: <Wifi className="w-10 h-10 text-indigo-400" />,
      title: "Dedicated Connectivity",
      desc: "Jalur khusus untuk kinerja stabil.",
      aos: "zoom-in",
    },
    {
      icon: <Globe className="w-10 h-10 text-teal-400" />,
      title: "Smart City & IoT",
      desc: "Integrasi CCTV, sensor, dan pusat komando.",
      aos: "zoom-in",
    },
  ];

  // ------------------------------
  // COUNTER ANIMATION
  // ------------------------------
  const counterRefs = useRef([]);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !seen) {
          setSeen(true);
        }
      },
      { threshold: 0.4 }
    );

    if (counterRefs.current[0]) observer.observe(counterRefs.current[0]);

    return () => observer.disconnect();
  }, [seen]);

  const animatedValue = (target) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
      if (!seen) return;

      let start = 0;
      const end = target;
      const duration = 1500;
      const step = Math.ceil(end / (duration / 16));

      const counter = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setValue(start);
      }, 16);
    }, [seen]);

    return value;
  };

  return (
    <section className="px-6 py-24 bg-white dark:bg-neutral-900 relative overflow-hidden">
      {/* background blur effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* TITLE */}
        <div data-aos="fade-down">
          <h2 className="text-4xl font-extrabold text-center mb-4">
            Layanan Unggulan Kami
          </h2>
          <p className="text-center text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl mx-auto text-lg">
            Solusi konektivitas modern untuk performa terbaik dan masa depan
            digital Indonesia.
          </p>
        </div>

        {/* COUNTERS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20 text-center">
          {counters.map((c, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) counterRefs.current[i] = el;
              }}
              data-aos="slide-up"
              className="space-y-2"
            >
              <div className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">
                {animatedValue(c.value)}+
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 font-medium">
                {c.label}
              </p>
            </div>
          ))}
        </div>

        {/* FEATURE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((d, i) => (
            <Card
              key={i}
              data-aos={d.aos}
              className="p-6 backdrop-blur-sm bg-white/80 dark:bg-slate-800/60 border
              border-neutral-200 dark:border-slate-700 rounded-2xl shadow-md 
              hover:shadow-xl hover:-translate-y-1 hover:border-blue-400 
              dark:hover:border-blue-500 transition-all duration-300"
            >
              <CardHeader className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-white dark:bg-slate-700 shadow-sm border border-neutral-200 dark:border-slate-600 flex items-center justify-center">
                  {d.icon}
                </div>
                <CardTitle className="text-xl text-gray-50 font-bold">
                  {d.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="text-neutral-600 dark:text-neutral-300 text-center">
                {d.desc}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------
   ABOUT
   --------------------------------------------------- */

function AboutSection() {
  return (
    <section className="px-6 py-24 bg-neutral-50 dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">
        {/* LEFT CONTENT */}
        <div data-aos="fade-right">
          <h3 className="text-4xl font-extrabold mb-4 leading-tight">
            Tentang{" "}
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              Garuda Fiber Group
            </span>
          </h3>

          <p className="text-neutral-700 dark:text-neutral-300 mb-6 text-lg">
            Garuda Fiber Group adalah penyedia layanan fiber optic terkemuka
            dengan fokus pada keandalan jaringan, kecepatan tinggi, dan dukungan
            premium bagi pemerintah, perusahaan, serta komunitas di seluruh
            Indonesia.
          </p>

          {/* FEATURE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-neutral-200 dark:border-slate-700 flex items-center gap-3">
              <RadioTower className="w-8 h-8 text-blue-600" />
              <p className="font-semibold text-neutral-700 dark:text-neutral-200">
                Infrastruktur Fiber Enterprise
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-neutral-200 dark:border-slate-700 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-indigo-600" />
              <p className="font-semibold text-neutral-700 dark:text-neutral-200">
                Dukungan 24/7 & SLA Premium
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-neutral-200 dark:border-slate-700 flex items-center gap-3 sm:col-span-2">
              <Cpu className="w-8 h-8 text-purple-600" />
              <p className="font-semibold text-neutral-700 dark:text-neutral-200">
                Integrasi IoT & Smart City
              </p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4">
            <Button
              size="lg"
              onClick={() => (location.href = "/?page=contact")}
            >
              Hubungi Sales
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => (location.href = "/?page=about")}
            >
              Lebih Lanjut
            </Button>
          </div>
        </div>

        {/* IMAGE SIDE */}
        <div
          className="rounded-xl overflow-hidden shadow-lg relative group"
          data-aos="fade-left"
        >
          <img
            src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=1400&q=80&auto=format&fit=crop"
            alt="Garuda Fiber infrastructure"
            className="w-full h-80 object-cover rounded-xl transform group-hover:scale-105 transition-all duration-500"
          />

          {/* gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent rounded-xl" />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------
   PRICING
   --------------------------------------------------- */
function PricingSection() {
  const [selected, setSelected] = useState(1);

  const plans = [
    {
      title: "Residential",
      price: "Rp 199.000 / bulan",
      features: ["Up to 100 Mbps", "Unlimited data", "24/7 Support"],
      ribbon: "Best Value",
    },
    {
      title: "Business (Pro)",
      price: "Rp 749.000 / bulan",
      features: ["Up to 500 Mbps", "SLA & Static IP", "Priority Support"],
      ribbon: "Popular",
    },
    {
      title: "Enterprise",
      price: "Custom",
      features: ["Dedicated Fiber", "SLA 99.99%", "Account Manager"],
      special: true,
      ribbon: "Premium",
    },
  ];

  return (
    <section className="px-6 py-24 bg-linear-to-b from-white to-blue-50 dark:from-neutral-950 dark:to-slate-900 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 dark:bg-blue-700/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 dark:bg-purple-700/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4">Paket & Harga</h2>
        <p className="text-neutral-600 dark:text-neutral-300 mb-12">
          Pilih paket internet terbaik untuk kebutuhan Anda.
        </p>

        <TooltipProvider>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((p, i) => {
              const active = selected === i;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.12 }}
                  viewport={{ once: true }}
                >
                  <Card
                    onClick={() => !p.special && setSelected(i)}
                    className={`relative cursor-pointer rounded-2xl transition-all duration-500 backdrop-blur-xl
                      shadow-xl border overflow-hidden
                      ${
                        active && !p.special
                          ? "border-blue-600 scale-[1.06] shadow-blue-500/40 ring-2 ring-blue-500"
                          : "border-neutral-200 dark:border-slate-700 hover:scale-[1.03]"
                      }
                      ${
                        p.special
                          ? "border-purple-600 dark:border-purple-500 scale-[1.03]"
                          : ""
                      }
                      bg-white/80 dark:bg-neutral-900/60
                    `}
                  >
                    {/* Ribbon */}
                    {p.ribbon && (
                      <div className="absolute top-4 right-0 bg-linear-to-r from-blue-500 to-purple-600 text-white px-4 py-1 text-xs font-bold shadow rounded-l-lg">
                        ⭐ {p.ribbon}
                      </div>
                    )}

                    <CardHeader>
                      <CardTitle
                        className={`text-center text-xl font-bold transition ${
                          active ? "text-blue-600" : "dark:text-white"
                        }`}
                      >
                        {p.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <div
                        className={`text-3xl font-extrabold text-center mb-4 transition ${
                          active
                            ? "text-blue-600"
                            : "text-neutral-900 dark:text-white"
                        }`}
                      >
                        {p.price}
                      </div>

                      <ul className="mb-6 space-y-3 text-neutral-700 dark:text-neutral-300">
                        {p.features.map((f, idx) => (
                          <li
                            key={idx}
                            className="flex items-center justify-center gap-2"
                          >
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="w-4 h-4 text-blue-500 cursor-pointer" />
                              </TooltipTrigger>
                              <TooltipContent className="text-xs">
                                {f}
                              </TooltipContent>
                            </Tooltip>
                            {f}
                          </li>
                        ))}
                      </ul>

                      <div className="text-center">
                        {p.special ? (
                          <Button
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                            onClick={() => (location.href = "/?page=contact")}
                          >
                            Hubungi Sales
                          </Button>
                        ) : (
                          <Button
                            className={`w-full py-2 transition ${
                              active
                                ? "bg-blue-600 text-white hover:bg-blue-700"
                                : "bg-neutral-200 dark:bg-slate-800 text-black dark:text-white hover:bg-neutral-300 dark:hover:bg-slate-700"
                            }`}
                            onClick={() => setSelected(i)}
                          >
                            {active ? "Paket Dipilih " : "Pilih Paket"}
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
}

/* ---------------------------------------------------
   TESTIMONIALS
   --------------------------------------------------- */
function TestimonialSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const items = [
    {
      name: "PT Nusantara",
      text: "Koneksi stabil dan support cepat sangat membantu operasi kantor pusat kami.",
      avatar:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=200",
    },
    {
      name: "Kota Pintar Surya",
      text: "Jaringan fiber mendukung smart city dengan sangat baik dan sangat lancar. ",
      avatar:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200",
    },
    {
      name: "Rumah Sakit Sehat",
      text: "SLA enterprise sangat membantu operasional kritikal rumah sakit.",
      avatar:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200",
    },
    {
      name: "PT Inovasi Digital",
      text: "Internet cepat dan stabil meningkatkan produktivitas tim.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
    },
    {
      name: "CV Global Media",
      text: "Support responsif dan koneksi stabil sepanjang waktu di segala tempat.",
      avatar:
        "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=200",
    },
  ];

  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;
    const amount = 330; // geser 1 kartu
    sliderRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="px-6 py-20 bg-white dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Testimoni Pelanggan
        </h2>

        {/* Wrapper + Buttons */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white dark:bg-neutral-800 shadow-lg hover:scale-110 transition z-10"
          >
            <ChevronLeft />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white dark:bg-neutral-800 shadow-lg hover:scale-110 transition z-10"
          >
            <ChevronRight />
          </button>

          {/* Horizontal Scroll (3 visible) */}
          <div
            ref={sliderRef}
            className="
              flex gap-6 overflow-x-hidden px-10 no-scrollbar
              scrollbar-thin scrollbar-thumb-blue-300/30 scrollbar-track-transparent
            "
            style={{ scrollSnapType: "x mandatory" }}
          >
            {items.map((it, i) => (
              <div
                key={i}
                className="min-w-[300px] md:min-w-[350px] snap-start"
              >
                <Card
                  className="
                    p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-800 
                    border border-neutral-200 dark:border-neutral-700
                    transition-all duration-300 
                    hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl
                  "
                >
                  <CardContent className="flex flex-col items-center text-center">
                    <img
                      src={it.avatar}
                      className="w-16 h-16 rounded-full mb-4 ring-2 ring-blue-500/30 object-cover"
                    />

                    <Quote className="h-6 w-6 opacity-40 mb-3" />
                    <p className="text-neutral-700 dark:text-neutral-300 italic mb-4">
                      "{it.text}"
                    </p>

                    <div className="font-semibold text-blue-600 dark:text-blue-300">
                      — {it.name}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="/?page=contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Hubungi Sales →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------
   FAQ
   --------------------------------------------------- */
function FAQSection() {
  const faqs = [
    {
      q: "Apakah Garuda Fiber tersedia di seluruh Indonesia?",
      a: "Kami memiliki jaringan di banyak kota besar dan terus memperluas jangkauan. Hubungi sales untuk cek ketersediaan di wilayah Anda.",
    },
    {
      q: "Apakah tersedia paket dedicated untuk enterprise?",
      a: "Ya — kami menawarkan dedicated fiber dengan SLA khusus dan account manager untuk klien enterprise.",
    },
    {
      q: "Bagaimana proses instalasi untuk perumahan?",
      a: "Tim teknis kami akan melakukan survey lokasi, penjadwalan instalasi, dan aktivasi sesuai jadwal yang disepakati.",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="px-6 py-20 bg-white dark:bg-neutral-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">FAQ</h2>

        <div className="space-y-4">
          {faqs.map((item, i) => {
            const active = open === i;

            return (
              <motion.div
                key={i}
                className="
                  rounded-xl border bg-white/60 dark:bg-neutral-800/50 
                  backdrop-blur-md p-4 shadow-sm
                  hover:shadow-md transition cursor-pointer
                "
                onClick={() => setOpen(active ? null : i)}
              >
                {/* Header Row */}
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg">{item.q}</h3>

                  <motion.div
                    initial={false}
                    animate={{ rotate: active ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown className="w-5 h-5 text-neutral-500" />
                  </motion.div>
                </div>

                {/* Answer Section */}
                <AnimatePresence>
                  {active && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------
   CTA
   --------------------------------------------------- */
function CTASection() {
  return (
    <section className="relative px-6 py-20 bg-linear-to-br from-blue-500 to-purple-600 dark:from-blue-500   dark: to-purple-600 text-white overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl top-10 left-10" />
        <div className="absolute w-72 h-72 bg-purple-400/20 rounded-full blur-3xl bottom-10 right-10" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Animated Border Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl p-[1.5px] bg-gradient-to-r from-blue-500 to-purple-600"
        >
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 md:p-10 shadow-2xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Left Text */}
              <div className="max-w-xl">
                <h3 className="text-3xl font-extrabold flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-yellow-300" />
                  Siap tingkatkan konektivitas Anda?
                </h3>
                <p className="mt-3 text-white/80">
                  Tim Garuda Fiber siap bantu memilih paket terbaik dan solusi
                  jaringan yang sesuai kebutuhan bisnis maupun perumahan Anda.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <Button
                  className="bg-white text-blue-700 hover:bg-white/90 font-semibold flex items-center gap-2"
                  onClick={() => (location.href = "/?page=contact")}
                >
                  Hubungi Sales <ArrowRight size={18} />
                </Button>

                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/20"
                  onClick={() => (location.href = "/?page=dashboard")}
                >
                  Ke Dashboard
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------
   CONTACT FORM
   --------------------------------------------------- */
function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<null | "sending" | "ok" | "error">(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      await new Promise((r) => setTimeout(r, 900)); // Simulasi API
      setStatus("ok");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section className="px-6 py-24 bg-gradient-to-b from-white to-blue-50 dark:from-neutral-900 dark:to-slate-900">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold text-center mb-14"
        >
          Hubungi Tim Garuda Fiber
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-[2px] rounded-2xl bg-gradient-to-br from-blue-500/40 to-purple-500/40"
          >
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 h-full shadow-xl">
              <h3 className="text-xl font-semibold mb-4">
                Ada pertanyaan atau ingin konsultasi paket?
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 mb-6">
                Tim kami siap membantu Anda memilih layanan terbaik.
              </p>

              <div className="space-y-4 text-neutral-800 dark:text-neutral-200">
                <div className="flex items-start gap-3">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                  <div>
                    <p className="font-semibold">Email Sales</p>
                    <p>sales@garudafiber.id</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-indigo-600 dark:text-indigo-300" />
                  <div>
                    <p className="font-semibold">Support 24/7</p>
                    <p>+62 21 1234 5678</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/20"
          >
            <div className="mb-4">
              <Label>Nama</Label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Nama lengkap"
                className="mt-1"
              />
            </div>

            <div className="mb-4">
              <Label>Email</Label>
              <Input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="email@mu.co.id"
                className="mt-1"
              />
            </div>

            <div className="mb-4">
              <Label>Pesan</Label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Jelaskan kebutuhan Anda..."
                className="mt-1 w-full p-3 rounded-md bg-white dark:bg-slate-900 border border-neutral-300 dark:border-neutral-700"
                rows={5}
              />
            </div>

            <div className="flex items-center gap-3 mt-2">
              <Button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center gap-2"
              >
                <Send size={16} />
                {status === "sending" ? "Mengirim..." : "Kirim Pesan"}
              </Button>

              {status === "ok" && (
                <span className="text-green-500 text-sm">
                  ✓ Terkirim — kami akan menghubungi Anda.
                </span>
              )}
              {status === "error" && (
                <span className="text-red-500 text-sm">
                  ✗ Gagal mengirim. Coba lagi.
                </span>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------
   FOOTER
   --------------------------------------------------- */
function ProfessionalFooter() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-white">
            Garuda Fiber Group
          </h4>
          <p className="text-neutral-400 leading-relaxed">
            Solusi konektivitas modern untuk rumah, bisnis, dan pemerintahan —
            cepat, stabil, dan terpercaya di seluruh Indonesia.
          </p>

          <div className="mt-5 space-y-2 text-neutral-400">
            <div className="flex items-center gap-2">
              <Mail size={18} /> sales@garudafiber.id
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} /> +62 21 1234 5678
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} /> Jakarta, Indonesia
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <Facebook className="hover:text-white cursor-pointer transition" />
            <Instagram className="hover:text-white cursor-pointer transition" />
            <Twitter className="hover:text-white cursor-pointer transition" />
          </div>
        </div>

        {/* Product */}
        <div>
          <h5 className="font-semibold text-white mb-4 text-lg">Produk</h5>
          <ul className="space-y-3 text-neutral-400">
            <li className="hover:text-white cursor-pointer">
              Residential Fiber
            </li>
            <li className="hover:text-white cursor-pointer">Business Fiber</li>
            <li className="hover:text-white cursor-pointer">
              Dedicated Internet
            </li>
            <li className="hover:text-white cursor-pointer">
              Enterprise Solutions
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h5 className="font-semibold text-white mb-4 text-lg">Perusahaan</h5>
          <ul className="space-y-3 text-neutral-400">
            <li className="hover:text-white cursor-pointer">Tentang Kami</li>
            <li className="hover:text-white cursor-pointer">Karir</li>
            <li className="hover:text-white cursor-pointer">Press Release</li>
            <li className="hover:text-white cursor-pointer">Mitra</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h5 className="font-semibold text-white mb-4 text-lg">Legal</h5>
          <ul className="space-y-3 text-neutral-400">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-white cursor-pointer">Kontak Hukum</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 border-t border-neutral-800 pt-6 text-center text-neutral-500 text-sm">
        © {new Date().getFullYear()} Garuda Fiber Group — All rights reserved.
      </div>
    </footer>
  );
}
