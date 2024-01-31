<script lang="ts">
	import arrowUp from '$lib/images/arrow-up.svg';

	let y: number;

	function scrollToTop() {
		y = 0;
	}
</script>

<svelte:window bind:scrollY={y} />

{#if y > 300}
	<input type="image" src={arrowUp} alt="Back to top" on:click={scrollToTop} />
{/if}

<style>
	input {
		position: fixed;
		height: 50px;
		right: 40px;
		bottom: 100px;
		padding: 0;
		margin: 0;
		border: none;
		z-index: 9999;
	}

	input:hover {
		cursor: pointer;
	}
</style>
