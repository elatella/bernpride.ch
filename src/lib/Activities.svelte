<script lang="ts">
	import rainbow from '$lib/assets/rainbow.svg';
	import shoe from '$lib/assets/shoe.svg';
	import eurogames from '$lib/assets/eurogames.svg';
</script>

<section class="root">
	<h2>2023 WIRD EINZIGARTIG</h2>
</section>

<nav class="root">
	<img src={rainbow} alt="PrideRainbow" height="100" />
	<img src={shoe} alt="PrideRun" height="100" />
	<img src={eurogames} alt="EuroGames" height="100" />
</nav>

<style>
	.root {
		text-align: center;
		background-color: var(--red);
		color: var(--yellow);
	}
</style>
