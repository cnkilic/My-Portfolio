/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        deneme: "#FFB6C1",
      },
      spacing: {
        '0.75': '0.21rem',
      },
      fontSize: {
        xxs: ['0.625rem', '0.75rem'],
        ssm: ['0.8125rem', '1.125rem'],
        xll: ['1.375rem', '1.875rem'],
        "2xll": ['1.6875rem', '2.125rem'],
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      animation: {
        wawe: "wawe 2.1s ease-in-out infinite",
      },

      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        wawe: {
          "0%": { transform: "rotate( 0deg)" },
          "10%": { transform: "rotate( 14deg)" },
          "20%": { transform: "rotate( -8deg)" },
          "30%": { transform: "rotate( 14deg)" },
          "40%": { transform: "rotate( -4deg)" },
          "50%": { transform: "rotate( 10deg)" },
          "60%": { transform: "rotate( 0deg)" },
          "100%": { transform: "rotate( 0deg)" },
        },
      },
    },
  },
  plugins: [],
};
