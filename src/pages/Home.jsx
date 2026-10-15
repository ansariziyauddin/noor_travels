import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  BedDouble,
  Bus,
  CarFront,
  FileCheck2,
  Hotel,
  Landmark,
  Layers3,
  MoonStar,
  Plane,
  PlaneTakeoff,
  Receipt,
  Route,
  Search,
  Send,
  ShieldCheck,
  SlidersHorizontal,
  Sparkle,
  Sparkles,
  Ticket,
} from 'lucide-react';
import { deals, hotels, packages, quotes, services, stats } from '../data';
import { useBooking } from '../context/BookingContext';
import SearchPanel from '../components/search/SearchPanel';
import SectionHead from '../components/common/SectionHead';
import Reveal from '../components/common/Reveal';
import PackageDetailModal from '../components/packages/PackageDetailModal';

const heroImages = [
  'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=2200&q=82',
  '/assets/images/ic_makka.png',
  '/assets/images/ic_madina.png',
];

const serviceIcons = {
  flights: Plane,
  umrah: MoonStar,
  hajj: Landmark,
  hotels: Hotel,
  visa: BadgeCheck,
  transport: CarFront,
};

export default function Home() {
  const { startBooking } = useBooking();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activePackage, setActivePackage] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <header id="home" className="relative grid min-h-screen items-end overflow-hidden bg-[#052f2a] pb-20 pt-36 text-white">
        {heroImages.map((img, idx) => (
          <div
            key={img}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              currentSlide === idx ? 'opacity-100 scale-105' : 'opacity-0 scale-100 pointer-events-none'
            }`}
            style={{
              backgroundImage: `url('${img}')`,
              transition: 'opacity 1200ms ease-in-out, transform 7000ms ease-out',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(243,181,68,.24),transparent_28%),linear-gradient(90deg,rgba(2,25,23,.95),rgba(2,25,23,.72)_48%,rgba(2,25,23,.22)),linear-gradient(0deg,rgba(2,25,23,.94),rgba(2,25,23,0)_36%)]" />
        <div
          className="absolute inset-x-0 top-0 h-40 opacity-25"
          style={{
            backgroundImage:
              'linear-gradient(135deg,rgba(255,255,255,.18) 12.5%,transparent 12.5%,transparent 50%,rgba(255,255,255,.18) 50%,rgba(255,255,255,.18) 62.5%,transparent 62.5%,transparent)',
            backgroundSize: '42px 42px',
          }}
        />
        <div className="wrap relative z-10 pb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-black uppercase tracking-wider backdrop-blur-md text-sun shadow-sm">
              <MoonStar size={15} />
              <span>Bismillah for every sacred journey &bull; Authorized Partner</span>
            </div>
          </Reveal>
          <Reveal>
            <h1 className="mt-5 max-w-4xl font-serif text-[clamp(40px,6.2vw,84px)] leading-[1.02] tracking-tight">
              Sacred travel, thoughtful tickets, peaceful planning.
            </h1>
          </Reveal>
          <Reveal>
            <p className="mt-4 max-w-2xl text-[clamp(16px,1.8vw,20px)] leading-relaxed text-white/85">
              Noor Tours & Travels brings Hajj, Umrah, flights, hotels, visa assistance and transport into
              one guided booking experience inspired by trust, service and Islamic hospitality.
            </p>
          </Reveal>
          
          <Reveal className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 text-xs font-extrabold text-white/90">
              <span className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 backdrop-blur-sm border border-white/15">
                <ShieldCheck size={14} className="text-sun" />
                Licensed Saudi Ministry Operator
              </span>
              <span className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 backdrop-blur-sm border border-white/15">
                <Ticket size={14} className="text-sun" />
                Direct Airline & Hotel Inventory
              </span>
            </div>

            {/* Subtle Slideshow Navigator */}
            <div className="flex items-center gap-2.5 rounded-full border border-white/20 bg-black/40 px-3.5 py-1.5 backdrop-blur-md">
              <span className="text-[10px] font-black uppercase tracking-widest text-white/70">Sacred Places</span>
              <div className="flex items-center gap-1.5">
                {heroImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    aria-label={`View sacred view ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentSlide === i ? 'w-6 bg-sun' : 'w-2 bg-white/40 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      {/* Interactive Search Panel - Clean Alignment with .wrap */}
      <SearchPanel className="-mt-14 relative z-30" />

      {/* Intro & Key Metrics */}
      <section className="py-20 bg-paper">
        <div className="wrap">
          <SectionHead
            kicker="Islamic hospitality"
            title="Built around trust, adab and clear travel decisions."
            lede="Explore dedicated pages for flights, hotels, pilgrimage packages, visa clearance and VIP transport, each with transparent pricing and advisor assistance."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(([num, label]) => (
              <Reveal key={label}>
                <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_12px_32px_rgba(7,58,60,.05)] transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-deep/30">
                  <b className="text-3xl sm:text-4xl font-extrabold text-deep tracking-tight">{num}</b>
                  <span className="mt-2 block text-sm font-bold text-slate-600">{label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid with Navigation to Detail Pages */}
      <section className="bg-white py-24">
        <div className="wrap">
          <SectionHead
            kicker="Core Services"
            title="Comprehensive pilgrimage & international travel solutions."
            lede="Every service has its own dedicated page with live search, terms preview, and direct advisor handoff."
            action={
              <Link to="/services" className="btn btn-primary inline-flex items-center gap-2">
                View all services <ArrowRight size={16} />
              </Link>
            }
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = serviceIcons[s.id] || Sparkles;
              return (
                <Reveal key={s.id}>
                  <Link
                    to={`/${s.id}`}
                    className="group relative flex min-h-[300px] w-full overflow-hidden rounded-2xl p-6 text-left text-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${s.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#041d1f]/95 via-[#041d1f]/50 to-transparent" />
                    <div className="relative z-10 flex h-full flex-col justify-between">
                      <span className="flex w-max items-center gap-2 rounded-xl border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-extrabold backdrop-blur-md">
                        <Icon size={16} />
                        {s.pill}
                      </span>
                      <div>
                        <h3 className="mb-2 text-2xl font-extrabold group-hover:text-sun transition">
                          {s.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-white/80 line-clamp-2">{s.text}</p>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-black text-sun">
                          Explore {s.title} <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Packages Catalog */}
      <section className="py-24 bg-[#f8faf8]">
        <div className="wrap">
          <SectionHead
            kicker="Featured packages"
            title="Curated Umrah, Hajj & international departures."
            lede="Compare inclusions, flight carriers, Haram distance, and payment schedules."
            action={
              <Link to="/packages" className="btn btn-primary inline-flex items-center gap-2">
                All 15+ Packages <ArrowRight size={16} />
              </Link>
            }
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {packages.slice(0, 3).map((pkg) => {
              const [category, title, days, tier, price, body] = pkg;
              return (
                <Reveal key={title}>
                  <article
                    onClick={() => setActivePackage(pkg)}
                    className="group flex flex-col justify-between rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-deep/30 cursor-pointer"
                  >
                    <div>
                      <div className="mb-4 flex items-center justify-between">
                        <span className="rounded-xl bg-sun px-3 py-1.5 text-xs font-black text-[#261905]">
                          {category}
                        </span>
                        <span className="text-xs font-black uppercase tracking-wider text-teal bg-mint/50 px-2.5 py-1 rounded-lg">
                          {tier}
                        </span>
                      </div>
                      <h3 className="text-2xl font-extrabold text-ink group-hover:text-deep transition-colors">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-500 line-clamp-2">
                        {body}
                      </p>
                      <div className="my-5 flex flex-wrap gap-2">
                        <span className="rounded-xl border border-teal/15 bg-mint/50 px-3 py-1.5 text-xs font-extrabold text-teal">
                          {days}
                        </span>
                        <span className="rounded-xl border border-black/10 bg-slate-50 px-3 py-1.5 text-xs font-extrabold text-slate-600">
                          Advisor Verified
                        </span>
                      </div>
                    </div>
                    <div className="flex items-end justify-between gap-3 border-t border-slate-100 pt-4">
                      <div>
                        <span className="text-[11px] font-bold text-slate-400 block">starting from</span>
                        <b className="block text-2xl text-deep font-black tracking-tight">{price}</b>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActivePackage(pkg);
                          }}
                          className="rounded-xl border border-black/10 bg-[#f8faf8] px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 transition"
                        >
                          Details
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            startBooking(
                              category.toLowerCase().includes('flight')
                                ? 'flights'
                                : category.toLowerCase().includes('hotel')
                                ? 'hotels'
                                : category.toLowerCase(),
                              { packageTitle: title, price }
                            );
                          }}
                          className="btn btn-primary text-xs py-2 px-3.5 rounded-xl font-black shadow-sm"
                        >
                          Book
                        </button>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guided Pilgrimage Timeline */}
      <section className="bg-deep py-24 text-white">
        <div className="wrap grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="kicker text-sun">Guided pilgrimage flow</p>
            </Reveal>
            <Reveal>
              <h2 className="max-w-3xl font-serif text-[clamp(34px,5vw,56px)] leading-[1.05]">
                A calmer way to plan sacred travel.
              </h2>
            </Reveal>
            <Reveal>
              <p className="mt-5 max-w-lg leading-7 text-white/75">
                Noor Tours turns Hajj and Umrah into a reassuring step-by-step experience with verified
                itinerary, documents, hotels, transfers and consultation always visible.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                [FileCheck2, 'Document checklist', 'Passport, photo, vaccination, visa form and package requirements.'],
                [Route, 'Ziyarat planning', 'Makkah and Madinah historical visits with air-conditioned coaches.'],
                [Receipt, 'Payment milestones', 'Deposit, visa stage, ticketing and final balance transparency.'],
                [MoonStar, 'Islamic scholar guide', 'Ihram instructions, dua guidance and spiritual support.'],
              ].map(([Icon, title, text]) => (
                <Reveal key={title}>
                  <div className="flex gap-3.5 rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                    <Icon className="text-sun shrink-0 mt-1" size={20} />
                    <div>
                      <b className="text-white text-sm">{title}</b>
                      <span className="mt-1 block text-xs leading-5 text-white/70">{text}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-8">
              <Link to="/umrah" className="btn btn-gold inline-flex items-center gap-2">
                <MoonStar size={18} /> View Umrah Itineraries
              </Link>
            </div>
          </div>

          <Reveal>
            <div className="max-w-[430px] rounded-3xl border border-white/15 bg-[#062f31] p-5 shadow-2xl lg:justify-self-end">
              <div className="rounded-2xl bg-paper p-5 text-ink">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-2xl">Signature Umrah</h3>
                  <span className="rounded-full bg-mint px-3 py-1 text-xs font-black text-teal">12 Days</span>
                </div>
                <div className="grid gap-3.5">
                  {[
                    [PlaneTakeoff, 'Day 1', 'Departure, meet-and-assist at Jeddah and hotel check-in.'],
                    [MoonStar, 'Day 2-6', 'Makkah stay, Umrah performance and Haram proximity.'],
                    [Bus, 'Day 7', 'Private VIP transfer to Madinah with luggage handling.'],
                    [Landmark, 'Day 8-11', 'Madinah stay, Masjid Nabawi and Ziyarat tours.'],
                  ].map(([Icon, day, text]) => (
                    <div key={day} className="grid grid-cols-[40px_1fr] gap-3 items-start">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-mint text-teal shrink-0">
                        <Icon size={18} />
                      </span>
                      <div>
                        <b className="text-sm text-ink">{day}</b>
                        <span className="mt-0.5 block text-xs leading-5 text-slate-500">{text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Guest Reviews Marquee */}
      <section className="overflow-hidden py-24 bg-white">
        <div className="wrap">
          <SectionHead
            kicker="Guest stories"
            title="Confidence is the real product."
            lede="Read experiences from pilgrims and families who travelled through Noor Tours."
          />
        </div>
        <div className="mt-8 flex w-max animate-marquee gap-5 hover:[animation-play-state:paused]">
          {[...quotes, ...quotes].map(([text, name, label], index) => (
            <article
              key={`${name}-${index}`}
              className="w-[min(380px,85vw)] rounded-2xl border border-black/10 bg-[#fbf9f4] p-6 shadow-sm"
            >
              <p className="mb-6 font-serif text-lg leading-relaxed text-slate-800">&quot;{text}&quot;</p>
              <div>
                <b className="block text-ink">{name}</b>
                <span className="text-xs font-bold text-slate-500">{label}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Package Detail Modal */}
      {activePackage && (
        <PackageDetailModal
          packageItem={activePackage}
          onClose={() => setActivePackage(null)}
        />
      )}
    </>
  );
}
