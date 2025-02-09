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
  			'box-animations': 'initialBounce 1s cubic-bezier(0.4, 0, 0.2, 1) forwards, expandBox 2s cubic-bezier(0.34, 1.56, 0.64, 1) 1s forwards',
  			'letter-appear': 'letterAppear 0.4s ease-out forwards',
  			'button-reveal-1': 'buttonReveal1 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) 2.4s forwards',
  			'button-reveal-2': 'buttonReveal2 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) 2.9s forwards',
  			'button-reveal-3': 'buttonReveal3 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) 3.4s forwards',
  			'button-reveal-4': 'buttonReveal4 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) 3.9s forwards',
  			'heart-pulse': 'heartPulse 1.5s ease-in-out infinite',
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': { opacity: '0', transform: 'scale(0.9)' },
  				'100%': { opacity: '1', transform: 'scale(1)' },
  			},
  			initialBounce: {
  				'0%': { 
  					opacity: '0',
  					transform: 'translateY(15px)',
  				},
  				'60%': {
  					opacity: '1',
  					transform: 'translateY(-2px)',
  				},
  				'100%': { 
  					opacity: '1',
  					transform: 'translateY(0)',
  				},
  			},
  			expandBox: {
  				'0%': { 
  					maxWidth: '400px',
  				},
  				'100%': { 
  					maxWidth: '952px',
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
  					transform: 'translate(-8px, -20%) rotate(-0.5deg)',
  				},
  				'50%': {
  					transform: 'translate(4px, 5%) rotate(0.3deg)',
  				},
  				'100%': { 
  					opacity: '1',
  					transform: 'translate(0, 0) rotate(0deg)',
  				},
  			},
  			buttonReveal2: {
  				'0%': { 
  					opacity: '0',
  					transform: 'translate(8px, -20%) rotate(0.5deg)',
  				},
  				'50%': {
  					transform: 'translate(-4px, 5%) rotate(-0.3deg)',
  				},
  				'100%': { 
  					opacity: '1',
  					transform: 'translate(0, 0) rotate(0deg)',
  				},
  			},
  			buttonReveal3: {
  				'0%': { 
  					opacity: '0',
  					transform: 'translate(-8px, -20%) rotate(-0.5deg)',
  				},
  				'50%': {
  					transform: 'translate(4px, 5%) rotate(0.3deg)',
  				},
  				'100%': { 
  					opacity: '1',
  					transform: 'translate(0, 0) rotate(0deg)',
  				},
  			},
  			buttonReveal4: {
  				'0%': { 
  					opacity: '0',
  					transform: 'translate(8px, -20%) rotate(0.5deg)',
  				},
  				'50%': {
  					transform: 'translate(-4px, 5%) rotate(-0.3deg)',
  				},
  				'100%': { 
  					opacity: '1',
  					transform: 'translate(0, 0) rotate(0deg)',
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
  			heartPulse: {
  				'0%': { 
  					opacity: '0.4',
  					transform: 'scale(0.9)',
  				},
  				'50%': {
  					opacity: '0.7',
  					transform: 'scale(1.1)',
  				},
  				'100%': { 
  					opacity: '0.4',
  					transform: 'scale(0.9)',
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
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
