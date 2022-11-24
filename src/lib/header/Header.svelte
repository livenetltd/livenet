<script lang="ts">
	import Logo from '$lib/svgs/logo.svelte';
	import MenuOpen from '$lib/svgs/menuOpen.svelte';
	 
	let open: boolean = false;
	const click = () => open = !open
</script>

<header>
	<div class="container">
		<div id="nav-brand">
			<a href="/" title="Home">
				<Logo />
			</a>
		</div>
		<div id="menu-icon" on:click={click}>
			<MenuOpen />
		</div>
	</div>
</header>


<div id="nav" class:open>
	<nav>
		<a href="http://livenet.cloud/central" rel="noopener noreferrer">Central do Cliente</a>
		<div class="divisor"></div>
		<ul>
			<li><a href="/" title="Home">Home</a></li>
			<li><a href="/planos" title="Planos">Planos</a></li>
			<li><a href="/servicos" title="Serviços Adicionais">Serviços Adicionais</a></li>
			<li><a href="/somos" title="Quem Somos">Quem Somos</a></li>
			<li><a href="/cobertura" title="Cobertura">Cobertura</a></li>
			<li><a href="/faq" title="FAQ">FAQ</a></li>
		</ul>
	</nav>
</div>
<div id="nav-background" on:click={click} class:open></div>

<style lang="scss">
	#nav, header{z-index: 9999999;}
	#nav-background {
		position: fixed;
		top: 0;
		z-index: 999;
		width: 100vw;
		height: 100vh;
		background-color: #00000001;
		display: none;

		&.open {
			display: block;
		}
	}
	#nav {
		&.open{
			right: 50%;
		}
		position: fixed;
		background-color: var(--transparent-white);
		top: 50%;
		min-width: max-content;
		right: -120%;
		padding: 1em 2em;
		transition: right .3s cubic-bezier(0.39, 0.575, 0.565, 1);
		transform: translate(50%, -50%);
		border-radius: 1.5em;
		box-shadow: 0px 10px 25px rgba(21, 133, 220, 0.34);
		-webkit-backdrop-filter: blur(6px);
		backdrop-filter: blur(4px);

		nav {
			& > a {
				font-weight: bold;
			}
			.divisor {
				height: 2px;
				background-color: var(--lightblack-color);
				margin-top: 10px;
			}
			ul {
				list-style: none;
				padding: 0;
			}
			li {
				font-size: 1rem;

				&:not(:last-child) {
					margin-bottom: 1em;
				}
			}
		}
	}
	header {
		width: 100%;
		padding: 1em 0 .5em;
		background-color: var(--transparent-white);
		-webkit-backdrop-filter: blur(6px);
  		backdrop-filter: blur(4px);
		position: fixed;
		display: flex;
		justify-content: center;
		

		.container {
			width: 90%;
			display: flex;
			justify-content: space-between;
		}
		#menu-icon {
			&:focus{
				outline:none !important;
				-webkit-tap-highlight-color: rgba($color: #000000, $alpha: 0);

				}
				cursor: pointer;
			}
		}
		
	
</style>
