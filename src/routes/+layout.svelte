<script lang="ts">
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import UpButton from './UpButton.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main style="padding-top:74px">
		<slot />
	</main>

	<UpButton />

	<Footer />
</div>
