<script lang="ts">
	import arrow from '$lib/images/arrow-right-white.svg';
	import { base } from '$app/paths';
</script>

<section id="membership" class="root">
	<div class="main-content">
		<div class="row">
			<div class="column-big-red">
				<h3>MITGLIEDSCHAFT</h3>
				<br />
				<h4>Ab CHF 60.-</h4>
				<br />
				<p>
					Du kannst an der jährlichen Mitgliederversammlung über die Zukunft der BernPride
					mitbestimmen und erhältst von uns ein mega queeres BernPride Solibändeli.
				</p>
				<br />
				<a href="https://forms.gle/uhEM2GVUZhyznFVd9" class="button"
					>HIER ANMELDEN
					<img src={arrow} alt="arrow right" width="30" height="18" />
				</a>
			</div>
			<div class="column-small-turquoise">
				<div class="turquoise-column">
					<h3>ORGANISATIONSKOMITEE</h3>
					<br />

					<p>Wir suchen immer wieder engagierte Menschen für unser Organisationskomitee:</p>
					<br />
					<a href="info@bernpride.ch" class="button"
						>HIER ANMELDEN
						<img src={arrow} alt="arrow right" width="30" height="18" />
					</a>
				</div>
			</div>
		</div>
		<div class="row 2">
			<div class="column-big-blue">
				<div>
					<h3>GÖNNERMITGLIEDSCHAFT</h3>
					<br />

					<h4>Ab CHF 200.-</h4>
					<br />

					<p>
						Du kannst an der jährlichen Mitgliederversammlung über die Zukunft der BernPride
						mitbestimmen und erhältst von uns: - Eine Einladung zum Pride-Apero - Ein
						Überraschungsgeschenk - Gaaaanz viel queere Liebe ;-)
					</p>
					<br />
					<a href="https://forms.gle/uhEM2GVUZhyznFVd9" class="button-red"
						>HIER ANMELDEN
						<img src={arrow} alt="arrow right" width="30" height="18" />
					</a>
				</div>
			</div>
			<div class="column-small-red">
				<div>
					<h3>STATUTEN</h3>
					<br />

					<p>Unsere Vereinsstatuten findest du hier:</p>
					<br />
					<a href="{base}/documents/BernPride_Statuten_Nov2023.pdf" class="button"
						>HIER ANSEHEN
						<img src={arrow} alt="arrow right" width="30" height="18" />
					</a>
				</div>
			</div>
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
		flex-direction: d-flex;
		margin-top: 50px;
		margin-bottom: 50px;
	}
	.row {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 100%;
	}

	.column-big-red {
		display: flex;
		flex-direction: column;
		flex-basis: 100%;
		flex: 1;
		height: 450px;
		background-color: var(--red);
		color: var(--turquoise);
		content: center;
	}
	.column-big-blue {
		display: flex;
		flex-direction: column;
		flex-basis: 100%;
		flex: 1;
		height: 450px;
		background-color: var(--blue);
	}

	.column-small-red {
		display: flex;
		flex-direction: column;
		flex-basis: 100%;
		flex: 1;
		height: 250px;
		background-color: var(--red);
		color: var(--turquoise);
	}

	.column-small-turquoise {
		display: flex;
		flex-direction: column;
		flex-basis: 100%;
		flex: 1;
		height: 250px;
		background-color: var(--turquoise);
	}

	a.button-red {
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

	a.button {
		width: 290px;
		text-decoration: none;
		border-radius: 999px;
		border-color: var(--blue);
		border-style: solid;
		padding: 10px 20px 14px;
		font-size: 80%;
		color: var(--red);
		background-color: var(--blue);
	}
</style>
