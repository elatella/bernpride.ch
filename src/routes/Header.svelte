<script lang="ts">
	import logo from '$lib/images/logo-yellow.svg';
	import instagram from '$lib/images/instagram.svg';
	import facebook from '$lib/images/facebook.svg';
	import tiktok from '$lib/images/tiktok.svg';
	import Navigation from './Navigation.svelte';

	let isNavOpen: boolean;
</script>

<div class="root">
	<div class="main-content">
		<nav>
			<input
				type="image"
				src={logo}
				alt="BernPride"
				style="width:150px;padding:0;"
				on:click={() => {
					isNavOpen = true;
				}}
			/>
		</nav>

		<div>
			<a
				href="https://www.instagram.com/bernpride.ch/"
				target="_blank"
				rel="noreferrer"
				class="social-icon"
			>
				<img src={instagram} alt="LinkInstagram" width="30" height="30" />
			</a>
			<a
				href="https://www.facebook.com/bernpride.ch/"
				target="_blank"
				rel="noreferrer"
				class="social-icon"
			>
				<img src={facebook} alt="LinkFacebook" width="30" height="30" />
			</a>
			<a
				href="https://www.tiktok.com/@bernpride.ch"
				target="_blank"
				rel="noreferrer"
				class="social-icon"
			>
				<img src={tiktok} alt="TikTok" width="30" height="30" />
			</a>
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
	}

	.main-content {
		justify-content: space-between !important;
	}

	.social-icon {
		margin-left: 5px;
	}

	input:hover {
		cursor: pointer;
	}
</style>
