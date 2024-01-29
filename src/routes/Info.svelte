<script lang="ts">
	import arrowred from '$lib/images/arrow-right-red.svg';
	import arrow from '$lib/images/arrow-right-white.svg';
</script>

<section id="info" class="root">
	<div class="row">
		<div class="column-big-red">
			<div class="column">
				<h2>UNSER VEREIN</h2>
				<br />
				<h3>Willst du mehr über unseren Verein erfahren oder uns sogar unterstützen?</h3>
			</div>
			<br />
			<br />
			<div class="button-wrapper">
				<a href="/about-us" class="button"
					>ÜBER UNS
					<img src={arrowred} alt="arrow right" width="30" height="18" />
				</a>
			</div>
		</div>
		<div class="column-big-blue">
			<div>
				<div class="column">
					<h2>SCHREIB' UNS</h2>
					<br />
					<h3>Hast du Fragen oder willst uns etwas mitteilen? Hier ist unser Kontakt für dich:</h3>
				</div>
				<br />
				<br />
				<div class="button-wrapper">
					<a href="mailto:info@bernpride.ch" class="button-red"
						>EMAIL
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
		background-color: var(--red);
		color: var(--blue);
		display: column;
		flex-direction: center;
		flex-basis: 100%;
		flex: 1;
		padding: 2em;
	}

	.column-big-blue {
		background-color: var(--blue);
		display: column;
		flex-direction: center;
		flex-basis: 100%;
		flex: 1;
		padding: 2em;
	}

	.button-wrapper {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	a.button-red {
		text-decoration: none;
		border-radius: 999px;
		border-color: var(--red);
		border-style: solid;
		padding: 10px 20px 14px;
		font-size: 80%;
		color: var(--blue);
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
	}
</style>
