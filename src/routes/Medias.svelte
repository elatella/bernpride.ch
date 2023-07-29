<script lang="ts">
	import arrow from '$lib/images/arrow-right-white.svg';
</script>

<section id="description" class="root">
	<div class="main-content">
		<h2>Fotos</h2>
		<p class="body">
			Unsere Fotograf*innen haben für euch die coolsten und schönsten Momente der Pride aufgenommen.
			Vielen Dank für diesen tollen Event!
		</p>
		<a class="button" href="https://www.picdrop.com/bruam/bernpride">
			Zu den Fotos
			<img src={arrow} alt="arrow right" width="30" height="18" class="arrow" />
		</a>
	</div>
</section>

<style>
	.root {
		display: flex;
		justify-content: center;
		background-color: var(--blue);
		color: var(--red);
	}

	.main-content {
		flex-direction: column;
		align-items: center;
		margin-top: 50px;
		margin-bottom: 50px;
	}

	.body {
		margin-top: 50px;
		margin-bottom: 50px;
	}

	a.button {
		width: 320px;
		text-decoration: none;
		border-radius: 999px;
		border-color: var(--red);
		border-style: solid;
		padding: 10px 20px 14px;
		font-size: 80%;
		color: var(--white);
		background-color: var(--red);
	}

	.arrow {
		margin-left: 15px;
	}
</style>
