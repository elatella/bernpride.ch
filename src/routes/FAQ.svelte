<script lang="ts">
	import Expandables from '$lib/Expandables.svelte';
	import sprinklesLeft from '$lib/images/sprinkles-left.svg';
	import sprinklesRight from '$lib/images/sprinkles-right.svg';

	const faqs = [
		{
			title: 'Datum und Zeit',
			body: 'Die BernPride findet am Samstag, 29. Juli 2023 statt. Der Start ist um 14.00 Uhr auf dem Quartierplatz vor dem Wankdorfstadion. Danach führt die Demo über den Aargauerstalden durch die Altstadt auf den Bundesplatz. Details zur Demo findest Du <a href="/demonstration">hier</a>. Was dann ab 16.00 Uhr auf dem Bundesplatz alles läuft, erfährst Du <a href="/schedule">hier</a>.'
		},
		{
			title: 'Ort',
			body: 'Die Besammlung für die Demo ist am Samstag, 29. Juli 2023 um 14.00 Uhr auf dem Quartierplatz vor dem <a href="https://goo.gl/maps/Z67cE9uYtrVEXPVd8">Wankdorfstadion</a>. Das Pride-Fest findet ab 16 Uhr auf dem <a href="https://goo.gl/maps/QQaijWqTyAt8YspD7">Bundesplatz</a> in Bern statt.'
		},
		{
			title: 'Anreise',
			body: 'Die Tramlinie 9 fährt wegen unserer Demo nur bis Guisanplatz, deshalb ist es besser, mit dem Zug ab Bahnhof Bern nach Bern Wankdorf anzureisen, z.B. mit der S2 um 13.42 ab Bern Bahnhof, der S1 um 13.46 ab Bern Bahnhof, der S44 um 13.50 ab Bern Bahnhof oder der S3 um 14.00 Uhr ab Bern Bahnhof. Ab Bern Wankdorf ist der Quartierplatz nur 5 Gehminuten entfernt.'
		},
		{
			title: 'Programm',
			body: 'Alle Infos zur Demo findest Du <a href="/demonstration">hier</a>. Was auf dem Bundesplatz läuft, erfährst Du <a href="/schedule">hier</a>. Dort findest Du zudem alle Infos über das Rahmenprogramm rund um die EuroGames 2023 und natürlich die Partys in der Samstagnacht im Bierhübeli, dem der Turnhalle und dem Stellwerk Klub.'
		},
		{
			title: 'BernPride für alle',
			body: 'Es ist uns wichtig, dass alle Menschen an der BernPride teilnehmen können, die das möchten. Wenn Du also Unterstützung benötigst, melde Dich frühzeitig unter <a href="mailto:info@bernpride.ch">info@bernpride.ch</a> und wir versuchen Dir so gut wie möglich zu helfen. Das Village der EuroGames auf dem Münsterplatz und -Plattform ist auch während der BernPride geöffnet und dient als zusätzlichen Ort für Familien und für Menschen, welche etwas mehr Platz und Ruhe geniessen möchten.'
		},
		{
			title: 'Awareness',
			body: 'Wenn du dich aufgrund diskriminierendem oder grenzüberschreitendem Verhalten unwohl fühlst oder grenzüberschreitendes Verhalten bei einer anderen Person beobachtest, dann melde dich bei: <ul style="margin-top:0.5em;"><li>Volunteers (dunkelblaues Shirt)</li><li>Crew-Mitglieder (gelbes Shirt)</li><li>Sicherheitspersonal (von Taktvoll)</li></ul> ...mit dem Code-Wort "<strong>IST JONA HIER?</strong>".<br />Falls keine Hilfe in der Nähe ist, ruf bitte folgende Awareness-Nummer an: <a href="tel:+41792942998"><strong>+41 79 294 29 98</strong></a>.<br /><br />Im Rahmen der EuroGames und der BernPride setzen wir uns für eine offene, inklusive und diskriminierungsfreie Umgebung ein. Wir bitten Dich – als Teilnehmer*in, Besucher*in oder Volunteer - darum, einen aufmerksamen, respektvollen und einfühlsamen Umgang mit allen anderen Menschen zu pflegen.'
		},
		{
			title: 'Solibändleli und Kartenzahlung',
			body: 'Die Demo, das Pride-Fest und die Konzerte der BernPride sind natürlich gratis. Wir freuen uns aber, wenn Du ein BernPride-Solibändeli kaufst. Wie viel Du dafür bezahlen möchtest, überlassen wir Dir. An den Bars und Ständen der BernPride kann nur bargeldlos mit Karte oder TWINT bezahlt werden. Wenn Du keine Debit- oder Kreditkarte besitzt oder sie nicht verwenden möchtest, kannst Du an den Cash- & Infopoints eine Cashless-Karte beziehen und aufladen.'
		},
		{
			title: 'Essen und Trinken',
			body: 'Bitte beachte insbesondere bei sehr hohen Temperaturen darauf, dass Du genug trinkst und passe den Konsum von Alkohol, den Gegebenheiten und Deiner Verfassung an. Auf der Demoroute kommen wir an zahlreichen Brunnen vorbei, welche allesamt Trinkwasser führen. Fülle dort einfach Deine Wasserflasche kostenlos nach. Auch auf dem Bundesplatz gilt kein Konsumationszwang. Gleich nebenan auf dem Bärenplatz hat es einen Brunnen, wo Du jederzeit köstliches Berner Wasser holen kannst. Auf dem Bundesplatz wird es viele Essensstände haben, sodass Du nicht hungrig bleibst.'
		},
		{
			title: 'Partys',
			body: 'Nach dem grossen Pride-Fest auf dem Bundesplatz finden zahlreiche Partys statt, für die Du schon jetzt Tickets im Vorverkauf kaufen kannst. Im Bierhübeli steigt mit „Love is Love“ die offizielle EuroGames 2023-Abschlussparty. In der Turnhalle stehen „Rainbow Hits“ auf dem Programm. Und das Jugendkulturlokal Stellwerk bietet zum Abschluss der Pride eine Party für junge Menschen (ab 16 Jahren) an. Alle Infos findest du <a href="/schedule">hier</a>.'
		},
		{
			title: 'Social Media',
			body: 'Benutze für Deine Posts den Hashtag #bernpride und folge uns auf unseren Social Media-Kanälen. Wir sind präsent auf Instagram, Facebook und TikTok unter @bernpride.ch.'
		},
		{
			title: 'Noch Fragen?',
			body: 'Falls Deine Fragen hier nicht beantwortet wurden, schreib uns doch einfach unter <a href="mailto:info@bernpride.ch">info@bernpride.ch</a>. Wir freuen uns von Dir zu lesen!'
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
