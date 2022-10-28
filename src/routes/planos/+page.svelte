<script>
	import { onMount } from 'svelte'


onMount(async () => await fetch(`http://Client_Id_e22d6064f6f582610cae5e82373b34ea:Client_Secret_84bfe4c3f44463b69709b274f9a1272257f18c1a@172.31.255.2/api/cliente/`, {
	mode: 'cors',
	cache: 'no-cache',
	headers: {
		'Authorization': `Bearer`,
		'Content-Type' : 'application/json',
	}
})
		.then(res => res.json())
		.then(person => console.log(`Dados: ${person}`))
		.catch(err => {
			console.error(err.message)
		})
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