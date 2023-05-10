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
			day: Day.Saturday,
			time: '17:30 - 18:15 Uhr',
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
			time: '18:30 - 19:00 Uhr',
			title: 'Paprika',
			description:
				'Paprika, unsere glamouröse Dragqueen aus Zürich, heizt am 29. Juli den Bundesplatz ein! 2018 gewann sie das Heaven Drag Race und legte so den Grundstein ihrer Karriere. Sie ist It-Girl, Teilzeitprinzessin, Burlesquekünstlerin und Influencerin zugleich und überzeugt mit ihren Acts, sorgt für Lacher und Emotionen. Was bei ihr nie fehlt? Die nötige Würze! ',
			location: 'Bundesplatz'
		},
		{
			day: Day.Saturday,
			time: '19:15 - 20:00 Uhr',
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
			time: '20:30 - 21:45 Uhr',
			title: 'Naomi Lareine',
			description:
				'Naomi Lareine ist bekannt für ihre bittersüssen, lieblichen Töne, die wunderbar zu ihren breiten, R&B-lastigen Songs passen. Und genau diese hören wir am Samstag auf unserer Pride Fest-Bühne. Individualismus und Toleranz werden bei ihr ganz grossgeschrieben und immer wieder musikalisch verpackt. Mit ihrem unverwechselbaren Rhythmus dürfen wir uns auf eine verlockende Dosis moderner R&B-Musik voller turbulenter Geschichten freuen.',
			link: {
				url: 'https://open.spotify.com/artist/0umAOumGRDuZ2elvqjaK3i',
				text: 'Spotify'
			},
			location: 'Bundesplatz'
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
			width: 15%;
		}

		.activity-body {
			width: 60%;
		}

		.activity-location {
			width: 20%;
			text-align: right;
		}

		button {
			margin: 20px;
		}
	}
</style>
