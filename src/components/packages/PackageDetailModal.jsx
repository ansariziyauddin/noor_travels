import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  AlertCircle,
  BadgeCheck,
  Building,
  Bus,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  Compass,
  FileText,
  Hotel,
  MapPin,
  MessageCircle,
  MinusCircle,
  MoonStar,
  Phone,
  Plane,
  ShieldCheck,
  Sparkle,
  Sparkles,
  Star,
  Utensils,
  X,
} from 'lucide-react';
import { packageDetailsData } from '../../data/packageDetails';
import { useBooking } from '../../context/BookingContext';

export default function PackageDetailModal({ packageItem, onClose }) {
  const { startBooking } = useBooking();
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!packageItem) return null;

  // packageItem can be array [category, title, days, tier, price, body] or object
  const title = Array.isArray(packageItem) ? packageItem[1] : packageItem.title;
  const category = Array.isArray(packageItem) ? packageItem[0] : packageItem.category;
  const days = Array.isArray(packageItem) ? packageItem[2] : packageItem.duration;
  const tier = Array.isArray(packageItem) ? packageItem[3] : packageItem.tier;
  const price = Array.isArray(packageItem) ? packageItem[4] : packageItem.price;
  const body = Array.isArray(packageItem) ? packageItem[5] : packageItem.body;

  // Rich metadata from packageDetailsData or fallback
  const details = packageDetailsData[title] || {
    category,
    title,
    duration: days,
    tier,
    price,
    tagline: body || 'Comprehensive pilgrimage package with verified quality and advisor care.',
    hotelMakkah: 'Verified 4-Star hotel near Haram courtyard (approx 400m walk)',
    hotelMadinah: 'Central Markazia 4-Star hotel near Masjid Nabawi',
    airline: 'Saudia / Emirates / Flynas with 30kg baggage allowance',
    meals: 'Daily buffet breakfast & dinner included',
    transfers: 'AC luxury coach transfers between airport and holy cities',
    highlights: [
      'Official Saudi e-Visa with mandatory health insurance',
      'Round-trip confirmed flights from major departure cities',
      'Accompanied by qualified guide and on-ground coordinator',
      'Guided historical Ziyarat tours in both holy cities',
      '5 Litre Zamzam water can per pilgrim',
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival & Welcome', desc: 'Airport meet & assist with AC transfer to your hotel. Initial orientation.' },
      { day: 'Middle Days', title: 'Holy City Stay & Ziyarat', desc: 'Spiritual prayers at the Haram, guided historical landmark visits.' },
      { day: 'Final Day', title: 'Farewell & Return', desc: 'Final prayers, luggage assistance, and transfer to airport for your flight home.' },
    ],
    inclusions: [
      'Return airfare with airport taxes',
      'All hotel stays with daily breakfast',
      'Saudi visa processing with insurance',
      'Ground transfers in air-conditioned vehicles',
      'Official 5L Zamzam container',
    ],
    exclusions: ['Personal laundry & telephone charges', 'Individual excess baggage beyond allowance'],
    policy: 'Free cancellation up to 21 days before departure. 50% refund between 20 to 10 days before flight.',
  };

  const handleBookNow = () => {
    onClose();
    const tabKey = category.toLowerCase().includes('flight')
      ? 'flights'
      : category.toLowerCase().includes('hotel')
      ? 'hotels'
      : category.toLowerCase();
    startBooking(tabKey, { packageTitle: title, price: details.price, duration: details.duration });
  };

  const waMessage = encodeURIComponent(
    `Assalamu Alaikum! I would like to inquire and get a quote for the "${title}" (${details.price}, ${details.duration}). Please share dates and seat availability.`
  );

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] overflow-y-auto bg-black/80 backdrop-blur-md p-3 sm:p-5 md:p-6 flex justify-center items-start sm:items-center"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[88vh] sm:max-h-[85vh] flex flex-col rounded-3xl bg-white shadow-[0_30px_90px_rgba(0,0,0,0.5)] border border-slate-100 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative bg-gradient-to-r from-[#032420] via-[#063b35] to-[#0c5952] px-6 py-5 text-white shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="rounded-full bg-sun text-[#2e1d00] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider">
                  {details.category}
                </span>
                <span className="rounded-full bg-white/15 text-white px-2.5 py-0.5 text-[10px] font-extrabold backdrop-blur-sm border border-white/10">
                  {details.tier}
                </span>
                <span className="rounded-full bg-mint/20 text-[#6cebc0] px-2.5 py-0.5 text-[10px] font-bold">
                  {details.duration}
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {details.title}
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-white/80 line-clamp-1">
                {details.tagline}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/30 cursor-pointer shadow-md"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="mt-5 flex gap-1 overflow-x-auto border-t border-white/10 pt-3 scrollbar-none shrink-0">
            {[
              { id: 'overview', label: 'Highlights & Stays' },
              { id: 'itinerary', label: 'Day-by-Day Itinerary' },
              { id: 'inclusions', label: 'Inclusions & Exclusions' },
              { id: 'policy', label: 'Booking Terms' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap rounded-xl px-3.5 py-1.5 text-xs font-black transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-sun text-[#2e1d00] shadow-sm'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="flex-1 min-h-0 overflow-y-auto p-5 sm:p-6 space-y-5 bg-[#fafcfb] overscroll-contain">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              {/* Key Amenities Tiles */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-400 mb-1.5">
                    <Hotel size={15} className="text-teal" />
                    <span>Makkah Stay</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-ink leading-snug">
                    {details.hotelMakkah}
                  </p>
                </div>

                <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-400 mb-1.5">
                    <Building size={15} className="text-teal" />
                    <span>Madinah Stay</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-ink leading-snug">
                    {details.hotelMadinah}
                  </p>
                </div>

                <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-400 mb-1.5">
                    <Plane size={15} className="text-teal" />
                    <span>Airline & Baggage</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-ink leading-snug">
                    {details.airline}
                  </p>
                </div>

                <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-400 mb-1.5">
                    <Utensils size={15} className="text-teal" />
                    <span>Dining Plan</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-ink leading-snug">
                    {details.meals}
                  </p>
                </div>
              </div>

              {/* Package Key Highlights */}
              <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-xs">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Sparkles size={14} className="text-sun" />
                  Key Package Highlights
                </h4>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {details.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-mint text-teal mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Transfers */}
              {details.transfers && (
                <div className="rounded-xl border border-teal/10 bg-[#eef7f4] p-3.5 flex items-center gap-3">
                  <Bus size={20} className="text-teal shrink-0" />
                  <div className="text-xs">
                    <b className="text-deep block">Ground Transportation Included:</b>
                    <span className="text-slate-600 font-medium">{details.transfers}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: ITINERARY */}
          {activeTab === 'itinerary' && (
            <div className="space-y-3 animate-in fade-in duration-150">
              <div className="flex items-center justify-between mb-1">
                <p className="text-xs font-bold text-slate-500">
                  Comprehensive sequence of your spiritual journey
                </p>
                <span className="text-[11px] font-black text-teal bg-mint px-2 py-0.5 rounded-full">
                  {details.itinerary.length} Milestones
                </span>
              </div>
              <div className="relative border-l-2 border-teal/20 ml-3 space-y-4 py-2">
                {details.itinerary.map((step, idx) => (
                  <div key={idx} className="relative pl-6">
                    <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-white bg-teal shadow-xs" />
                    <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-xs">
                      <span className="inline-block rounded-lg bg-sun/20 text-[#855700] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider mb-1">
                        {step.day}
                      </span>
                      <h4 className="text-sm font-extrabold text-ink">
                        {step.title}
                      </h4>
                      <p className="mt-1 text-xs text-slate-600 leading-relaxed font-medium">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: INCLUSIONS & EXCLUSIONS */}
          {activeTab === 'inclusions' && (
            <div className="grid gap-4 sm:grid-cols-2 animate-in fade-in duration-150">
              <div className="rounded-2xl border border-emerald-100 bg-[#f4fcf7] p-5 shadow-xs">
                <div className="flex items-center gap-2 mb-3 text-emerald-800">
                  <CheckCircle2 size={18} className="text-emerald-600" />
                  <b className="text-xs font-black uppercase tracking-wider">What&apos;s Included</b>
                </div>
                <ul className="space-y-2.5">
                  {details.inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs font-semibold text-emerald-950">
                      <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-xs">
                <div className="flex items-center gap-2 mb-3 text-slate-700">
                  <MinusCircle size={18} className="text-slate-400" />
                  <b className="text-xs font-black uppercase tracking-wider">What&apos;s Excluded</b>
                </div>
                <ul className="space-y-2.5">
                  {details.exclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 4: POLICY */}
          {activeTab === 'policy' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-xs">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
                  <AlertCircle size={15} className="text-sun" />
                  Cancellation & Refund Rules
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
                  {details.policy}
                </p>
              </div>

              <div className="rounded-2xl border border-teal/15 bg-[#f0f8f5] p-5">
                <h4 className="text-xs font-black uppercase tracking-wider text-deep mb-2 flex items-center gap-2">
                  <ShieldCheck size={16} className="text-teal" />
                  Noor Tours Pilgrim Protection Guarantee
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  All hotel bookings and flight PNRs are verified against official airline portals and the Saudi Ministry of Hajj & Umrah platform before dispatch. In case of flight delays or visa regulation shifts, our ground operations in Jeddah and Madinah handle room adjustments seamlessly.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Sticky Footer Action Bar */}
        <div className="border-t border-slate-100 bg-white px-5 py-3.5 flex flex-wrap items-center justify-between gap-3 shadow-md shrink-0">
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
              All-inclusive Fare
            </span>
            <div className="flex items-baseline gap-1.5">
              <b className="text-xl sm:text-2xl font-black text-deep">{details.price}</b>
              <span className="text-[11px] font-semibold text-slate-500">/ person</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={`https://wa.me/919876543210?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-black/10 bg-[#f8faf8] px-3.5 py-2.5 text-xs font-extrabold text-[#117a42] hover:bg-[#eef8f2] transition"
            >
              <MessageCircle size={15} />
              <span>WhatsApp Details</span>
            </a>

            <button
              onClick={handleBookNow}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#06332f] to-[#0f766e] px-5 py-2.5 text-xs font-black text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-xl hover:ring-2 hover:ring-sun/40"
            >
              <Sparkle size={15} className="text-sun" />
              <span>Book Package</span>
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
