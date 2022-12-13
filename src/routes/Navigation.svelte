<script lang="ts">
	import instagram from '$lib/images/instagram.svg';
	import facebook from '$lib/images/facebook.svg';
	import tiktok from '$lib/images/tiktok.svg';

	export let isOpen = false;

	function close() {
		isOpen = false;
	}

	const navItems: { label: string; link: string }[] = [
		{ label: 'HOME', link: '/' },
		{ label: 'MITMACHEN', link: '/we-want-you' },
		{ label: 'ÜBER UNS', link: '/about-us' },
		{ label: 'FAQ', link: '/#faq' }
	];

	const socialNetworks: { name: string; logo: string; link: string }[] = [
		{ name: 'Instagram', logo: instagram, link: 'https://www.instagram.com/bernpride.ch/' },
		{ name: 'Facebook', logo: facebook, link: 'https://www.facebook.com/bernpride.ch/' },
		{ name: 'TikTok', logo: tiktok, link: 'https://www.tiktok.com/@bernpride.ch' }
	];
</script>

{#if isOpen}
	<nav class="root">
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
