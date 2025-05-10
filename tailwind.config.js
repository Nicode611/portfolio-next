import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        button: '1px 2px 2px 1px rgba(0, 0, 0, 0.285)',
        activeButton: 'inset 1px 2px 2px 0px rgba(0, 0, 0, 0.285)',
        primaryShadow: '2px 2px 0px 2px #277A1C'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        light: {
            DEFAULT: '#ebebeb',
            foreground: 'hsl(var(--light-foreground))'
        },
        dark: {
        DEFAULT: '#ebebeb',
        foreground: 'hsl(var(--dark-foreground))'
        },
        primary: {
          DEFAULT: '#064E6A',
          foreground: 'hsl(var(--primary-foreground))'
        },
        primaryLight: {
          DEFAULT: '#1A6D8B',
          foreground: 'hsl(var(--primaryLight-foreground))'
        },
        primaryDark: {
          DEFAULT: '#003446',
          foreground: 'hsl(var(--primaryDark-foreground))'
        },
        secondary: {
          DEFAULT: '#AACCA6',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        water: '#188396',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      fontFamily: {
        sans: [
          'Arial',
          'sans-serif'
        ],
        fancy: [
          'Cherry Bomb One',
          'cursive'
        ]
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [tailwindcssAnimate],
};