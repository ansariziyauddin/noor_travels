import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck, BedDouble, CarFront, Hotel, Landmark, MoonStar, Plane, ShieldCheck, Sparkles, Ticket } from 'lucide-react';
import { services } from '../data';
import { useBooking } from '../context/BookingContext';
import PageHeader from '../components/common/PageHeader';
import SectionHead from '../components/common/SectionHead';
import Reveal from '../components/common/Reveal';

const serviceIcons = {
  flights: Plane,
  umrah: MoonStar,
  hajj: Landmark,
  hotels: Hotel,
  visa: BadgeCheck,
  transport: CarFront,
};

export default function Services() {
  const { startBooking } = useBooking();
  const [selected, setSelected] = useState('flights');

  const activeService = services.find((s) => s.id === selected) || services[0];
  const ActiveIcon = serviceIcons[activeService.id] || Sparkles;

  return (
    <div>
      <PageHeader
        kicker="What We Do"
        title="Comprehensive Travel & Pilgrimage Services."
        description="From flight ticketing and luxury near-Haram hotels to complete guided Umrah and Hajj groups, our desks are staffed by dedicated travel advisors."
        breadcrumbs={[{ label: 'Services' }]}
      />

      <section className="py-20">
        <div className="wrap">
          <SectionHead
            kicker="Explore Services"
            title="Click any service to view instructions, steps & policies."
            lede="Select a service below to view its complete operational breakdown and booking terms."
          />

          {/* Service Cards Grid */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = serviceIcons[s.id] || Sparkles;
              const isSelected = selected === s.id;
              return (
                <Reveal key={s.id}>
                  <button
                    type="button"
                    onClick={() => setSelected(s.id)}
                    className={`group relative flex min-h-[280px] w-full overflow-hidden rounded-2xl p-6 text-left text-white shadow-md transition duration-300 ${
                      isSelected
                        ? 'ring-4 ring-sun shadow-2xl scale-[1.02]'
                        : 'hover:-translate-y-1 hover:shadow-xl'
                    }`}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${s.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#041d1f]/95 via-[#041d1f]/60 to-transparent" />
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
                        <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-black text-sun">
                          {isSelected ? 'Currently Viewing' : 'Click to View Instructions'}
                        </span>
                      </div>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>

          {/* Selected Service Detailed View */}
          <Reveal>
            <div className="mt-14 grid gap-8 rounded-3xl border border-black/10 bg-paper p-6 sm:p-8 shadow-glow lg:grid-cols-[1fr_380px]">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-xl bg-mint px-4 py-2 text-sm font-black text-teal">
                    <ActiveIcon size={18} />
                    {activeService.label}
                  </span>
                  <Link
                    to={`/${activeService.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-black text-deep hover:underline"
                  >
                    Go to dedicated {activeService.title} page <ArrowRight size={13} />
                  </Link>
                </div>

                <h3 className="mt-5 font-serif text-3xl sm:text-4xl text-ink">
                  {activeService.title} Workflow & Steps
                </h3>
                <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">
                  {activeService.text} Our advisors guide you through each phase so you never have to
                  worry about unexpected fare surges, document rejections, or transfer delays.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {activeService.steps.map((step, i) => (
                    <div key={step} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
                      <b className="text-2xl font-serif text-deep block">0{i + 1}</b>
                      <p className="mt-2 font-bold leading-relaxed text-slate-800 text-sm">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terms Sidebar */}
              <aside className="rounded-2xl bg-deep p-6 sm:p-8 text-white flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-2xl mb-4 text-white">Instructions & Terms</h4>
                  <ul className="grid gap-3.5 text-sm leading-relaxed text-white/80">
                    {activeService.terms.map((term) => (
                      <li key={term} className="flex gap-2.5 items-start">
                        <ShieldCheck className="mt-1 shrink-0 text-sun" size={18} />
                        <span>{term}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <button
                    onClick={() => startBooking(activeService.id)}
                    className="btn btn-gold w-full rounded-xl py-3 text-sm font-black flex items-center justify-center gap-2"
                  >
                    <Ticket size={18} />
                    Book {activeService.title} Now
                  </button>
                </div>
              </aside>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
