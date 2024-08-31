/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {

			'bianco':'#FCFCFB',
			'blu':'#1E1EFF',
			'blumedio':'#031795',
			'bluscuro':'#0D1130',
			'nero':'#030306',
			'verdebianco':'#FBFBFB',
			'verdechiaro':'#C8CEC8',
			'verdemedio':'#35534A',
			'verdescuro':'#22362F',
			'verdenero':'#030806',

		},
		fontFamily: {
			'sans': ['Aspekta'],
		  }

	},
	plugins: [],
}
