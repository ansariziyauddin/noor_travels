import { useState } from 'react';
import { Bus, Check, Eye, FileCheck2, Hotel, Landmark, MoonStar, Plane, ShieldCheck, Sparkle, Star } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import PageHeader from '../components/common/PageHeader';
import SearchPanel from '../components/search/SearchPanel';
import SectionHead from '../components/common/SectionHead';
import Reveal from '../components/common/Reveal';
import PackageDetailModal from '../components/packages/PackageDetailModal';

const umrahPackages = [
  {
    title: 'Signature Umrah Package',
    duration: '12 Days / 11 Nights',
    tier: '4-Star Near Haram',
    price: 'INR 89,500',
    popular: true,
    makkahHotel: '400m from Masjid Al Haram',
    madinahHotel: '300m from Masjid Nabawi',
    features: ['Direct round-trip flights', 'Umrah e-Visa with health insurance', 'Buffet breakfast & dinner', 'Makkah & Madinah Ziyarat with scholar', 'AC VIP coach transfers', 'Rawdah permit assistance'],
  },
  {
    title: 'Noor Economy Umrah',
    duration: '10 Days / 9 Nights',
    tier: '3-Star Standard',
    price: 'INR 74,900',
    popular: false,
    makkahHotel: '800m (Frequent 24/7 shuttle)',
    madinahHotel: '450m from Markazia',
    features: ['Round-trip flights', 'Umrah visa processing', 'Standard shared quad room', 'Historical Ziyarat tour', 'Luggage meet & assist', 'Laundry service included'],
  },
  {
    title: 'Noor Elite 5-Star Umrah',
    duration: '14 Days / 13 Nights',
    tier: '5-Star Clock Tower',
    price: 'INR 1,38,000',
    popular: false,
    makkahHotel: 'Clock Tower / Abraj Al Bait (Direct Courtyard)',
    madinahHotel: 'Oberoi / Dar Al Taqwa (Front Row)',
    features: ['Direct business/economy flights', 'VIP express visa desk', 'Haram-view luxury suites', 'Private SUV transfers (GMC Yukon)', 'Personal scholarly guide', 'Full-board international buffet'],
  },
  {
    title: 'Ramadan Last Ashra Special',
    duration: '15 Days / 14 Nights',
    tier: '4-Star Premium',
    price: 'INR 1,62,000',
    popular: false,
    makkahHotel: '350m from Haram (Ibrahim Khalil Road)',
    madinahHotel: '300m from Central Area',
    features: ['Flights with confirmed Ramadan dates', 'Sahoor & Iftar buffet arrangements', 'Khatam-al-Quran night in Haram', 'Eid in Makkah / Madinah', 'Round-the-clock group coordinator', 'VIP luggage logistics'],
  },
];

const itinerary = [
  { day: 'Day 1', title: 'Arrival in Jeddah & Ihram Transfer to Makkah', desc: 'Meet our airport representative at Jeddah Terminal 1, board private transfer to Makkah hotel, perform first Umrah under scholar guidance.' },
  { day: 'Day 2-6', title: 'Makkah Al-Mukarramah Worship & Ziyarat', desc: 'Daily prayers at Masjid Al Haram. Day 4 scheduled Ziyarat to Jabal Al Noor (Cave Hira), Jabal Thawr, Mina, Muzdalifah, and Arafat.' },
  { day: 'Day 7', title: 'Haramain High-Speed Train to Madinah Al-Munawwarah', desc: 'Check out of Makkah hotel, board the fast Haramain train to Madinah, check in to hotel walking distance to Masjid Nabawi.' },
  { day: 'Day 8-11', title: 'Madinah Stay & Rawdah Sharif Visits', desc: 'Salutations upon the Prophet (PBUH), confirmed Nusuk Rawdah permit slot, Madinah Ziyarat including Masjid Quba, Mount Uhud, and Masjid Qiblatayn.' },
  { day: 'Day 12', title: 'Final Farewell & Departure', desc: 'Tawaf Al-Wadaa / final prayers, transfer to Madinah Prince Mohammad Airport or Jeddah Airport with 5L Zamzam water provided.' },
];

