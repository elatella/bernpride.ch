<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';
</script>

<Header />

<main style="padding-top:78px">
	<slot />
</main>

<Footer />
