<script lang="ts">
	import eurogames from '$lib/images/eurogames.svg';
</script>

<section id="activities" class="root">
	<div class="main-content">
		<h3>Deine Benefits als Volunteer</h3>
		<div class="links">
			<div class="link">
				<img src={eurogames} alt="PrideRainbow" width="139" height="100" />
				<span>T-shirt der <br /> Verantstaltung</span>
			</div>
			<div class="link">
				<img src={eurogames} alt="PrideRun" width="139" height="100" />
				<span>Badge mit Namen, <br /> Funktion und <br /> Nummer</span>
			</div>
			<div class="link">
				<img src={eurogames} alt="EuroGames" width="139" height="100" />
				<span>Goodie-Bag</span>
			</div>
		</div>
		<div class="links">
			<div class="link">
				<img src={eurogames} alt="PrideRainbow" width="139" height="100" />
				<span>Kostenlose <br /> Beförderung <br /> während der <br /> Verantstaltung</span>
			</div>
			<div class="link">
				<img src={eurogames} alt="PrideRun" width="139" height="100" />
				<span>Verpflegung <br /> während der <br /> Arbeit</span>
			</div>
			<div class="link">
				<img src={eurogames} alt="EuroGames" width="139" height="100" />
				<span>Einladung zum <br /> Helferfest im <br /> August 2023</span>
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
		margin-bottom: 50px;
	}

	.links {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		margin-top: 70px;
	}

	.link {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-bottom: 40px;
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
