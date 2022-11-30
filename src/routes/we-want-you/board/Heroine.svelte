<script lang="ts">
	import rainbow from '$lib/images/rainbow.svg';
	import rainbowRight from '$lib/images/rainbow-yellow-mirrored.svg';
</script>

<section id="activities" class="root">
	<div class="main-content">
		<img src={rainbow} alt="Rainbow" height="120" class="rainbow" />
		<div class="titles">
			<h1>VORSTAND</h1>
			<br />
			<p>Engagiere dich im Vorstand!</p>
		</div>
		<img src={rainbowRight} alt="Rainbow" height="120" class="rainbow" />
	</div>
</section>

<style>
	.root {
		display: flex;
		justify-content: center;
		background-color: var(--red);
		color: var(--yellow);
	}

	.main-content {
		margin-top: 50px;
		margin-bottom: 50px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.rainbow {
		margin: 1rem;
	}

	@media only screen and (min-width: 768px) {
		.main-content {
			flex-direction: row;
		}
	}
</style>
