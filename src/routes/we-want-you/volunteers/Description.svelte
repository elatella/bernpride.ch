<script lang="ts">
	import arrow from '$lib/images/arrow-right-white.svg';
</script>

<section id="description" class="root">
	<div class="main-content">
		<p>
			Unterstützt du uns während den EuroGames und der BernPride im 2023 mit deiner Energie? Dann
			sei als Volunteer mit dabei, wenn Europas grösster LGBTIQ+-Sportevent und die BernPride Ende
			Juli 2023 in Bern stattfinden! Mit deinem Einsatz leistest du einen wertvollen Beitrag für die
			Sichtbarkeit unserer Community und der Inklusion im Sport und in der Gesellschaft.
		</p>
		<br />
		<p>
			<em>
				Heute kannst du dich als Volunteer anmelden. Sobal gibt verschiedenste Bereiche in denen du
				die EuroGames und die BernPride unterstützen kannst. Schau doch mal vorbei, vielleicht
				istauch für dich etwas dabei:
			</em>
		</p>
		<br />
		<br />
		<div class="center">
			<a href="https://eurogames2023.srv.tautoko.ch/crewportal/overview" class="button">
				Anmelden <img src={arrow} alt="arrow right" width="30" height="18" />
			</a>
		</div>
	</div>
</section>

<style>
	.root {
		display: flex;
		justify-content: center;
		background-color: var(--turquoise);
		color: var(--red);
	}

	.main-content {
		flex-direction: column;
		margin-top: 50px;
		margin-bottom: 50px;
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
</style>
