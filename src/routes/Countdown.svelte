<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { PUBLIC_EVENT_START } from '$env/static/public';
	import clock from '$lib/images/clock.svg';
	import news from '$lib/images/news.svg';
	import facebook from '$lib/images/facebook-big.svg';
	import instagram from '$lib/images/instagram-big.svg';

	const SECOND = 1000;
	const MINUTE = 60 * SECOND;
	const HOUR = 60 * MINUTE;
	const DAY = 24 * HOUR;
	const MONTH = 30.4167 * DAY;

	let timer: number | null = null;

	const start = new Date(PUBLIC_EVENT_START);
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
		{#if now < start}
			<div class="clock-container">
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
		{:else}
			<div class="current-information-container">
				<img src={news} alt="News" height="70" style="margin-bottom:1em;" />
				<h3 style="margin-bottom:1em;">Alle aktuellen Informationen gibt es hier:</h3>
				<div style="margin-bottom:1em;">
					<a href="https://www.facebook.com/bernpride.ch/">
						<img src={facebook} alt="Facebook" height="50" style="margin-right:0.3em" />
					</a>
					<a href="https://www.instagram.com/bernpride.ch/">
						<img src={instagram} alt="Instagram" height="50" />
					</a>
				</div>
			</div>
		{/if}
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
	}

	.clock-container {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}

	.current-information-container {
		display: flex;
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
		font-size: 1.6rem;
		font-weight: bold;
	}

	.clock-unit {
		font-size: 0.5rem;
	}

	@media only screen and (min-width: 768px) {
		.clock-container,
		.current-information-container {
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
