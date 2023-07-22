<script lang="ts">
	import sprinklesLeft from '$lib/images/sprinkles-left.svg';
	import sprinklesRight from '$lib/images/sprinkles-right.svg';
</script>

<section id="description" class="root">
	<div class="main-content">
		<div class="title">
			<img src={sprinklesLeft} alt="Sprinkles Left" width="58" height="100" />
			<h2 class="title-text">BIS ZUM NÄCHSTEN MAL</h2>
			<img src={sprinklesRight} alt="Sprinkles Right" width="71" height="100" />
		</div>

		<h3 class="subtitle">MERCI AN ALLE ANWESENDEN!</h3>
		<p class="body">
			Wir bedanken uns bei allen Aktivist*innen, Besucher*innen, Künstler*innen, Crew-Mitgliedern,
			Volunteers und Helfenden für dieses einzigartige Erlebnis!
			<br />
			Wir machen jetzt ein bisschen Pause und melden uns ganz bald wieder zur nächsten BernPride. Bis
			bald!
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
