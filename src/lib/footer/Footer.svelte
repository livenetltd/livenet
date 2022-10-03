<script lang="ts">
	const year = new Date().getFullYear()
</script>

<footer>
	<div class="ft1"></div>
	<div class="ft2"></div>
	<div class="ft3"></div>
	<div class="ft4">
		<p>LiveNet Ⓒ 2014 - {year}</p>
		<p>Todos os direitos reservados</p>
	</div>
</footer>

<style lang="scss">
    footer {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		& > div {
			height: 100px;
			width: 100%;
		}
		.ft1 {
			background-color: var(--primary-color) !important;
		}
		.ft2 {
			background-color: var(--secundary-color) !important;
		}
		.ft3 {
			background-color: var(--tertiary-color) !important;
		}
		.ft4 {
			background-color: var(--quartiary-color) !important;


			p {
				color: #3F587A;
			}
		}
	}
</style>