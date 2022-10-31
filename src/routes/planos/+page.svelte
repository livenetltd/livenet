<script lang="ts">
	import {PUBLIC_MKAUTH_ADDRESS, PUBLIC_CLIENT_ID} from '$env/static/public';
	import { onMount } from 'svelte';

	onMount(() => console.log(PUBLIC_CLIENT_ID))
</script>

<svelte:head>
	<title>Planos</title>
	<meta name="description" content="Os planos de internet da LiveNet foram feitos com o objetivo de atendender as necessidades de cada pessoa" />
</svelte:head>

<h1>planos</h1>

<style>
	h1 {
		margin-top: 2em;
		text-transform: capitalize;
	}
</style>