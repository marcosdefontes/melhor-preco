/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				black: '#191919',
				gray: {
					light: '#eeeeee',
					BRAND: '#dddddd'
				},
				green: '#5C946E',
				primary: {
					light: '#bdc1db',
					BRAND: '#7880B5',
					dark: '#414876'
				},
				red: '#FC6471'
			}
		}
	},
	plugins: ['prettier-plugin-tailwindcss']
};
