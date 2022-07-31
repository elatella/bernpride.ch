<script lang="ts">
	import sprinklesLeft from '$lib/assets/sprinkles-left-red.svg';
	import sprinklesRight from '$lib/assets/sprinkles-right-red.svg';
</script>

<section id="description" class="root">
	<div class="main-content">
		<div class="title">
			<img src={sprinklesLeft} alt="Sprinkles Left" height="100" />
			<h2>BERN WIRD BUNT</h2>
			<img src={sprinklesRight} alt="Sprinkles Right" height="100" />
		</div>

		<h3>AM 29.07.2023 IST ES SOWEIT</h3>
		<p>
			Nach sechs Jahren ohne Prides in Bern holen wir wieder unsere Regenbogen-Flaggen raus und
			demonstrieren Hand in Hand für Gleichberechtigung.
		</p>
		<button>Newsletter abonnieren</button>
	</div>
</section>

<style>
	.root {
		display: flex;
		justify-content: center;
		background-color: var(--turquoise);
		color: var(--red);
	}

	.main-content {
		flex-direction: column;
	}

	.title {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
</style>
