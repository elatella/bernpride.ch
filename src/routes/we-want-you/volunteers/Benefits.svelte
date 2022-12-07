<script lang="ts">
	import badge from '$lib/images/badge.svg';
	import party from '$lib/images/party.svg';
	import goodiebag from '$lib/images/goodiebag.svg';
	import sandwich from '$lib/images/sandwich.svg';
	import ticket from '$lib/images/ticket.svg';
	import tshirt from '$lib/images/tshirt.svg';

	interface Benefit {
		title: string;
		logo: string;
	}

	const benefits: Benefit[] = [
		{
			title: 'T-shirts der Veranstaltung',
			logo: tshirt
		},
		{
			title: 'Badge mit Namen, Funktion und Nummer',
			logo: badge
		},
		{
			title: 'Goodie-Bag',
			logo: goodiebag
		},
		{
			title: 'Kostenlose Beförderung während der Verantstaltung',
			logo: ticket
		},
		{
			title: 'Verpflegung während der Arbeit',
			logo: sandwich
		},
		{
			title: 'Einladung zum Helferfest im August 2023',
			logo: party
		}
	];
</script>

<section id="activities" class="root">
	<div class="main-content">
		<h2>Deine Benefits als Volunteer</h2>
		<div class="benefits">
			{#each benefits as benefit (benefit)}
				<div class="benefit">
					<img src={benefit.logo} alt="Benefit" width="120" height="120" />
					<span>{benefit.title}</span>
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
