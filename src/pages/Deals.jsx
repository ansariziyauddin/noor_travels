import { useState } from 'react';
import { Check, Copy, Percent, Sparkle, Tag, Users } from 'lucide-react';
import { deals } from '../data';
import { useBooking } from '../context/BookingContext';
import PageHeader from '../components/common/PageHeader';
import SectionHead from '../components/common/SectionHead';
import Reveal from '../components/common/Reveal';

export default function Deals() {
  const { startBooking } = useBooking();
  const [copiedCode, setCopiedCode] = useState(null);

  function handleCopy(code) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 1800);
    }
  }

  return (
    <div>
      <PageHeader
        kicker="Special Offers"
        title="Promotions & Exclusive Pilgrimage Deals."
        description="Save on family Umrah packages, hotel upgrades in Makkah and Madinah, free date-change flight fares, and priority visa handling."
        breadcrumbs={[{ label: 'Deals' }]}
      />

      <section className="py-20">
        <div className="wrap">
          <SectionHead
            kicker="Active Coupons"
            title="Apply promo codes to your upcoming journey."
            lede="Copy any coupon below and mention it to your booking advisor or enter it during checkout."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {deals.map(([title, text, code]) => {
              const isCopied = copiedCode === code;
              return (
                <Reveal key={code}>
                  <article className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-sun/15" />
                    <div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-deep bg-mint/50 px-2.5 py-1 rounded-lg">
                        <Tag size={13} /> Verified Offer
                      </span>
                      <h3 className="mt-4 text-xl font-extrabold text-ink">{title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600">{text}</p>
                    </div>

                    <div className="mt-6 border-t border-slate-100 pt-4">
                      <div className="flex items-center justify-between gap-2 rounded-xl border border-slate-200 bg-[#fbf9f4] p-2.5 font-black text-deep">
                        <span className="font-mono text-sm tracking-wider">{code}</span>
                        <button
                          type="button"
                          onClick={() => handleCopy(code)}
                          className="btn btn-gold py-1.5 px-3 rounded-lg text-xs font-extrabold flex items-center gap-1"
                        >
                          {isCopied ? (
                            <>
                              <Check size={13} /> Copied
                            </>
                          ) : (
                            <>
                              <Copy size={13} /> Copy
                            </>
                          )}
                        </button>
                      </div>

                      <button
                        onClick={() => startBooking('umrah')}
                        className="btn btn-primary w-full mt-3 py-2.5 rounded-xl text-xs font-black"
                      >
                        Redeem Deal
                      </button>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {/* Group Offer Banner */}
          <Reveal>
            <div className="mt-14 rounded-3xl bg-deep p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-1.5 rounded-xl bg-sun px-3 py-1 text-xs font-black text-[#261905]">
                  <Users size={14} /> Group & Family Discount
                </span>
                <h3 className="mt-4 font-serif text-3xl sm:text-4xl text-white">
                  Planning for 5 or more pilgrims?
                </h3>
                <p className="mt-3 leading-relaxed text-white/80 text-sm sm:text-base">
                  Get dedicated private SUV transfers, interconnecting quad family suites, and flat INR
                  3,000 off per passenger. Our family pilgrimage manager will customize the itinerary
                  to your elders’ comfort.
                </p>
              </div>
              <button
                onClick={() => startBooking('umrah', { travellers: 'Family of 5' })}
                className="btn btn-gold py-3.5 px-8 rounded-xl font-black text-sm shrink-0 whitespace-nowrap"
              >
                Inquire for Group Offer
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
