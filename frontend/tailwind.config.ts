import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        brand: {
          blue: {
            DEFAULT: '#2A53A0',
            deep: '#1B3B7A',
            dark: '#1B3B7A',
            light: '#EBF1FA',
            soft: '#DCE7F7',
            50: '#EEF3FA',
            100: '#DCE5F4',
            200: '#B9CBE8',
            300: '#8FAAD6',
            400: '#5F82C1',
            500: '#3D65AE',
            600: '#2A53A0',
            700: '#224586',
            800: '#1B3B7A',
            900: '#152F5F',
          },
          yellow: {
            DEFAULT: '#F6EC3F',
            hover: '#EBDC1F',
            dark: '#E6D91F',
            tint: '#FFFDE6',
            soft: '#FBF9EC',
          },
          gray: {
            DEFAULT: '#3F3F3F',
            50: '#F7F7F7',
            100: '#EDEDED',
            200: '#D9D9D9',
            300: '#BFBFBF',
            400: '#8C8C8C',
            500: '#6B6B6B',
            600: '#4F4F4F',
            700: '#3F3F3F',
            800: '#2B2B2B',
            900: '#1A1A1A',
          },
        },
        canvas: {
          DEFAULT: '#F8FAFD',
          alt: '#F4F7FC',
        },
      },
      fontFamily: {
        sans: ['var(--font-lato)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-lato)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-hero': [
          '56px',
          { lineHeight: '64px', letterSpacing: '-0.02em', fontWeight: '900' },
        ],
        'display-hero-mobile': [
          '36px',
          { lineHeight: '44px', letterSpacing: '-0.01em', fontWeight: '900' },
        ],
        'headline-xl': [
          '40px',
          { lineHeight: '48px', letterSpacing: '-0.015em', fontWeight: '900' },
        ],
        'headline-xl-mobile': [
          '28px',
          { lineHeight: '36px', letterSpacing: '-0.01em', fontWeight: '900' },
        ],
        'headline-lg': ['32px', { lineHeight: '40px', fontWeight: '700' }],
        'headline-md': ['22px', { lineHeight: '30px', fontWeight: '700' }],
        'headline-sm': ['18px', { lineHeight: '26px', fontWeight: '700' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'label-lg': ['15px', { lineHeight: '20px', letterSpacing: '0.01em', fontWeight: '700' }],
        'label-md': ['13px', { lineHeight: '18px', letterSpacing: '0.02em', fontWeight: '600' }],
        'label-sm': ['11px', { lineHeight: '14px', letterSpacing: '0.04em', fontWeight: '700' }],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        '4xl': '2rem',
        '5xl': '2.5rem',
        organic: '40px 18px 40px 18px',
      },
      boxShadow: {
        soft: '0 20px 50px -24px rgb(42 83 160 / 0.35)',
        card: '0 8px 30px -16px rgb(63 63 63 / 0.2)',
        organic: '0 20px 40px -15px rgba(42,83,160,0.08), 0 0 20px 0 rgba(0,0,0,0.02)',
        'organic-lg': '0 25px 50px -12px rgba(42,83,160,0.16)',
        buttercup: '0 12px 28px -6px rgba(246,236,63,0.55)',
        'glow-sapphire': '0 10px 30px -5px rgba(42,83,160,0.35)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-up': 'fade-up 0.6s ease-out both',
        'fade-in': 'fade-in 0.5s ease-out both',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
