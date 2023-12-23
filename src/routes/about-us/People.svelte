<script lang="ts">
	// import Member from '$lib/Person.svelte';
	// import alex from '$lib/images/alex.jpg';
	// import andre from '$lib/images/andre.jpg';
	// import andy from '$lib/images/andy.jpg';
	// import christina from '$lib/images/christina.jpg';
	// import claude from '$lib/images/claude.jpg';
	// import daniela from '$lib/images/daniela.jpg';
	// import david from '$lib/images/david.jpg';
	// import greg from '$lib/images/greg.jpg';
	// import jasmine from '$lib/images/jasmine.jpg';
	// import jasmin from '$lib/images/jasmin.jpg';
	// import lena from '$lib/images/lena.jpg';
	// import marc from '$lib/images/marc.jpg';
	// import maria from '$lib/images/maria.jpg';
	// import nik from '$lib/images/nik.jpg';
	// import paddy from '$lib/images/paddy.jpg';
	// import raphaela from '$lib/images/raphaela.jpg';
	// import tim from '$lib/images/tim.jpg';
	// import thomas from '$lib/images/thomas.jpg';
	// import yanik from '$lib/images/yanik.jpg';
	// import kira from '$lib/images/kira.jpg';
	// import teamMember from '$lib/images/team-member.jpg';
	import arrow from '$lib/images/arrow-right-white.svg';

	// const members = [
	// 	{ name: 'Alex', pronouns: 'er/ihm', area: 'Social Media EuroGames', imgURL: alex },
	// 	{ name: 'André', pronouns: 'er/ihm', area: 'Programm', imgURL: andre },
	// 	{ name: 'Andy', pronouns: 'er/ihm', area: 'Freiwillige', imgURL: andy },
	// 	{ name: 'Christina', pronouns: 'sie/ihr', area: 'Sponsoring', imgURL: christina },
	// 	{ name: 'Claude', pronouns: 'er/ihm', area: 'Outreach', imgURL: claude },
	// 	{ name: 'Daniela', pronouns: 'sie/ihr', area: 'Marketing', imgURL: daniela },
	// 	{ name: 'David', pronouns: 'er/ihm', area: 'Sport', imgURL: david },
	// 	{ name: 'Greg', pronouns: 'er/ihm', area: 'Sport, Co-Präsident', imgURL: greg },
	// 	{
	// 		name: 'Jasmine',
	// 		pronouns: 'sie/ihr',
	// 		area: 'Social Media EuroGames, Co-Präsidentin',
	// 		imgURL: jasmine
	// 	},
	// 	{ name: 'Jasmin', pronouns: 'sie/ihr', area: 'Sponsoring', imgURL: jasmin },
	// 	{ name: 'Kira', pronouns: 'sie/ihr', area: 'Demo BernPride', imgURL: kira },
	// 	{ name: 'Lena', pronouns: 'sie/ihr', area: 'Website BernPride', imgURL: lena },
	// 	{ name: 'Marc', pronouns: 'er/ihm', area: 'Finanzen', imgURL: marc },
	// 	{ name: 'Maria', pronouns: 'sie/ihr', area: 'Programm Village', imgURL: maria },
	// 	{ name: 'Nik', pronouns: 'er/ihm', area: 'Kommunikation', imgURL: nik },
	// 	{ name: 'Paddy', pronouns: 'er/ihm', area: 'Programm Bundesplatz', imgURL: paddy },
	// 	{ name: 'Raphaela', pronouns: 'sie/ihr', area: 'Website BernPride', imgURL: raphaela },
	// 	{ name: 'Sarah', pronouns: 'sie/ihr', area: 'Infrastruktur', imgURL: teamMember },
	// 	{ name: 'Tim', pronouns: 'er/ihm', area: 'Social Media BernPride', imgURL: tim },
	// 	{ name: 'Thomas', pronouns: 'er/ihm', area: 'Hospitality, Co-Präsident', imgURL: thomas },
	// 	{ name: 'Yanik', pronouns: 'er/ihm', area: 'Programm', imgURL: yanik }
	// ];
</script>

<section id="people" class="root">
	<div class="main-content">
		<h2>Die Menschen hinter der Pride</h2>
		<br />
		<p>
			Aktuell befindet sich der Verein noch in der Aufbauphase. Deshalb sind hier noch keine Bilder
			und Namen zu finden. Nähere Informationen folgen bald. In der Zwischenzeit kannst du dich bei
			Fragen gerne per Mail an <a href="mailto:info@bernpride.ch">info@bernpride.ch</a> melden.
		</p>
		<!--
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
-->

		<br />
		<br />
		<br />

		<a href="/we-want-you" class="button">
			Mitmachen <img src={arrow} alt="arrow right" width="30" height="18" class="arrow" />
		</a>
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

	a.button {
		width: 290px;
		text-decoration: none;
		border-radius: 999px;
		border-color: var(--red);
		border-style: solid;
		padding: 10px 20px 14px;
		font-size: 80%;
		color: var(--white);
		background-color: var(--red);
	}

	.arrow {
		margin-left: 15px;
	}

	@media only screen and (min-width: 768px) {
		.members {
			flex-direction: row;
			align-items: flex-start;
		}
	}
</style>
