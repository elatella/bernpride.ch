<script lang="ts">
	import andyKuenzler from '$lib/images/andy-kuenzler.jpg';
	import danielaBlatter from '$lib/images/daniela-blatter.jpg';
	import davidHofstetter from '$lib/images/david-hofstetter.jpg';
	import gregZwygart from '$lib/images/greg-zwygart.jpg';
	import marcFunk from '$lib/images/marc-funk.jpg';
	import nikEugster from '$lib/images/nik-eugster.jpg';
	import paddyKaeser from '$lib/images/paddy-kaeser.jpg';
	import thomasIff from '$lib/images/thomas-iff.jpg';
	import thomasKuenzi from '$lib/images/thomas-kuenzi.jpg';
	import Member from './Member.svelte';

	const members = [
		{ name: 'Andy Künzler', pronouns: 'er/ihm', area: 'Freiwillige', imgURL: andyKuenzler },
		{ name: 'Daniela Blatter', pronouns: 'sie/ihr', area: 'Marketing', imgURL: danielaBlatter },
		{ name: 'David Hofstetter', pronouns: 'er/ihm', area: 'Sport', imgURL: davidHofstetter },
		{
			name: 'Greg Zwygart',
			pronouns: 'er/ihm',
			area: 'Geschäftsleitung, Sport',
			imgURL: gregZwygart
		},
		{ name: 'Marc Funk', pronouns: 'er/ihm', area: 'Finanzen', imgURL: marcFunk },
		{ name: 'Nik Eugster', pronouns: 'er/ihm', area: 'Kommunikation', imgURL: nikEugster },
		{ name: 'Paddy Käser', pronouns: 'er/ihm', area: 'Programmation', imgURL: paddyKaeser },
		{ name: 'Thomas Iff', pronouns: 'er/ihm', area: 'Sicherheit', imgURL: thomasIff },
		{
			name: 'Thomas Künzi',
			pronouns: 'er/ihm',
			area: 'Geschäftsleitung, Gastronomie',
			imgURL: thomasKuenzi
		}
	];
</script>

<svelte:head>
	<title>Vorstandsmitglied werden</title>
</svelte:head>

<div class="root">
	<div class="main-content">
		<br />
		<h1>Vorstandsmitglied werden</h1>
		<br />
		<br />

		<section>
			<h2>Engagiere dich im Vorstand der EuroGames und der BernPride 2023!</h2>
			<br />
			<p>
				In weniger als einem Jahr finden die EuroGames und die BernPride 2023 statt. Die
				Vorbereitungen laufen bereits auf Hochtouren. Damit die EuroGames und die Pride bestmöglich
				durchgeführt werden können, sind wir auf der Suche nach Menschen, die unseren Vorstand ideal
				ergänzen!
			</p>
			<br />
			<p>
				Hast du Lust, in einem jungen, dynamischen Team mitzuarbeiten und die EuroGames und
				BernPride 2023 zu einem phänomenalen Ereignis zu machen? Dann melde dich bei einem
				Vorstandsmitglied oder unter:
				<a href="mailto:volunteers@eurogames2023.ch">volunteers@eurogames2023.ch</a>
			</p>
			<br />
			<p>Insbesondere suchen wir Menschen, die sich nicht als cis-männlich identifizieren.</p>
			<br />
			<p>Deine künftigen Vorstandskolleg*innen freuen sich auf dich!</p>
			<br />
			<br />
			<div class="members">
				{#each members as member (member.name)}
					<Member
						name={member.name}
						pronouns={member.pronouns}
						area={member.area}
						imgURL={member.imgURL}
					/>
				{/each}
			</div>
		</section>

		<br />
		<br />

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

	.members {
		display: flex;
		flex-wrap: wrap;
	}
</style>
