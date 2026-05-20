// Centralized design tokens — single source of truth for all UI decisions.
// Never hardcode these values in components. Import from here instead.

export const colors = {
  // Backgrounds
  bg: '#F0ECE6',          // warm cream page background
  surface: '#FFFFFF',     // card / surface base
  surfaceRaised: '#F8F5F1', // slightly elevated surface

  // Brand accents (extracted from reference images)
  sage: '#7BA0A0',        // teal-sage green card accent
  sageDim: '#9EBABA',     // lighter sage for hover states
  lavender: '#C5B8D8',    // soft purple card accent
  lavenderDim: '#D5CBE6', // lighter lavender for hover states

  // Ink (text)
  ink: '#1C1C1E',         // primary text — near-black
  inkSecondary: '#6B6868', // secondary labels
  inkMuted: '#9B9898',    // placeholder, captions
  inkFaint: '#C8C4C4',    // disabled, dividers

  // Dark surface (sidebar, dark CTAs)
  dark: '#1C1C1E',
  darkHover: '#2D2D30',

  // Semantic
  border: 'rgba(28,28,30,0.08)',
  borderStrong: 'rgba(28,28,30,0.16)',
  overlay: 'rgba(28,28,30,0.40)',
} as const;

export const space = {
  px: '1px',
  0.5: '2px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
  32: '128px',
} as const;

export const radius = {
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  full: '9999px',
} as const;

// Shadows are intentionally whisper-soft — never hard or dark
export const shadow = {
  xs: '0 1px 2px rgba(0,0,0,0.04)',
  sm: '0 2px 8px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)',
  md: '0 4px 16px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.03)',
  lg: '0 8px 32px rgba(0,0,0,0.08), 0 4px 8px rgba(0,0,0,0.04)',
  xl: '0 16px 48px rgba(0,0,0,0.10), 0 8px 16px rgba(0,0,0,0.04)',
} as const;

export const typography = {
  fontSans: 'var(--font-geist-sans), system-ui, sans-serif',
  fontMono: 'var(--font-geist-mono), monospace',

  size: {
    xs: '11px',
    sm: '13px',
    base: '15px',
    md: '17px',
    lg: '20px',
    xl: '24px',
    '2xl': '30px',
    '3xl': '36px',
    '4xl': '48px',
    '5xl': '64px',
  },

  weight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },

  leading: {
    tight: '1.15',
    snug: '1.3',
    base: '1.5',
    relaxed: '1.7',
  },

  tracking: {
    tight: '-0.02em',
    base: '0em',
    wide: '0.04em',
    wider: '0.08em',
  },
} as const;

export const motion = {
  duration: {
    instant: '80ms',
    fast: '120ms',
    base: '200ms',
    slow: '350ms',
    deliberate: '500ms',
  },
  easing: {
    default: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
} as const;

// Convenience type exports
export type Color = keyof typeof colors;
export type Space = keyof typeof space;
export type Radius = keyof typeof radius;
export type Shadow = keyof typeof shadow;
