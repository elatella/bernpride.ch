<script lang="ts">
	import { slide } from 'svelte/transition';
	import { PUBLIC_EVENT_START } from '$env/static/public';
	import { PUBLIC_EVENT_END } from '$env/static/public';
	import instagram from '$lib/images/instagram.svg';
	import facebook from '$lib/images/facebook.svg';
	import tiktok from '$lib/images/tiktok.svg';

	const start = new Date(PUBLIC_EVENT_START);
	const end = new Date(PUBLIC_EVENT_END);
	const now = new Date();

	export let isOpen = false;

	function close() {
		isOpen = false;
	}

	let navItems: { label: string; link: string }[] = [
		{ label: 'HOME', link: '/' },
		{ label: 'PROGRAMM', link: '/schedule' },
		{ label: 'DEMONSTRATION', link: '/demonstration' },
		{ label: 'MITMACHEN', link: '/we-want-you' },
		{ label: 'ÜBER UNS', link: '/about-us' },
		{ label: 'FAQ', link: '/#faq' }
	];

	const onlyBeforeEvent = ['MITMACHEN'];
	if (now > start) {
		navItems = navItems.filter((i) => !onlyBeforeEvent.includes(i.label));
	}
	const onlyBeforeAndDuringEvent = ['FAQ'];
	if (now > end) {
		navItems = navItems.filter((i) => !onlyBeforeAndDuringEvent.includes(i.label));
	}

	const socialNetworks: { name: string; logo: string; link: string }[] = [
		{ name: 'Instagram', logo: instagram, link: 'https://www.instagram.com/bernpride.ch/' },
		{ name: 'Facebook', logo: facebook, link: 'https://www.facebook.com/bernpride.ch/' },
		{ name: 'TikTok', logo: tiktok, link: 'https://www.tiktok.com/@bernpride.ch' }
	];
</script>

{#if isOpen}
	<nav class="root" transition:slide>
		{#each navItems as item (item.label)}
			<a href={item.link} on:click={close}>{item.label}</a>
		{/each}

		<div style="margin-top:2rem">
			{#each socialNetworks as nw (nw.name)}
				<a href={nw.link} target="_blank" rel="noreferrer" class="social-icon">
					<img src={nw.logo} alt={nw.name} width="30" height="30" />
				</a>
			{/each}
		</div>
	</nav>
{/if}

<style>
	.root {
		position: fixed;
		top: 74px;
		width: 100vw;
		padding-bottom: 70px;
		background-color: var(--red);
		color: var(--yellow);
		display: flex;
		flex-direction: column;
		align-items: center;
		z-index: 999;
		box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
	}

	a {
		text-decoration: none;
		margin: 0.9rem;
		font-size: 1.7rem;
		font-weight: bold;
	}

	@media only screen and (min-width: 768px) {
		a {
			font-size: 2.2rem;
		}
	}
</style>
