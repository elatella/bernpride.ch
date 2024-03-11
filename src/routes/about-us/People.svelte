<script lang="ts">
	import Member from '$lib/Person.svelte';
	import paddy from '$lib/images/portraits/BP_PaddyKaeser.png';
	import sarah from '$lib/images/portraits/BP_SarahBlaser.png';
	import kira from '$lib/images/portraits/BP_KiraRuf.png';
	import kerim from '$lib/images/portraits/BP_KerimKlenja.png';
	import lucina from '$lib/images/portraits/BP_LucinaKingsman.png';
	import francesca from '$lib/images/portraits/BP_FrancescaShore.png';
	import christian from '$lib/images/portraits/BP_ChristianSchwab.png';
	import sol from '$lib/images/portraits/BP_SolBalmer.png';
	import kevin from '$lib/images/portraits/BP_KevinHegg.png';
	import dani from '$lib/images/portraits/BP_DaniSchiessl.png';
	import robert from '$lib/images/portraits/BP_RobertSpiess.png';
	import katja from '$lib/images/portraits/BP_KatjaPerler.png';
	import bjoern from '$lib/images/portraits/BP_BjoernKunz.png';
	import danielae from '$lib/images/portraits/BP_DanielaEpp.png';
	import alex from '$lib/images/portraits/BP_AlexTruong.png';
	import lena from '$lib/images/portraits/BP_LenaMariaCarnal.png';
	import danielab from '$lib/images/portraits/BP_DanielaBrünisholz.png';
	import anne from '$lib/images/portraits/BP_AnneBardet.png';
	import annette from '$lib/images/portraits/BP_AnnetteMettler.png';
	import michaelru from '$lib/images/portraits/BP_MichaelRuefer.png';
	import andre from '$lib/images/portraits/BP_AndréWaelti.png';
	import michaelre from '$lib/images/portraits/BP_MichaelRedmond.png';
	import fallback1 from '$lib/images/portraits/BP_Fallback_1.png';
	import fallback2 from '$lib/images/portraits/BP_Fallback_2.png';
	import fallback3 from '$lib/images/portraits/BP_Fallback_3.png';

	const members = [
		{ name: 'Paddy Käser', pronouns: 'er/ihn', area: 'Co-Präsident & Co-Lead Finanzen und Sponsoring', imgURL: paddy },
		{ name: 'Sarah Blaser', pronouns: 'she/her', area: 'Co-Präsidentin & Co-Lead Infrastruktur und Sicherheit', imgURL: sarah },
		{ name: 'Kira Ruf', pronouns: 'she/her', area: 'Co-Lead Demonstration', imgURL: kira },
		{ name: 'Kerim Klenja', pronouns: 'he/him', area: 'Co-Lead Demonstration', imgURL: kerim },
		{ name: 'Lucina Kingsman', pronouns: 'sie/ihr', area: 'Demonstration', imgURL: lucina },
		{ name: 'Francesca Shore', pronouns: 'sie/ihr', area: 'Demonstration', imgURL: francesca},
		{ name: 'Christian Schwab', pronouns: 'er/ihm', area: 'Demonstration', imgURL: christian },
		{ name: 'Maria Poubouridis', pronouns: 'she/her', area: 'Co-Lead Programm', imgURL: fallback1 },
		{ name: 'André Hügli', pronouns: 'er/ihm', area: 'Co-Lead Programm', imgURL: fallback2 },
		{ name: 'Yanik Kittel', pronouns: 'er/ihm', area: 'Programm', imgURL: fallback3 },
		{ name: 'Sol Balmer', pronouns: 'sie/dey', area: 'Co-Lead Politik und Organisationen', imgURL: sol },
		{ name: 'Kevin Hegg', pronouns: 'he/him', area: 'Co-Lead Politik und Organisationen', imgURL: kevin },
		{ name: 'Dani Schiessl', pronouns: 'she/they', area: 'Politik und Organisationen', imgURL: dani },
		{
			name: 'Robert Spiess',
			pronouns: 'er/ihm',
			area: 'Co-Lead Infrastruktur und Sicherheit',
			imgURL: robert
		},
		{ name: 'Katja Perler', pronouns: 'sie/ihr', area: 'Infrastruktur', imgURL: katja },
		{ name: 'Björn Kunz', pronouns: 'he/him', area: 'Infrastruktur', imgURL: bjoern },
		{ name: 'Tim Binda', pronouns: 'he/him', area: 'Co-Lead Marketing & Kommunikation', imgURL: fallback1 },
		{ name: 'Daniela Epp', pronouns: 'sie/ihr', area: 'Co-Lead Marketing & Kommunikation', imgURL: danielae },
		{ name: 'Raphaela Seeger', pronouns: 'sie/ihr', area: 'Marketing & Kommunikation', imgURL: fallback2 },
		{ name: 'Alex Truong', pronouns: 'er/ihm', area: 'Marketing & Kommunikation', imgURL: alex },
		{ name: 'Lena Maria Carnal', pronouns: '-', area: 'Co-Lead Awareness', imgURL: lena },
		{ name: 'Daniela Brünisholz', pronouns: 'sie/ihr', area: 'Co-Lead Awareness', imgURL: danielab },
		{ name: 'Anne Bardet', pronouns: 'sie/ihr', area: 'Lead Volunteers', imgURL: anne },
		{ name: 'Annette Mettler', pronouns: 'she/her', area: 'Co-Lead Finanzen und Sponsoring', imgURL: annette },
		{ name: 'Michael Ruefer', pronouns: 'er/ihm', area: 'Finanzen und Sponsoring', imgURL: michaelru },
		{ name: 'André Wälti', pronouns: 'er/ihn', area: 'Finanzen und Sponsoring', imgURL:  andre},
		{ name: 'Michael Redmond', pronouns: 'er/ihn', area: 'Finanzen und Sponsoring', imgURL: michaelre },
	];
</script>

<section id="people" class="root">
	<div class="main-content">
		<h2>Die Menschen hinter der Pride</h2>
		<br />
		<p>
			Die BernPride wird von einem Vorstand und einem Organisationskomitee organisiert, 
			welche ihr Know-how und ihre Zeit ehrenamtlich in den Verein stecken. Bei Fragen 
			kannst du dich gerne per Mail an <a href="mailto:info@bernpride.ch">info@bernpride.ch</a> melden.
		</p>
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

	.members
	{
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
