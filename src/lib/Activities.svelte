<script lang="ts">
	import rainbow from '$lib/assets/rainbow.svg';
	import shoe from '$lib/assets/shoe.svg';
	import eurogames from '$lib/assets/eurogames.svg';
</script>

<section id="activities" class="root">
	<div class="main-content">
		<h2>2023 WIRD EINZIGARTIG</h2>
		<div>
			<img src={rainbow} alt="PrideRainbow" height="100" />
			<img src={shoe} alt="PrideRun" height="100" />
			<img src={eurogames} alt="EuroGames" height="100" />
		</div>
	</div>
</section>

<style>
	.root {
		display: flex;
		justify-content: center;
		background-color: var(--red);
		color: var(--yellow);
	}

	.main-content {
		flex-direction: column;
	}
</style>
