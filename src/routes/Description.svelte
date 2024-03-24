<script lang="ts">
	import sprinklesLeft from '$lib/images/sprinkles-left.svg';
	import sprinklesRight from '$lib/images/sprinkles-right.svg';
	import arrow from '$lib/images/arrow-right-turquoise.svg';
</script>

<section id="description" class="root">
	<div class="main-content">
		<div class="title">
			<img src={sprinklesLeft} alt="Sprinkles Left" width="58" height="100" />
			<h2 class="title-text">BERN WIRD BUNT</h2>
			<img src={sprinklesRight} alt="Sprinkles Right" width="71" height="100" />
		</div>

		<h3 class="subtitle">
			Mit einem grossen Demonstrationsumzug und anschliessendem Pride Festival auf dem Bundesplatz
			werden wir am Samstag, dem 03. August, wieder mit tausenden Menschen durch die Innenstadt
			ziehen. Freust du dich auch schon so fest wie wir?
		</h3>
		<br />
		<h3 class="subtitle">
			Damit die BernPride wieder so bunt und queer wird wie letztes Jahr, sind wir auf deine
			finanzielle Hilfe angewiesen. Hilf uns mit einer Spende, um so die BernPride zu ermöglichen!
		</h3>
		<br />

		<div class="button-wrapper">
			<a href="/spenden" class="button-red"
				>Hier spenden
				<img src={arrow} alt="arrow right" width="30" height="18" />
			</a>
		</div>
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
	a.button-red {
		text-decoration: none;
		border-radius: 999px;
		border-color: var(--red);
		border-style: solid;
		padding: 10px 20px 14px;
		font-size: 80%;
		color: var(--turquoise);
		background-color: var(--red);
	}

	.button-wrapper {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.title-text {
		position: relative;
		bottom: 5px;
	}

	.subtitle {
		margin-top: 50px;
	}
</style>
