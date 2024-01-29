<script lang="ts">
	import flagLeft from '$lib/images/FlaggeLeft.svg';
	import flagRight from '$lib/images/FlaggeRight.svg';
</script>

<section id="activities" class="root">
	<div class="main-content">
		<img src={flagLeft} alt="flag facing left" height="120" class="flag" />
		<div class="titles">
			<h1>CROWDFUNDING</h1>
			<br />
		</div>
		<img src={flagRight} alt="Flag facing right" height="120" class="flag" />
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

	.flag {
		margin: 1rem;
	}

	@media only screen and (min-width: 768px) {
		.main-content {
			flex-direction: row;
		}
	}
</style>
