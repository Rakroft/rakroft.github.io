// Isla React: botón para cambiar entre modo claro y oscuro.
// El tema inicial ya lo ha puesto el script del <head>. El icono se elige con CSS (variante dark:),
// así se ve bien desde el primer momento, antes incluso de que React cargue.

type Theme = 'light' | 'dark';

export default function ThemeToggle({ label }: { label: string }) {
  const toggle = () => {
    const root = document.documentElement;
    const next: Theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'dark' ? '#141413' : '#ecebe8');
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* modo privado: no pasa nada */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="grid size-9 place-items-center rounded-full text-muted transition-colors hover:bg-ink/5 hover:text-ink"
    >
      {/* Luna (modo claro): al pulsar pasa a oscuro */}
      <svg viewBox="0 0 24 24" className="size-[18px] dark:hidden" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
        <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
      </svg>
      {/* Sol (modo oscuro): al pulsar vuelve a claro */}
      <svg viewBox="0 0 24 24" className="hidden size-[18px] dark:block" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  );
}
