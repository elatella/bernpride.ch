<script lang="ts">
	import Heroine from './Heroine.svelte';
	import Countdown from './Countdown.svelte';
	import Description from './Description.svelte';
	import Activities from './Activities.svelte';
	import Newsletter from './Newsletter.svelte';
	import News from './News.svelte';
	import NextTime from './NextTime.svelte';
	import FAQ from './FAQ.svelte';
	import { PUBLIC_EVENT_END } from '$env/static/public';

	const end = new Date(PUBLIC_EVENT_END);
	const now = new Date();
</script>

<svelte:head>
	<title>BernPride 2023</title>
	<meta
		name="description"
		content="Bern kriegt eine Pride. Am 29.7.2023 findet in Bern wieder eine Pride Parade statt."
	/>
</svelte:head>

<Heroine />
{#if now < end}
	<Countdown />

	<Description />

	<Activities />
{:else}
	<News />

	<NextTime />
{/if}

<Newsletter />

<FAQ />
