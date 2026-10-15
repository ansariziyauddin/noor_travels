import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Reveal from './Reveal';

export default function PageHeader({ kicker, title, description, breadcrumbs = [] }) {
  return (
    <section className="relative overflow-hidden bg-[#052f2a] pb-14 pt-32 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=2200&q=82')",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(243,181,68,.18),transparent_35%),linear-gradient(180deg,rgba(5,47,42,.92),rgba(5,47,42,1))]" />
      <div
        className="absolute inset-x-0 top-0 h-32 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(135deg,rgba(255,255,255,.18) 12.5%,transparent 12.5%,transparent 50%,rgba(255,255,255,.18) 50%,rgba(255,255,255,.18) 62.5%,transparent 62.5%,transparent)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="wrap relative z-10 max-w-4xl">
        {breadcrumbs.length > 0 && (
          <div className="mb-4 flex items-center gap-1.5 text-xs font-bold text-white/60">
            <Link to="/" className="hover:text-sun transition">
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <span key={idx} className="flex items-center gap-1.5">
                <ChevronRight size={13} className="text-white/40" />
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-sun transition">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-sun font-extrabold">{crumb.label}</span>
                )}
              </span>
            ))}
          </div>
        )}

        {kicker && <p className="kicker text-sun">{kicker}</p>}
        <h1 className="font-serif text-[clamp(36px,5vw,64px)] leading-[1.05] tracking-tight">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-[clamp(16px,1.6vw,19px)] leading-relaxed text-white/80">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
