<script lang="ts">
	import eurogames from '$lib/images/eurogames.svg';

	const benefits = [
		'T-shirts der Veranstaltung',
		'Badge mit Namen, Funktion und Nummer',
		'Goodie-Bag',
		'Kostenlose Beförderung während der Verantstaltung',
		'Verpflegung während der Arbeit',
		'Einladung zum Helferfest im August 2023'
	];
</script>

<section id="activities" class="root">
	<div class="main-content">
		<h2>Deine Benefits als Volunteer</h2>
		<div class="benefits">
			{#each benefits as benefit (benefit)}
				<div class="benefit">
					<img src={eurogames} alt="Benefit" width="139" height="100" />
					<span>{benefit}</span>
				</div>
			{/each}
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
