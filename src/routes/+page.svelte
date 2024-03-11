<script lang="ts">
	import Heroine from './Heroine.svelte';
	import Countdown from './Countdown.svelte';
	import Description from './Description.svelte';
	import Newsletter from './Newsletter.svelte';
	import NextBP from './NextBP.svelte';
	import Info from './Info.svelte';
	import FAQ from './FAQ.svelte';
	import { PUBLIC_EVENT_END } from '$env/static/public';

	const end = new Date(PUBLIC_EVENT_END);
	const now = new Date();
</script>

<svelte:head>
	<title>BernPride 2024</title>
	<meta
		name="description"
		content="Bern kriegt eine Pride. Am 03.08.2024 findet in Bern wieder eine Pride Parade statt."
	/>
</svelte:head>

<Heroine />

{#if now < end}
	<Countdown />

	<Description />
{:else}
	<NextBP />
{/if}

<Newsletter />

{#if now < end}
		<FAQ />
{/if}

<Info />
