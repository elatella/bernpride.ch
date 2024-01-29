<script lang="ts">
	import arrow from '$lib/images/arrow-right-white.svg';
</script>

<section id="description" class="root">
	<div class="main-content">
		<h2>CROWDFUNDING</h2>
		<br />

		<p>Hilf uns, die Pride-Flagge auszumalen und die BernPride zu finanzieren!</p>
		<br />
		<div class="button-wrapper">
			<a href="/about-us" class="button-red"
				>ÜBER UNS
				<img src={arrow} alt="arrow right" width="30" height="18" />
			</a>
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

	a.button-red {
		text-decoration: none;
		border-radius: 999px;
		border-color: var(--red);
		border-style: solid;
		padding: 10px 20px 14px;
		font-size: 80%;
		color: var(--white);
		background-color: var(--red);
	}

	.button-wrapper {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.main-content {
		flex-direction: column;
		align-items: center;
		margin-top: 50px;
		margin-bottom: 50px;
	}
</style>
