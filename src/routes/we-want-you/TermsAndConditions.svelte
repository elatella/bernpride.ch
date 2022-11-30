<script lang="ts">
	import rainbow from '$lib/images/rainbow-red.svg';

	export let backgroundColor = '#fff';
</script>

<section id="description" class="root" style="background-color: {backgroundColor}">
	<div class="main-content">
		<img src={rainbow} alt="Rainbow" width="180" height="130" />
		<br />

		<h2>Allgemeine Terms & Conditions</h2>
		<br />

		<p>
			Als non-profit-Verein sind fast alle Tätigkeiten im Vorstand, OK und den weiteren Positionen
			freiwillig und unentgeltlich. Dafür kannst du neue Erfahrungen machen und dich für einen guten
			Zweck einsetzen!
		</p>
		<br />

		<p>
			Wir sind ein junges, aufgestelltes Team und je nach Funktion bist du direkt oder indirekt
			einem Vorstandsmitglied unterstellt.
		</p>
		<br />

		<p>
			Wir sind eine queere Organisation, die starken Wert auf Diversität und Inklusion setzt. Wir
			haben dazu ein Awareness-Team, das uns auf die Finger schaut und immer wieder auf diese Punkte
			aufmerksam macht. Wir erwarten dasselbe von dir.
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
		margin-top: 70px;
		margin-bottom: 70px;
	}
</style>
