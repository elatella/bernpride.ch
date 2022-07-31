<script lang="ts">
	import logo from '$lib/assets/logo-red.svg';
</script>

<footer class="root">
	<div class="main-content">
		<div><strong>Verein EuroGames Bern</strong></div>
		<div><img src={logo} alt="BernPride" height="30" /></div>
		<a href="mailto:info@bernpride.ch">info@bernpride.ch</a>
	</div>
</footer>

<style>
	.root {
		display: flex;
		justify-content: center;
		background-color: var(--white);
		color: var(--red);
		font-size: 0.6rem;
	}

	.main-content {
		justify-content: space-between !important;
	}
</style>
