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
		position: fixed;
		height: 50px;
		right: 40px;
		bottom: 40px;
	}

	img:hover {
		cursor: pointer;
	}
</style>
