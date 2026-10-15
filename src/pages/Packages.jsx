import { useState } from 'react';
import { Compass, Eye, Layers3, Sparkle, Star } from 'lucide-react';
import { packages } from '../data';
import { useBooking } from '../context/BookingContext';
import PageHeader from '../components/common/PageHeader';
import SectionHead from '../components/common/SectionHead';
import Reveal from '../components/common/Reveal';
import PackageDetailModal from '../components/packages/PackageDetailModal';

export default function Packages() {
  const { startBooking } = useBooking();
  const [selectedCat, setSelectedCat] = useState('All');
  const [activePackage, setActivePackage] = useState(null);

  const categories = ['All', ...new Set(packages.map((p) => p[0]))];

  const visiblePackages = packages.filter(
    (p) => selectedCat === 'All' || p[0] === selectedCat
  );

  return (
    <div>
      <PageHeader
        kicker="Full Catalog"
        title="15+ Curated Pilgrimage & Travel Packages."
        description="Explore verified offerings across Umrah, Hajj, Flights, Hotels, Visa Assistance, Airport Transfers, and Family Holiday escapes."
        breadcrumbs={[{ label: 'Packages' }]}
      />

      <section className="py-20">
        <div className="wrap">
          {/* Category Filter Chips */}
          <div className="mb-10 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`rounded-xl border px-5 py-2.5 text-sm font-extrabold transition whitespace-nowrap ${
                  selectedCat === cat
                    ? 'border-deep bg-deep text-white shadow-sm'
                    : 'border-black/10 bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                {cat} {cat === 'All' ? `(${packages.length})` : ''}
              </button>
            ))}
          </div>

          <SectionHead
            kicker="Package Catalog"
            title={`${selectedCat === 'All' ? 'All Packages' : selectedCat + ' Departures'} (${visiblePackages.length})`}
            lede="Every package is backed by confirmed bookings, direct advisor review, and 24/7 on-ground assistance."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visiblePackages.map((pkg) => {
              const [category, title, days, tier, price, body] = pkg;
              return (
                <Reveal key={title}>
                  <article
                    onClick={() => setActivePackage(pkg)}
                    className="group relative flex h-full flex-col justify-between rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-deep/30 cursor-pointer"
                  >
                    <div>
                      <div className="mb-4 flex items-center justify-between">
                        <span className="rounded-xl bg-sun px-3 py-1.5 text-xs font-black text-[#261905]">
                          {category}
                        </span>
                        <span className="text-xs font-black uppercase tracking-wider text-teal bg-mint/50 px-2.5 py-1 rounded-lg">
                          {tier}
                        </span>
                      </div>

                      <h3 className="text-2xl font-extrabold text-ink group-hover:text-deep transition-colors">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-500 line-clamp-2">
                        {body}
                      </p>

                      <div className="my-5 flex flex-wrap gap-2">
                        <span className="rounded-xl border border-teal/15 bg-mint/40 px-3 py-1.5 text-xs font-extrabold text-teal">
                          {days}
                        </span>
                        <span className="rounded-xl border border-black/10 bg-slate-50 px-3 py-1.5 text-xs font-extrabold text-slate-600">
                          Advisor Verified
                        </span>
                        <span className="rounded-xl border border-sun/20 bg-sun/10 px-3 py-1.5 text-xs font-bold text-[#855700] flex items-center gap-1 group-hover:bg-sun group-hover:text-black transition">
                          <Eye size={12} />
                          Details
                        </span>
                      </div>
                    </div>

                    <div className="flex items-end justify-between gap-3 border-t border-slate-100 pt-4">
                      <div>
                        <span className="text-[11px] font-bold text-slate-400 block">starting from</span>
                        <b className="block text-2xl text-deep font-extrabold tracking-tight">{price}</b>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActivePackage(pkg);
                          }}
                          className="rounded-xl border border-black/10 bg-[#f8faf8] px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 transition"
                        >
                          Details
                        </button>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            startBooking(
                              category.toLowerCase().includes('flight')
                                ? 'flights'
                                : category.toLowerCase().includes('hotel')
                                ? 'hotels'
                                : category.toLowerCase(),
                              { packageTitle: title, price }
                            );
                          }}
                          className="btn btn-primary text-xs py-2 px-3.5 rounded-xl font-black shadow-sm"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
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
