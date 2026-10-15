import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { ChevronUp, MessageCircle } from 'lucide-react';
import { BookingProvider } from './context/BookingContext';
import ScrollToTop from './components/common/ScrollToTop';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import Flights from './pages/Flights';
import Umrah from './pages/Umrah';
import Hajj from './pages/Hajj';
import Hotels from './pages/Hotels';
import Visa from './pages/Visa';
import Transport from './pages/Transport';
import Packages from './pages/Packages';
import Services from './pages/Services';
import Deals from './pages/Deals';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Apps from './pages/Apps';

function GoTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-24 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-deep text-white shadow-xl transition-all duration-300 hover:scale-105 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      aria-label="Go to top"
    >
      <ChevronUp size={22} />
    </button>
  );
}

function PageContainer() {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-transition">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/umrah" element={<Umrah />} />
        <Route path="/hajj" element={<Hajj />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/visa" element={<Visa />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/services" element={<Services />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        {/* Fallback route */}
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <BookingProvider>
        <ScrollToTop />
        <Navbar />
        <main className="min-h-screen">
          <PageContainer />
        </main>
        {/* Floating WhatsApp Quick Connect */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-5 right-5 z-40 grid h-14 w-14 animate-pulseSoft place-items-center rounded-full bg-[#20c66b] text-white shadow-2xl transition hover:scale-105"
        >
          <MessageCircle size={24} />
        </a>
        <GoTop />
        <Footer />
      </BookingProvider>
    </BrowserRouter>
  );
}
