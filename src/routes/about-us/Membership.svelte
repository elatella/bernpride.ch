<script lang="ts">
	import arrowred from '$lib/images/arrow-right-red.svg';
	import arrowblue from '$lib/images/arrow-right-blue.svg';
	import arrowturq from '$lib/images/arrow-right-turquoise.svg';
	import { base } from '$app/paths';
</script>

<section id="membership" class="root">
	<div class="row">
		<div class="column column-big-red">
			<h3>MITGLIEDSCHAFT</h3>
			<br />
			<h4>Ab CHF 60.-</h4>
			<br />
			<p>
				Du kannst an der jährlichen Mitgliederversammlung über die Zukunft der BernPride
				mitbestimmen und erhältst von uns ein mega queeres BernPride Solibändeli.
			</p>
			<br />
			<br />
			<div class="button-wrapper">
				<a href="https://forms.gle/uhEM2GVUZhyznFVd9" class="button"
					>HIER ANMELDEN
					<img src={arrowred} alt="arrow right" width="30" height="18" />
				</a>
			</div>
		</div>
		<div class="column column-small-turquoise">
			<div class="turquoise-column">
				<h3>GÖNNERMITGLIEDSCHAFT</h3>
				<br />

				<h4>Ab CHF 200.-</h4>
				<br />

				<p>
					Du kannst an der jährlichen Mitgliederversammlung über die Zukunft der BernPride
					mitbestimmen und erhältst von uns:
				</p>
				<ul>- Eine Einladung zum Pride-Apero</ul>
				<ul>- Ein Überraschungsgeschenk</ul>
				<ul>- Gaaaanz viel queere Liebe ;-)</ul>
				<br />
				<div class="button-wrapper">
					<a href="https://forms.gle/uhEM2GVUZhyznFVd9" class="button-red-turquoise"
						>HIER ANMELDEN
						<img src={arrowturq} alt="arrow right" width="30" height="18" />
					</a>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="column column-big-blue">
			<div>
				<h3>ORGANISATIONSKOMITEE</h3>
				<br />
				<p>Wir suchen immer wieder engagierte Menschen für unser Organisationskomitee:</p>
				<br />
				<br />
				<div class="button-wrapper">
					<a href="mailto:info@bernpride.ch" class="button-red-blue"
						>HIER ANMELDEN
						<img src={arrowblue} alt="arrow right" width="30" height="18" />
					</a>
				</div>
			</div>
		</div>
		<div class="column column-small-red">
			<div>
				<h3>STATUTEN</h3>
				<br />

				<p>Unsere Vereinsstatuten findest du hier:</p>
				<br />
				<br />
				<div class="button-wrapper">
					<a href="{base}/documents/BernPride_Statuten_Nov2023.pdf" class="button"
						>HIER ANSEHEN
						<img src={arrowred} alt="arrow right" width="30" height="18" />
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.root {
		display: flex;
		flex-direction: column;
		justify-content: center;
		color: var(--red);
	}

	.row {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		width: 100%;
	}

	.column {
		display: flex;
		flex-direction: column;
		flex-basis: 100%;
		flex: 1;
		padding: 2em 0.5em;
	}

	.column-big-red {
		display: flex;
		flex-direction: column;
		flex-basis: 100%;
		flex: 1;
		background-color: var(--red);
		color: var(--blue);
		content: center;
	}
	.column-big-blue {
		display: flex;
		flex-direction: column;
		flex-basis: 100%;
		flex: 1;
		background-color: var(--blue);
	}

	.column-small-red {
		display: flex;
		flex-direction: column;
		flex-basis: 100%;
		flex: 1;
		background-color: var(--red);
		color: var(--blue);
	}

	.column-small-turquoise {
		display: flex;
		flex-direction: column;
		flex-basis: 100%;
		flex: 1;
		background-color: var(--turquoise);
	}

	.button-wrapper {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	a.button-red-blue {
		text-decoration: none;
		border-radius: 999px;
		border-color: var(--red);
		border-style: solid;
		padding: 10px 20px 14px;
		font-size: 80%;
		color: var(--blue);
		background-color: var(--red);
	}
	a.button-red-turquoise {
		text-decoration: none;
		border-radius: 999px;
		border-color: var(--red);
		border-style: solid;
		padding: 10px 20px 14px;
		font-size: 80%;
		color: var(--turquoise);
		background-color: var(--red);
	}

	a.button {
		text-decoration: none;
		border-radius: 999px;
		border-color: var(--blue);
		border-style: solid;
		padding: 10px 20px 14px;
		font-size: 80%;
		color: var(--red);
		background-color: var(--blue);
	}

	@media only screen and (min-width: 768px) {
		.row {
			flex-direction: row;
		}
		.column {
			padding: 2em;
		}
	}
</style>
