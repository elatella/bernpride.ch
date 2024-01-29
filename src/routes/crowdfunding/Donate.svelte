<script lang="ts">
	import prideFlag01 from '$lib/images/prideflag/frame_1.png';
</script>

<section id="description" class="root">
	<div class="main-content">
		<h2>FÜLL' DIE FLAGGE</h2>
		<br />

		<div class="prideflag">
			<img src={prideFlag01} alt="Fill the Flag" width="90%" />
		</div>
		<br />

		<h3>Hilf uns, die Pride-Flagge auszumalen und die BernPride zu finanzieren!</h3>
		<br />
		<h3>So funktioniert’s:</h3>
		<p>
			Die Pride-Flagge oben muss noch ein bisschen bunter werden. Und für jede 50 Franken, die
			gespendet werden, wird die Flagge um ein Quadrat bunter. Dabei entscheidest du, wie viele
			Quadrate du finanzieren möchtest. Unser Ziel ist, die Flagge bis Ende Februar vollzukriegen.
			Hilfst du uns? Mit dem untenstehenden Formular kannst du einen freien Betrag spenden. Für jede
			50 Franken wird die Pride-Flagge um ein Quadrat bunter! Falls du dich auf unserer Website
			verewigen möchtest, kannst du bei der Spende eine Bemerkung mit deinem Namen hinterlassen.
			Dein Name erscheint dann mit der Pride-Flagge zusammen. Die Flagge wird live aktualisiert. So
			kannst du mitverfolgen, wie schnell die Flagge bunt wird und wie viel tolle Menschen sich für
			ein queeres Bern einsetzen!
		</p>
		<br />
		<h2>HIER SPENDEN</h2>
		<br />

		<div class="donation-widget">
			<div class="rnw-widget-container"></div>
			<script src="https://tamaro.raisenow.com/bernp-3c42/latest/widget.js"></script>
			<script>
				window.rnw.tamaro.runWidget('.rnw-widget-container', { language: 'de' });
			</script>
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
		flex-direction: column;
		margin-top: 50px;
		margin-bottom: 50px;
	}

	.prideflag {
		justify-content: center;
	}

	.donation-widget {
		display: flex;
		justify-content: center;
	}

	.rnw-widget-container {
		max-width: 600px;
	}
</style>
