<script lang="ts">
	import clock from '$lib/assets/clock.svg';
</script>

<section id="countdown" class="root">
	<div class="main-content">
		<div class="title">
			<img src={clock} alt="StopWatch" height="30" class="clock-icon" />
			<h2 class="root">Bis zur BernPride sind es noch...</h2>
		</div>

		<div class="clock">
			<div class="clock-amount"><span>13</span><span>Monate</span></div>
			<div class="clock-amount"><span>25</span><span>Tage</span></div>
			<div class="clock-amount"><span>7</span><span>Stunden</span></div>
			<div class="clock-amount"><span>35</span><span>Minuten</span></div>
			<div class="clock-amount"><span>5</span><span>Sekunden</span></div>
		</div>
	</div>
</section>

<style>
	.root {
		display: flex;
		justify-content: center;
		background-color: var(--white);
		color: var(--red);
		padding-top: 30px;
		padding-bottom: 30px;
	}

	.main-content {
		justify-content: space-evenly;
		align-items: center;
	}

	.title {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.clock-icon {
		margin-right: 10px;
	}

	.clock {
		display: flex;
		flex-direction: row;
		font-weight: bold;
	}

	.clock-amount {
		display: flex;
		flex-direction: column;
		margin-left: 15px;
	}
</style>
