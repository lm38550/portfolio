/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{ts,js,jsx,tsx}",
        "./src/ui/**/*.{ts,js,jsx,tsx}",
        "./src/components/**/*.{ts,js,jsx,tsx}",
        "./src/**/*.{ts,js,jsx,tsx}",
    ],
    theme: {
        extend: {},
        colors: {
            night: {
                100: '#11131F',
                200: '#182449',
                300: '#253974',
                400: '#3A4F97',
                500: '#3E63DD',
                600: '#5472E4',
                DEFAULT: '#9EB1FF',
                800: '#D6E1FF',
            },
            day: {
                100: '#FDFDFE',
                200: '#EDF2FE',
                300: '#D2DEFF',
                400: '#ABBDF9',
                500: '#3E63DD',
                600: '#3358D4',
                DEFAULT: '#3A5BC7',
                800: '#1F2D5C',
            }
        },
        fontSize: {
            "debug" : "200px",
            "5xl": [
                "5rem",
                {
                    lineHeight: "1.5em",
                    letterSpacing: "0",
                    fontWeight: 700,
                }
            ],
            "4xl": [
                "3rem",
                {
                    lineHeight: "1.1em",
                    letterSpacing: "0",
                    fontWeight: 700,
                }
            ],
            "3xl": [
                "2rem",
                {
                    lineHeight: "1em",
                    letterSpacing: "0",
                    fontWeight: 700,
                }
            ],
            "2xl": [
                "1.6rem",
                {
                    lineHeight: "1em",
                    letterSpacing: "0",
                    fontWeight: 700,
                }
            ],
            "xl": [
                "1.3rem",
                {
                    lineHeight: "1em",
                    letterSpacing: "0",
                    fontWeight: 700,
                }
            ],
            "lg": [
                "1.1rem",
                {
                    lineHeight: "1em",
                    letterSpacing: "0",
                    fontWeight: 400,
                }
            ],
            "base": [
                "1rem",
                {
                    lineHeight: "1em",
                    letterSpacing: "0",
                    fontWeight: 400,
                }
            ],
            "sm": [
                "0.85rem",
                {
                    lineHeight: "1em",
                    letterSpacing: "0",
                    fontWeight: 400,
                }
            ],

        }
    },
    plugins: [],
}