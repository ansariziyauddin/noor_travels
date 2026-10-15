import { Briefcase, Bus, Car, CarFront, Check, Clock, Luggage, MapPin, ShieldCheck, Users } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import PageHeader from '../components/common/PageHeader';
import SearchPanel from '../components/search/SearchPanel';
import SectionHead from '../components/common/SectionHead';
import Reveal from '../components/common/Reveal';

const fleet = [
  {
    name: 'Sedan (Camry / Sonata)',
    category: 'Comfort Sedan',
    passengers: '3 Passengers',
    luggage: '3 Large Bags',
    idealFor: 'Couples or small families with moderate luggage',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=82',
    routes: [
      { route: 'Jeddah Airport to Makkah Hotel', price: 'INR 6,500' },
      { route: 'Makkah to Madinah Intercity', price: 'INR 11,500' },
    ],
  },
  {
    name: 'VIP SUV (GMC Yukon / Ford Expedition)',
    category: 'Luxury Executive',
    passengers: '6 Passengers',
    luggage: '6 Large Bags',
    idealFor: 'Families needing extra legroom, leather seating, and smooth highway travel',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=82',
    routes: [
      { route: 'Jeddah Airport to Makkah Hotel', price: 'INR 8,500' },
      { route: 'Makkah to Madinah VIP', price: 'INR 14,800' },
    ],
  },
  {
    name: 'Luxury Family Van (Toyota HiAce / Staria)',
    category: 'Spacious Group Van',
    passengers: '10 Passengers',
    luggage: '10 Large Bags',
    idealFor: 'Larger family groups travelling together with plenty of luggage capacity',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=82',
    routes: [
      { route: 'Jeddah Airport to Makkah Hotel', price: 'INR 11,500' },
      { route: 'Makkah to Madinah Group', price: 'INR 18,000' },
    ],
  },
  {
    name: 'Pilgrim Coach (Mercedes Travego)',
    category: 'Full Group Coach',
    passengers: '49 Passengers',
    luggage: '50+ Bags Storage',
    idealFor: 'Umrah & Hajj groups, scholars, and community delegations',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=82',
    routes: [
      { route: 'Jeddah Airport to Makkah Hotel', price: 'INR 24,000' },
      { route: 'Makkah to Madinah Group Bus', price: 'INR 38,000' },
    ],
  },
];

export default function Transport() {
  const { startBooking } = useBooking();

  return (
    <div>
      <PageHeader
        kicker="Ground Logistics"
        title="Airport pickups, intercity VIP cabs & group coaches."
        description="Reliable, fixed-price transfers between Jeddah Airport, Makkah, Madinah, and Taif with live flight tracking and courteous drivers."
        breadcrumbs={[{ label: 'Transport' }]}
      />

      <SearchPanel initialTab="transport" className="-mt-10" />

      {/* Fleet Showcase */}
      <section className="py-20">
        <div className="wrap">
          <SectionHead
            kicker="Our Fleet"
            title="Clean, air-conditioned vehicles for every group size."
            lede="Every vehicle includes free 60-minute flight delay grace period and luggage assistance."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {fleet.map((v) => (
              <Reveal key={v.name}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div>
                    <div
                      className="h-44 w-full rounded-xl bg-cover bg-center mb-4 shadow-inner"
                      style={{ backgroundImage: `url(${v.image})` }}
                    />
                    <span className="text-xs font-black uppercase text-teal bg-mint/50 px-2.5 py-1 rounded-lg">
                      {v.category}
                    </span>
                    <h3 className="mt-2 text-xl font-extrabold text-ink">{v.name}</h3>

                    <div className="my-3 flex items-center gap-3 text-xs font-bold text-slate-500">
                      <span className="flex items-center gap-1">
                        <Users size={14} className="text-teal" /> {v.passengers}
                      </span>
                      <span className="flex items-center gap-1">
                        <Luggage size={14} className="text-teal" /> {v.luggage}
                      </span>
                    </div>

                    <p className="text-xs leading-relaxed text-slate-500 mb-4">{v.idealFor}</p>

                    <div className="border-t border-slate-100 pt-3">
                      <p className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-1.5">
                        Sample Route Fares:
                      </p>
                      {v.routes.map((r) => (
                        <div key={r.route} className="flex justify-between items-center text-xs py-1">
                          <span className="text-slate-600 truncate pr-2">{r.route.split(' to ')[0]} → {r.route.split(' to ')[1]}</span>
                          <b className="text-deep font-bold">{r.price}</b>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      startBooking('transport', {
                        from: 'Jeddah Airport (Terminal 1)',
                        to: 'Makkah Hotel (Near Haram)',
                        date: '2026-11-18',
                        travellers: '2 adults',
                      })
                    }
                    className="btn btn-primary w-full mt-5 py-2.5 rounded-xl text-xs font-black"
                  >
                    Book Transfer
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20 border-t border-black/5">
        <div className="wrap">
          <SectionHead
            kicker="Service Guarantee"
            title="Why pilgrims choose Noor ground transport."
            lede="Peace of mind from the moment your flight touches down in the Kingdom."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [Clock, 'Flight Tracking', 'We monitor your flight arrival time in real-time. If your flight is delayed, your driver adjusts automatically.'],
              [ShieldCheck, 'Fixed Price Guarantee', 'No hidden fuel surcharges, parking fees, or midnight overtime rates. The price you book is the final price.'],
              [MapPin, 'Door-to-Door Service', 'Meet-and-greet right at the arrival terminal with a personalized name card and direct drop-off at your hotel lobby.'],
              [Car, 'Well-Maintained Fleet', 'Modern, fully insured vehicles equipped with climate control, charging ports, and ample luggage boot space.'],
            ].map(([Icon, title, desc]) => (
              <Reveal key={title}>
                <div className="rounded-2xl border border-black/10 bg-[#fbf9f4] p-6 shadow-sm">
                  <Icon className="text-teal mb-3" size={24} />
                  <h3 className="font-serif text-lg font-bold text-ink mb-1">{title}</h3>
                  <p className="text-xs leading-relaxed text-slate-600">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
