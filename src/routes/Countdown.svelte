<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import clock from '$lib/images/clock.svg';

	const SECOND = 1000;
	const MINUTE = 60 * SECOND;
	const HOUR = 60 * MINUTE;
	const DAY = 24 * HOUR;
	const MONTH = 30.4167 * DAY;

	let timer: number | null = null;

	const start = new Date(2023, 6, 29, 12);
	let now = new Date();

	let monthCount = 0;
	let dayCount = 0;
	let hourCount = 0;
	let minuteCount = 0;
	let secondCount = 0;

	$: {
		let timeDiff = start.getTime() - now.getTime();

		monthCount = Math.floor(timeDiff / MONTH);
		timeDiff = timeDiff % MONTH;
		dayCount = Math.floor(timeDiff / DAY);
		timeDiff = timeDiff % DAY;
		hourCount = Math.floor(timeDiff / HOUR);
		timeDiff = timeDiff % HOUR;
		minuteCount = Math.floor(timeDiff / MINUTE);
		timeDiff = timeDiff % MINUTE;
		secondCount = Math.floor(timeDiff / SECOND);
	}

	onMount(() => {
		timer = window.setInterval(() => {
			now = new Date();
		}, SECOND);
	});

	onDestroy(() => {
		if (timer) {
			clearInterval(timer);
		}
	});
</script>

<section id="countdown" class="root">
	<div class="main-content">
		<div class="title">
			<img src={clock} alt="StopWatch" width="90" height="90" class="clock-icon" />
			<h3 class="subtitle">Bis zur BernPride sind es noch...</h3>
		</div>

		<div class="clock">
			<div class="clock-amount">
				<span class="clock-count">{monthCount}</span>
				<span class="clock-unit">Monate</span>
			</div>
			<div class="clock-amount">
				<span class="clock-count">{dayCount}</span>
				<span class="clock-unit">Tage</span>
			</div>
			<div class="clock-amount">
				<span class="clock-count">{hourCount}</span>
				<span class="clock-unit">Stunden</span>
			</div>
			<div class="clock-amount">
				<span class="clock-count">{minuteCount}</span>
				<span class="clock-unit">Minuten</span>
			</div>
			<div class="clock-amount">
				<span class="clock-count">{secondCount}</span>
				<span class="clock-unit">Sekunden</span>
			</div>
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
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}

	.title {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.subtitle {
		text-align: left;
		line-height: 100%;
	}

	.clock-icon {
		margin-right: 30px;
	}

	.clock {
		display: flex;
		flex-direction: row;
		margin-top: 50px;
	}

	.clock-amount {
		display: flex;
		flex-direction: column;
		margin-left: 10px;
	}

	.clock-count {
		font-size: 1.8rem;
		font-weight: bold;
	}

	.clock-unit {
		font-size: 0.6rem;
	}

	@media only screen and (min-width: 768px) {
		.main-content {
			flex-direction: row;
		}

		.clock {
			margin-top: 0;
		}

		.clock-amount {
			margin-left: 25px;
		}
	}
</style>
