<script lang="ts">
	import arrow from '$lib/images/arrow-right-white.svg';
</script>

<section id="description" class="root">
	<div class="main-content">
		<h2>Informationen</h2>
		<br />

		<h5>Anreise</h5>
		<p>
			Tramlinie 9 fährt wegen unserer Demo nur bis Guisanplatz, deshalb ist es besser, mit dem Zug
			ab Bahnhof Bern nach Bern Wankdorf anzureisen, z.B. mit der S2 um 13.42 ab Bern Bahnhof, der
			S1 um 13.46 ab Bern Bahnhof, der S44 um 13.50 ab Bern Bahnhof oder der S3 um 14.00 Uhr ab Bern
			Bahnhof. Ab Bern Wankdorf ist der Quartierplatz nur 5 Gehminuten entfernt. Wer von ausserhalb
			Bern kommt, nimmt am besten ein Zug, der um ca. 13.30 Uhr in Bern ist, steigt direkt auf die
			S2 um 13.42 um und fährt bis Bern Wankdorf.
		</p>
		<br />

		<h5>Treffpunkt</h5>
		<p>
			Quartierplatz Wankdorf Stadion (<a href="https://goo.gl/maps/Z67cE9uYtrVEXPVd8">Google Maps</a
			>)
		</p>
		<br />

		<h5>Programm</h5>
		<p>14.00 Beginn Reden</p>
		<p>14.30 Beginn der Demonstration</p>

		<div class="buttons">
			<a href="/schedule" class="button">
				Mehr zum Programm <img src={arrow} alt="arrow right" width="30" height="18" class="arrow" />
			</a>
		</div>

		<h5>Weitere Infos</h5>
		<p>
			Bitte wirf einen Blick in unsere FAQs auf der Hauptseite, welche Dir viele Fragen beantwortet
			wie z.B. unsere Awareness-Regeln, die Zugänglichkeit der BernPride, Brunnenwasser auf der
			Demostrecke oder die Bezahlungsmöglichkeiten an den Ständen.
		</p>
		<br />

		<h5>Route</h5>
		<p>
			Wankdorf Stadion - Papiermühlestrasse - Aargauerstalden - Nydeggbrücke - Gerechtigkeitsgasse -
			Kramgasse - Hotelgasse - Casinoplatz - Amthausgasse - Bundesplatz
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
