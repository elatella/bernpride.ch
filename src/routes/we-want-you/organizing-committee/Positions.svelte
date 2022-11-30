<script lang="ts">
	import Expandables from '$lib/Expandables.svelte';

	const positions = [
		{
			title: 'Sponsoring-Umsetzung, ab Beginn 2023 mit Fokus auf Umsetzung vor Ort (Finanzen)',
			body: 'Du unterstützt bei der Umsetzung der Sponsoringpartnerschaften und kontrollierst während der Veranstaltung vor Ort, ob das Sponsoring wie vereinbart präsentiert wird.'
		},
		{
			title: 'Side Events/Programming Village (Programm)',
			body: 'Du hilfst die Side Events und das Programm im EuroGames Village vorzubereiten. Während des Events, unterstützt du die Durchführung der Side Events und des Programms im EuroGames Village.'
		},
		{
			title: 'Sicherheit mit Fokus Sanität-Sicherheit (Sicherheit)',
			body: 'Du unterstützt das Sicherheitsteam der Veranstaltung in der Vorbereitung und Durchführung im Sanitätsbereich.'
		},
		{
			title: 'Sicherheit mit Fokus Event-Sicherheit und physische Sicherheit (Sicherheit)',
			body: 'Du unterstützt das Sicherheitsteam der Veranstaltung bei der Vorbereitung und sorgst während der Veranstaltung dafür, dass die Veranstaltungssicherheit und die physische Sicherheit der Teilnehmenden gewährleistet ist.'
		},
		{
			title: 'Fachperson Social Media für EuroGames und BernPride (Kommunikation)',
			body: 'Du hilfst bei der Kommunikation über Social Media, indem du selbstständig unsere Social-Media-Kanäle bedienst. Ausserdem unterstützt du uns bei der strategischen Planung und Umsetzung von Social-Media-Kampagnen.'
		},
		{
			title: 'Bar & Food (Hospitality)',
			body: 'Du unterstützt das Hospitality-Team bei der Planung und Umsetzung des Food- und Beverage-Konzepts auf dem Bundesplatz, im EuroGames Village und an den verschiedenen Sportstätten.'
		},
		{
			title: 'Infrastruktur (Hospitality)',
			body: 'Du unterstützt das Hospitality-Team im Bereich der Infrastruktur. Dazu gehört die Konzeption des EuroGames Village oder die Organisation des Bühnenaufbaus für die BernPride.'
		}
	];
</script>

<section id="description" class="root">
	<div class="main-content">
		<h2>Freie Positionen</h2>
		<br />

		<Expandables items={positions} />
	</div>
</section>

<style>
	.root {
		display: flex;
		justify-content: center;
		color: var(--red);
	}

	.main-content {
		flex-direction: column;
		margin-top: 50px;
		margin-bottom: 50px;
	}
</style>
