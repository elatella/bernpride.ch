<script lang="ts">
	import sprinklesLeft from '$lib/images/sprinkles-left.svg';
	import sprinklesRight from '$lib/images/sprinkles-right.svg';
</script>

<section id="description" class="root">
	<div class="main-content">
		<div class="title">
			<img src={sprinklesLeft} alt="Sprinkles Left" width="58" height="100" />
			<h2 class="title-text">BERN WIRD BUNT</h2>
			<img src={sprinklesRight} alt="Sprinkles Right" width="71" height="100" />
		</div>

		<h3 class="subtitle">Am 29. Juli 2023 ist es so weit.</h3>
		<p class="body">
			Der Countdown läuft und bald laufen wir alle gemeinsam durch die Berner Gassen und feiern die
			Vielfalt unserer Community. Nach sechs Jahren ohne Prides in Bern holen wir wieder unsere
			Regenbogen-Flaggen raus und demonstrieren Hand in Hand für Gleichstellung. Nun bist du
			gefragt: Zeichne den Regenbogen in deinen Kalender und sei im Juli mit dabei, wenn es heisst;
			„Bern wird bunt!“.
		</p>
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
		margin-top: 50px;
		margin-bottom: 50px;
	}

	.title {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.title-text {
		position: relative;
		bottom: 5px;
	}

	.subtitle {
		margin-top: 50px;
	}

	.body {
		margin-top: 20px;
	}
</style>
