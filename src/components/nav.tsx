const links = [
  { href: "#experiencia", label: "Experiencia" },
  { href: "#formacion", label: "Formación" },
  { href: "#metodologia", label: "Metodología" },
  { href: "#programacion", label: "Programación" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-40 border-b border-line bg-ground/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 px-5 py-3.5">
        <span className="font-display text-lg font-semibold">
          Arantxa Fernández
        </span>
        <ul className="flex flex-wrap gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-semibold text-ink-soft transition-colors hover:text-rose"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
