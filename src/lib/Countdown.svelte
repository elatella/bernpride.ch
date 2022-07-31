<script lang="ts">
	import clock from '$lib/assets/clock.svg';
</script>

<section id="countdown" class="root">
	<div class="main-content">
		<div class="title">
			<img src={clock} alt="StopWatch" height="30" class="clock" />
			<h2 class="root">Bis zur BernPride sind es noch...</h2>
		</div>
	</div>
</section>

<style>
	.root {
		display: flex;
		justify-content: center;
		background-color: var(--white);
		color: var(--red);
	}

	.title {
		display: flex;
		flex-direction: row;
		align-items: baseline;
	}

	.clock {
		margin-right: 10px;
		position: relative;
		top: 6px;
	}
</style>
