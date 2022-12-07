<script lang="ts">
	import badge from '$lib/images/badge.svg';
	import party from '$lib/images/party.svg';
	import goodiebag from '$lib/images/goodiebag.svg';
	import sandwich from '$lib/images/sandwich.svg';
	import ticket from '$lib/images/ticket.svg';
	import tshirt from '$lib/images/tshirt.svg';
</script>

<section id="activities" class="root">
	<div class="main-content">
		<h2>Deine Benefits als Volunteer</h2>
		<div class="links">
			<div class="link">
				<img src={tshirt} alt="PrideRainbow" width="139" height="100" />
				<span>T-shirt der Verantstaltung</span>
			</div>
			<div class="link">
				<img src={badge} alt="PrideRun" width="139" height="100" />
				<span>Badge mit Namen, Funktion und Nummer</span>
			</div>
			<div class="link">
				<img src={goodiebag} alt="EuroGames" width="139" height="100" />
				<span>Goodie-Bag</span>
			</div>
		</div>
		<div class="links">
			<div class="link">
				<img src={ticket} alt="PrideRainbow" width="139" height="100" />
				<span>Kostenlose Beförderung während der Verantstaltung</span>
			</div>
			<div class="link">
				<img src={sandwich} alt="PrideRun" width="139" height="100" />
				<span>Verpflegung während der Arbeit</span>
			</div>
			<div class="link">
				<img src={party} alt="EuroGames" width="139" height="100" />
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

	.benefits {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-top: 20px;
		align-items: center;
		flex-wrap: wrap;
	}

	.benefit {
		margin-top: 70px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		max-width: 280px;
	}

	.benefit span {
		margin-top: 20px;
	}

	@media only screen and (min-width: 768px) {
		.benefits {
			flex-direction: row;
			align-items: flex-start;
		}

		.benefit {
			margin-bottom: 0;
			width: 30%;
		}
	}
</style>
