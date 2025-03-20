/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'text': '2px 2px 4px rgba(0, 0, 0, 0.3)', // Custom text shadow
      },
    },
  },
  plugins: [],
}

