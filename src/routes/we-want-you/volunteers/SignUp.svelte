<script lang="ts">
	import loveletter from '$lib/images/loveletter.svg';
	import arrow from '$lib/images/arrow-right-white.svg';
</script>

<section id="description" class="root">
	<div class="main-content">
		<img src={loveletter} alt="Liebesbrief" width="90" height="105" />
		<br />

		<h2>Melde dich jetzt an!</h2>
		<br />

		<p>Bist du mit im Team und willst du deine Energie in diesen internationalen Event stecken?</p>
		<br />

		<p>
			Uns ist es wichtig, dass alle selber entscheiden können, wo sie mitarbeiten möchten. Darum
			arbeiten wir ab Frühjahr 2023 mit Tautoku. Dies ist ein Online-Tool, bei welchem die
			jeweiligen Arbeitsschichten genau aufgeführt werden. Du kannst dich im Frühjahr direkt auf die
			ausgeschriebenen Schichten melden.
		</p>
		<br />
		<p>
			Zum heutigen Zeitpunkt können wir noch nicht genau sagen, in welchen Bereichen wir wie viele
			Volunteers benötigen. Darum kannst du dich heute erst vorregistrieren. Sobald die Schichten
			pro Bereich feststehen, werden wir alle angemeldeten Volunteers als Erstes informieren. Dann
			hast du die Möglichkeit, dich direkt für die einzelnen Schichten einzutragen. Melde dich also
			an und mache noch heute deine Vorregistration!
		</p>
		<br />
		<br />
		<a href="https://tautoko.ch/bern23_volunteers/" class="button">
			Anmelden
			<img src={arrow} alt="arrow right" width="30" height="18" class="arrow" />
		</a>
		<br />
		<br />
		<p>
			Wir freuen uns sehr, wenn du Teil unseres Teams wirst und sind überzeugt, dass du zusammen mit
			den anderen Volunteers, den Athlet*innen und den Demonstrant*innen eine unvergessliche Zeit
			bei den EuroGames und der BernPride 2023 haben wirst!
		</p>
		<br />
		<p>
			Hast du noch Fragen? Dann melde dich direkt per E-Mail an
			<a href="mailto:volunteers@eurogames2023.ch">volunteers@eurogames2023.ch</a>
		</p>
	</div>
</section>

<style>
	.root {
		display: flex;
		justify-content: center;
		color: var(--red);
	}

	.main-content {
		flex-direction: column;
		align-items: center;
		margin-top: 50px;
		margin-bottom: 50px;
	}

	a.button {
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
</style>
