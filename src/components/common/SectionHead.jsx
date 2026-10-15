import Reveal from './Reveal';

export default function SectionHead({ kicker, title, lede, dark = false, action }) {
  return (
    <Reveal className="mb-10">
      <div className="flex items-end justify-between gap-8 max-lg:block">
        <div>
          {kicker && <p className="kicker">{kicker}</p>}
          {title && (
            <h2 className={`max-w-3xl font-serif text-[clamp(32px,5vw,56px)] leading-[1.05] ${dark ? 'text-white' : 'text-ink'}`}>
              {title}
            </h2>
          )}
        </div>
        <div className="max-lg:mt-4">
          {lede && (
            <p className={`max-w-lg leading-7 ${dark ? 'text-white/75' : 'text-slate-600 font-medium'}`}>
              {lede}
            </p>
          )}
          {action && <div className="mt-4">{action}</div>}
        </div>
      </div>
    </Reveal>
  );
}
