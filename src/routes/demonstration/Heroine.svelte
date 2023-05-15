<script lang="ts">
	import rainbow from '$lib/images/rainbow.svg';
	import rainbowMirrored from '$lib/images/rainbow-yellow-mirrored.svg';
</script>

<section id="activities" class="root">
	<div class="main-content">
		<img src={rainbow} alt="Loveletter facing right" height="120" class="rainbow" />
		<div class="titles">
			<h1>Demonstration</h1>
			<br />
			<p>Lass' uns gemeinsam durch Bern marschieren und für unsere Rechte einstehen!</p>
		</div>
		<img src={rainbowMirrored} alt="Loveletter facing left" height="120" class="rainbow" />
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
