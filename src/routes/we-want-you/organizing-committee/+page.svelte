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

<svelte:head>
	<title>OK-Mitglied werden</title>
</svelte:head>

<div class="root">
	<div class="main-content">
		<br />
		<h1>OK-Mitglied werden</h1>
		<br />
		<br />

		<section>
			<h2>Werde OK-Mitglied der EuroGames und BernPride 2023!</h2>
			<br />
			<p>
				Bereits in weniger als einem Jahr finden die EuroGames und die BernPride 2023 statt! Wir
				sind bereits sehr intensiv in der Vorbereitung und momentan ein Team von rund 30 Menschen.
				Wir setzen uns zusammen als Organisationskomitee und dem Vorstand des non-profit-Vereins
				EuroGames Bern. Für die Durchführung sind wir auf weitere Unterstützung angewiesen! Hast du
				Lust, in einem jungen, dynamischen Team mitzuarbeiten? Insbesondere suchen wir noch
				Menschen, die sich nicht als cis-männlich identifizieren, dies ist jedoch auch kein
				Ausschlusskriterium. Deine künftigen Kolleg*innen freuen sich auf dich!
			</p>
			<br />
			<p>
				Melde dich bei Interesse an einer Aufgabe unter:
				<a href="mailto:volunteers@eurogames2023.ch">volunteers@eurogames2023.ch</a>
			</p>
			<br />
			<p>Momentan sind die folgenden Positionen zu besetzen:</p>
			<Expandables items={positions} />
		</section>

		<section>
			<h3>Allgemeine Terms and Conditions</h3>
			<br />
			<ul>
				<li>
					Als non-profit-Verein sind fast alle Tätigkeiten im Vorstand, OK und den weiteren
					Positionen freiwillig und unentgeltlich. Dafür kannst du neue Erfahrungen machen und dich
					für einen guten Zweck einsetzen!
				</li>
				<li>
					Wir sind ein junges, aufgestelltes Team und je nach Funktion bist du direkt oder indirekt
					einem Vorstandsmitglied unterstellt.
				</li>
				<li>
					Wir sind eine queere Organisation, die starken Wert auf Diversität und Inklusion setzt.
					Wir haben dazu ein Awareness-Team, das uns auf die Finger schaut und immer wieder auf
					diese Punkte aufmerksam macht. Wir erwarten dasselbe von dir.
				</li>
			</ul>
		</section>
	</div>
</div>

<style>
	section {
		margin-bottom: 1rem;
	}

	a:link {
		color: blue;
	}

	a:visited {
		color: #075dd0;
	}

	a:hover {
		color: var(--red);
	}

	.root {
		display: flex;
		justify-content: center;
	}

	.main-content {
		flex-direction: column;
		text-align: left;
		font-size: 80%;
		line-height: 100%;
	}
</style>
