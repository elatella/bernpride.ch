<script lang="ts">
	import sprinklesLeft from '$lib/assets/sprinkles-left-red.svg';
	import sprinklesRight from '$lib/assets/sprinkles-right-red.svg';
	import plus from '$lib/assets/plus.svg';
</script>

<section id="faq" class="root">
	<div class="main-content">
		<div class="title">
			<img src={sprinklesLeft} alt="Sprinkles Left" height="100" />
			<h2 class="title-text">FAQ</h2>
			<img src={sprinklesRight} alt="Sprinkles Right" height="100" />
		</div>

		<div>
			<div class="category">
				<h3>Datum und Zeit</h3>
				<img src={plus} alt="More" height="30" />
			</div>
			<div class="category">
				<h3>Route</h3>
				<img src={plus} alt="More" height="30" />
			</div>
			<div class="category">
				<h3>Festival</h3>
				<img src={plus} alt="More" height="30" />
			</div>
			<div class="category">
				<h3>Awareness-Konzept</h3>
				<img src={plus} alt="More" height="30" />
			</div>
		</div>
	</div>
</section>

<style>
	.root {
		display: flex;
		justify-content: center;
		background-color: var(--blue);
		color: var(--red);
	}

	.main-content {
		flex-direction: column;
		margin-top: 20px;
		margin-bottom: 50px;
	}

	.title {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-bottom: 20px;
	}

	.title-text {
		position: relative;
		bottom: 8px;
	}

	.category {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 30px;
	}

	.category h3 {
		margin: 0;
	}
</style>
