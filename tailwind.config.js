/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
    theme: {
        fontFamily: {
            sans: ['Poppins', 'sans-serif'],
            'sans-regular': ['Poppins-Regular', 'sans-serif'],
        },
        fontSize: {
            sm: [
                '0.825rem',
                {
                    lineHeight: '1rem',
                    letterSpacing: '-0.04em',
                    fontWeight: '400',
                },
            ],
            base: [
                '1rem',
                {
                    lineHeight: '1.5rem',
                    letterSpacing: '0.04em',
                    fontWeight: '400',
                },
            ],
            h3: [
                '1.2rem',
                {
                    lineHeight: '1.5rem',
                    letterSpacing: '0.04em',
                    fontWeight: '400',
                },
            ],
            xl: [
                '1.2rem',
                {
                    lineHeight: '2rem',
                    letterSpacing: '-0.01em',
                    fontWeight: '500',
                },
            ],
            '2xl': [
                '1.75rem',
                {
                    lineHeight: '2.2rem',
                    letterSpacing: '-0.017em',
                    fontWeight: '700',
                },
            ],
            '3xl': [
                '2rem',
                {
                    lineHeight: '2.3rem',
                    letterSpacing: '-0.02em',
                    fontWeight: '400',
                },
            ],
            '4xl': [
                '3rem',
                {
                    lineHeight: '3.5rem',
                    letterSpacing: '-0.03em',
                    fontWeight: '700',
                },
            ],
        },
    },
    plugins: [],
}
