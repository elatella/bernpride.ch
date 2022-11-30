<script lang="ts">
	import plus from '$lib/images/plus.svg';
	import minus from '$lib/images/minus.svg';

	export let items: { title: string; body: string }[];

	const expanded = items.map(() => false);

	function toggleItemExpanded(index: number) {
		expanded[index] = !expanded[index];
	}
</script>

<div class="items">
	{#each items as item, i (item.title)}
		<div class="item">
			<button
				class="expander"
				on:click={() => {
					toggleItemExpanded(i);
				}}
			>
				<h3>{item.title}</h3>
				<img src={expanded[i] ? minus : plus} alt="More" width="30" height="30" />
			</button>
			{#if expanded[i]}
				<p>{item.body}</p>
			{/if}
		</div>
	{/each}
</div>

<style>
	.items {
		margin-top: 70px;
	}

	.item {
		display: flex;
		flex-direction: column;
		margin-bottom: 30px;
	}

	.item p {
		text-align: left;
		margin-top: 10px;
		margin-left: 50px;
		margin-right: 50px;
	}

	.expander {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: none;
		border: none;
		color: var(--red);
		margin: 0;
		padding: 0;
		font-size: 100%;
	}

	.expander h3 {
		margin: 0;
		text-align: left;
	}
</style>
