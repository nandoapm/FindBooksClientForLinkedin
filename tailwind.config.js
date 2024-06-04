/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				evergreen: "#2b4341",
				"evergreen-light": "#2aa78D",
			},
		},
	},
	plugins: [],
};
