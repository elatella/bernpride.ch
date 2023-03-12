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
			time: '14:00 Uhr',
			title: 'Eröffnungsrede Demonstration',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus quam mi, et dictum',
			location: 'Wankdorf Center'
		},
		{
			day: Day.Saturday,
			time: '14:30 Uhr',
			title: 'Startpunkt Demonstrationsumzug',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus quam mi, et dictum',
			link: {
				url: '/',
				text: 'Route'
			},
			location: 'Wankdorf Center'
		},
		{
			day: Day.Saturday,
			time: '16:00 Uhr',
			title: 'Ankunft Festivalgelände',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus quam mi, et dictum',
			location: 'Bundesplatz'
		},
		{
			day: Day.Saturday,
			time: '16:30 Uhr',
			title: 'Act XYZ',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus quam mi, et dictum',
			link: {
				url: 'https://open.spotify.com/artist/7M26B2dpKVQ30MPUYvzWXk',
				text: 'Spotify'
			},
			location: 'Hauptbühne Bundesplatz'
		},
		{
			day: Day.Saturday,
			time: '16:30 Uhr',
			title: 'Irgendöppis',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus quam mi, et dictum',
			location: 'Münsterplattform'
		},
		{
			day: Day.Saturday,
			time: '23:30 Uhr',
			title: 'Irgend en Party',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus quam mi, et dictum',
			link: {
				url: 'https://bierhuebeli.ch/',
				text: 'Tickets'
			},
			location: 'Bierhübeli'
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
