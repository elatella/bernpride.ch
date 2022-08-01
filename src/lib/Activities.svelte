<script lang="ts">
	import { base } from '$app/paths';
	import rainbow from '$lib/assets/rainbow.svg';
	import shoe from '$lib/assets/shoe.svg';
	import eurogames from '$lib/assets/eurogames.svg';
</script>

<section id="activities" class="root">
	<div class="main-content">
		<h2>2023 WIRD EINZIGARTIG</h2>
		<p>
			Die BernPride ist nicht das einzige Highlight des Jahres. Schon ab dem 26. Juli 2023 wird es
			in Bern bunt und queer. Wir begrüssen dich dann zu den EuroGames, der grössten queeren
			Sportveranstaltung Europas, bieten dir am PrideRun die Möglichkeit, deine Marathon-Qualitäten
			unter Beweis zu stellen und runden das Erlebnis mit der Pride am 29. Juli ab. Mehr
			Informationen findest du mit nur einem Klick auf die Events!
		</p>
		<div class="links">
			<div class="link">
				<a href="{base}/" target="_blank" class="activity-icon">
					<img src={rainbow} alt="PrideRainbow" height="100" />
				</a>
				<span>BernPride</span>
			</div>
			<div class="link">
				<a href="https://eurogames2023.ch/de/pride-run/" target="_blank" class="activity-icon">
					<img src={shoe} alt="PrideRun" height="100" />
				</a>
				<span>PrideRun</span>
			</div>
			<div class="link">
				<a href="https://eurogames2023.ch" target="_blank" class="activity-icon">
					<img src={eurogames} alt="EuroGames" height="100" />
				</a>
				<span>EuroGames</span>
			</div>
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

	.links {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		margin-top: 30px;
		margin-bottom: 50px;
	}

	.link {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>
