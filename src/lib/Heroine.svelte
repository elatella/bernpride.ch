<script lang="ts">
	import loveIsLove from '$lib/assets/loveislove-heroine.png';
</script>

<section id="heroine" class="root">
	<div class="main-content">
		<div>
			<img src={loveIsLove} alt="Love Is Love" />
		</div>
	</div>
</section>

<style>
	.root {
		display: flex;
		justify-content: center;
		background-color: var(--red);
		color: var(--yellow);
	}

	.root img {
		width: 100%;
	}
</style>
