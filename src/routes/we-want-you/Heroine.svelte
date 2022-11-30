<script lang="ts">
	import megaphoneLeft from '$lib/images/megaphone-left.svg';
	import megaphoneRight from '$lib/images/megaphone-right.svg';
</script>

<section id="activities" class="root">
	<div class="main-content">
		<img src={megaphoneLeft} alt="Megaphone facing right" height="120" class="megaphone" />
		<div class="titles">
			<h1>WIR SUCHEN DICH!</h1>
			<br />
			<p>Engagiere dich für die BernPride <br /> und die EuroGames 2023!</p>
		</div>
		<img src={megaphoneRight} alt="Megaphone facing left" height="120" class="megaphone" />
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

	.megaphone {
		margin: 1rem;
	}

	@media only screen and (min-width: 768px) {
		.main-content {
			flex-direction: row;
		}
	}
</style>
