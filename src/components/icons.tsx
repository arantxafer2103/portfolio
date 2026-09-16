type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function MailIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s7-6.3 7-12a7 7 0 0 0-14 0c0 5.7 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function CapIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M2 9 12 4l10 5-10 5-10-5Z" />
      <path d="M6 11v5c0 1.4 2.7 3 6 3s6-1.6 6-3v-5" />
    </svg>
  );
}

export function LeafIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 19C5 10.5 10.5 5 19.5 4.5 19 13.5 13.5 19 5 19Z" />
      <path d="M3.5 20.5 14 10M9.5 14.5h3.8M12 12V8.8" />
    </svg>
  );
}

export function SnowIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 2v20M4 7l16 10M20 7 4 17" />
      <path d="M9 4l3-2 3 2M9 20l3 2 3-2M4 10l-2 3 2 3M20 10l2 3-2 3" />
    </svg>
  );
}

export function SproutIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21V10" />
      <path d="M12 10C12 6 8 5 5 5c0 4 3 6 7 5Z" />
      <path d="M12 13c0-3.5 3.5-4.5 6.5-4.5 0 3.6-2.7 5.2-6.5 4.5Z" />
    </svg>
  );
}

export function SunIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg {...base} strokeWidth={2} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg {...base} strokeWidth={2} className={className}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function CircleIcon({ className }: IconProps) {
  return (
    <svg {...base} strokeLinecap="round" className={className}>
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="5" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="17.5" cy="8.5" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="17.5" cy="15.5" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="12" cy="19" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="6.5" cy="15.5" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="6.5" cy="8.5" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SoundIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 10v4M9 7v10M14 4v16M19 9v6" />
    </svg>
  );
}

export function RunIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="14" cy="4.5" r="1.8" />
      <path d="M9 21l2.5-5-2-2 1-4.5 4 1 2 4 3 2M11.5 14 9 17l-4 1.5" />
    </svg>
  );
}

export function PaletteIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3a9 8 0 1 0 0 16c1.2 0 1.7-1 1.1-2-1-1.7 1.6-2 3-2a4 4 0 0 0 4-4c0-4.4-3.6-8-8.1-8Z" />
      <circle cx="8" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="16" cy="10" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function BookIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 6c-2-1.5-5-2-8-1.5v13c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5v-13c-3-.5-6 0-8 1.5Z" />
      <path d="M12 6v13" />
    </svg>
  );
}

export function HomeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 11 12 4l8 7" />
      <path d="M6 10v9h12v-9" />
      <path d="M10 19v-5h4v5" />
    </svg>
  );
}

export function PlusIcon({ className }: IconProps) {
  return (
    <svg {...base} strokeWidth={2.2} className={className}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function TrophyIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
      <path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8.5 20h7M10 17h4" />
    </svg>
  );
}

export function SparklesIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M10 3.5 11.6 8.4 16.5 10l-4.9 1.6L10 16.5l-1.6-4.9L3.5 10l4.9-1.6Z" />
      <path d="M18 14.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8ZM17.5 3l.6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6Z" />
    </svg>
  );
}

export function GlobeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" />
    </svg>
  );
}

export const seasonIcons = {
  autumn: LeafIcon,
  winter: SnowIcon,
  spring: SproutIcon,
  summer: SunIcon,
};
