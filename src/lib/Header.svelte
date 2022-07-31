<script lang="ts">
	import logo from '$lib/assets/logo-yellow.svg';
	import instagram from '$lib/assets/instagram-yellow.svg';
	import facebook from '$lib/assets/facebook-yellow.svg';
	import tiktok from '$lib/assets/tiktok-yellow.svg';
</script>

<nav class="root">
	<a href="/">
		<img src={logo} alt="BernPride" height="30" />
	</a>
	<div>
		<a href="https://www.instagram.com/bernpride.ch/" class="social-icon">
			<img src={instagram} alt="LinkInstagram" height="30" />
		</a>
		<a href="https://www.facebook.com/bernpride.ch/" class="social-icon">
			<img src={facebook} alt="LinkFacebook" height="30" />
		</a>
		<a href="https://www.tiktok.com/@bernpride.ch" class="social-icon">
			<img src={tiktok} alt="TikTok" height="30" />
		</a>
	</div>
</nav>

<style>
	.root {
		display: flex;
		justify-content: space-between;
		padding: 20px;
		background-color: var(--red);
		color: var(--yellow);
	}

	.social-icon {
		margin-left: 5px;
	}
</style>
