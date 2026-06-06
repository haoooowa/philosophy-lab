// ═══════════════════════════════════════════
// Philosophical Category Icon System v2
// Refined geometric line art — thinner stroke, subtle fills
// ═══════════════════════════════════════════

const S = { fill:'none', stroke:'currentColor', strokeWidth:'1.2', strokeLinecap:'round', strokeLinejoin:'round' };

export function ScalesIcon({ size = 64, className }) {
  return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={size} height={size} className={className} {...S}>
    <line x1="32" y1="14" x2="32" y2="50" />
    <line x1="16" y1="46" x2="48" y2="46" />
    <path d="M16 46 L32 14 L48 46" opacity="0.25" fill="currentColor" />
    <line x1="16" y1="46" x2="16" y2="52" />
    <line x1="48" y1="46" x2="48" y2="52" />
    <circle cx="32" cy="50" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="16" cy="34" r="8" opacity="0.35" />
    <circle cx="48" cy="34" r="8" opacity="0.35" />
    <circle cx="16" cy="34" r="2.5" fill="currentColor" opacity="0.5" />
    <circle cx="48" cy="34" r="2.5" fill="currentColor" opacity="0.5" />
  </svg>);
}

export function CompassIcon({ size = 64, className }) {
  return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={size} height={size} className={className} {...S}>
    <circle cx="32" cy="32" r="27" />
    <circle cx="32" cy="32" r="15" opacity="0.2" strokeDasharray="3 3" />
    <circle cx="32" cy="32" r="5" opacity="0.25" fill="currentColor" />
    <line x1="32" y1="4" x2="32" y2="22" />
    <line x1="32" y1="42" x2="32" y2="60" />
    <line x1="4" y1="32" x2="22" y2="32" />
    <line x1="42" y1="32" x2="60" y2="32" />
    <path d="M32 4 L38 18 L32 22 L26 18 Z" opacity="0.3" fill="currentColor" />
    <circle cx="32" cy="32" r="2" fill="currentColor" opacity="0.7" />
  </svg>);
}

export function EyeIcon({ size = 64, className }) {
  return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={size} height={size} className={className} {...S}>
    <ellipse cx="32" cy="30" rx="24" ry="18" />
    <ellipse cx="32" cy="30" rx="16" ry="12" opacity="0.2" fill="currentColor" />
    <circle cx="32" cy="30" r="7" />
    <circle cx="32" cy="30" r="3" fill="currentColor" opacity="0.5" />
    <path d="M10 18 L16 10" opacity="0.25" />
    <path d="M54 18 L48 10" opacity="0.25" />
    <path d="M10 42 L16 50" opacity="0.25" />
    <path d="M54 42 L48 50" opacity="0.25" />
    <circle cx="32" cy="6" r="1.5" fill="currentColor" opacity="0.3" />
  </svg>);
}

export function BrainIcon({ size = 64, className }) {
  return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={size} height={size} className={className} {...S}>
    <path d="M18 44 C8 40, 8 26, 18 20 C16 10, 28 6, 32 16 C36 6, 48 10, 46 20 C56 26, 56 40, 46 44" opacity="0.15" fill="currentColor" />
    <path d="M18 44 C8 40, 8 26, 18 20 C16 10, 28 6, 32 16 C36 6, 48 10, 46 20 C56 26, 56 40, 46 44" />
    <path d="M22 48 C20 56, 30 58, 32 54 C34 58, 44 56, 42 48" />
    <line x1="32" y1="16" x2="32" y2="54" opacity="0.2" strokeDasharray="2 4" />
    <circle cx="26" cy="24" r="2.5" opacity="0.4" />
    <circle cx="38" cy="24" r="2.5" opacity="0.4" />
    <path d="M28 34 Q32 30 36 34" opacity="0.4" />
  </svg>);
}

export function DiamondIcon({ size = 64, className }) {
  return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={size} height={size} className={className} {...S}>
    <polygon points="32,3 61,32 32,61 3,32" opacity="0.08" fill="currentColor" />
    <polygon points="32,3 61,32 32,61 3,32" />
    <polygon points="32,17 48,32 32,47 16,32" opacity="0.3" />
    <line x1="32" y1="3" x2="32" y2="17" opacity="0.3" />
    <line x1="32" y1="47" x2="32" y2="61" opacity="0.3" />
    <circle cx="32" cy="32" r="2" fill="currentColor" opacity="0.6" />
  </svg>);
}

export function PillarsIcon({ size = 64, className }) {
  return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={size} height={size} className={className} {...S}>
    <rect x="12" y="10" width="12" height="44" rx="2" opacity="0.08" fill="currentColor" />
    <rect x="40" y="10" width="12" height="44" rx="2" opacity="0.08" fill="currentColor" />
    <rect x="12" y="10" width="12" height="44" rx="2" />
    <rect x="40" y="10" width="12" height="44" rx="2" />
    <line x1="12" y1="18" x2="24" y2="18" />
    <line x1="40" y1="18" x2="52" y2="18" />
    <line x1="12" y1="44" x2="24" y2="44" />
    <line x1="40" y1="44" x2="52" y2="44" />
    <line x1="24" y1="6" x2="40" y2="6" />
    <line x1="24" y1="58" x2="40" y2="58" />
    <line x1="24" y1="6" x2="12" y2="10" opacity="0.3" />
    <line x1="40" y1="6" x2="52" y2="10" opacity="0.3" />
  </svg>);
}

export function BookIcon({ size = 64, className }) {
  return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={size} height={size} className={className} {...S}>
    <path d="M10 12 L32 18 L54 12 L54 46 L32 52 L10 46 Z" />
    <path d="M32 18 L32 52" />
    <path d="M10 12 L10 46" opacity="0.15" fill="currentColor" />
    <path d="M10 22 L32 28" opacity="0.3" />
    <path d="M32 28 L54 22" opacity="0.3" />
    <path d="M10 32 L32 38" opacity="0.2" />
    <path d="M32 38 L54 32" opacity="0.2" />
  </svg>);
}

export function PhilosopherIcon({ size = 64, className }) {
  return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={size} height={size} className={className} {...S}>
    <circle cx="32" cy="16" r="8" opacity="0.12" fill="currentColor" />
    <circle cx="32" cy="16" r="8" />
    <path d="M24 50 L24 44 C24 30 40 30 40 44 L40 50" opacity="0.12" fill="currentColor" />
    <path d="M24 44 C24 30 40 30 40 44" />
    <line x1="32" y1="24" x2="32" y2="30" />
    <line x1="24" y1="36" x2="40" y2="36" />
    <circle cx="32" cy="38" r="1.5" fill="currentColor" opacity="0.5" />
  </svg>);
}
