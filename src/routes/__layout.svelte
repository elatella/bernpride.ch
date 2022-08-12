<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import UpButton from '$lib/UpButton.svelte';
	import '../app.css';
</script>

<Header />

<main style="padding-top:75px">
	<slot />
</main>

<UpButton />

<Footer />
