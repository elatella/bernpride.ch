<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Heroine from '$lib/Heroine.svelte';
	import Countdown from '$lib/Countdown.svelte';
	import Description from '$lib/Description.svelte';
	import Activities from '$lib/Activities.svelte';
	import Newsletter from '$lib/Newsletter.svelte';
	import FAQ from '$lib/FAQ.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>BernPride 2023</title>
	<meta
		name="description"
		content="Bern kriegt eine Pride. Am 29.7.2023 findet in Bern wieder eine Pride Parade statt."
	/>
</svelte:head>

<Header />

<main>
	<Heroine />

	<Countdown />

	<Description />

	<Activities />

	<Newsletter />

	<FAQ />
</main>

<Footer />
