<script lang="ts">
	import Heroine from './Heroine.svelte';
	import Description from './Description.svelte';
	import Volunteering from './Volunteering.svelte';
	import Benefits from './Benefits.svelte';
</script>

<svelte:head>
	<title>Volunteers</title>
</svelte:head>

<Heroine />

<Description />

<Volunteering />

<Benefits />

<div class="root">
	<div class="main-content">
		<section>
			<br />
			<br />

			<h3>Rollen und Chancen</h3>
			<br />
			<p>
				Während der gesamten Veranstaltung wird es verschiedenste Tätigkeiten für Volunteers geben.
				Dies können beispielsweise sein:
			</p>
			<br />
			<ul>
				<li>
					Volunteer für eine Sportart, z.B. das Sicherstellen eines gut durchgeführten Turniers,
					Einweisung der Sportler*innen, Sammeln der Resultate und überreichen der Medaillen
				</li>
				<li>
					Arbeit im EuroGames Village z.B. Bararbeit, Musiker*innenbetreuung, Gewährleistung der
					Sicherheit
				</li>
				<li>Unterstützung unseres Social-Media-Teams mit Fotografieren der Sportler*innen</li>
				<li>Sprinter zur Sicherstellung der Verbindungen und wenn irgendwo Hilfe benötigt wird</li>
				<li>Mithilfe in der Logistik dieser beiden Grossanlässe</li>
			</ul>

			<p>
				Die meisten Einsätze sind während der Veranstaltung (26. bis 29. Juli 2023) vorgesehen und
				werden in Bern stattfinden. Es gibt auch Möglichkeiten, sich in den Monaten vor der
				Veranstaltung als Langzeit-Volunteer oder in der Organisation des Anlasses zu engagieren.
				<br />
				Siehe auch: <a href="/we-want-you">Wir suchen dich</a>.
			</p>
		</section>

		<br />
		<br />

		<section>
			<h3>Melde jetzt dein Interesse an</h3>
			<br />
			<p>
				Bist du mit im Team und willst du deine Energie in diesen internationalen Event stecken?
			</p>
			<br />
			<p>
				Uns ist es wichtig, dass alle selber entscheiden können, wo sie mitarbeiten möchten. Darum
				arbeiten wir ab Frühjahr 2023 mit Tautoku. Dies ist ein Online-Tool, bei welchem die
				jeweiligen Arbeitsschichten genau aufgeführt werden. Du kannst dich im Frühjahr direkt auf
				die ausgeschriebenen Schichten melden.
			</p>
			<br />
			<p>
				Zum heutigen Zeitpunkt können wir noch nicht genau sagen, in welchen Bereichen wir wie viele
				Volunteers benötigen. Darum kannst du dich heute erst vorregistrieren. Sobald die Schichten
				pro Bereich feststehen, werden wir alle angemeldeten Volunteers als Erstes informieren. Dann
				hast du die Möglichkeit, dich direkt für die einzelnen Schichten einzutragen. Melde dich
				also an und mache noch heute deine Vorregistration!
			</p>
			<br />
			<br />
			<div class="center">
				<a href="https://tautoko.ch/bern23_volunteers/" class="button"
					>Melde dich als Volunteer an</a
				>
			</div>
			<br />
			<br />
			<p>
				Wir freuen uns sehr, wenn du Teil unseres Teams wirst und sind überzeugt, dass du zusammen
				mit den anderen Volunteers, den Athlet*innen und den Demonstrant*innen eine unvergessliche
				Zeit bei den EuroGames und der BernPride 2023 haben wirst!
			</p>
			<br />
			<p>
				Hast du noch Fragen? Dann melde dich direkt per E-Mail an
				<a href="mailto:volunteers@eurogames2023.ch">volunteers@eurogames2023.ch</a>
			</p>
		</section>
	</div>
</div>

<style>
	section {
		margin-bottom: 1rem;
	}

	a {
		color: blue;
	}

	a:link {
		color: blue;
	}

	a:visited {
		color: #075dd0;
	}

	a:hover {
		color: var(--red);
	}

	a.button {
		border-radius: 999px;
		border-color: var(--red);
		border-style: solid;
		padding: 10px 20px;
		font-size: 80%;
		color: var(--white);
		background-color: var(--red);
	}

	a.button:hover {
		filter: brightness(85%);
	}

	.root {
		display: flex;
		justify-content: center;
	}

	.main-content {
		flex-direction: column;
		text-align: left;
		font-size: 80%;
		line-height: 100%;
	}

	.center {
		text-align: center;
	}
</style>
