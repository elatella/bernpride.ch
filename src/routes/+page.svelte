<script lang="ts">
	import Heroine from './Heroine.svelte';
	import Countdown from './Countdown.svelte';
	import Description from './Description.svelte';
	import Activities from './Activities.svelte';
	import Newsletter from './Newsletter.svelte';
	import FAQ from './FAQ.svelte';
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
