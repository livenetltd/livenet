<script lang="ts">
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section id="hero">
	<h1>
		O seu provedor de internet em <span>Rolim de Moura</span>
	</h1>

	<button>Assinar</button>

</section>

<style>
	#hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		background-color: #19293E;
		min-height: 200px;
		padding: 5em 1em 7em;
	}

	h1 {
		width: 100%;
		font-family: Rubik, Arial;
		font-size: 1.125rem;
		color: #ffffff;
		font-weight: bold;
	}
</style>
