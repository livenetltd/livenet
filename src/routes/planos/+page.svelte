<script lang="ts">
	import {onMount} from 'svelte';
	import {PUBLIC_MKAUTH_ADDRESS} from '$env/static/public';
	import {getPlans} from '$lib/planos.model';

	const {token} = getPlans();
	let planos: any;

	const headers = new Headers();
	headers.set('Authorization', `Bearer ${token}`);
	headers.set('Content-Type', 'application/json');

	onMount(async () => await fetch(`http://${PUBLIC_MKAUTH_ADDRESS}/api/plano/listagem`, {headers})
		.then(res => res.json())
		.then(data => planos = data)
		.catch(err => console.error(err))
	)
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