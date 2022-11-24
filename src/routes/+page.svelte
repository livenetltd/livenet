<script lang="ts">
	import Card from '$lib/card/Card.svelte';
	import Looke from '$lib/svgs/looke.svelte';
	import TNT from '$lib/svgs/tntSports.svelte';
	import HBO from '$lib/svgs/hboMax.svelte';
	import Deezer from '$lib/svgs/deezer.svelte';
	import Radio from '$lib/svgs/radio.svelte';
	import Internet1 from '$lib/svgs/Internet1.svelte';
	import Internet2 from '$lib/svgs/internet2.svelte';
	import Elipse from '$lib/svgs/elipse.svelte';
</script>

<svelte:head>
	<title>LiveNet</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
	<section id="hero">
		<div class="container">
			<h1>
				O seu provedor de internet em <br/>
				<span>Rolim de Moura</span>
			</h1>
			<a class="btn-hero" href="/planos">Assinar</a>
		</div>
		<div id="blur-1"></div>
		<div id="blur-2"></div>
		<div id="blur-3"></div>
	</section>
	<section id="grid-card">
		<Card 
			icon="shield" 
			title="Megas Garantidos" 
			description="Pegue uma internet que realmente atende aquilo que foi prometido, sem enganações ou decepções."
		/>
		<Card 
			icon="speed" 
			title="Velocidade na Medida" 
			description="Tenha uma internet que cubra perfeitamente o seu uso diário, com planos maleáveis de acordo com suas necessidades."
		/>
		<Card 
			icon="trator" 
			title="Foco Rural" 
			description="Nós damos uma atenção especial em trazer internet para o interior, e conectar os habitantes destas regiões a uma internet de alta velocidade."
		/>
	</section>
	<section id="brands">
		<ul>
			<li>
				<Deezer />
			</li>
			<li>
				<HBO/>
			</li>
			<li>
				<TNT />
			</li>
			<li>
				<Looke />
			</li>
		</ul>
	</section>
	<section id="modernizar">
		<h2>Chegou a hora de se modernizar</h2>
		<Radio classname="radio-home"/>
		<div class="modernizar-background">
			<div class="container">
				<p>Com uma internet tão rápida quanto a fibra, estamos trazendo uma conexão de qualidade pelo ar, sem fazer postes ficarem cheios de fios.</p>
				<Internet1 classname="modernizar-svg" />
				<p>Contratos, pagamentos, mudança de planos, e suporte podem ser realizados por meio do nosso aplicativo ou site.</p>
				<Internet2 classname="modernizar-svg" />
				<p>Temos atendentes ativos aguardando o seu contato, seja por meio das redes sociais,  telefone, em nosso escritório ou aplicativo.</p>
			</div>
			<Elipse />
		</div>
	</section>
</div>

<style lang="scss">
	
	div {
		#modernizar {
			margin-top: 5em;
			display: flex;
			flex-direction: column;
			align-items: center;
			.modernizar-background {
				width: 100%;
				min-height: 300px;
				background-color: var(--quartiary-color);
				margin-top: -1em;
				display: flex;
				padding-top: 2em;
					flex-direction: column;
					align-items: center;
				.container {
					max-width: 240px;
					display: flex;
					margin: 0 1em;
					flex-direction: column;
					align-items: center;
					p {color: var(--white);}

					:global(.modernizar-svg) {
						width: 100%;
						margin: 2em 0;
					}
				}
				
			}
			h2 {
				text-align: center;
				text-transform: uppercase;
				font-weight: bold;
				background: linear-gradient(90deg, #2A5D85 43.58%, #247CCB 86.12%);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				background-clip: text;

			}
		}
		#brands {
			margin-top: 1.5em;
			display: flex;
			justify-content: center;

			ul {
				list-style: none;

				li:not(:last-child) {
					margin-bottom: 2em;
					
				}
			}
		}
		#grid-card {
			margin-top: -2.5em;
			display: grid;
			place-content: center;
		}
		#hero {
			background-color: #19293E;
			min-height: 200px;
			position: relative;
			overflow: hidden;
			.container {
				padding: 6em 2.75em 7em;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.btn-hero {
					margin-top: 3em;
					border-radius: 2em;
					text-decoration: none;
					color: #E2F2F7;
					font-size: 0.875rem;
					font-weight: bold;
					font-family: 'Quicksand', sans-serif;
					background-color: transparent;
					border: .01em solid #E2F2F7;
					padding: .5em 2.75em;
					transition: all .3s;
					z-index: 1;
					cursor: pointer;
					&:focus {
						outline: none;
  						box-shadow: none;
					}
					&:hover {
						background-color: #E2F2F7;
						color: #19293E;
					}
				}
				h1 {
					margin: 0;
					
					font-size: 1.15rem;
					color: var(--white);
					font-weight: 700;
					text-transform: uppercase;

					span {
						font-size: 1.75rem;
						-webkit-text-stroke: 1px var(--white);
						font-weight: 700;
						letter-spacing: 5%;
						display: inline-block;
						margin-top: .75em;
						text-align: center;
						color: transparent;
						text-transform: uppercase;
					}
				}
			}
			#blur-1, #blur-2, #blur-3 {
				filter: blur(45px);
				border-radius: 4em;
			}
			#blur-1 {
					position: absolute;
					width: 175px;
					bottom: 0;
					right: 0;
					overflow: hidden;
					height: 102px;
					background-color: #1666A7;
				}
				#blur-2 {
					position: absolute;
					width: 88px;
					top: 0;
					left: 0;
					overflow: hidden;
					height: 102px;
					background-color: #1666A7;
				}
				#blur-3 {
					position: absolute;
					width: 95px;
					top: 0;
					right: 0;
					overflow: hidden;
					height: 109px;
					background-color: #1585DC;
				}
		}
	}
</style>
