<script>
	import {PUBLIC_MKAUTH_ADDRESS, PUBLIC_CLIENT_ID} from '$env/static/public'
	import { onMount } from 'svelte'

	console.log(`Endereço do MK-AUTH: ${PUBLIC_MKAUTH_ADDRESS}`)
	onMount(async () => await fetch(`https://${PUBLIC_MKAUTH_ADDRESS}/api/clientes/listagem`, {
			headers: {
				"Authorization": "Bearer " + new Buffer( PUBLIC_CLIENT_ID + ":" + import.meta.env.CLIENT_SECRET ).toString('base64')
			}
		})
		.then(res => {
			res.json()
		})
		.then(data => console.log(data))
		.catch(err => console.error(err.message))
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