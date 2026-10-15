import { useState } from 'react';
import { Clock, Mail, MapPin, MessageCircle, Phone, Send, ShieldCheck } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SectionHead from '../components/common/SectionHead';
import Reveal from '../components/common/Reveal';

const faqs = [
  {
    q: 'Can Noor complete official flight ticketing directly?',
    a: 'Yes. We are an authorized IATA-affiliated flight desk offering live reservation, ticket issuance, seat selection, and special dietary/wheelchair arrangements.',
  },
  {
    q: 'How does the Umrah e-Visa process work?',
    a: 'You simply provide a clear passport copy and white-background photograph. Our official desk lodges the application on the Saudi Ministry portal. Approvals typically take 24 to 48 hours.',
  },
  {
    q: 'Can our family customize the Makkah and Madinah hotel duration?',
    a: 'Absolutely. We offer tailored land packages allowing you to choose 3-star, 4-star, or 5-star properties, adjust your nights between Makkah and Madinah, and select private transfers.',
  },
  {
    q: 'What payment modes are accepted for Hajj and Umrah?',
    a: 'We accept RTGS/NEFT bank transfers, UPI, official payment gateway links, and cheque payments against official stamped invoices with GST receipts.',
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <div>
      <PageHeader
        kicker="Reach Our Team"
        title="We are here to assist your sacred journey."
        description="Connect directly with our Umrah, Hajj, and ticketing advisors via phone, WhatsApp, or request an immediate callback."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="py-20">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_440px]">
          {/* Left Column: FAQs & Office Details */}
          <div>
            <SectionHead
              kicker="Frequently Asked Questions"
              title="Answers before you begin your journey."
              lede="Common questions regarding visa processing, hotel walking distance, and group departures."
            />

            <div className="mt-8 grid gap-4">
              {faqs.map((faq, i) => (
                <Reveal key={faq.q}>
                  <details
                    open={i === 0}
                    className="group rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition open:shadow-md"
                  >
                    <summary className="cursor-pointer font-bold text-ink text-base select-none list-none flex items-center justify-between">
                      <span>{faq.q}</span>
                      <span className="text-teal group-open:rotate-180 transition-transform font-bold text-lg">
                        &darr;
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-3">
                      {faq.a}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>

            {/* Office Locations */}
            <div className="mt-14 border-t border-slate-200 pt-10">
              <h3 className="font-serif text-2xl font-bold text-ink mb-6">Our Branch Locations</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-black/10 bg-[#fbf9f4] p-5 shadow-sm">
                  <span className="text-xs font-black uppercase text-teal bg-mint/50 px-2.5 py-1 rounded-md">
                    Head Office
                  </span>
                  <h4 className="mt-2 text-base font-extrabold text-ink">Mumbai Central Desk</h4>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    Crawford Market & Bandra West, Mumbai, Maharashtra 400050
                  </p>
                  <a
                    href="tel:+919876543210"
                    className="mt-3 text-xs font-bold text-deep block hover:underline"
                  >
                    +91 98765 43210
                  </a>
                </div>

                <div className="rounded-2xl border border-black/10 bg-[#fbf9f4] p-5 shadow-sm">
                  <span className="text-xs font-black uppercase text-teal bg-mint/50 px-2.5 py-1 rounded-md">
                    Regional Office
                  </span>
                  <h4 className="mt-2 text-base font-extrabold text-ink">Hyderabad & Delhi Desk</h4>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    Abids, Hyderabad & Connaught Place, New Delhi 110001
                  </p>
                  <a
                    href="tel:+919876543211"
                    className="mt-3 text-xs font-bold text-deep block hover:underline"
                  >
                    +91 98765 43211
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Callback Request Form */}
          <Reveal>
            <aside className="rounded-3xl bg-deep p-7 sm:p-9 text-white shadow-glow">
              <span className="text-xs font-black uppercase tracking-wider text-sun">
                Quick Consultation
              </span>
              <h3 className="mt-2 font-serif text-3xl font-bold text-white">Request a Callback</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/75">
                Leave your travel details and a senior pilgrimage consultant will call you within 15 minutes.
              </p>

              {submitted ? (
                <div className="mt-6 rounded-2xl bg-mint/20 border border-teal/30 p-5 text-center">
                  <h4 className="font-bold text-sun text-lg">Thank You!</h4>
                  <p className="text-xs mt-1 text-white/90">
                    Your request has been received. An advisor will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 grid gap-3.5">
                  <label className="block">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white/60 mb-1 block">
                      Full Name
                    </span>
                    <input
                      required
                      className="w-full rounded-xl border border-white/20 bg-white/10 p-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-sun focus:bg-white/15"
                      placeholder="e.g. Tariq Mansoor"
                    />
                  </label>

                  <label className="block">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white/60 mb-1 block">
                      Mobile / WhatsApp
                    </span>
                    <input
                      required
                      className="w-full rounded-xl border border-white/20 bg-white/10 p-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-sun focus:bg-white/15"
                      placeholder="+91 98765 43210"
                    />
                  </label>

                  <label className="block">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white/60 mb-1 block">
                      Service of Interest
                    </span>
                    <select className="w-full rounded-xl border border-white/20 bg-[#073235] p-3 text-sm text-white outline-none focus:border-sun">
                      <option>Umrah Packages</option>
                      <option>Hajj 2027 Inquiries</option>
                      <option>Flight Tickets</option>
                      <option>Hotels in Makkah/Madinah</option>
                      <option>Visa Services</option>
                      <option>Airport Transfers</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white/60 mb-1 block">
                      Travel Details & Questions
                    </span>
                    <textarea
                      rows="3"
                      className="w-full rounded-xl border border-white/20 bg-white/10 p-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-sun focus:bg-white/15"
                      placeholder="Tell us passenger count, preferred dates, and city of departure..."
                    />
                  </label>

                  <button
                    type="submit"
                    className="btn btn-gold w-full mt-2 py-3 rounded-xl font-black text-sm flex items-center justify-center gap-2"
                  >
                    <Send size={16} /> Request Advisor Callback
                  </button>
                </form>
              )}
            </aside>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
