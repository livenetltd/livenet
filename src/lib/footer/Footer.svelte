<script lang="ts">
	const year = new Date().getFullYear()
</script>

<footer>
	<p>LiveNet Ⓒ 2014 - {year}</p>
	<p>Todos os direitos reservados</p>
</footer>

<style lang="scss">
    footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>