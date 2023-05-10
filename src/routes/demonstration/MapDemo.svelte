<script lang="ts">
	import map from '$lib/images/bp_map-web.png';
</script>

<section id="description" class="root">
	<div class="main-content">
		<img src={map} alt="Map with demo path" />
	</div>
</section>

<style>
	.root {
		display: flex;
		justify-content: center;
		color: var(--red);
	}

	.main-content {
		flex-direction: column;
		margin-top: 50px;
		margin-bottom: 50px;
	}
</style>
