<script lang="ts">
	import Expandables from '$lib/Expandables.svelte';
	import sprinklesLeft from '$lib/images/sprinkles-left.svg';
	import sprinklesRight from '$lib/images/sprinkles-right.svg';
	const faqs = [
		{
			title: 'Wann und wo findet die BernPride statt?',
			body: 'Die BernPride wird am 03. August 2024 in Bern stattfinden. Dabei wird es einen Demonstrationsumzug durch die Berner Innenstadt und ein Festival auf dem Bundesplatz geben.'
		},
		{
			title: 'Wieso findet die BernPride im August statt?',
			body: 'Das Thema Nachhaltigkeit ist uns sehr wichtig! Deshalb spannen wir mit der Stadt Bern und dem Bierhübeli zusammen uns teilen uns während mehreren Tagen die Infrastruktur auf dem Bundesplatz. Zudem ist der Juni ja schon gut ausgebucht mit Pride-Demonstrationen, oder?'
		},
		{
			title: 'Wie kann ich die BernPride als Unternehmen unterstützen?',
			body: 'Wir sind auf Zuwanderungen aller Art angewiesen, um die BernPride zu stemmen. Für Unternehmen bieten wir attraktive Sponsoring-Möglichkeiten. Willst du mehr erfahren? Melde dich <a href="https://forms.gle/KdCZkUehLrRC89M68">HIER</a> an.'
		},
		{
			title: 'Wird es ein Awareness-Konzept geben?',
			body: 'Oh yes! Auch dieses Jahr legen wir einen grossen Wert auf Awareness. Das definitive Konzept wird bald vorgestellt.'
		},
		{
			title: 'Wieso gibt es nur so wenig Informationen über die BernPride?',
			body: 'Aktuell arbeiten wir mit Hochdruck daran, diesen Event zu organisieren. Momentan sind daher auch uns noch nicht alle Informationen klar. Zudem arbeiten wir an einer neuen Website, welche mehr Informationen beinhaltet. Stay tuned!'
		}
	];
</script>

<section id="faq" class="root">
	<div class="main-content">
		<div class="title">
			<img src={sprinklesLeft} alt="Sprinkles Left" width="58" height="100" />
			<h2 class="title-text">FAQ</h2>
			<img src={sprinklesRight} alt="Sprinkles Right" width="71" height="100" />
		</div>

		<Expandables items={faqs} />
	</div>
</section>

<style>
	.root {
		display: flex;
		justify-content: center;
		background-color: var(--blue);
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
		bottom: 7px;
	}
</style>
