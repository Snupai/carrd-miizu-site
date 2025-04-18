import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
    darkMode: ["class"],
    content: ["./src/**/*.tsx"],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'var(--font-geist-sans)',
                    ...fontFamily.sans
                ]
  		},
  		animation: {
  			'fade-in': 'fadeIn 0.6s ease-out forwards',
  			'box-animations': 'boxFadeIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards, expandBox 2s cubic-bezier(0.4, 0, 0.2, 1) 1s forwards',
  			'letter-appear': 'letterAppear 0.4s ease-out forwards',
  			'button-reveal-1': 'buttonReveal1 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) 1.9s forwards',
  			'button-reveal-2': 'buttonReveal2 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) 2.4s forwards',
  			'button-reveal-3': 'buttonReveal3 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) 2.9s forwards',
  			'button-reveal-4': 'buttonReveal4 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) 3.4s forwards',
  			'heart-pulse': 'heartPulse 2.5s linear infinite',
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': { opacity: '0', transform: 'scale(0.9)' },
  				'100%': { opacity: '1', transform: 'scale(1)' },
  			},
  			boxFadeIn: {
  				'0%': { 
  					opacity: '0',
  					height: 'var(--initial-height)',
  					transform: 'translateY(20px)',
  				},
  				'100%': { 
  					opacity: '1',
  					height: 'var(--initial-height)',
  					transform: 'translateY(0)',
  				},
  			},
  			initialBounce: {
  				'0%': { 
  					opacity: '0',
  					transform: 'translateY(15px)',
  					height: '460px',
  				},
  				'60%': {
  					opacity: '1',
  					transform: 'translateY(-2px)',
  					height: '460px',
  				},
  				'100%': { 
  					opacity: '1',
  					transform: 'translateY(0)',
  					height: '460px',
  				},
  			},
  			expandBox: {
  				'0%': { 
  					maxWidth: 'var(--initial-width)',
  					height: 'var(--initial-height)',
  				},
  				'100%': { 
  					maxWidth: 'var(--expanded-width)',
  					height: 'var(--expanded-height)',
  				},
  			},
  			letterAppear: {
  				'0%': { 
  					opacity: '0',
  					transform: 'translateY(15px)',
  				},
  				'50%': {
  					transform: 'translateY(-3px)',
  				},
  				'100%': { 
  					opacity: '1',
  					transform: 'translateY(0)',
  				},
  			},
  			buttonReveal1: {
  				'0%': { 
  					opacity: '0',
  					transform: 'translateY(-12px)',
  				},
  				'100%': { 
  					opacity: '1',
  					transform: 'translateY(0)',
  				},
  			},
  			buttonReveal2: {
  				'0%': { 
  					opacity: '0',
  					transform: 'translateY(-12px)',
  				},
  				'100%': { 
  					opacity: '1',
  					transform: 'translateY(0)',
  				},
  			},
  			buttonReveal3: {
  				'0%': { 
  					opacity: '0',
  					transform: 'translateY(-12px)',
  				},
  				'100%': { 
  					opacity: '1',
  					transform: 'translateY(0)',
  				},
  			},
  			buttonReveal4: {
  				'0%': { 
  					opacity: '0',
  					transform: 'translateY(-12px)',
  				},
  				'100%': { 
  					opacity: '1',
  					transform: 'translateY(0)',
  				},
  			},
  			showReal: {
  				'0%': { 
  					opacity: '0',
  				},
  				'100%': { 
  					opacity: '1',
  				},
  			},
  			heartReveal: {
  				'0%': { 
  					opacity: '0',
  					transform: 'scale(0.5)',
  				},
  				'100%': { 
  					opacity: '1',
  					transform: 'scale(1)',
  				},
  			},
  			heartPulse: {
  				'0%': { 
  					opacity: '0.8',
  				},
  				'50%': {
  					opacity: '1',
  				},
  				'100%': { 
  					opacity: '0.8',
  				},
  			},
  		},
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		screens: {
  			'xs': '400px',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
