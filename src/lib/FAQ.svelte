<script lang="ts">
	import sprinklesLeft from '$lib/assets/sprinkles-left-red.svg';
	import sprinklesRight from '$lib/assets/sprinkles-right-red.svg';
	import plus from '$lib/assets/plus.svg';
</script>

<section id="faq" class="root">
	<div class="main-content">
		<div class="title">
			<img src={sprinklesLeft} alt="sprinklesLeft" height="100" />
			<h2>FAQ</h2>
			<img src={sprinklesRight} alt="sprinklesRight" height="100" />
		</div>

		<div>
			<div>
				Datum und Zeit
				<img src={plus} alt="More" height="30" />
			</div>
			<div>
				Route
				<img src={plus} alt="More" height="30" />
			</div>
			<div>
				Festival
				<img src={plus} alt="More" height="30" />
			</div>
			<div>
				Awareness-Konzept
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
	}

	.title {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: baseline;
	}
</style>
