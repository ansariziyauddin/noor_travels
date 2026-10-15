import { Briefcase, CalendarCheck, Clock, Luggage, Plane, RefreshCw, ShieldCheck, Sparkle, Ticket } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import PageHeader from '../components/common/PageHeader';
import SearchPanel from '../components/search/SearchPanel';
import SectionHead from '../components/common/SectionHead';
import Reveal from '../components/common/Reveal';

const flightFares = [
  { from: 'Mumbai (BOM)', to: 'Jeddah (JED)', airline: 'Saudia', duration: '5h 10m', type: 'Direct', price: 'INR 42,800', baggage: '2x 23kg', class: 'Economy Flex' },
  { from: 'Delhi (DEL)', to: 'Madinah (MED)', airline: 'Air India', duration: '5h 45m', type: 'Direct', price: 'INR 47,600', baggage: '30kg', class: 'Standard' },
  { from: 'Hyderabad (HYD)', to: 'Jeddah (JED)', airline: 'Flynas', duration: '5h 30m', type: 'Direct', price: 'INR 39,900', baggage: '20kg + 7kg', class: 'Economy Saver' },
  { from: 'Bengaluru (BLR)', to: 'Jeddah (JED)', airline: 'Emirates', duration: '7h 25m', type: '1-Stop (DXB)', price: 'INR 52,400', baggage: '30kg', class: 'Premium Flex' },
  { from: 'Lucknow (LKO)', to: 'Madinah (MED)', airline: 'Saudia', duration: '5h 50m', type: 'Direct', price: 'INR 45,200', baggage: '2x 23kg', class: 'Economy Flex' },
  { from: 'Kozhikode (CCJ)', to: 'Jeddah (JED)', airline: 'Air India Express', duration: '5h 15m', type: 'Direct', price: 'INR 38,500', baggage: '30kg', class: 'Economy Saver' },
];

export default function Flights() {
  const { startBooking } = useBooking();

  return (
    <div>
      <PageHeader
        kicker="Flight Ticketing Desk"
        title="Direct & convenient flights to Jeddah and Madinah."
        description="Search, hold and book pilgrimage and international flights with transparent baggage rules, date-change policies, and dedicated advisor support."
        breadcrumbs={[{ label: 'Flights' }]}
      />

      <SearchPanel initialTab="flights" className="-mt-10" />

      {/* Featured Routes */}
      <section className="py-20">
        <div className="wrap">
          <SectionHead
            kicker="Popular routes"
            title="Current fares for Saudi Arabia & Gulf departures."
            lede="Fares include government taxes and standard checked baggage allowances."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {flightFares.map((fare, i) => (
              <Reveal key={i}>
                <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-xs font-black uppercase text-deep bg-mint/50 px-3 py-1 rounded-lg">
                      {fare.airline}
                    </span>
                    <span className="text-xs font-bold text-slate-500">{fare.type}</span>
                  </div>
                  <div className="my-5">
                    <div className="flex items-center justify-between font-extrabold text-ink text-lg">
                      <span>{fare.from.split(' ')[0]}</span>
                      <Plane size={18} className="text-sun mx-2 shrink-0" />
                      <span>{fare.to.split(' ')[0]}</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-xs text-slate-500 font-semibold">
                      <span>{fare.duration}</span>
                      <span>{fare.baggage}</span>
                    </div>
                  </div>
                  <div className="flex items-end justify-between border-t border-slate-100 pt-4">
                    <div>
                      <span className="text-xs text-slate-400 block">from</span>
                      <b className="text-2xl text-deep font-extrabold">{fare.price}</b>
                    </div>
                    <button
                      onClick={() =>
                        startBooking('flights', {
                          from: fare.from,
                          to: fare.to,
                          date: '2026-11-18',
                          travellers: '2 adults',
                        })
                      }
                      className="btn btn-primary py-2.5 px-4 text-xs font-bold rounded-xl"
                    >
                      Book Flight
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rules & Policy Guidance */}
      <section className="bg-white py-20 border-t border-black/5">
        <div className="wrap">
          <SectionHead
            kicker="Ticketing rules"
            title="Clear booking policies before you pay."
            lede="We make fare rules clear upfront to ensure zero confusion during travel."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [Luggage, 'Zamzam Allowance', 'Most Saudi Arabia routes include 1 standard 5-litre Zamzam water container per pilgrim as authorized checked baggage.'],
              [RefreshCw, 'Date Change Support', 'Flight Flex fares allow one date modification up to 72 hours before departure with only fare difference applicable.'],
              [ShieldCheck, 'Passport Name Match', 'The name on the e-ticket must correspond letter-for-letter with your passport. Our desk reviews your passport copy before ticketing.'],
              [Clock, 'Direct Handoff', 'Tickets are held in PNR for up to 6 hours while our visa desk verifies Saudi entry visa compliance.'],
              [Briefcase, 'Excess Baggage Desk', 'Pre-purchase additional baggage kilos at discounted airline rates prior to airport check-in.'],
              [Ticket, 'Group Bookings', 'Special fares and flexible passenger name changes available for groups of 10 or more travellers.'],
            ].map(([Icon, title, desc]) => (
              <Reveal key={title}>
                <div className="rounded-2xl border border-black/10 bg-[#fbf9f4] p-6 shadow-sm">
                  <Icon className="text-teal mb-3" size={24} />
                  <h3 className="font-serif text-xl font-bold text-ink mb-2">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