export default function Umrah() {
  const { startBooking } = useBooking();
  const [activePackage, setActivePackage] = useState(null);

  return (
    <div>
      <PageHeader
        kicker="Pilgrimage Desk"
        title="Umrah Packages crafted with trust, comfort & devotion."
        description="Complete all-inclusive Umrah journeys with verified near-Haram hotels, direct flights, visa clearance, knowledgeable scholar guidance, and reliable ground transfers."
        breadcrumbs={[{ label: 'Umrah' }]}
      />

      <SearchPanel initialTab="umrah" className="-mt-10" />

      {/* Package Options */}
      <section className="py-20">
        <div className="wrap">
          <SectionHead
            kicker="Curated packages"
            title="Choose the right comfort tier for your family."
            lede="Transparent quad, triple, and twin room rates with clear walking distances."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {umrahPackages.map((pkg) => (
              <Reveal key={pkg.title}>
                <div
                  onClick={() => setActivePackage(pkg)}
                  className={`group relative flex h-full flex-col justify-between rounded-3xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer ${
                    pkg.popular ? 'border-sun ring-2 ring-sun/30 shadow-lg' : 'border-black/10 shadow-sm'
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3.5 right-6 rounded-full bg-sun px-3.5 py-1 text-xs font-black text-[#261905] shadow-sm">
                      Most Popular
                    </span>
                  )}
                  <div>
                    <span className="text-xs font-extrabold uppercase text-teal bg-mint/50 px-3 py-1 rounded-lg">
                      {pkg.tier}
                    </span>
                    <h3 className="mt-3 text-xl font-extrabold text-ink group-hover:text-deep transition-colors">
                      {pkg.title}
                    </h3>
                    <p className="mt-1 text-xs font-bold text-slate-500">{pkg.duration}</p>

                    <div className="my-5 border-y border-slate-100 py-3 text-xs leading-relaxed text-slate-600">
                      <p className="font-bold text-deep">&bull; Makkah: {pkg.makkahHotel}</p>
                      <p className="font-bold text-teal mt-1">&bull; Madinah: {pkg.madinahHotel}</p>
                    </div>

                    <ul className="grid gap-2 text-xs font-semibold text-slate-600">
                      {pkg.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <Check size={14} className="text-teal shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 border-t border-slate-100 pt-4">
                    <span className="text-[11px] font-bold text-slate-400 block">per person</span>
                    <b className="text-2xl text-deep font-extrabold">{pkg.price}</b>
                    
                    <div className="mt-3 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActivePackage(pkg);
                        }}
                        className="rounded-xl border border-black/10 bg-[#f8faf8] px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 transition flex-1"
                      >
                        Details
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          startBooking('umrah', {
                            from: 'Delhi',
                            to: pkg.title,
                            date: '2026-11-18',
                            travellers: '2 adults',
                          });
                        }}
                        className="btn btn-primary flex-1 py-2 rounded-xl text-xs font-black shadow-sm"
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary Walkthrough */}
      <section className="bg-white py-20 border-t border-black/5">
        <div className="wrap">
          <SectionHead
            kicker="Detailed Itinerary"
            title="Step-by-step 12-day spiritual journey."
            lede="Every day planned with dedicated rest periods, guided prayers, and historical ziyarat."
          />
          <div className="grid gap-4 max-w-4xl mx-auto">
            {itinerary.map((item, i) => (
              <Reveal key={i}>
                <div className="flex gap-4 items-start rounded-2xl border border-black/10 bg-[#fbf9f4] p-5 shadow-sm">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-deep text-white font-extrabold text-sm">
                    {item.day.split(' ')[0]} {item.day.split(' ')[1]}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Package Detail Modal */}
      {activePackage && (
        <PackageDetailModal
          packageItem={activePackage}
          onClose={() => setActivePackage(null)}
        />
      )}
    </div>
  );
}
