<script lang="ts">
	import arrow from '$lib/images/arrow-right-white.svg';
	import arrowRed from '$lib/images/arrow-right-red.svg';
</script>

<section id="description" class="root">
	<div class="main-content">
		<p class="body">
			Vor der BernPride am Samstag finden die EuroGames in Bern statt. Falls du also Lust hast, dort
			mitzumachen oder zuzuschauen, konsultiere bitte das EuroGames Programm.
		</p>
		<br />
		<div class="buttons">
			<a href="/schedule" class="button">
				Zum Pride-Programm
				<img src={arrow} alt="arrow right" width="30" height="18" class="arrow" />
			</a>
			<a href="https://eurogames2023.ch/activities/" class="button secondary">
				Zum EuroGames-Programm
				<img src={arrowRed} alt="arrow right" width="30" height="18" />
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

	.buttons {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		margin-top: 30px;
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

	a.button.secondary {
		color: var(--red);
		background-color: var(--turquoise);
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
