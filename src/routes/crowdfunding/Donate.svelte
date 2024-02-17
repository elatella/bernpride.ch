<script lang="ts">
	import { onMount } from 'svelte';
	import prideFlag from '$lib/images/prideflag/frame_132.png';

	onMount(async () => {
		// @ts-expect-error Temporary solution for loading of Tamaro widget.
		window.rnw.tamaro.runWidget('.rnw-widget-container', {
			language: 'de',
			amounts: [
				{
					if: 'paymentType() == onetime',
					then: [25, 50, 100, 200]
				}
			]
		});
	});
</script>

<section id="description" class="root">
	<div class="main-content">
		<h2>FÜLL' DIE FLAGGE</h2>
		<br />

		<div class="prideflag">
			<img src={prideFlag} alt="Fill the Flag" width="90%" />
		</div>
		<br />

		<h3>Hilf uns, die Pride-Flagge auszumalen und die BernPride zu finanzieren!</h3>
		<br />
		<h3>So funktioniert’s:</h3>
		<p>
			Die Pride-Flagge oben muss noch ein bisschen bunter werden. Und für jede 25 Franken, die
			gespendet werden, wird die Flagge um ein Quadrat bunter. Dabei entscheidest du, wie viele
			Quadrate du finanzieren möchtest. Unser Ziel ist, die Flagge bis Ende Februar vollzukriegen.
			Hilfst du uns?
		</p>
		<br />
		<p>
			Mit dem untenstehenden Formular kannst du einen freien Betrag spenden. Für jede 25 Franken
			wird die Pride-Flagge um ein Quadrat bunter!
		</p>
		<br />
		<p>
			Falls du dich auf unserer Website verewigen möchtest, kannst du bei der Spende eine Bemerkung
			mit deinem Namen hinterlassen. Dein Name erscheint dann mit der Pride-Flagge zusammen.
		</p>
		<br />
		<p>
			Die Flagge wird live aktualisiert. So kannst du mitverfolgen, wie schnell die Flagge bunt wird
			und wie viel tolle Menschen sich für ein queeres Bern einsetzen!
		</p>
		<br />
		<br />
		<br />
		<h2>HIER SPENDEN</h2>
		<br />
	</div>
</section>

<section class="donation-widget">
	<div class="rnw-widget-container"></div>
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
		padding: 1em;
	}

	.rnw-widget-container {
		width: 100%;
		max-width: 1024px;
	}
</style>
