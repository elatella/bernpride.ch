<script lang="ts">
	import sprinklesLeft from '$lib/images/sprinkles-left.svg';
	import sprinklesRight from '$lib/images/sprinkles-right.svg';
	import arrow from '$lib/images/arrow-right-white.svg';
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

		<p class="body">
			Jetzt brauchen wir deine Unterstützung! Damit die BernPride wieder so bunt und queer wird wie
			letztes Jahr, sind wir auf deine finanzielle Hilfe angewiesen. Hilf uns, unser
			Crowdfunding-Ziel zu erreichen und so die BernPride zu ermöglichen!
		</p>
		<br />
		<div class="button-wrapper">
			<a href="/crowdfunding" class="button-red"
				>UNSER CROWDFUNDING
				<img src={arrow} alt="arrow right" width="30" height="18" class="arrow" />
			</a>
		</div>
	</div>
</section>

<style>
	a.button-red {
		text-decoration: none;
		border-radius: 999px;
		border-color: var(--red);
		border-style: solid;
		padding: 10px 20px 14px;
		font-size: 80%;
		color: var(--white);
		background-color: var(--red);
	}

	.button-wrapper {
		width: 100%;
		display: flex;
		justify-content: center;
	}

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
