<script lang="ts">
	import pridegif from '$lib/images/prideflag_gif.gif';
</script>

<section id="info" class="root">
	<div class="row">
		<div class="column-big-red">
			<div class="column">
				<h2>Crowdfunding</h2>
				<br />

				<img src={pridegif} alt="prideflag gif" />

				<br />

				<h3>
					Der Februar war unser Crowdfunding-Monat! Dank über 100 Zuwendungen konnten wir die
					Quadrate unserer Pride-Flagge füllen! Ein grosses Merci an… Rachel & Nevio, Michelle,
					David, Tiffany, Elijah, Sarah, Henrik, Jessica, Lucina, Christina, Markus, Andreu, Timo,
					Anita, Adrian, Sanja, Fatih, Nico, Sandro, Lucia, Stefan, Raphaël, Sophia, Manuela,
					Flávio, Melanie, Domenica, Ramona, Tom, Jessica, Bettina für Simon, Marianne, Florian,
					Riccardo, Philipp, Mila, Shannon …und alle anderen, die uns im Februar unterstützt haben!
				</h3>
			</div>
		</div>
	</div>
</section>

<style>
	.root {
		display: flex;
		justify-content: center;
		color: var(--turquoise);
	}

	.row {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		width: 100%;
	}

	.column {
		display: column;
		justify-content: center;
		text-align: center;
		flex-basis: 100%;
		flex: 1;
	}

	.column-big-red {
		background-color: var(--turquoise);
		color: var(--red);
		display: column;
		flex-direction: center;
		flex-basis: 100%;
		flex: 1;
		padding: 2em;
	}

	@media only screen and (min-width: 768px) {
		.row {
			flex-direction: row;
		}
	}
</style>
