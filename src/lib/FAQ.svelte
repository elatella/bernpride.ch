<script lang="ts">
	import sprinklesLeft from '$lib/assets/sprinkles-left-red.svg';
	import sprinklesRight from '$lib/assets/sprinkles-right-red.svg';
	import plus from '$lib/assets/plus.svg';
</script>

<section class="root">
	<div class="root">
		<img src={sprinklesLeft} alt="sprinklesLeft" height="100" />

		<h2>FAQ</h2>

		<img src={sprinklesRight} alt="sprinklesRight" height="100" />
	</div>
</section>

<div class="info">
	Datum und Zeit
	<img src={plus} alt="More" height="100" />
	Route
	<img src={plus} alt="More" height="100" />
	Festival
	<img src={plus} alt="More" height="100" />
	Awareness-Konzept
	<img src={plus} alt="More" height="100" />
</div>

<style>
	.root {
		text-align: center;
		background-color: var(--blue);
		color: var(--red);
	}
</style>
