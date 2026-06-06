// ══════════════════════════════════════
// Custom SVG Icon Set
// Replaces emoji with refined line art
// ══════════════════════════════════════

const S = { fill:'none', stroke:'currentColor', strokeWidth:'1.3', strokeLinecap:'round', strokeLinejoin:'round' };

export function FlaskIcon({ size=24, className }) {
  return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} className={className} {...S}>
    <path d="M9 3h6" /><line x1="12" y1="3" x2="12" y2="9" />
    <path d="M8 9 L16 9 L18 14 Q19 21 12 21 Q5 21 6 14 Z" />
    <circle cx="12" cy="16" r="1.3" fill="currentColor" opacity=".4" />
    <path d="M8 12 L16 12" opacity=".3" />
  </svg>);
}

export function SproutIcon({ size=16, className }) {
  return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width={size} height={size} className={className} {...S}>
    <path d="M8 14 L8 6" /><path d="M8 6 Q4 6 4 2 Q8 4 8 6 Q8 4 12 2 Q12 6 8 6" />
    <path d="M8 6 Q6 5 6 3" opacity=".4" /><path d="M8 6 Q10 5 10 3" opacity=".4" />
  </svg>);
}

export function BookOpenIcon({ size=16, className }) {
  return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width={size} height={size} className={className} {...S}>
    <path d="M2 3 L8 5 L14 3 L14 12 L8 14 L2 12 Z" /><line x1="8" y1="5" x2="8" y2="14" />
    <path d="M2 6 L8 8 L14 6" opacity=".4" /><path d="M2 9 L8 11 L14 9" opacity=".3" />
  </svg>);
}

export function TelescopeIcon({ size=16, className }) {
  return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width={size} height={size} className={className} {...S}>
    <line x1="2" y1="14" x2="8" y2="8" /><line x1="4" y1="12" x2="6" y2="6" />
    <circle cx="7" cy="5" r="3" /><circle cx="7" cy="5" r="1" fill="currentColor" opacity=".4" />
    <circle cx="12" cy="2" r="1.5" />
  </svg>);
}

export function TempleIcon({ size=16, className }) {
  return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width={size} height={size} className={className} {...S}>
    <rect x="4" y="2" width="8" height="3" /><rect x="6" y="5" width="4" height="9" />
    <line x1="6" y1="7" x2="10" y2="7" /><line x1="6" y1="10" x2="10" y2="10" />
    <path d="M3 14 L8 11 L13 14" />
  </svg>);
}

export function LockIcon({ size=18, className }) {
  return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width={size} height={size} className={className} {...S}>
    <rect x="4" y="8" width="10" height="8" rx="1.5" />
    <path d="M7 8 L7 5 C7 3 9 2.5 9 2.5 C9 2.5 11 3 11 5 L11 8" />
    <circle cx="9" cy="12" r="1" fill="currentColor" opacity=".4" />
    <line x1="9" y1="12.5" x2="9" y2="14" />
  </svg>);
}

export function ChevronLeft({ size=14, className }) {
  return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width={size} height={size} className={className} {...S}>
    <polyline points="9 3 5 7 9 11" />
  </svg>);
}

export function ChevronRight({ size=14, className }) {
  return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width={size} height={size} className={className} {...S}>
    <polyline points="5 3 9 7 5 11" />
  </svg>);
}
