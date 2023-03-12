<script lang="ts">
	import brokenHeart from '$lib/images/broken-heart.svg';
	import arrow from '$lib/images/arrow-right-red.svg';
</script>

<svelte:head>
	<title>BernPride 2023</title>
	<meta
		name="description"
		content="Bern kriegt eine Pride. Am 29.7.2023 findet in Bern wieder eine Pride Parade statt."
	/>
</svelte:head>

<div class="root">
	<div class="main-content">
		<img src={brokenHeart} alt="broken heart" width="138" height="130" />
		<h1>Darauf sind wir jetzt also nicht so proud.</h1>
		<br />
		<br />
		<p>Wie es scheint, suchst du eine Seite, die es (nicht) mehr gibt.</p>
		<br />
		<br />
		<a class="button" href="/">
			Zurück zur Homepage
			<img src={arrow} alt="arrow right" width="30" height="18" class="arrow" />
		</a>
	</div>
</div>

<style>
	.root {
		height: 80vh;
		display: flex;
		justify-content: center;
		text-align: center;
		background-color: var(--red);
		color: var(--yellow);
	}

	.main-content {
		flex-direction: column;
		align-items: center;
	}

	h1 {
		margin-top: 0.5em;
	}

	a.button {
		width: 320px;
		text-decoration: none;
		border-radius: 999px;
		border-color: var(--yellow);
		border-style: solid;
		padding: 10px 20px 14px;
		font-size: 80%;
		color: var(--red);
		background-color: var(--yellow);
	}

	.arrow {
		margin-left: 15px;
	}
</style>
