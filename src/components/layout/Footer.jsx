import { Link } from 'react-router-dom';
import { Mail, MapPin, MoonStar, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#041d1f] text-white/70 pt-16 pb-10 border-t border-white/10">
      <div className="wrap">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div>
            <div className="flex items-center gap-2.5 font-extrabold text-white">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-deep to-teal text-white shadow-sm">
                <MoonStar size={20} />
              </span>
              <span>
                <span className="block text-lg font-black tracking-tight">Noor Tours</span>
                <span className="block text-[10px] font-extrabold uppercase tracking-widest text-sun">
                  & Travels
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Approved Umrah & Hajj pilgrimage operator, flight ticketing desk, hotel booking engine,
              and visa support center serving travellers with dignity, clarity, and adab.
            </p>
          </div>

          {/* Quick Pages */}
          <div>
            <h4 className="font-serif text-lg text-white mb-4">Explore</h4>
            <ul className="grid gap-2.5 text-sm font-semibold">
              <li>
                <Link to="/umrah" className="hover:text-sun transition">
                  Umrah Packages
                </Link>
              </li>
              <li>
                <Link to="/hajj" className="hover:text-sun transition">
                  Hajj 2027 Groups
                </Link>
              </li>
              <li>
                <Link to="/flights" className="hover:text-sun transition">
                  Flight Ticketing
                </Link>
              </li>
              <li>
                <Link to="/hotels" className="hover:text-sun transition">
                  Hotels in Makkah & Madinah
                </Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-sun transition">
                  All 15+ Holiday & Pilgrimage Packages
                </Link>
              </li>
              <li>
                <Link to="/apps" className="hover:text-sun transition inline-flex items-center gap-1.5">
                  <span>Mobile Apps</span>
                  <span className="rounded bg-sun/20 text-sun text-[10px] font-black px-1.5 py-0.5 uppercase tracking-wider">
                    Coming Soon
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Support */}
          <div>
            <h4 className="font-serif text-lg text-white mb-4">Services</h4>
            <ul className="grid gap-2.5 text-sm font-semibold">
              <li>
                <Link to="/visa" className="hover:text-sun transition">
                  Saudi Umrah & Tourist Visa Desk
                </Link>
              </li>
              <li>
                <Link to="/transport" className="hover:text-sun transition">
                  Airport Transfers & VIP Cabs
                </Link>
              </li>
              <li>
                <Link to="/deals" className="hover:text-sun transition">
                  Special Coupons & Offers
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-sun transition">
                  Online Booking Engine
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sun transition">
                  Contact & Branch Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-serif text-lg text-white mb-4">Pilgrimage Desk</h4>
            <ul className="grid gap-3 text-sm text-white/75">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-sun shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-sun shrink-0" />
                <a href="mailto:booking@noortours.com" className="hover:text-white transition">
                  booking@noortours.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-sun shrink-0 mt-1" />
                <span>Crawford Market / Bandra West, Mumbai, Maharashtra 400050</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-white/60">
          <span>&copy; {new Date().getFullYear()} Noor Tours & Travels. All rights reserved.</span>
          <span>Bismillah for every journey &bull; Islamic Hospitality Demo</span>
        </div>
      </div>
    </footer>
  );
}
