<script lang="ts">
	import Person from '$lib/Person.svelte';
	import andyKuenzler from '$lib/images/andy-kuenzler.jpg';
	import danielaBlatter from '$lib/images/daniela-blatter.jpg';
	import davidHofstetter from '$lib/images/david-hofstetter.jpg';
	import gregZwygart from '$lib/images/greg-zwygart.jpg';
	import marcFunk from '$lib/images/marc-funk.jpg';
	import nikEugster from '$lib/images/nik-eugster.jpg';
	import paddyKaeser from '$lib/images/paddy-kaeser.jpg';
	import thomasIff from '$lib/images/thomas-iff.jpg';
	import thomasKuenzi from '$lib/images/thomas-kuenzi.jpg';

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

<section id="board" class="root">
	<div class="main-content">
		<h2>Unser Vostand</h2>
		<br />

		<div class="members">
			{#each members as member (member.name)}
				<Person
					name={member.name}
					pronouns={member.pronouns}
					area={member.area}
					imgURL={member.imgURL}
				/>
			{/each}
		</div>
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
		align-items: center;
		margin-top: 50px;
		margin-bottom: 50px;
	}

	.members {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-top: 20px;
		align-items: center;
		flex-wrap: wrap;
	}

	@media only screen and (min-width: 768px) {
		.members {
			flex-direction: row;
			align-items: flex-start;
		}
	}
</style>
