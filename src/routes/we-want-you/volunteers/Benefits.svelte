<script lang="ts">
	import eurogames from '$lib/images/eurogames.svg';
</script>

<section id="activities" class="root">
	<div class="main-content">
		<h2>Deine Benefits als Volunteer</h2>
		<div class="links">
			<div class="link">
				<img src={eurogames} alt="PrideRainbow" width="139" height="100" />
				<span>T-shirt der Verantstaltung</span>
			</div>
			<div class="link">
				<img src={eurogames} alt="PrideRun" width="139" height="100" />
				<span>Badge mit Namen, Funktion und Nummer</span>
			</div>
			<div class="link">
				<img src={eurogames} alt="EuroGames" width="139" height="100" />
				<span>Goodie-Bag</span>
			</div>
		</div>
		<div class="links">
			<div class="link">
				<img src={eurogames} alt="PrideRainbow" width="139" height="100" />
				<span>Kostenlose Beförderung während der Verantstaltung</span>
			</div>
			<div class="link">
				<img src={eurogames} alt="PrideRun" width="139" height="100" />
				<span>Verpflegung während der Arbeit</span>
			</div>
			<div class="link">
				<img src={eurogames} alt="EuroGames" width="139" height="100" />
				<span>Einladung zum Helferfest im August 2023</span>
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
		margin-top: 50px;
		margin-bottom: 70px;
	}

	.links {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-top: 70px;
	}

	.link {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		width: 220px;
	}

	@media only screen and (min-width: 768px) {
		.links {
			flex-direction: row;
		}

		.link {
			margin-bottom: 0;
		}
	}
</style>
