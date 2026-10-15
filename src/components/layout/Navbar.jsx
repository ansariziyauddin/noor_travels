import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  BadgeCheck,
  CalendarCheck,
  CarFront,
  ChevronDown,
  Clock,
  Layers3,
  MapPin,
  Menu,
  MessageCircle,
  MoonStar,
  Phone,
  Plane,
  Smartphone,
  Sparkle,
  Sparkles,
  Star,
  X,
} from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on route change or click outside
  useEffect(() => {
    setServicesDropdown(false);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const primaryNav = [
    { path: '/umrah', label: 'Umrah', badge: 'Popular' },
    { path: '/hajj', label: 'Hajj 2027', badge: 'Open' },
    { path: '/flights', label: 'Flights' },
    { path: '/hotels', label: 'Hotels' },
    { path: '/packages', label: 'Packages' },
  ];

  const secondaryServices = [
    {
      path: '/visa',
      label: 'Visa Assistance Desk',
      sub: 'Saudi Umrah e-Visa, Tourist 1-Year & UAE Visas',
      icon: BadgeCheck,
    },
    {
      path: '/transport',
      label: 'Airport & VIP Transfers',
      sub: 'Jeddah & Madinah airport pickups, GMC SUVs & coaches',
      icon: CarFront,
    },
    {
      path: '/deals',
      label: 'Special Deals & Offers',
      sub: 'Exclusive family discounts and seasonal promotions',
      icon: Sparkle,
    },
    {
      path: '/services',
      label: 'All Services Directory',
      sub: 'View complete operational steps, instructions & terms',
      icon: Sparkles,
    },
    {
      path: '/apps',
      label: 'Mobile Application',
      sub: 'iOS & Android pilgrimage companion (Coming Soon)',
      icon: Smartphone,
    },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      {/* Top Luxury Micro Bar */}
      <div className="bg-[#021d1b] text-white/75 text-[11px] font-medium border-b border-white/10 hidden md:block">
        <div className="mx-auto flex w-[min(1280px,calc(100%_-_32px))] items-center justify-between py-1.5">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-sun font-bold">
              <Star size={12} className="fill-sun text-sun" />
              Bismillah-ir-Rahman-ir-Rahim
            </span>
            <span className="text-white/30">&bull;</span>
            <span className="text-white/70">Authorized Saudi Ministry & IATA Pilgrimage Operator</span>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5 text-white/80">
              <Clock size={12} className="text-sun" />
              <span>24/7 Pilgrimage Concierge</span>
            </div>
            <span className="text-white/30">&bull;</span>
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1 text-white hover:text-sun transition font-bold"
            >
              <Phone size={11} className="text-sun" />
              +91 98765 43210
            </a>
            <span className="text-white/30">&bull;</span>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#3ce287] hover:underline font-bold"
            >
              <MessageCircle size={12} />
              WhatsApp Direct
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Glass Navbar */}
      <div className="mx-auto mt-2 w-[min(1360px,calc(100%_-_24px))]">
        <nav
          className={`flex items-center justify-between gap-2 xl:gap-4 rounded-2xl border px-3.5 sm:px-4 xl:px-5 py-2.5 transition-[background-color,border-color,box-shadow] duration-200 ${
            scrolled
              ? 'border-black/10 bg-white/95 shadow-[0_16px_40px_rgba(4,29,31,0.12)] backdrop-blur-xl'
              : 'border-white/20 bg-white/90 shadow-[0_12px_36px_rgba(0,0,0,0.08)] backdrop-blur-lg'
          }`}
        >
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#06332f] via-[#0b544e] to-[#0f766e] text-white shadow-md ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-105">
              <MoonStar size={22} className="text-sun" />
              <div className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-sun ring-2 ring-white animate-pulse" />
            </div>
            <div className="shrink-0">
              <div className="flex items-baseline gap-1.5 whitespace-nowrap">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#042825]">
                  NOOR
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#b88c34]">
                  Tours
                </span>
              </div>
              <span className="block text-[8.5px] sm:text-[9px] font-extrabold uppercase tracking-[0.2em] text-slate-500 whitespace-nowrap">
                &bull; Sacred Journeys &bull;
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links - Single line strictly preserved */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 whitespace-nowrap shrink-0">
            {primaryNav.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-2.5 xl:px-3 py-2 text-sm font-bold transition-colors duration-150 rounded-xl whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-deep bg-[#eef7f4] shadow-xs'
                      : 'text-slate-700 hover:text-deep hover:bg-slate-100/70'
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                    <span className="whitespace-nowrap">{link.label}</span>
                    {link.badge && (
                      <span className="rounded-full bg-sun/20 text-[#855700] px-1.5 py-0.2 text-[9px] font-black uppercase tracking-wider whitespace-nowrap shrink-0">
                        {link.badge}
                      </span>
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-deep" />
                    )}
                  </span>
                )}
              </NavLink>
            ))}

            {/* Services Dropdown */}
            <div ref={dropdownRef} className="relative shrink-0">
              <button
                type="button"
                onClick={() => setServicesDropdown(!servicesDropdown)}
                className={`flex items-center gap-1.5 rounded-xl px-2.5 xl:px-3 py-2 text-sm font-bold transition-colors duration-150 whitespace-nowrap shrink-0 ${
                  servicesDropdown || location.pathname.includes('/visa') || location.pathname.includes('/transport') || location.pathname.includes('/deals') || location.pathname.includes('/services')
                    ? 'text-deep bg-[#eef7f4]'
                    : 'text-slate-700 hover:text-deep hover:bg-slate-100/70'
                }`}
              >
                <span className="whitespace-nowrap">Services</span>
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 shrink-0 ${servicesDropdown ? 'rotate-180 text-deep' : 'text-slate-400'}`}
                />
              </button>

              {/* Mega Dropdown Menu */}
              {servicesDropdown && (
                <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+12px)] z-[100] w-[350px] rounded-2xl border border-slate-200/90 bg-white p-3 shadow-[0_24px_55px_rgba(0,0,0,0.24)]">
                  <div className="px-3 py-2 border-b border-slate-100 mb-2 flex items-center justify-between">
                    <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                      Pilgrimage & Travel Desks
                    </p>
                    <span className="text-[10px] font-bold text-teal bg-mint px-2 py-0.5 rounded-full">
                      {secondaryServices.length} Desks
                    </span>
                  </div>
                  <div className="grid gap-1">
                    {secondaryServices.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setServicesDropdown(false)}
                          className="flex items-start gap-3 rounded-xl p-2.5 transition hover:bg-[#f0f8f5] group"
                        >
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-mint text-teal transition group-hover:bg-deep group-hover:text-white">
                            <Icon size={18} />
                          </span>
                          <div>
                            <b className="block text-xs font-extrabold text-slate-900 group-hover:text-deep">
                              {item.label}
                            </b>
                            <span className="block text-[11px] leading-tight text-slate-500 mt-0.5">
                              {item.sub}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-2.5 xl:px-3 py-2 text-sm font-bold transition-colors duration-150 rounded-xl whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-deep bg-[#eef7f4]'
                    : 'text-slate-700 hover:text-deep hover:bg-slate-100/70'
                }`
              }
            >
              Contact
            </NavLink>

            {/* Apps Link - Placed at last in single line */}
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                `relative px-2.5 xl:px-3 py-2 text-sm font-bold transition-colors duration-150 rounded-xl whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-deep bg-[#eef7f4] shadow-xs'
                    : 'text-slate-700 hover:text-deep hover:bg-slate-100/70'
                }`
              }
            >
              {({ isActive }) => (
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                  <span className="whitespace-nowrap">Apps</span>
                  <span className="rounded-full bg-sun/25 text-[#7a4e00] px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider whitespace-nowrap shrink-0">
                    Soon
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-deep" />
                  )}
                </span>
              )}
            </NavLink>
          </div>

          {/* Right Action Elements */}
          <div className="flex items-center gap-2 xl:gap-2.5 shrink-0 whitespace-nowrap">
            <a
              href="tel:+919876543210"
              className="hidden sm:grid h-10 w-10 place-items-center rounded-xl border border-black/10 bg-[#f8faf8] text-deep transition hover:border-deep/30 hover:bg-mint/40 shrink-0"
              aria-label="Call Noor Tours"
              title="+91 98765 43210"
            >
              <Phone size={17} />
            </a>

            <Link
              to="/booking"
              className="relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#06332f] to-[#0f766e] px-3.5 xl:px-4 py-2.5 text-xs font-black text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:ring-2 hover:ring-sun/40 whitespace-nowrap shrink-0"
            >
              <CalendarCheck size={16} className="text-sun shrink-0" />
              <span className="whitespace-nowrap">Book Journey</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-black/10 bg-[#f8faf8] text-deep lg:hidden transition hover:bg-slate-100 shrink-0"
              aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="mx-auto mt-2 w-[min(1280px,calc(100%_-_24px))] rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl backdrop-blur-2xl lg:hidden">
          <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <p className="font-serif text-lg font-bold text-deep">Noor Tours Navigation</p>
              <p className="text-[11px] text-slate-500 font-semibold">Select your destination or service</p>
            </div>
            <span className="rounded-full bg-mint text-teal px-2.5 py-0.5 text-xs font-black">
              Online
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 pb-4">
            {primaryNav.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-xl p-3 text-sm font-bold transition ${
                    isActive ? 'bg-deep text-white font-black' : 'bg-[#f8faf8] text-slate-700 hover:bg-slate-100'
                  }`
                }
              >
                <span className="whitespace-nowrap">{link.label}</span>
                {link.badge && (
                  <span className="rounded bg-sun/30 text-[9px] px-1.5 py-0.5 font-black uppercase text-[#472f00] whitespace-nowrap shrink-0">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `flex items-center justify-between rounded-xl p-3 text-sm font-bold transition ${
                  isActive ? 'bg-deep text-white font-black' : 'bg-[#f8faf8] text-slate-700 hover:bg-slate-100'
                }`
              }
            >
              <span>Contact</span>
            </NavLink>
          </div>

          <div className="border-t border-slate-100 pt-3">
            <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-2">
              Additional Services & Desks
            </p>
            <div className="grid gap-1.5">
              {secondaryServices.map((item) => {
                const Icon = item.icon;
                const isApps = item.path === '/apps';
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center justify-between rounded-xl p-2.5 text-xs font-bold transition ${
                      isApps
                        ? 'bg-[#f0f8f5] text-deep border border-emerald-200/60 font-black'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <Icon size={16} className={isApps ? 'text-deep' : 'text-teal'} />
                      <span>{item.label}</span>
                    </span>
                    {isApps && (
                      <span className="rounded bg-sun/30 text-[9px] px-2 py-0.5 font-black uppercase text-[#472f00]">
                        Soon
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="mt-4 border-t border-slate-100 pt-3 flex gap-2">
            <a
              href="tel:+919876543210"
              className="btn btn-light flex-1 py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-1.5"
            >
              <Phone size={14} /> Call Desk
            </a>
            <Link
              to="/booking"
              className="btn btn-primary flex-1 py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-1.5"
            >
              <CalendarCheck size={14} /> Book Online
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
