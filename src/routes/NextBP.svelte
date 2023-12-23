<script lang="ts">
	import sprinklesLeft from '$lib/images/sprinkles-left.svg';
	import sprinklesRight from '$lib/images/sprinkles-right.svg';
</script>

<section id="description" class="root">
	<div class="main-content">
		<div class="title">
			<img src={sprinklesLeft} alt="Sprinkles Left" width="58" height="100" />
			<h2>BERNPRIDE 2024</h2>
			<img src={sprinklesRight} alt="Sprinkles Right" width="71" height="100" />
		</div>
		<br />
		<h5>
			Die BernPride 2023 war so schön! 10’000 Menschen haben auf den Berner Gassen für ihre Rechte
			demonstriert, ihre Liebe gefeiert und unsere Bundesstadt ein Stück bunter gemacht.
		</h5>
		<br />
		<p>
			Wir schwelgen immer noch in diesen schönen Gedanken - gleichzeitig planen wir für dich aber
			schon die nächste BernPride!
		</p>
		<br />

		<p>
			Wann diese stattfinden wird? Ganz klar: 2024! Ein genaues Datum gibt es noch nicht. Aber wenn
			du uns auf Instagram und Facebook folgst oder unseren Newsletter abonnierst, dann bekommst du
			diese Informationen als Erste*r!
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
	.title {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.main-content {
		flex-direction: column;
		align-items: center;
		margin-top: 50px;
		margin-bottom: 50px;
	}
</style>
