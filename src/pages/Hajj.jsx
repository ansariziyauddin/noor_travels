import { AlertCircle, Calendar, Check, Clock, FileCheck2, Landmark, MoonStar, ShieldCheck, UserCheck, Users } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import PageHeader from '../components/common/PageHeader';
import SearchPanel from '../components/search/SearchPanel';
import SectionHead from '../components/common/SectionHead';
import Reveal from '../components/common/Reveal';

const hajjTiers = [
  {
    title: 'Hajj 2027 - Premium Non-Shifting VIP',
    duration: '26 Days',
    price: 'INR 5,95,000',
    type: 'VIP Non-Shifting',
    makkahStay: 'Clock Tower / Front Row Haram stay without shifting out before Hajj days',
    minaCamp: 'VIP Category A Tents directly adjacent to Jamarat, sofa beds & AC',
    inclusions: ['Direct Saudi Airlines charter', 'Full-board gourmet meals in Mina & Arafat', 'Dedicated Islamic scholar in English & Urdu', 'Private Haramain train and VIP coaches', 'Ziyarat tours in Madinah & Makkah', 'Nusuk portal verification and visa desk'],
  },
  {
    title: 'Hajj 2027 - Guided Economy Group',
    duration: '34 Days',
    price: 'INR 4,85,000',
    type: 'Shifting Standard',
    makkahStay: 'Near Haram stay + comfortable Aziziyah hotel during peak days',
    minaCamp: 'Air-conditioned standard Moallim tents with private washrooms',
    inclusions: ['Round-trip group flights', 'Daily Indian/continental buffet meals', 'Experienced guide per 45 pilgrims', 'Round-trip Mina and Arafat AC coaches', 'Complimentary luggage bags & Ihram set', 'Doctor and medical support escort'],
  },
  {
    title: 'Hajj 2027 - Short Stay Executive',
    duration: '18 Days',
    price: 'INR 5,45,000',
    type: 'Compact Itinerary',
    makkahStay: '5-Star Makkah hotel with express checkout after Tashreeq days',
    minaCamp: 'Upgraded Moallim camp near Jamarat',
    inclusions: ['Express schedule for busy professionals', 'High-speed Haramain train transfers', 'Priority Nusuk registration queue', 'Dedicated camp manager', 'All meals and hydration stations', 'Scholar-guided Jamarat stoning times'],
  },
];

export default function Hajj() {
  const { startBooking } = useBooking();

  return (
    <div>
      <PageHeader
        kicker="Sacred Journey"
        title="Hajj 2027 & 2028 Registrations and Guided Groups."
        description="Experience the journey of a lifetime with accredited guides, pre-arranged Mina camps, verified shifting or non-shifting accommodations, and complete Nusuk registration compliance."
        breadcrumbs={[{ label: 'Hajj' }]}
      />

      <SearchPanel initialTab="hajj" className="-mt-10" />

      {/* Categories */}
      <section className="py-20">
        <div className="wrap">
          <SectionHead
            kicker="Hajj 2027 categories"
            title="Structured packages for individuals and families."
            lede="Early advance registrations ensure verified quota allocation and document clearances."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {hajjTiers.map((tier) => (
              <Reveal key={tier.title}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-black/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-xl bg-sun/20 text-deep px-3 py-1 text-xs font-black">
                        {tier.type}
                      </span>
                      <span className="text-xs font-bold text-slate-500">{tier.duration}</span>
                    </div>
                    <h3 className="mt-4 text-2xl font-extrabold text-ink">{tier.title}</h3>

                    <div className="my-5 rounded-xl bg-paper p-4 text-xs leading-relaxed text-slate-600">
                      <p className="font-bold text-deep mb-1">&bull; Makkah: {tier.makkahStay}</p>
                      <p className="font-bold text-teal">&bull; Mina: {tier.minaCamp}</p>
                    </div>

                    <ul className="grid gap-2.5 text-xs font-semibold text-slate-600">
                      {tier.inclusions.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check size={14} className="text-teal shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 border-t border-slate-100 pt-5">
                    <span className="text-xs text-slate-400 block font-semibold">expected package fare</span>
                    <b className="text-3xl font-extrabold text-deep">{tier.price}</b>
                    <button
                      onClick={() =>
                        startBooking('hajj', {
                          from: 'Mumbai',
                          to: tier.title,
                          date: '2027-05-15',
                          travellers: '2 adults',
                        })
                      }
                      className="btn btn-primary w-full mt-4 py-3 rounded-xl text-sm font-black"
                    >
                      Pre-Register for Hajj
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Guidelines & Milestones */}
      <section className="bg-white py-20 border-t border-black/5">
        <div className="wrap">
          <SectionHead
            kicker="Important Guidelines"
            title="Hajj document milestones & official compliance."
            lede="Clear steps to guide every pilgrim from medical checkups to Nusuk slot confirmations."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [FileCheck2, 'Valid Passport', 'Passport must have at least 6 months validity from the departure date with minimum 2 blank pages.'],
              [ShieldCheck, 'Mandatory Vaccines', 'Meningitis (ACYW135), COVID-19 booster, and seasonal influenza certificates required.'],
              [UserCheck, 'Nusuk Pre-Registration', 'Our desk assists pilgrims in linking their biometric profile and passport on the official platform.'],
              [Calendar, 'Payment Schedule', '25% initial token deposit upon seat allocation, with staggered milestones until final ticketing.'],
            ].map(([Icon, title, desc]) => (
              <Reveal key={title}>
                <div className="rounded-2xl border border-black/10 bg-[#fbf9f4] p-6 shadow-sm">
                  <Icon className="text-sun mb-3" size={24} />
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
