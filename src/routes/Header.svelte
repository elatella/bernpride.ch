<script lang="ts">
	import Navigation from './Navigation.svelte';
	import logo from '$lib/images/logo-yellow.svg';
	import menu from '$lib/images/menu.svg';
	import closeMenu from '$lib/images/closemenu.svg';

	let isNavOpen: boolean;
</script>

<div class="root">
	<div class="main-content">
		<a
			href="/"
			on:click={() => {
				isNavOpen = false;
			}}
		>
			<img src={logo} alt="BernPride" width="147" height="30" />
		</a>

		<div>
			<input
				type="image"
				src={isNavOpen ? closeMenu : menu}
				alt={isNavOpen ? 'Schliessen' : 'Menu'}
				style="width:30px;padding:0;"
				on:click={() => {
					isNavOpen = !isNavOpen;
				}}
			/>
		</div>
	</div>
</div>

<Navigation bind:isOpen={isNavOpen} />

<style>
	.root {
		position: fixed;
		width: 100vw;
		display: flex;
		justify-content: center;
		background-color: var(--red);
		color: var(--yellow);
	}

	.main-content {
		justify-content: space-between !important;
	}

	input:hover {
		cursor: pointer;
	}
</style>
