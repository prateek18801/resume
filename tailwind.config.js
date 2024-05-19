/** @type {import("tailwindcss").Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                "print": { "raw": "print" },
            },
            colors: {
                "accent-color": "#1d4ed8"
            },
            fontFamily: {
                "montserrat": ["Montserrat", "sans-serif"],
                "inter": ["Inter", "sans-serif"],
            }
        },
    },
    plugins: [],
}

