/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,jsx}',
        './src/components/**/*.{js,jsx}',
        './src/app/**/*.{js,jsx}',
    ],
    theme: {
        extend: {
            colors: {
                neon: {
                    purple: '#a855f7',
                    blue: '#3b82f6',
                    pink: '#ec4899',
                    cyan: '#06b6d4',
                    green: '#10b981',
                    orange: '#f97316',
                    red: '#ef4444',
                    yellow: '#eab308',
                },
                dark: {
                    950: '#05020e',
                    900: '#0a0517',
                    800: '#110a24',
                    700: '#1a1035',
                    600: '#251a4a',
                    500: '#32255e',
                    400: '#453572',
                    300: '#6b5b95',
                },
                glass: {
                    white: 'rgba(255, 255, 255, 0.05)',
                    light: 'rgba(255, 255, 255, 0.08)',
                    medium: 'rgba(255, 255, 255, 0.12)',
                    heavy: 'rgba(255, 255, 255, 0.18)',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Inter', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                'neon-purple': '0 0 20px rgba(168, 85, 247, 0.3), 0 0 60px rgba(168, 85, 247, 0.1)',
                'neon-blue': '0 0 20px rgba(59, 130, 246, 0.3), 0 0 60px rgba(59, 130, 246, 0.1)',
                'neon-pink': '0 0 20px rgba(236, 72, 153, 0.3), 0 0 60px rgba(236, 72, 153, 0.1)',
                'neon-cyan': '0 0 20px rgba(6, 182, 212, 0.3), 0 0 60px rgba(6, 182, 212, 0.1)',
                'neon-green': '0 0 20px rgba(16, 185, 129, 0.3), 0 0 60px rgba(16, 185, 129, 0.1)',
                'glow-sm': '0 0 10px rgba(168, 85, 247, 0.2)',
                'glow-md': '0 0 30px rgba(168, 85, 247, 0.25), 0 0 60px rgba(59, 130, 246, 0.1)',
                'glow-lg': '0 0 40px rgba(168, 85, 247, 0.3), 0 0 80px rgba(59, 130, 246, 0.15), 0 0 120px rgba(236, 72, 153, 0.1)',
                'card': '0 8px 32px rgba(0, 0, 0, 0.3)',
                'card-hover': '0 16px 48px rgba(0, 0, 0, 0.4), 0 0 30px rgba(168, 85, 247, 0.2)',
                'float': '0 20px 60px rgba(0, 0, 0, 0.4)',
            },
            backgroundImage: {
                'gradient-main': 'linear-gradient(135deg, #0a0517 0%, #1a1035 30%, #110a24 60%, #0a0517 100%)',
                'gradient-purple': 'linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #3b82f6 100%)',
                'gradient-warm': 'linear-gradient(135deg, #ec4899 0%, #f97316 100%)',
                'gradient-cool': 'linear-gradient(135deg, #06b6d4 0%, #10b981 100%)',
                'gradient-hero': 'radial-gradient(ellipse at 20% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(59, 130, 246, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 50% 100%, rgba(236, 72, 153, 0.08) 0%, transparent 50%)',
                'gradient-card': 'linear-gradient(135deg, rgba(168, 85, 247, 0.08) 0%, rgba(59, 130, 246, 0.05) 100%)',
                'gradient-mesh': 'radial-gradient(at 40% 20%, rgba(168, 85, 247, 0.12) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(59, 130, 246, 0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(236, 72, 153, 0.08) 0px, transparent 50%)',
            },
            borderRadius: {
                '2xl': '1rem',
                '3xl': '1.5rem',
                '4xl': '2rem',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-slow': 'float 8s ease-in-out infinite',
                'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
                'shimmer': 'shimmer 3s linear infinite',
                'spin-slow': 'spin 12s linear infinite',
                'blob': 'blob 7s infinite alternate',
                'gradient-shift': 'gradientShift 8s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '50%': { transform: 'translateY(-20px) rotate(1deg)' },
                },
                pulseGlow: {
                    '0%, 100%': { opacity: 1, boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)' },
                    '50%': { opacity: 0.8, boxShadow: '0 0 40px rgba(168, 85, 247, 0.5)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                blob: {
                    '0%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
                    '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
                    '100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
                },
                gradientShift: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
            },
            perspective: {
                '1000': '1000px',
                '2000': '2000px',
            },
        },
    },
    plugins: [],
};
