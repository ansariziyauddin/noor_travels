import { BadgeCheck, Clock, FileCheck2, FileText, Globe, Send, ShieldCheck, Upload } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import PageHeader from '../components/common/PageHeader';
import SearchPanel from '../components/search/SearchPanel';
import SectionHead from '../components/common/SectionHead';
import Reveal from '../components/common/Reveal';

const visaTypes = [
  {
    title: 'Saudi Umrah e-Visa',
    processingTime: '24 - 48 Hours',
    validity: '90 Days Single Entry',
    price: 'INR 12,500',
    includes: ['Official ministry e-visa approval', 'Comprehensive COVID & medical insurance', 'Permit generation support (Nusuk Rawdah slot)', 'Zero embassy physical visit required'],
  },
  {
    title: 'Saudi 1-Year Multiple Entry Tourist Visa',
    processingTime: '24 Hours (Express)',
    validity: '1 Year Multiple Entry (90 Days/Visit)',
    price: 'INR 14,800',
    includes: ['Valid for Umrah, leisure and family visits', 'Includes comprehensive health coverage in KSA', 'Valid at all international Saudi airports', 'Permits entry across Makkah, Madinah, Riyadh, Jeddah'],
  },
  {
    title: 'UAE Tourist Visa (30 Days)',
    processingTime: '2 - 3 Working Days',
    validity: '30 Days Single Entry',
    price: 'INR 7,900',
    includes: ['Fast-track GDRFA Dubai approval', 'Travel insurance coverage included', 'Simple digital submission', 'Extendable within UAE on request'],
  },
  {
    title: 'Schengen Tourist Visa Support',
    processingTime: '15 Working Days',
    validity: 'As per Embassy Grants',
    price: 'INR 9,500 + Embassy Fees',
    includes: ['VFS appointment scheduling', 'Complete cover letter & itinerary drafting', 'Hotel & flight reservation vouchers', 'Document checklist review by senior advisor'],
  },
];

export default function Visa() {
  const { startBooking } = useBooking();

  return (
    <div>
      <PageHeader
        kicker="Visa Assistance Desk"
        title="Official Visa clearance made simple and reliable."
        description="Fast-track electronic visas and guided document services for Saudi Arabia, UAE, UK, and Schengen countries with zero hidden charges."
        breadcrumbs={[{ label: 'Visa' }]}
      />

      <SearchPanel initialTab="visa" className="-mt-10" />

      {/* Visa Cards */}
      <section className="py-20">
        <div className="wrap">
          <SectionHead
            kicker="Available Visas"
            title="Select your destination and see instant requirements."
            lede="All Saudi Umrah visas include mandatory Council of Cooperative Health Insurance (CCHI) coverage."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visaTypes.map((v) => (
              <Reveal key={v.title}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div>
                    <span className="text-xs font-black uppercase text-teal bg-mint/50 px-3 py-1 rounded-lg">
                      {v.processingTime}
                    </span>
                    <h3 className="mt-3 text-xl font-extrabold text-ink">{v.title}</h3>
                    <p className="mt-1 text-xs font-bold text-slate-500">Validity: {v.validity}</p>

                    <div className="my-5 border-t border-slate-100 pt-4">
                      <ul className="grid gap-2 text-xs font-semibold text-slate-600">
                        {v.includes.map((inc) => (
                          <li key={inc} className="flex items-start gap-2">
                            <BadgeCheck size={14} className="text-teal shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-4 mt-4">
                    <span className="text-xs font-bold text-slate-400 block">all-inclusive fee</span>
                    <b className="text-2xl text-deep font-extrabold">{v.price}</b>
                    <button
                      onClick={() =>
                        startBooking('visa', {
                          from: 'Mumbai (Visa Desk)',
                          to: v.title,
                          date: '2026-11-18',
                          travellers: '1 adult',
                        })
                      }
                      className="btn btn-primary w-full mt-3 py-2.5 rounded-xl text-xs font-black"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Step by Step Process */}
      <section className="bg-white py-20 border-t border-black/5">
        <div className="wrap">
          <SectionHead
            kicker="Four Step Process"
            title="How your visa application moves forward."
            lede="Simple digital workflow from document upload to receiving approved e-visa."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [Upload, '01. Upload Documents', 'Clear phone photo or PDF scan of your passport front/back and passport-size photo.'],
              [ShieldCheck, '02. Advisor Review', 'Our senior visa desk checks passport validity, photo dimensions, and previous visa history.'],
              [Send, '03. Government Submission', 'Application lodged with the official Saudi Ministry / UAE Immigration portal with fees paid.'],
              [BadgeCheck, '04. Instant Delivery', 'Your approved electronic visa is emailed and WhatsApped with Nusuk instructions.'],
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
