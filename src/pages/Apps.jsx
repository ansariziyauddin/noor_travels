import { useState } from 'react';
import {
  Apple,
  ArrowRight,
  Bell,
  Check,
  CheckCircle2,
  Clock,
  Compass,
  FileCheck2,
  HeartHandshake,
  Layers3,
  MapPin,
  MessageCircle,
  MoonStar,
  Play,
  Radio,
  ShieldCheck,
  Smartphone,
  Sparkle,
  Sparkles,
  Star,
  Users,
  Volume2,
  WifiOff,
  Zap,
} from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SectionHead from '../components/common/SectionHead';
import Reveal from '../components/common/Reveal';

export default function Apps() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [notified, setNotified] = useState(false);

  const handleNotify = (e) => {
    e.preventDefault();
    if (!emailOrPhone.trim()) return;
    setNotified(true);
  };

  const appFeatures = [
    {
      icon: WifiOff,
      title: '100% Offline Ritual Companion',
      desc: 'Perform Tawaf and Sa’i with our haptic-assisted lap counter and verified step-by-step Duas that work even without a Saudi SIM card or internet.',
      tag: 'Offline Ready',
    },
    {
      icon: FileCheck2,
      title: 'Digital Pilgrimage Wallet',
      desc: 'Instant one-tap access to your Saudi e-Visas, confirmed flight PNRs, hotel vouchers, and transport pickups stored securely on your phone.',
      tag: 'Zero Paperwork',
    },
    {
      icon: Clock,
      title: 'Live Haramain Prayer & Adhan Alerts',
      desc: 'GPS-synchronized prayer schedules for Masjid Al-Haram & Masjid An-Nabawi with Nusuk Rawdah permit reminders so you never miss your slot.',
      tag: 'Real-time Sync',
    },
    {
      icon: HeartHandshake,
      title: '24/7 On-Ground Concierge & SOS',
      desc: 'Instant WhatsApp & VOIP connection to our local Makkah and Madinah field directors, luggage assistance, and emergency medical support.',
      tag: 'Always Connected',
    },
    {
      icon: Volume2,
      title: 'Audio Ziyarat & Scholar Guidance',
      desc: 'Immersive audio stories and historical lectures at Cave Hira, Mount Uhud, and the battlefield of Badr in English, Urdu, and Hindi.',
      tag: 'Spiritual Depth',
    },
    {
      icon: Users,
      title: 'Family Group Radar',
      desc: 'Keep elderly family members and children close with courtyard meeting-point beacons and private family live location sharing.',
      tag: 'Family Safety',
    },
  ];

  return (
    <div className="bg-[#fafcfb]">
      <PageHeader
        kicker="Digital Innovation"
        title="Noor Tours Mobile Companion"
        description="We are bringing peace of mind, guided rituals, digital documents, and live concierge support into the palm of your hand."
        breadcrumbs={[{ label: 'Apps' }]}
      />

      {/* Main Coming Soon Showcase Hero Banner */}
      <section className="relative -mt-10 pb-20 z-20">
        <div className="wrap">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-[#032420] via-[#053d37] to-[#0c5951] p-8 sm:p-12 md:p-16 text-white shadow-[0_28px_70px_rgba(3,36,32,0.28)]">
              {/* Ambient Background Accents */}
              <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-sun/15 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#10b981]/15 blur-3xl pointer-events-none" />
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)',
                  backgroundSize: '100px 100px',
                }}
              />

              <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
                {/* Left Column: Heading, Banner, & Early Access Form */}
                <div>
                  <div className="inline-flex items-center gap-2 rounded-xl border border-sun/30 bg-sun/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-sun backdrop-blur-md">
                    <Sparkle size={14} className="animate-spin" style={{ animationDuration: '6s' }} />
                    <span>Mobile application coming soon</span>
                  </div>

                  <h2 className="mt-5 font-serif text-[clamp(36px,5.5vw,68px)] leading-[1.02] tracking-tight text-white">
                    Sacred journeys, <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sun via-[#fce09b] to-white">
                      reimagined in your pocket.
                    </span>
                  </h2>

                  <p className="mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-white/85 font-medium">
                    Our dedicated mobile app for <strong>iOS</strong> and <strong>Android</strong> is currently in private beta. Designed exclusively for pilgrims and families, it combines offline Tawaf guidance, digital visa wallets, Haramain timings, and on-ground emergency dispatch into a serene, distraction-free interface.
                  </p>

                  {/* Early Access Notification Form */}
                  <div className="mt-8 max-w-md">
                    {notified ? (
                      <div className="rounded-2xl border border-sun/30 bg-white/10 p-5 backdrop-blur-md animate-in fade-in zoom-in-95 duration-200">
                        <div className="flex items-center gap-2.5 text-sun font-bold text-sm">
                          <CheckCircle2 size={20} className="text-sun" />
                          <span>You are registered for VIP Early Access!</span>
                        </div>
                        <p className="mt-1 text-xs text-white/80 leading-relaxed font-medium">
                          We will send you a direct download link and an exclusive <strong>10% Pilgrimage Voucher</strong> the instant the app launches.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleNotify} className="flex flex-col sm:flex-row gap-2.5">
                        <input
                          type="text"
                          required
                          value={emailOrPhone}
                          onChange={(e) => setEmailOrPhone(e.target.value)}
                          placeholder="Enter your email or phone number"
                          className="flex-1 rounded-2xl border border-white/20 bg-white/10 px-4 py-3.5 text-sm text-white placeholder-white/50 backdrop-blur-md outline-none transition focus:border-sun focus:bg-white/15 focus:ring-2 focus:ring-sun/30"
                        />
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sun px-6 py-3.5 text-sm font-black text-[#261905] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ffc65c] hover:shadow-xl cursor-pointer shrink-0"
                        >
                          <Bell size={16} />
                          <span>Notify Me</span>
                        </button>
                      </form>
                    )}
                    <span className="mt-2.5 block text-[11px] font-semibold text-white/60">
                      🔒 No spam guaranteed. Instant notification on Apple App Store & Google Play release.
                    </span>
                  </div>

                  {/* Store Badges Preview */}
                  <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-2.5 backdrop-blur-sm shadow-sm transition hover:bg-white/15">
                      <Apple size={24} className="text-white" />
                      <div className="text-left">
                        <span className="block text-[9px] uppercase tracking-wider text-white/60 font-bold">Coming Soon to</span>
                        <b className="block text-xs font-black text-white">Apple App Store</b>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-2.5 backdrop-blur-sm shadow-sm transition hover:bg-white/15">
                      <Play size={22} className="text-sun fill-sun" />
                      <div className="text-left">
                        <span className="block text-[9px] uppercase tracking-wider text-white/60 font-bold">Coming Soon to</span>
                        <b className="block text-xs font-black text-white">Google Play Store</b>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Interactive Phone Mockup Preview */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative w-[280px] sm:w-[310px] rounded-[44px] border-4 border-slate-700/80 bg-slate-900 p-3 shadow-[0_30px_70px_rgba(0,0,0,0.5)] ring-1 ring-white/20">
                    {/* Speaker notch */}
                    <div className="mx-auto mb-3 h-4 w-28 rounded-full bg-slate-800" />

                    {/* App Screen Content Preview */}
                    <div className="overflow-hidden rounded-[32px] bg-gradient-to-b from-[#02211e] via-[#053b35] to-[#041d1f] p-4 text-white">
                      {/* Top App Bar */}
                      <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <div className="h-7 w-7 rounded-lg bg-sun grid place-items-center text-slate-900 shadow-sm">
                            <MoonStar size={16} />
                          </div>
                          <span className="font-serif text-sm font-bold text-white">Noor Companion</span>
                        </div>
                        <span className="rounded-full bg-mint/20 text-[#6cebc0] px-2 py-0.5 text-[9px] font-black">
                          Offline Active
                        </span>
                      </div>

                      {/* Mockup Card 1: Today's Itinerary */}
                      <div className="mt-3.5 rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black uppercase text-sun tracking-wider">Day 3 of 12</span>
                          <span className="text-[10px] text-white/60 font-semibold">Makkah Al-Mukarramah</span>
                        </div>
                        <p className="mt-1 text-xs font-extrabold text-white">
                          First Umrah & Tawaf Al-Qudum
                        </p>
                        <div className="mt-2 flex items-center gap-1.5 text-[10px] text-white/75">
                          <Clock size={11} className="text-sun" />
                          <span>Tahajjud & Fajr in Mataf courtyard</span>
                        </div>
                      </div>

                      {/* Mockup Card 2: Interactive Tawaf Lap Counter */}
                      <div className="mt-3 rounded-2xl border border-sun/30 bg-gradient-to-br from-[#0c4e46] to-[#06332d] p-3 text-center shadow-inner">
                        <span className="text-[10px] font-black uppercase tracking-wider text-sun">
                          Tawaf Lap Tracker
                        </span>
                        <div className="my-1 flex items-baseline justify-center gap-1">
                          <span className="text-3xl font-black text-white">4</span>
                          <span className="text-xs font-bold text-white/60">/ 7 Laps</span>
                        </div>
                        <p className="text-[10px] text-white/80 font-medium">
                          &quot;Rabbana atina fid-dunya hasanatan...&quot;
                        </p>
                        <div className="mt-2 flex justify-center gap-1">
                          {[1, 2, 3, 4, 5, 6, 7].map((lap) => (
                            <span
                              key={lap}
                              className={`h-1.5 rounded-full transition-all ${
                                lap <= 4 ? 'w-4 bg-sun' : 'w-2 bg-white/20'
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Mockup Card 3: Next Prayer */}
                      <div className="mt-3 rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-sm flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-bold text-white/60">Next Prayer</span>
                          <b className="block text-xs font-black text-white">Asr &bull; 03:42 PM</b>
                        </div>
                        <span className="rounded-xl bg-sun text-[#261905] px-2 py-1 text-[10px] font-black">
                          In 48m
                        </span>
                      </div>

                      {/* Mockup SOS Action */}
                      <div className="mt-3.5 flex items-center gap-2 rounded-xl bg-[#e11d48]/20 border border-[#e11d48]/40 p-2 text-center justify-center">
                        <Radio size={12} className="text-[#fb7185] animate-ping" />
                        <span className="text-[10px] font-black text-[#fecdd3]">
                          24/7 Pilgrimage Field Supervisor on call
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Flagship App Features Grid */}
      <section className="py-20 bg-white border-t border-black/5">
        <div className="wrap">
          <SectionHead
            kicker="Planned Features"
            title="Designed for pilgrims with devotion, clarity, and peace."
            lede="Every feature has been engineered with input from experienced Hujjaj, Islamic scholars, and medical directors."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {appFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <Reveal key={idx}>
                  <div className="group flex h-full flex-col justify-between rounded-3xl border border-black/10 bg-[#fafcfb] p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-deep/30 hover:bg-white">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mint text-teal transition group-hover:bg-deep group-hover:text-white">
                          <Icon size={22} />
                        </span>
                        <span className="rounded-full bg-slate-100 text-slate-600 px-3 py-1 text-[10px] font-black uppercase tracking-wider group-hover:bg-sun group-hover:text-[#261905] transition">
                          {feat.tag}
                        </span>
                      </div>

                      <h3 className="text-xl font-extrabold text-ink group-hover:text-deep transition-colors">
                        {feat.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-slate-600 font-medium">
                        {feat.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-black text-teal group-hover:text-deep">
                      <span>Included in free release</span>
                      <Check size={14} strokeWidth={3} />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Regarding Mobile App */}
      <section className="py-20 bg-[#f8faf8] border-t border-black/5">
        <div className="wrap max-w-4xl">
          <SectionHead
            kicker="App FAQ"
            title="Common questions about the Noor Tours mobile release."
            lede="Everything you need to know about compatibility, offline usage, and release timelines."
          />

          <div className="space-y-4">
            {[
              {
                q: 'Will the mobile app work offline without internet in Saudi Arabia?',
                a: 'Yes, 100%! All your confirmed booking documents, hotel vouchers, offline Kaaba Tawaf counter, Sa’i guide, and Dua audios are pre-downloaded to your device before departure, so you never have to worry about roaming data.',
              },
              {
                q: 'Is the app free for pilgrims travelling with Noor Tours?',
                a: 'Yes, completely free of charge. Every registered pilgrim and their family members receive full access to all features, live concierge dispatch, and group safety tracking.',
              },
              {
                q: 'Which operating systems will be supported at launch?',
                a: 'The application will be available on Apple iOS (compatible with iPhone and iPad running iOS 15+) and Google Android (running Android 9.0 and higher).',
              },
              {
                q: 'Can I track my flight status and hotel transfers through the app?',
                a: 'Yes. Live airport meet-and-assist tracking will display your assigned driver details, vehicle registration number, and pickup gate at both Jeddah King Abdulaziz Airport and Madinah Prince Mohammad Airport.',
              },
            ].map((faq, i) => (
              <Reveal key={i}>
                <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-xs">
                  <h4 className="text-base font-extrabold text-ink flex items-start gap-3">
                    <span className="text-teal font-black">Q.</span>
                    <span>{faq.q}</span>
                  </h4>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600 font-medium pl-6">
                    {faq.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
