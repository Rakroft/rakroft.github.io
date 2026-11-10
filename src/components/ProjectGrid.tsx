import { useState } from 'react';
import type { Category, Project } from '../i18n/es';

// Isla React: tarjetas de proyectos con filtro por categoría.

interface Props {
  projects: Project[];
  filters: Record<'all' | Category, string>;
  filterLabel: string;
  codeLabel: string;
  siteLabel: string;
}

type Filter = 'all' | Category;

const Arrow = () => (
  <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export default function ProjectGrid({ projects, filters, filterLabel, codeLabel, siteLabel }: Props) {
  const [active, setActive] = useState<Filter>('all');
  const order: Filter[] = ['all', 'sistemas', 'redes', 'python', 'web'];
  const visible = projects
    .map((p, i) => ({ ...p, n: i + 1 }))
    .filter((p) => active === 'all' || p.categories.includes(active));

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label={filterLabel}>
        {order.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={active === f}
            onClick={() => setActive(f)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              active === f
                ? 'border-ink bg-ink text-paper'
                : 'border-line text-muted hover:border-ink/50 hover:text-ink'
            }`}
          >
            {filters[f]}
          </button>
        ))}
      </div>

      <ul className="grid gap-5 md:grid-cols-2">
        {visible.map((p) => (
          <li
            key={p.title}
            className="group flex flex-col rounded-2xl border border-line bg-card p-7 backdrop-blur-[2px] transition duration-300 hover:-translate-y-1 hover:border-ink/30 hover:shadow-[0_18px_40px_-28px_rgb(0_0_0/0.35)] md:p-8"
          >
            <div className="flex items-center justify-between text-xs tracking-wide text-muted">
              <span className="tabular-nums">P.{String(p.n).padStart(2, '0')}</span>
              <span className="uppercase tracking-[0.18em]">
                {p.categories.map((c) => filters[c]).join(' · ')}
              </span>
            </div>
            <h3 className="mt-6 font-serif text-3xl leading-tight">{p.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{p.description}</p>
            <ul className="mt-6 flex flex-wrap gap-1.5">
              {p.tags.map((tag) => (
                <li key={tag} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">
                  {tag}
                </li>
              ))}
            </ul>
            {(p.code || p.site) && (
              <div className="mt-auto flex gap-5 pt-7 text-sm">
                {p.code && (
                  <a href={p.code} target="_blank" rel="noopener" className="link-line inline-flex items-center gap-1 pb-0.5">
                    {codeLabel} <Arrow />
                  </a>
                )}
                {p.site && (
                  <a href={p.site} target="_blank" rel="noopener" className="link-line inline-flex items-center gap-1 pb-0.5">
                    {siteLabel} <Arrow />
                  </a>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
