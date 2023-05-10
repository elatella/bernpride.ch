<script lang="ts">
	import arrow from '$lib/images/arrow-right-white.svg';
</script>

<section id="description" class="root">
	<div class="main-content">
		<h2>Anmeldungen</h2>
		<br />
		<h5>Anmeldung als Laufgruppe</h5>
		<p>Für den Demonstrationsumzug sind grössere Laufgruppen zwingend anzumelden.</p>

		<div class="buttons">
			<a href="/schedule" class="button">
				Jetzt anmelden <img src={arrow} alt="arrow right" width="30" height="18" class="arrow" />
			</a>
		</div>
	</div>
</section>

<style>
	.root {
		display: flex;
		justify-content: center;
		background-color: var(--blue);
		color: var(--red);
	}

	.main-content {
		flex-direction: column;
		margin-top: 50px;
		margin-bottom: 50px;
	}

	.buttons {
		margin-top: 1.5rem;
		margin-bottom: 2rem;
	}

	a.button {
		margin: 15px 0;
		width: 100%;
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
		.buttons {
			flex-direction: row;
		}

		a.button {
			margin: 20px;
		}
	}
</style>
