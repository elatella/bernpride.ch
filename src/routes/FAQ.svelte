<script lang="ts">
	import Expandables from '$lib/Expandables.svelte';
	import sprinklesLeft from '$lib/images/sprinkles-left.svg';
	import sprinklesRight from '$lib/images/sprinkles-right.svg';

	const faqs = [
		{
			title: 'Datum und Zeit',
			body: 'Die BernPride findet am 29. Juli 2023 tagsüber statt. Der genaue Zeitpunkt wird noch kommuniziert.'
		},
		{
			title: 'Ort',
			body: 'Die BernPride wird in unserer schönen Bundesstadt Bern stattfinden.'
		},
		{
			title: 'Programm',
			body: 'Wir arbeiten mit Hochdruck daran, ein spannendes Programm auf die Beine zu stellen. Das genaue Programm wird noch kommuniziert.'
		},
		{
			title: 'Social Media',
			body: 'Wenn du nichts über die BernPride verpassen möchtest, kannst du uns gerne auf unseren Social Media-Kanälen folgen. Wir sind präsent auf Instagram, Facebook und TikTok unter @bernpride.ch.'
		},
		{
			title: 'Awareness Konzept',
			body: 'Unser Awareness-Konzept wird gerade ausgearbeitet. Das komplette Konzept wird noch kommuniziert.'
		},
		{
			title: 'Anmeldung für Dragqueens & - kings',
			body: 'Bist du Dragqueen oder -king? Möchtest du an der BernPride dabei sein? Dann melde dich mit folgendem Formular an und du wirst im März von uns kontaktiert. Hier gehts zum <a href:"https://forms.gle/BcwWBJ1FV1wfpkrc9">Formular</a>'
		},
		{
			title: 'Noch Fragen?',
			body: 'Falls Deine Fragen hier nicht beantwortet wurden, schreib uns doch einfach unter info@bernpride.ch. Wir freuen uns von Dir zu lesen!'
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
