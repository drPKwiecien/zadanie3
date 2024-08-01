/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                oceanBlue: "#0077B6", // Replace with your desired shade of ocean blue
            },
            fontFamily: {
                "roboto-slab": ["Roboto Slab", "serif"],
            },
            typography: {
                DEFAULT: {
                    css: {
                        h1: {
                            fontSize: "1.0rem", // Tailwind's 'text-4xl'
                            fontWeight: "700",
                            marginBottom: "1rem", // Tailwind's 'mb-4'
                            padding: "0.5rem", // Tailwind's 'p-2'
                        },
                        h2: {
                            fontSize: "0.85rem", // Tailwind's 'text-3xl'
                            fontWeight: "600",
                            marginBottom: "0.75rem", // Tailwind's 'mb-3'
                            padding: "0.5rem", // Tailwind's 'p-2'
                        },
                        // Add more elements as needed
                    },
                },
            },
        },
    },
    plugins: [
        require("daisyui"),
        require("@tailwindcss/typography"), // Add this plugin to use the typography settings
    ],
};
