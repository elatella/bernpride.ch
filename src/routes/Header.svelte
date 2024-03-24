<script lang="ts">
	import Navigation from './Navigation.svelte';
	import logo from '$lib/images/logo-yellow.svg';
	import instagram from '$lib/images/instagram.svg';
	import facebook from '$lib/images/facebook.svg';
	import tiktok from '$lib/images/tiktok.svg';

	const socialNetworks: { name: string; logo: string; link: string }[] = [
		{ name: 'Instagram', logo: instagram, link: 'https://www.instagram.com/bernpride.ch/' },
		{ name: 'Facebook', logo: facebook, link: 'https://www.facebook.com/bernpride.ch/' },
		{ name: 'TikTok', logo: tiktok, link: 'https://www.tiktok.com/@bernpride.ch' }
	];

	let isNavOpen: boolean;
</script>

<div class="root">
	<div class="main-content">
		<a
			href="/"
			on:click={() => {
				isNavOpen = false;
			}}
		>
			<img src={logo} alt="BernPride" width="147" height="30" />
		</a>

		<a href="/about-us" class="menu-point">ÜBER UNS</a>
		<a href="/spenden" class="menu-point">SPENDEN</a>
		<div class="social-icons">
			{#each socialNetworks as nw (nw.name)}
				<a
					href={nw.link}
					target="_blank"
					rel="noreferrer"
					class="social-icon"
					style="text-decoration:none"
				>
					<img src={nw.logo} alt={nw.name} width="30" height="30" />
				</a>
			{/each}
		</div>
	</div>
</div>

<Navigation bind:isOpen={isNavOpen} />

<style>
	.root {
		position: fixed;
		width: 100vw;
		display: flex;
		justify-content: center;
		background-color: var(--red);
		color: var(--yellow);
		z-index: 9999;
	}

	.main-content {
		justify-content: space-evenly;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.menu-point {
		right: 0;
		text-decoration: none;
		font-weight: bold;
		margin: 0.2em;
	}

	.social-icons {
		margin: 0.5em;
		margin-bottom: 0;
	}

	@media only screen and (min-width: 768px) {
		.root {
			height: inherit;
		}

		.main-content {
			flex-direction: row;
		}

		.menu-point {
			margin-right: 1em;
			position: relative;
			top: -5px;
		}

		.social-icons {
			margin: 0;
		}
	}
</style>
