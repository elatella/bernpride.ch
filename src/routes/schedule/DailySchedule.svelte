<script lang="ts">
	enum Day {
		Wednesday = 'Mittwoch',
		Thursday = 'Donnerstag',
		Friday = 'Freitag',
		Saturday = 'Samstag'
	}

	const days = [Day.Wednesday, Day.Thursday, Day.Friday, Day.Saturday];

	let selectedDay: Day = Day.Saturday;

	function selectDay(day: Day) {
		selectedDay = day;
	}

	enum Color {
		Blue = 'blue',
		Turquoise = 'turquoise',
		Red = 'red',
		White = 'white'
	}

	const colors = [Color.Blue, Color.Turquoise, Color.Red, Color.White];

	function randomColorWithBlacklist(blacklist: Color[]) {
		const relevantColors = colors.filter((c) => !blacklist.includes(c));
		const index = Math.floor(Math.random() * relevantColors.length);
		return relevantColors[index];
	}

	interface Activity {
		day: Day;
		time: string;
		title: string;
		description: string;
		link?: {
			url: string;
			text: string;
		};
		location: string;
		color?: Color;
	}

	const activities: Activity[] = [
		{
			day: Day.Wednesday,
			time: '20.30 - 21.30 Uhr',
			title: 'Eröffnungskonzert Village',
			description:
				'Das EuroGames Village wird am ersten Abend ordentlich zum Tanzen gebracht. Die Frage ist nur, von wem? Etwas verraten wir: Die Songs sind Mundart. Freu dich auf Berner Power am 26. Juli auf der Münsterplatz!',
			location: 'EuroGames Village'
		},
		{
			day: Day.Wednesday,
			time: '21.30 - 23.00 Uhr',
			title: 'DJ Clausette',
			description:
				'Einst war sie die bekannteste Drag Queen von Bern, nun ist sie öfters in Zivil unterwegs: Dj Clausette vom Queer Underground Movement. Musikalisch mag sie es dramatisch und dreckig. Die Diva hinter dem DJ-Pult weiss dank Ihrer langjährigen Erfahrung nämlich genau, was die Tanzenden so richtig ins Schwitzen bringt. Wir freuen uns auf gute Beats am Mittwoch, 26. Juli, im EuroGames Village!',
			location: 'EuroGames Village'
		},
		{
			day: Day.Wednesday,
			time: '22.00 - ? Uhr',
			title: 'Play The Game - Official EuroGames Opening Party',
			description:
				'Lasst  den  Eröffnungstag  der  EuroGames  zum  Sound  und  Groove  von DJ FAT TONY (London, UK) und DJCK (Köln, DE) ausklingen. Sie wissen wie kein anderer, wie man eine Partynacht magisch macht. Tickets: 18 CHF (Abendkasse: 23 CHF)',
			location: 'Bierhübeli'
		},
		{
			day: Day.Thursday,
			time: '20.00 - 21.00 Uhr',
			title: 'Sivilian',
			description:
				'Inspiriert von Künstlern wie Lorde, Phoebe Bridgers, HAIM oder Lauv hat der Singer-Songwirter Sivilian seinen eigenen Stil gefunden, in dem er klare Worte mit eingängigen Melodien über Soundlandschaften aus Gitarren, Synthies und Samples verwebt. Sivilians Liebe zum Storytelling in seinen Liedern erleben wir am Donnerstag, 27. Juli, im EuroGames Village auf der Münsterplattform.',
			location: 'EuroGames Village'
		},
		{
			day: Day.Thursday,
			time: '21.00 - 23.00 Uhr',
			title: 'QUM // Evolutionary Pressure',
			description:
				'Anhand einer selektiven Auswahl in seinem musikalischen Fundus bespielt DJ Evolutionary Pressure die Tanzfläche mit druckvollen Bässen und Beats. Der DJ vom Queer Underground Movement bezeichnet seine Musik selbst als „den Weiterbestand der tanzenden Organismen“. Wir freuen uns auf seine musikalische Darbietung im EuroGames Village am Donnerstag, dem 27. Juli!',
			location: 'EuroGames Village'
		},
		{
			day: Day.Thursday,
			time: '22.00 - ? Uhr',
			title: 'Sport With Benefits',
			description:
				'DJ FAT TONY, eine Ikone der Londoner Tanzmusikszene, legt seit über 30 Jahren auf. JODIE HARSH ist DJ, Produzentin und Kulturikone, die in den letzten zehn Jahren weltweit die Tanzflächen erobert hat. Tickets: 28 CHF (Abendkasse: 33 CHF)',
			location: 'Bierhübeli'
		},
		{
			day: Day.Friday,
			time: '19.30 - 20.00 und 20.45 - 21.15 Uhr',
			title: 'Drag Night | House of DLight',
			description:
				'Definitiv ein Highlight im EuroGames Village: House of DLight präsentieren das Beste aus der hauseigenen Drag Show „Dragwunderland DLight“. Frech, nicht fromm und feinste Unterhaltung aus dem Berner Oberland. Die unvergessliche Show findet am Freitag, 28. Juli, im EuroGames Village auf der Münsterplattform statt.',
			location: 'EuroGames Village'
		},
		{
			day: Day.Friday,
			time: '22.00 - ? Uhr',
			title: 'Dancing Queen - Show your Medals',
			description:
				'In dieser Club-Nacht werden die besten elektronischen New Romantic Hits der 80er Jahre gespielt, unter anderem von Depeche Mode und Kraftwerk. Line Up: DJCK & DJ Anouk Amok. Tickets: 18 CHF (Abendkasse: 23 CHF)',
			location: 'Bierhübeli'
		},
		{
			day: Day.Friday,
			time: '22.00 - ? Uhr',
			title: 'Ipek İpekçioğlu & Angela Alaska',
			description:
				'Die international renommierte DJ İpek İpekçioğlu ist für ihren einzigartigen Sound bekannt. In der Turnhalle wird auch die Bernerin Angela Alaska am DJ-Pult stehen und ihren leichten und luftigen Soundmix präsentieren. Tickets: VVK online und Abendkasse',
			location: 'Turnhalle'
		},
		{
			day: Day.Saturday,
			time: '14.00 - 16.30',
			title: 'Pride Demo',
			description:
				'Bevor wir alle zusammen auf dem Bundesplatz in die Nacht hinein feiern, demonstrieren wir auf unserer Demo-Route vom Wankdorf bis ins Herz von Bern für queere Rechte. Mehr zur Demonstration findest du:',
			link: {
				url: '/demonstration',
				text: 'hier.'
			},
			location: 'Start am Wankdorf Stadion'
		},
		{
			day: Day.Saturday,
			time: '16.00 - 17.00 Uhr',
			title: 'Madame Lea & DJ Gönnungshof',
			description:
				'Léa Spirig aka Madame Léa hat 1998 das erste Mal aufgelegt, als sie sah, dass da immer nur Männer den Ton angeben und auch, weil ihr die Musik einfach nicht gefiel. Sie dachte «Das kann ich auch. Und das kann ich besser». Auf ihrem Laptop hat sie eine breite Palette an Musik gespeichert, die von den 1920er Jahren bis in die elektronischen Hits von morgen reicht. Und DJ Gönnungshof spielt vom glitzrigen Pop über Hip-Hop bis hin zu lesbischen Hymnen quasi alles. Es wird also hot auf dem Bundesplatz!',
			location: 'Bundesplatz'
		},
		{
			day: Day.Saturday,
			time: '17.00 Uhr',
			title: 'Tamara Funiciello',
			description:
				'Tamara Funiciello ist Aktivistin mit zu wenig Zeit und Feministin von Kopf bis Fuss. Die Nationalrätin aus Bern macht Politik wegen Geschichten. Geschichten, die sie ändern will. Tamara hat stark an der Reform fürs Sexualstrafrecht mitgewirkt und konnte letztens mit dem “Nein-heisst-Nein”-Kompromiss einen grossen Schritt nach vorne ermöglichen!',
			location: 'Bundesplatz'
		},
		{
			day: Day.Saturday,
			time: '17.30 - 18.15 Uhr',
			title: 'Msoke',
			description:
				'Msoke, der Berliner Musiker mit Wurzeln in Tansania, gilt als einer, der sich für die Selbstverwirklichung in der Musikszene stark macht. Am 29. Juli kommt er nach Bern und beschallt den Bundesplatz mit seinen Reggae- & Dancehall-Songs. Als Frau geboren, lebt er seine wahre Identität als Mann in einer von Homo- und Transphobie geprägten Szene aus. Identitätsstiftung, Menschlichkeit, Wiedergeburt und das Über-Sich-Hinauswachsen sind die Themen seiner Songs, musikalisch, mal akustisch, mal funky interpretiert.',
			link: {
				url: 'https://open.spotify.com/artist/27eWZx8SMAKuP0xRVdHcGJ',
				text: 'Spotify'
			},
			location: 'Bundesplatz'
		},
		{
			day: Day.Saturday,
			time: '18.30 - 19.00 Uhr',
			title: 'Paprika',
			description:
				'Paprika, unsere glamouröse Dragqueen aus Zürich, heizt am 29. Juli den Bundesplatz ein! 2018 gewann sie das Heaven Drag Race und legte so den Grundstein ihrer Karriere. Sie ist It-Girl, Teilzeitprinzessin, Burlesquekünstlerin und Influencerin zugleich und überzeugt mit ihren Acts, sorgt für Lacher und Emotionen. Was bei ihr nie fehlt? Die nötige Würze! ',
			location: 'Bundesplatz'
		},
		{
			day: Day.Saturday,
			time: '18.30 - 19.00 Uhr',
			title: 'Ray Belle',
			description:
				'Ray Belles Geheimrezept für eine fierce Dragshow: Mensch nehme eine Prise Queerfeminismus, einen Schuss Fat Liberation, einen Hauch Wut auf Patriarchat und Kapitalismus, eine Prise Glitzer, bedecke dies alles mit einer 5cm dicken Makeupschicht und garniere es mit viel zu viel Kunsthaar et voilà - Revolution! Du willst sehen, wie das auf der Bühne aussieht? Dann komm am 29. Juli zur BernPride und lass dich von diesem charmanten Politpüppchen bezaubern!',
			location: 'Bundesplatz'
		},
		{
			day: Day.Saturday,
			time: '18.30 - 19.00 Uhr',
			title: 'Ares',
			description:
				'Ares, die inoffiziell jüngste Dragqueen der Schweiz, kommt nach Bern! Seit November 2022 ist sie amtierende Miss Drag Roy-Lälle-Ty und zieht mit ihrem Lächeln und ihren lebensmüden Tricks alle Augen auf sich. Lass’ dir das nicht entgehen - 29. Juli 2023 auf dem Bundesplatz!',
			location: 'Bundesplatz'
		},
		{
			day: Day.Saturday,
			time: '19.15 - 20.00 Uhr',
			title: 'Nemo',
			description:
				'«Ke Bock» heisst einer seiner grössten Hits: Nemo ist aus der Schweizer Musik-Szene nicht mehr wegzudenken. Worauf der gebürtige Bieler aber Bock hat, ist das Pride Fest am 29. Juli! 2017 gewann er den Energy Music Award, 2018 nahm er gleich vier Swiss Music Awards nachhause Seit einiger Zeit singt Nemo auf Englisch und überzeugte letztes Jahr die Massen mit seiner ersten englischen EP «Whatever feels right».',
			link: {
				url: 'https://open.spotify.com/artist/1KbDYbNErlTGfWPENELJgM',
				text: 'Spotify'
			},
			location: 'Bundesplatz'
		},
		{
			day: Day.Saturday,
			time: '',
			title: 'Anna Rosenwasser',
			description:
				'Unser “Lieblingsbüsi” Anna Rosenwasser kommt am 29. Juli nach Bern und moderiert unser Pride Fest auf dem Bundesplatz! Anna ist LGBTQ-Aktivistin, Polit-Influencerin und Moderatorin. Seit 10 Jahren ist sie Journalistin und Autorin und erst kürzlich ist ihr eigenes Buch erschienen. Der bisexuellen Schweizerin mit jüdischen Wurzeln folgen auf Instagram mehr als 30’000 Menschen.',
			location: 'Bundesplatz'
		},
		{
			day: Day.Saturday,
			time: '20.15 Uhr',
			title: 'Queeramnesty',
			description:
				'Die ehrenamtliche Gruppe Queeramnesty Schweiz ist ein Teil von Amnesty International. Mit ihrer Öffentlichkeitsarbeit setzt sie sich seit 1997 erfolgreich für die Rechte von LGBTI*-Menschen ein. Zu ihren Themengebieten gehören Menschenrechte, sexuelle Orientierung, Geschlechtsidentität und Geschlechtsentwicklung.',
			location: 'Bundesplatz'
		},
		{
			day: Day.Saturday,
			time: '20.30 - 21.45 Uhr',
			title: 'Naomi Lareine',
			description:
				'Naomi Lareine ist bekannt für ihre bittersüssen, lieblichen Töne, die wunderbar zu ihren breiten, R&B-lastigen Songs passen. Und genau diese hören wir am Samstag auf unserer Pride Fest-Bühne. Individualismus und Toleranz werden bei ihr ganz grossgeschrieben und immer wieder musikalisch verpackt. Mit ihrem unverwechselbaren Rhythmus dürfen wir uns auf eine verlockende Dosis moderner R&B-Musik voller turbulenter Geschichten freuen.',
			link: {
				url: 'https://open.spotify.com/artist/0umAOumGRDuZ2elvqjaK3i',
				text: 'Spotify'
			},
			location: 'Bundesplatz'
		},
		{
			day: Day.Saturday,
			time: '22.00 - 23.00 Uhr',
			title: 'Taylor Cruz',
			description:
				'Als Drummerin liebt und lebt Taylor Cruz den Beat über alles. Rhythmus ist ein wichtiger Teil in ihren eigenen produzierten Tracks, wie auch in ihren unzähligen Remixes. Sie ist zudem Mitbegründerin und DJ der beliebten Partyreihe "QueerPlanet" in Basel. Am 29. Juli ist sie aber nicht in Basel, sondern bei uns auf dem Bundesplatz! ',
			location: 'Bundesplatz'
		},
		{
			day: Day.Saturday,
			time: '22.00 - ? Uhr',
			title: 'Love Is Love - Official EuroGames & BernPride Party',
			description:
				'Love is all around! Die Liebe liegt in der Luft, überall, wo man hinschaut. Wir können richtig feiern und freuen uns auf einen grossartigen letzten Abend, der unvergesslich wird. Line Up: Madame Léa, DJ Gönnungshof, Jelena & Taylor Cruz. Tickets: 18 CHF (Abendkasse: 23 CHF)',
			location: 'Bierhübeli'
		},
		{
			day: Day.Saturday,
			time: '23.00 - ? Uhr',
			title: 'Rainbow Hits',
			description:
				'Die beiden DJs Ludwig und Corey legen regelmässig beim Tolerdance im ISC Bern auf, der langlebigsten Queer-Party der Schweiz. Anouk Amok, bekannt für ihre 80er-lastigen DJ-Sets, verwöhnt das Publikum in der ganzen queeren Schweiz. Das Trio spielt Hits von ABBA, Madonna, Lady Gaga und viele weitere Songs. Tickets im VVK online und Abendkasse',
			location: 'Turnhalle'
		},
		{
			day: Day.Saturday,
			time: '23.30 - ? Uhr',
			title: 'Pride Party - Youth Edition',
			description:
				'Das neue Jugendkulturlokal Stellwerk bietet zum Abschluss der Pride eine Party für junge Menschen (ab 16 Jahren) an. Mit dem BernPride-Soli Bändeli erhältst du einen vergünstigen Eintritt. Tickets im VVK online und Abendkasse',
			location: 'Stellwerk Bern'
		}
	];

	for (const i of activities.keys()) {
		const blacklist = [i === 0 ? Color.White : activities[i - 1].color || Color.White];
		activities[i].color = randomColorWithBlacklist(blacklist);
	}
