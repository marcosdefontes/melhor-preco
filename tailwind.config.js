/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				black: '#191919',
				green: '#5C946E',
				primary: {
					100: '#eaeff5',
					200: '#abc0d7',
					300: '#6f93b8',
					400: '#4775a3',
					500: '#336699',
					BRAND: '#336699',
					600: '#2b5884',
					700: '#234a70',
					800: '#142f4a',
					900: '#071727'
				},
				red: '#FC6471'
			}
		}
	},
	plugins: ['prettier-plugin-tailwindcss']
};
