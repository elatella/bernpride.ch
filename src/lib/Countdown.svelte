<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import clock from '$lib/assets/clock.svg';

	const SECOND = 1000;
	const MINUTE = 60 * SECOND;
	const HOUR = 60 * MINUTE;
	const DAY = 24 * HOUR;
	const MONTH = 30.4167 * DAY;

	let timer: NodeJS.Timer | null = null;

	const start = new Date(2023, 7, 29, 12);
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
		timer = setInterval(() => {
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
			<img src={clock} alt="StopWatch" height="30" class="clock-icon" />
			<p class="sub-title">Bis zur BernPride sind es noch...</p>
		</div>

		<div class="clock">
			<div class="clock-amount"><span>{monthCount}</span><span>Monate</span></div>
			<div class="clock-amount"><span>{dayCount}</span><span>Tage</span></div>
			<div class="clock-amount"><span>{hourCount}</span><span>Stunden</span></div>
			<div class="clock-amount"><span>{minuteCount}</span><span>Minuten</span></div>
			<div class="clock-amount"><span>{secondCount}</span><span>Sekunden</span></div>
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

	.sub-title {
		font-size: 2em;
		font-weight: bold;
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