</script>

<section id="daily-schedule" class="root">
	<div class="main-content description">
		<h2>TAGESABLAUF</h2>
		<br />
		<div class="buttons">
			{#each days as day}
				<button
					class:selected={selectedDay === day}
					on:click={() => {
						selectDay(day);
					}}
				>
					{day}
				</button>
			{/each}
		</div>
	</div>
</section>

<section class="activities">
	{#each activities.filter((a) => a.day === selectedDay) as activity (activity.title)}
		<div class="activity {activity.color ? activity.color.valueOf() : 'white'}">
			<div class="activity-content">
				<p class="activity-time">{activity.time}</p>
				<div class="activity-body">
					<h3>{activity.title}</h3>
					<p>{activity.description}</p>
					{#if activity.link}
						<a href={activity.link.url}>{activity.link.text} →</a>
					{/if}
				</div>
				<p class="activity-location">{activity.location}</p>
			</div>
		</div>
	{/each}
</section>

<style>
	.root {
		display: flex;
		justify-content: center;
		color: var(--red);
	}

	.main-content.description {
		flex-direction: column;
		margin-top: 50px;
		margin-bottom: 50px;
	}

	.buttons {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-top: 30px;
	}

	button {
		margin-bottom: 15px;
		background-color: var(--white);
		color: var(--red);
	}

	button.selected {
		background-color: var(--red);
		color: var(--white);
	}

	.activities {
		display: flex;
		flex-direction: column;
		color: var(--red);
	}

	.activity {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 1em;
	}

	.activity-content {
		max-width: 1024px;
		display: flex;
		flex-direction: column;
	}

	.activity-time {
		margin-bottom: 1em;
	}

	.activity-body {
		margin-bottom: 1em;
	}

	.red {
		background-color: var(--red);
		color: var(--yellow);
	}

	.blue {
		background-color: var(--blue);
	}

	.turquoise {
		background-color: var(--turquoise);
	}

	a {
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	@media only screen and (min-width: 768px) {
		.buttons,
		.activity,
		.activity-content {
			flex-direction: row;
		}

		.activity-time {
			width: 25%;
		}

		.activity-body {
			width: 60%;
		}

		.activity-location {
			width: 15%;
			text-align: right;
		}

		button {
			margin: 20px;
		}
	}
</style>
