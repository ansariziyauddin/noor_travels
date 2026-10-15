import { useState } from 'react';
import {
  BadgeCheck,
  CalendarDays,
  CarFront,
  Hotel,
  Landmark,
  Layers3,
  MoonStar,
  Plane,
  Sparkle,
  Users,
} from 'lucide-react';
import { tabs } from '../../data';
import { useBooking } from '../../context/BookingContext';
import CustomSelect from '../common/CustomSelect';
import Reveal from '../common/Reveal';

const tabIcons = {
  flights: Plane,
  umrah: MoonStar,
  hajj: Landmark,
  hotels: Hotel,
  packages: Layers3,
  visa: BadgeCheck,
  transport: CarFront,
};

export default function SearchPanel({ initialTab = 'flights', className = '' }) {
  const { startBooking } = useBooking();
  const [active, setActive] = useState(initialTab);
  const [form, setForm] = useState(() => makeForm(initialTab));

  function makeForm(key) {
    const tab = tabs[key] || tabs.flights;
    return {
      fromLabel: tab.fromLabel,
      toLabel: tab.toLabel,
      from: tab.defaultFrom,
      to: tab.defaultTo,
      date: '2026-11-18',
      travellers: '2 adults, 1 child',
    };
  }

  function switchTab(key) {
    setActive(key);
    setForm(makeForm(key));
  }

  const currentTab = tabs[active] || tabs.flights;

  function handleSubmit(e) {
    e?.preventDefault();
    startBooking(active, form);
  }

  return (
    <section id="search" className={`relative z-20 ${className}`}>
      <div className="wrap">
        <Reveal>
          <div className="rounded-3xl border border-black/10 bg-white/95 p-4 sm:p-6 shadow-[0_24px_60px_rgba(4,29,31,0.14)] backdrop-blur-xl ring-1 ring-black/5">
            {/* Interactive Tabs Header */}
            <div className="mb-5 flex gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-100">
              {Object.keys(tabs).map((tab) => {
                const Icon = tabIcons[tab] || Plane;
                const isActive = active === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => switchTab(tab)}
                    className={`inline-flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 text-xs font-black capitalize transition-all duration-200 ${
                      isActive
                        ? 'bg-deep text-white shadow-md ring-2 ring-sun/30 -translate-y-0.5'
                        : 'bg-[#f7f9f8] text-slate-600 hover:bg-[#eef5f2] hover:text-deep border border-black/5'
                    }`}
                  >
                    <Icon size={15} className={isActive ? 'text-sun' : 'text-slate-400'} />
                    <span>{tab}</span>
                  </button>
                );
              })}
            </div>

            <form onSubmit={handleSubmit} className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-[1.25fr_1.35fr_1fr_1fr_auto]">
              <CustomSelect
                label={form.fromLabel}
                value={form.from}
                onChange={(from) => setForm({ ...form, from })}
                options={currentTab.fromOptions}
              />
              <CustomSelect
                label={form.toLabel}
                value={form.to}
                onChange={(to) => setForm({ ...form, to })}
                options={currentTab.toOptions}
              />

              <label className="min-h-[70px] flex flex-col justify-center rounded-2xl border border-black/10 bg-[#f8faf8] px-4 py-2.5 transition hover:border-black/25 hover:bg-white focus-within:border-deep focus-within:ring-2 focus-within:ring-deep/20 cursor-pointer">
                <span className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-slate-500">
                  <CalendarDays size={13} className="text-teal" />
                  Departure
                </span>
                <input
                  className="mt-0.5 w-full bg-transparent text-sm font-black text-ink outline-none cursor-pointer"
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                />
              </label>

              <CustomSelect
                label="Travellers"
                value={form.travellers}
                onChange={(travellers) => setForm({ ...form, travellers })}
                options={['1 adult', '2 adults', '2 adults, 1 child', 'Family of 5', 'Group of 10+']}
              />

              <button
                type="submit"
                className="h-[70px] inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#06332f] via-[#0b544e] to-[#0f766e] px-7 font-black text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl hover:ring-2 hover:ring-sun/40 sm:col-span-2 lg:col-span-1 text-base group cursor-pointer"
              >
                <Sparkle size={18} className="text-sun transition-transform group-hover:rotate-45" />
                <span>Find options</span>
              </button>
            </form>

            {/* Bottom Luxury Trust Guarantee Bar */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-3.5 text-xs font-bold text-slate-500">
              <div className="flex flex-wrap items-center gap-5">
                <span className="flex items-center gap-1.5 text-deep">
                  <span className="h-2 w-2 rounded-full bg-[#10b981]" />
                  Live Saudi Pilgrimage Inventory
                </span>
                <span className="text-slate-300 hidden sm:inline">&bull;</span>
                <span className="flex items-center gap-1.5 text-slate-600">
                  Direct Haram Facing 5★ Hotels Available
                </span>
              </div>
              <span className="text-[11px] font-semibold text-slate-400">
                Official MoHU & IATA Authorized Portal
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
