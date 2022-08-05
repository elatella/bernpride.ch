<script lang="ts">
	import Heroine from '$lib/Heroine.svelte';
	import Countdown from '$lib/Countdown.svelte';
	import Description from '$lib/Description.svelte';
	import Activities from '$lib/Activities.svelte';
	import Newsletter from '$lib/Newsletter.svelte';
	import FAQ from '$lib/FAQ.svelte';
</script>

<svelte:head>
	<title>BernPride 2023</title>
	<meta
		name="description"
		content="Bern kriegt eine Pride. Am 29.7.2023 findet in Bern wieder eine Pride Parade statt."
	/>
</svelte:head>

<Heroine />

<Countdown />

<Description />

<Activities />

<Newsletter />

<FAQ />
