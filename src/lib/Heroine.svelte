<script lang="ts">
	import loveIsLove from '$lib/assets/loveislove.svg';
	import isLove from '$lib/assets/islove.svg';
</script>

<section class="root">
	<div class="main-content">
		<div>
			<img src={loveIsLove} alt="Love Is Love" height="100" />
			<img src={isLove} alt="is Love" height="100" />
			<img src={isLove} alt="is Love" height="100" />
			<img src={isLove} alt="is Love" height="100" />
			<img src={isLove} alt="is Love" height="100" />
		</div>
		<h1>Bern kriegt eine Pride!</h1>
	</div>
</section>

<style>
	.root {
		display: flex;
		justify-content: center;
		background-color: var(--red);
		color: var(--yellow);
	}
</style>
