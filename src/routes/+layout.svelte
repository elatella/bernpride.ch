<script lang="ts">
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import UpButton from './UpButton.svelte';
	import './styles.css';
</script>

<Header />

<main style="padding-top:75px">
	<slot />
</main>

<UpButton />

<Footer />
