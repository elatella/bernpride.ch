<script lang="ts">
	import logo from '$lib/images/logo-yellow.svg';

	export let isOpen = false;

	function close() {
		isOpen = false;
	}
</script>

{#if isOpen}
	<div class="root">
		<div class="toolbar">
			<input
				type="image"
				src={logo}
				alt="BernPride"
				style="width:150px;padding:0;margin-left:20px"
				on:click={close}
			/>
			<button on:click={close}>ZURÜCK</button>
		</div>

		<a href="/" on:click={close}>HOME</a><br />
		<a href="/we-want-you" on:click={close}>MITMACHEN</a>
	</div>
{/if}

<style>
	.root {
		position: fixed;
		width: 100vw;
		padding-bottom: 120px;
		background-color: var(--red);
		color: var(--yellow);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.toolbar {
		width: 100vw;
		max-width: 1024px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 50px;
	}

	input {
		margin-top: 10px;
		cursor: pointer;
	}

	button {
		color: var(--yellow);
		font-weight: bold;
	}

	a {
		margin: 0.3rem;
		font-size: 1.7rem;
		font-weight: bold;
	}

	button:hover,
	a:hover {
		filter: brightness(85%);
	}

	@media only screen and (min-width: 768px) {
		a {
			font-size: 2.2rem;
		}
	}
</style>
