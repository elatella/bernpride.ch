<script lang="ts">
	import arrowUp from '$lib/assets/arrow-up.svg';

	let y = 0;

	function scrollToTop() {
		y = 0;
	}
</script>

<svelte:window bind:scrollY={y} />

{#if y > 300}
	<img src={arrowUp} alt="Back to top" on:click={scrollToTop} />
{/if}

<style>
	img {
		height: 50px;
		position: fixed;
		bottom: 100px;
		right: 100px;
	}

	img:hover {
		cursor: pointer;
	}
</style>
