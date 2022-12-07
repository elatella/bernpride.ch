<script lang="ts">
	import logo from '$lib/images/logo-yellow.svg';
	import Navigation from './Navigation.svelte';
	import menu from '$lib/images/menu.svg';

	let isNavOpen: boolean;
</script>

<div class="root">
	<div class="main-content">
		<a href="/">
			<img src={logo} alt="BernPride" width="147" height="30" />
		</a>

		<nav>
			<input
				type="image"
				src={menu}
				alt="Menu"
				style="width:30px;padding:0;"
				on:click={() => {
					isNavOpen = true;
				}}
			/>
		</nav>
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
