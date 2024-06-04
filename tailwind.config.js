/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				dark: "#363636",
				"evergreen-light": "#2aa78D",
				primary: "#ADD8E6",
			},
		},
	},
	plugins: [],
};
