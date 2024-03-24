<script lang="ts">
	import { onMount } from 'svelte';
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
		<br />

		<p>
			Damit die BernPride wieder so bunt und queer wird wie letztes Jahr, sind wir auf deine
			finanzielle Hilfe angewiesen. Hilf uns mit einer Spende, um so die BernPride zu ermöglichen!
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
