<script lang="ts">
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import UpButton from './UpButton.svelte';
	import './styles.css';
</script>

<svelte:head>
	<script src="https://tamaro.raisenow.com/bernp-3c42/latest/widget.js"></script>
</svelte:head>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<UpButton />

	<Footer />
</div>

<style>
	main {
		padding-top: 150px;
	}
	@media only screen and (min-width: 768px) {
		main {
			padding-top: 74px;
		}
	}
</style>
