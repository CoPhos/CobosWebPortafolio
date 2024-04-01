/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
    theme: {
        fontFamily: {
            sans: ['"Source Sans 3"', ...defaultTheme.fontFamily.sans],
            SonsieOne: ['Sonsie One'],
        },
    },
    plugins: [],
}
