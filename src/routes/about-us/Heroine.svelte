<script lang="ts">
	import loveletterLeft from '$lib/images/loveletter-left.svg';
	import loveletterRight from '$lib/images/loveletter-right.svg';
</script>

<section id="activities" class="root">
	<div class="main-content">
		<img src={loveletterLeft} alt="Loveletter facing right" height="120" class="loveletter" />
		<div class="titles">
			<h1>ÜBER UNS</h1>
			<br />
		</div>
		<img src={loveletterRight} alt="Loveletter facing left" height="120" class="loveletter" />
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

	.loveletter {
		margin: 1rem;
	}

	@media only screen and (min-width: 768px) {
		.main-content {
			flex-direction: row;
		}
	}
</style>
