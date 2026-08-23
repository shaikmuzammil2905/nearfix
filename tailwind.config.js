/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nearfix: {
          blue: "#0A2540",
          navy: "#0E2A47",
          sky: "#F0F7FF",
          lightSky: "#EFF6FF",
          orange: "#FF4500",
          orangeHover: "#E03D00",
          green: "#16A34A",
          whatsapp: "#25D366",
          dark: "#0F172A",
          muted: "#64748B",
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 20px -2px rgba(10, 37, 64, 0.06), 0 2px 6px -1px rgba(10, 37, 64, 0.04)',
        cardHover: '0 12px 28px -4px rgba(10, 37, 64, 0.12), 0 4px 12px -2px rgba(10, 37, 64, 0.08)',
        header: '0 2px 10px rgba(10, 37, 64, 0.05)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
