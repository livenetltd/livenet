import adapter from '@sveltejs/adapter-auto';
import { sveltekit } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';
import svg from '@poppanator/sveltekit-svg'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter()
	},

	plugins: [
		sveltekit(),
		svg()
	]
};

export default config;
