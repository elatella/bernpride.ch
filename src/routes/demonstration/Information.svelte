<script lang="ts">
	import arrow from '$lib/images/arrow-right-white.svg';
</script>

<section id="description" class="root">
	<div class="main-content">
		<h2>Informationen</h2>
		<br />
		<h5>Treffpunkt</h5>
		<p>
			Quartierplatz Wankdorf Stadtion (<a
				href="https://www.google.com/maps/@46.9621666,7.4624924,18.52z">Google Maps</a
			>)
		</p>
		<br />

		<h5>Program</h5>
		<p>14:00 Beginn Reden</p>
		<p>14:30 Beginn der Demonstration</p>
		<p>17:30 Beginn Live-Acts Bundesplatz</p>

		<div class="buttons">
			<a href="/schedule" class="button">
				Mehr zum Programm <img src={arrow} alt="arrow right" width="30" height="18" class="arrow" />
			</a>
		</div>
		<h5>Route</h5>
		<p>
			Wankdorf Stadion - Papiermühlenstrasse - Aargauerstalden Nydeggbrücke - Gerechtigkeitsgasse -
			Kramgasse - Hotelgasse - Casinoplatz -
		</p>
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
		margin-top: 70px;
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
