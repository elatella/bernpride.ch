<script lang="ts">
	import Navigation from './Navigation.svelte';
	import logo from '$lib/images/logo-yellow.svg';
	import menu from '$lib/images/menu.svg';
	import closeMenu from '$lib/images/closemenu.svg';
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

	{#if now < end}
		<div>
			<input
				type="image"
				src={isNavOpen ? closeMenu : menu}
				alt={isNavOpen ? 'Schliessen' : 'Menu'}
				style="width:30px;padding:0;"
				on:click={() => {
					isNavOpen = !isNavOpen;
				}}
			/>
		</div>
	{:else}
		<div>
			{#each socialNetworks as nw (nw.name)}
				<a href={nw.link} target="_blank" rel="noreferrer" class="social-icon">
					<img src={nw.logo} alt={nw.name} width="30" height="30" />
				</a>
			{/each}
		</div>
	{/if}
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
	}

	.main-content {
		justify-content: space-between !important;
	}

	input:hover {
		cursor: pointer;
	}
</style>
