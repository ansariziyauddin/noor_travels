import { useState } from 'react';
import { BedDouble, Check, Coffee, Hotel, MapPin, ShieldCheck, SlidersHorizontal, Sparkle, Star, Wifi } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import PageHeader from '../components/common/PageHeader';
import SearchPanel from '../components/search/SearchPanel';
import SectionHead from '../components/common/SectionHead';
import Reveal from '../components/common/Reveal';

const hotelList = [
  {
    name: 'Makkah Grand View',
    city: 'Makkah',
    rating: '5-Star Luxury',
    distance: '450m from Haram (Ibrahim Khalil Road)',
    body: 'Spacious quad rooms, international breakfast buffet, 24/7 desk, and dedicated elderly mobility support.',
    price: 'INR 12,400',
    tags: ['Breakfast Included', 'Quad Room Available', '450m to Haram', 'Free WiFi'],
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=82',
  },
  {
    name: 'Madinah Courtyard Hotel',
    city: 'Madinah',
    rating: '4-Star Premium',
    distance: '300m from Masjid Nabawi (Markazia North)',
    body: 'Steps from Gate 25 (Ladies Entrance). Interconnecting family suites with quiet courtyard facing rooms.',
    price: 'INR 9,850',
    tags: ['300m to Gate 25', 'Family Rooms', 'Free Cancellation', 'Near Pharmacy'],
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=82',
  },
  {
    name: 'Abraj Al Bait Clock Tower Suites',
    city: 'Makkah',
    rating: '5-Star Landmark',
    distance: 'Direct Courtyard Access (0m)',
    body: 'Located directly above the Haram courtyard with private sound system broadcasting the live Azan & prayers.',
    price: 'INR 22,000',
    tags: ['Kaaba View Available', 'Direct Elevators', 'Full Board', 'VIP Valet'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=82',
  },
  {
    name: 'Dar Al Taqwa Madinah',
    city: 'Madinah',
    rating: '5-Star Heritage',
    distance: 'Front Row (Direct entry to Prophet’s Mosque)',
    body: 'Unobstructed view of the Green Dome and Rawdah Sharif. Unmatched elegance, dining, and peace of mind.',
    price: 'INR 18,500',
    tags: ['Green Dome View', 'Front Row Access', 'Gourmet Dining', 'Concierge Desk'],
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=82',
  },
  {
    name: 'Jabal Omar Luxury Hotel',
    city: 'Makkah',
    rating: '5-Star Modern',
    distance: 'Pedestrian Skybridge to Haram',
    body: 'Brand new luxury towers with pedestrian bridge directly to King Fahd expansion gate.',
    price: 'INR 14,200',
    tags: ['Pedestrian Bridge', 'Quad & Triple Rooms', 'Breakfast & Dinner', 'Express Checkout'],
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=82',
  },
  {
    name: 'Al Kiswah Towers Makkah',
    city: 'Makkah',
    rating: '3-Star Economy',
    distance: '850m with 24/7 Continuous AC Shuttle',
    body: 'Clean, value-first hotel with continuous 24/7 dedicated shuttle dropping pilgrims right at Ajyad tunnel.',
    price: 'INR 4,800',
    tags: ['24/7 AC Shuttle', 'Budget Friendly', 'Laundry Facilities', '24h Coffee Shop'],
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=82',
  },
];

export default function Hotels() {
  const { startBooking } = useBooking();
  const [selectedCity, setSelectedCity] = useState('All');
  const [nearHaramOnly, setNearHaramOnly] = useState(false);

  const filteredHotels = hotelList.filter((h) => {
    if (selectedCity !== 'All' && h.city !== selectedCity) return false;
    if (nearHaramOnly && !h.distance.toLowerCase().includes('0m') && !h.distance.toLowerCase().includes('300m')) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <PageHeader
        kicker="Hotel Booking Desk"
        title="Hotels in Makkah, Madinah & the Middle East."
        description="Compare stays by walking distance to Masjid Al Haram and Masjid Nabawi, room configurations, complimentary meals, and family accessibility."
        breadcrumbs={[{ label: 'Hotels' }]}
      />

      <SearchPanel initialTab="hotels" className="-mt-10" />

      {/* Main Hotel Finder */}
      <section className="py-20">
        <div className="wrap">
          <SectionHead
            kicker="Curated Stays"
            title="Book rooms close to the holy sanctuaries."
            lede="Every property is verified for walking safety, clean bathrooms, and transparent tax inclusion."
          />

          <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
            {/* Sidebar Filters */}
            <aside className="rounded-2xl border border-black/10 bg-[#f7f4ec] p-6 h-max lg:sticky lg:top-24 shadow-sm">
              <h3 className="font-serif text-2xl mb-4 text-ink flex items-center gap-2">
                <SlidersHorizontal size={20} className="text-teal" /> Filters
              </h3>

              <div className="mb-6">
                <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2.5">
                  Filter by City
                </p>
                <div className="grid gap-1.5">
                  {['All', 'Makkah', 'Madinah'].map((city) => (
                    <button
                      key={city}
                      onClick={() => setSelectedCity(city)}
                      className={`w-full text-left rounded-xl px-3.5 py-2 text-sm font-extrabold transition ${
                        selectedCity === city
                          ? 'bg-deep text-white shadow-sm'
                          : 'bg-white text-slate-700 hover:bg-white/80'
                      }`}
                    >
                      {city === 'All' ? 'All Holy Cities' : `${city} Stays`}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-200 pt-5">
                <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2.5">
                  Preferences
                </p>
                <label className="flex items-center gap-2.5 text-sm font-bold text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={nearHaramOnly}
                    onChange={(e) => setNearHaramOnly(e.target.checked)}
                    className="rounded text-deep focus:ring-deep"
                  />
                  Under 300m or Direct Access
                </label>
              </div>

              <div className="border-t border-slate-200 mt-6 pt-5">
                <button
                  onClick={() => startBooking('hotels', { from: 'Makkah', to: 'Near Haram', date: '2026-11-18' })}
                  className="btn btn-primary w-full py-3 rounded-xl text-sm font-black"
                >
                  Book with Advisor
                </button>
              </div>
            </aside>

            {/* Hotel Cards List */}
            <div className="grid gap-5">
              {filteredHotels.map((hotel) => (
                <Reveal key={hotel.name}>
                  <article className="grid items-center gap-5 overflow-hidden rounded-2xl border border-black/10 bg-white p-4 shadow-sm transition hover:shadow-xl md:grid-cols-[260px_1fr_auto]">
                    <div
                      className="h-56 md:h-full min-h-[190px] rounded-xl bg-cover bg-center shadow-inner"
                      style={{ backgroundImage: `url(${hotel.image})` }}
                    />
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xs font-black text-sun">{hotel.rating}</span>
                        <span className="text-slate-300">&bull;</span>
                        <span className="text-xs font-bold text-teal flex items-center gap-1">
                          <MapPin size={12} /> {hotel.city}
                        </span>
                      </div>
                      <h3 className="text-2xl font-extrabold text-ink">{hotel.name}</h3>
                      <p className="mt-1 text-xs font-bold text-deep">{hotel.distance}</p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-500">{hotel.body}</p>
                      <div className="mt-3.5 flex flex-wrap gap-2">
                        {hotel.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-lg border border-teal/15 bg-mint/40 px-2.5 py-1 text-xs font-extrabold text-teal"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="md:border-l md:border-slate-100 md:pl-5 md:text-right shrink-0">
                      <span className="text-xs font-bold text-slate-400 block">per room / night</span>
                      <b className="block text-2xl text-deep font-extrabold">{hotel.price}</b>
                      <button
                        onClick={() =>
                          startBooking('hotels', {
                            from: hotel.city,
                            to: hotel.name,
                            date: '2026-11-18',
                            travellers: '2 adults',
                          })
                        }
                        className="btn btn-primary w-full mt-3 py-2 px-4 rounded-xl text-xs font-black"
                      >
                        Reserve Room
                      </button>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
