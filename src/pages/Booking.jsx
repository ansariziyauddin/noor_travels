import { useMemo, useState } from 'react';
import {
  BadgeCheck,
  BedDouble,
  CarFront,
  Check,
  ChevronRight,
  Hotel,
  Landmark,
  MessageCircle,
  MoonStar,
  Plane,
  Search,
  ShieldCheck,
  Sparkle,
  Ticket,
  UserRoundCheck,
} from 'lucide-react';
import { packages, services } from '../data';
import { useBooking } from '../context/BookingContext';
import PageHeader from '../components/common/PageHeader';
import Reveal from '../components/common/Reveal';

const serviceIcons = {
  flights: Plane,
  umrah: MoonStar,
  hajj: Landmark,
  hotels: Hotel,
  visa: BadgeCheck,
  transport: CarFront,
};

const bookingSteps = ['Route & Search', 'Select Offer', 'Traveller Info', 'Review Terms', 'Confirm Booking'];

export default function Booking() {
  const { activeService, setActiveService, searchData } = useBooking();
  const [step, setStep] = useState(0);

  const svc = services.find((s) => s.id === activeService) || services[0];
  const Icon = serviceIcons[svc.id] || Sparkle;

  const options = useMemo(() => {
    return packages
      .filter(
        (p) =>
          p[0].toLowerCase().includes(svc.id === 'flights' ? 'flight' : svc.id === 'hotels' ? 'hotel' : svc.id) ||
          (svc.id === 'transport' && p[0] === 'Transport')
      )
      .slice(0, 3);
  }, [svc.id]);

  const next = () => setStep((s) => Math.min(s + 1, bookingSteps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div>
      <PageHeader
        kicker="Online Engine"
        title="Guided Booking & Reservation Desk."
        description="Select an offer, enter passenger details, review official fare and visa rules, and submit your request for advisor verification."
        breadcrumbs={[{ label: 'Booking' }]}
      />

      <section className="py-16 bg-[#f7f4ec]">
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            {/* Left Service Switcher */}
            <Reveal>
              <aside className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
                <h3 className="mb-4 font-serif text-xl font-bold text-ink">Choose Service</h3>
                <div className="grid gap-2">
                  {services.map((s) => {
                    const SIcon = serviceIcons[s.id] || Sparkle;
                    const isActive = activeService === s.id;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => {
                          setActiveService(s.id);
                          setStep(0);
                        }}
                        className={`flex items-center gap-3 rounded-xl border p-3.5 text-left font-extrabold text-sm transition ${
                          isActive
                            ? 'border-deep bg-deep text-white shadow-sm'
                            : 'border-black/10 bg-paper text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <SIcon size={18} />
                        <span>{s.label}</span>
                      </button>
                    );
                  })}
                </div>
              </aside>
            </Reveal>

            {/* Main Stepper Card */}
            <Reveal>
              <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-glow">
                {/* Steps Header */}
                <div className="mb-8 flex flex-wrap gap-2 border-b border-slate-100 pb-5">
                  {bookingSteps.map((name, i) => (
                    <span
                      key={name}
                      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-black transition ${
                        i <= step ? 'bg-deep text-white shadow-sm' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <span className="grid h-4 w-4 place-items-center rounded-full bg-white/20 text-[10px]">
                        {i + 1}
                      </span>
                      {name}
                    </span>
                  ))}
                </div>

                <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
                  {/* Step Content */}
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-xl bg-mint px-3.5 py-1.5 text-xs font-black text-teal">
                      <Icon size={16} />
                      {svc.label}
                    </span>

                    {step === 0 && <StepSearch svc={svc} search={searchData} onContinue={next} />}
                    {step === 1 && <StepSelect options={options} svc={svc} />}
                    {step === 2 && <StepTravellers svc={svc} />}
                    {step === 3 && <StepReview svc={svc} />}
                    {step === 4 && <StepConfirm svc={svc} />}
                  </div>

                  {/* Booking Summary Sidebar */}
                  <aside className="rounded-2xl bg-deep p-6 text-white flex flex-col justify-between h-max">
                    <div>
                      <h4 className="font-serif text-xl font-bold text-white mb-4">Summary</h4>
                      <div className="grid gap-3.5 text-xs sm:text-sm text-white/80">
                        <div>
                          <span className="text-white/50 block text-[11px] font-bold uppercase tracking-wider">
                            Service
                          </span>
                          <b className="text-white font-extrabold">{svc.label}</b>
                        </div>
                        <div>
                          <span className="text-white/50 block text-[11px] font-bold uppercase tracking-wider">
                            Route / Selection
                          </span>
                          <b className="text-white font-extrabold">
                            {searchData?.from && searchData?.to
                              ? `${searchData.from} → ${searchData.to}`
                              : 'Mumbai (BOM) → Jeddah (JED)'}
                          </b>
                        </div>
                        <div>
                          <span className="text-white/50 block text-[11px] font-bold uppercase tracking-wider">
                            Departure Date
                          </span>
                          <b className="text-white font-extrabold">{searchData?.date || '2026-11-18'}</b>
                        </div>
                        <div>
                          <span className="text-white/50 block text-[11px] font-bold uppercase tracking-wider">
                            Travellers
                          </span>
                          <b className="text-white font-extrabold">{searchData?.travellers || '2 adults, 1 child'}</b>
                        </div>
                        <div>
                          <span className="text-white/50 block text-[11px] font-bold uppercase tracking-wider">
                            Current Stage
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-sun font-black text-xs">
                            {step === 4 ? 'Ready for Callback' : `Step ${step + 1} of 5`}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-5 border-t border-white/10 flex gap-2">
                      <button
                        type="button"
                        onClick={back}
                        disabled={step === 0}
                        className="btn btn-light flex-1 py-2.5 rounded-xl text-xs font-black disabled:opacity-40"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={next}
                        className="btn btn-gold flex-1 py-2.5 rounded-xl text-xs font-black"
                      >
                        {step === 4 ? 'Completed' : 'Continue'}
                      </button>
                    </div>
                  </aside>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

function StepSearch({ svc, search, onContinue }) {
  return (
    <div className="mt-5">
      <h3 className="font-serif text-3xl font-bold text-ink">Search & Itinerary Review</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">
        Reviewing options for{' '}
        <strong className="text-deep font-extrabold">
          {search?.from || 'Mumbai'}
        </strong>{' '}
        to{' '}
        <strong className="text-deep font-extrabold">
          {search?.to || 'Jeddah'}
        </strong>
        . Your selected parameters are captured and locked for advisor review.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-black/10 bg-paper p-4">
          <Search className="text-teal" size={20} />
          <b className="mt-2 block text-sm font-extrabold text-ink">Live Search</b>
          <span className="mt-1 block text-xs leading-5 text-slate-500">
            Route, departure date and travellers captured.
          </span>
        </div>
        <div className="rounded-xl border border-black/10 bg-paper p-4">
          <ShieldCheck className="text-teal" size={20} />
          <b className="mt-2 block text-sm font-extrabold text-ink">Rule Check</b>
          <span className="mt-1 block text-xs leading-5 text-slate-500">
            Refund, baggage and document rules verified early.
          </span>
        </div>
        <div className="rounded-xl border border-black/10 bg-paper p-4">
          <MessageCircle className="text-teal" size={20} />
          <b className="mt-2 block text-sm font-extrabold text-ink">Advisor Assigned</b>
          <span className="mt-1 block text-xs leading-5 text-slate-500">
            Direct continuation with dedicated advisor on WhatsApp.
          </span>
        </div>
      </div>
    </div>
  );
}

function StepSelect({ options, svc }) {
  const fallback = [[svc.title, `${svc.title} Smart Choice`, 'Flexible Dates', 'Advisor Verified', 'Best Rate', svc.text]];
  const list = options.length ? options : fallback;

  return (
    <div className="mt-5">
      <h3 className="font-serif text-3xl font-bold text-ink">Select Preferred Option</h3>
      <p className="mt-1 text-sm text-slate-500">Choose one of the curated options below to proceed.</p>
      <div className="mt-5 grid gap-3">
        {list.map(([cat, title, duration, tier, price, body], idx) => (
          <label
            key={title}
            className="flex cursor-pointer items-start gap-3.5 rounded-xl border border-black/10 bg-paper p-4.5 transition hover:border-deep/50 hover:bg-[#fffdf8]"
          >
            <input
              name="bookingOption"
              type="radio"
              defaultChecked={idx === 0}
              className="mt-1 text-deep focus:ring-deep"
            />
            <div>
              <div className="flex items-center gap-2">
                <b className="text-base text-ink">{title}</b>
                <span className="rounded bg-mint px-2 py-0.5 text-[11px] font-black text-teal">
                  {tier}
                </span>
              </div>
              <span className="mt-1 block text-xs leading-5 text-slate-500">
                {duration} &bull; <strong className="text-deep font-bold">{price}</strong> - {body}
              </span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

function StepTravellers({ svc }) {
  return (
    <div className="mt-5">
      <h3 className="font-serif text-3xl font-bold text-ink">Traveller Details</h3>
      <p className="mt-1 text-sm text-slate-500">
        Names must match government-issued passport or national ID exactly.
      </p>

      <div className="mt-5 grid gap-3.5 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-bold text-slate-600 mb-1 block">Lead Traveller Full Name</span>
          <input
            className="w-full rounded-xl border border-black/10 bg-paper p-3 text-sm font-semibold outline-none focus:border-deep focus:ring-1 focus:ring-deep"
            placeholder="e.g. Mohammed Farooq"
          />
        </label>
        <label className="block">
          <span className="text-xs font-bold text-slate-600 mb-1 block">Mobile / WhatsApp Number</span>
          <input
            className="w-full rounded-xl border border-black/10 bg-paper p-3 text-sm font-semibold outline-none focus:border-deep focus:ring-1 focus:ring-deep"
            placeholder="+91 98765 43210"
          />
        </label>
        <label className="block">
          <span className="text-xs font-bold text-slate-600 mb-1 block">
            {svc.id === 'visa' || svc.id === 'umrah' || svc.id === 'hajj' ? 'Passport Number' : 'Email Address'}
          </span>
          <input
            className="w-full rounded-xl border border-black/10 bg-paper p-3 text-sm font-semibold outline-none focus:border-deep focus:ring-1 focus:ring-deep"
            placeholder={svc.id === 'visa' || svc.id === 'umrah' || svc.id === 'hajj' ? 'e.g. Z1234567' : 'name@email.com'}
          />
        </label>
        <label className="block">
          <span className="text-xs font-bold text-slate-600 mb-1 block">Nationality</span>
          <select className="w-full rounded-xl border border-black/10 bg-paper p-3 text-sm font-semibold outline-none focus:border-deep focus:ring-1 focus:ring-deep">
            <option>Indian Citizen</option>
            <option>NRI Traveller</option>
            <option>GCC Citizen</option>
            <option>International Traveller</option>
          </select>
        </label>
      </div>
    </div>
  );
}

function StepReview({ svc }) {
  return (
    <div className="mt-5">
      <h3 className="font-serif text-3xl font-bold text-ink">Review Terms & Policies</h3>
      <p className="mt-1 text-sm text-slate-500">
        Please acknowledge the following rules before finalizing your request.
      </p>

      <div className="mt-5 grid gap-3">
        {svc.terms.map((term) => (
          <label
            key={term}
            className="flex items-start gap-3 rounded-xl border border-black/10 bg-paper p-4 cursor-pointer hover:bg-[#fbf9f4]"
          >
            <input type="checkbox" defaultChecked className="mt-1 text-deep focus:ring-deep rounded" />
            <span className="text-xs leading-relaxed text-slate-700 font-semibold">{term}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

function StepConfirm({ svc }) {
  return (
    <div className="mt-5 rounded-2xl border border-teal/20 bg-mint/50 p-6 sm:p-8 text-center">
      <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-teal text-white shadow-md">
        <UserRoundCheck size={26} />
      </span>
      <h3 className="mt-4 font-serif text-3xl font-bold text-ink">Booking Request Prepared</h3>
      <p className="mt-2 max-w-lg mx-auto text-sm leading-relaxed text-slate-600">
        Your {svc.label} request has been recorded. Our senior pilgrimage desk is preparing your
        formal invoice, flight confirmation, and payment schedule. An advisor will contact you
        shortly via WhatsApp or phone.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary text-xs py-2.5 px-5 rounded-xl font-black inline-flex items-center gap-2"
        >
          <MessageCircle size={16} /> Chat on WhatsApp Now
        </a>
      </div>
    </div>
  );
}
