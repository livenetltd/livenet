<script lang="ts">
	import Footer from '$lib/footer/Footer.svelte';
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import '../fonts.css';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		min-height: 75vh;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
