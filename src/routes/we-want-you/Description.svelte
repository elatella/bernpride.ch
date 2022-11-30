<script lang="ts">
	import arrow from '$lib/images/arrow-right-white.svg';
</script>

<section id="description" class="root">
	<div class="main-content">
		<p>
			Die BernPride und die EuroGames 2023 finden vom 26. Juli bis 29. Juli 2023 statt! Die
			Vorbereitungen laufen bereits auf Hochtouren. Damit die Pride und die EuroGames bestmöglich
			durchgeführt werden können, sind wir auf der Suche nach Menschen, die uns in verschiedensten
			Rollen unterstützen.
		</p>
		<br />

		<p>
			Bist du interessiert, für die BernPride und die EuroGames in irgendeiner Form mitzuarbeiten?
			Dann schaue dir unsere freien Stellen an. Klicke auf die entsprechende Seite oder melde dich
			unter <a href="mailto:volunteers@eurogames2023.ch">volunteers@eurogames2023.ch</a>.
		</p>

		<div class="buttons">
			<a href="/we-want-you/volunteers" class="button">
				Volunteers <img src={arrow} alt="arrow right" width="30" height="18" class="arrow" />
			</a>
			<a href="/we-want-you/organizing-committee" class="button">
				Organisationskomitee <img src={arrow} alt="arrow right" width="30" height="18" />
			</a>
			<a href="/we-want-you/board" class="button">
				Vorstand <img src={arrow} alt="arrow right" width="30" height="18" class="arrow" />
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

	a {
		text-decoration: underline;
	}

	.buttons {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		margin-top: 100px;
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

	a.button:hover {
		filter: brightness(85%);
	}

	.arrow {
		margin-left: 15px;
	}
</style>
