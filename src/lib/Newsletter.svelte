<script lang="ts">
	import loveletter from '$lib/assets/loveletter.svg';
</script>

<section id="newsletter" class="root">
	<div class="main-content">
		<img src={loveletter} alt="LoveLetter" height="50" />
		<h2>UP TO DATE BLEIBEN</h2>
		<button>Newsletter abonnieren</button>
		<button>Newsletter abonnieren</button>
		<button>Newsletter abonnieren</button>
	</div>
</section>

<style>
	.root {
		display: flex;
		justify-content: center;
		background-color: var(--white);
		color: var(--red);
	}

	.main-content {
		flex-direction: column;
	}
</style>
