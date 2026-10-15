import { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';

export default function CustomSelect({ label, value, onChange, options = [] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleOutside);
    }
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [open]);

  return (
    <div ref={ref} className="relative block">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`w-full min-h-[70px] flex flex-col justify-center text-left rounded-2xl border bg-[#f8faf8] px-4 py-2.5 transition focus:outline-none ${
          open ? 'border-deep ring-2 ring-deep/20 bg-white shadow-sm' : 'border-black/10 hover:border-black/25 hover:bg-white'
        }`}
      >
        <span className="block text-[11px] font-black uppercase tracking-wider text-slate-500">{label}</span>
        <div className="mt-1 flex items-center justify-between gap-2">
          <span className="block truncate text-sm font-black text-ink">{value}</span>
          <ChevronDown
            size={16}
            className={`text-slate-400 shrink-0 transition-transform duration-200 ${open ? 'rotate-180 text-deep' : ''}`}
          />
        </div>
      </button>

      {open && (
        <div className="absolute left-0 top-[calc(100%+6px)] z-50 max-h-64 w-full min-w-[260px] overflow-y-auto rounded-xl border border-black/10 bg-white p-2 shadow-[0_16px_40px_rgba(4,29,31,0.18)]">
          {options.map((opt) => {
            const isSelected = opt === value;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-left text-sm transition ${
                  isSelected
                    ? 'bg-mint font-extrabold text-teal'
                    : 'font-semibold text-slate-700 hover:bg-[#f7f4ec] hover:text-deep'
                }`}
              >
                <span className="truncate pr-2">{opt}</span>
                {isSelected && <Check size={16} className="shrink-0 text-teal" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
