<script lang="ts">
	import party from '$lib/images/party.svg';
	import partyMirrored from '$lib/images/party-mirrored.svg';
</script>

<section id="activities" class="root">
	<div class="main-content">
		<img src={party} alt="Loveletter facing right" height="120" class="loveletter" />
		<div class="titles">
			<h1>UNSER PROGRAMM</h1>
			<br />
			<p>Erlebe Bern in all seinen Formen und Farben - mit unserem queeren Programm.</p>
		</div>
		<img src={partyMirrored} alt="Loveletter facing left" height="120" class="loveletter" />
	</div>
</section>

<style>
	.root {
		display: flex;
		justify-content: center;
		background-color: var(--red);
		color: var(--yellow);
	}

	.main-content {
		margin-top: 50px;
		margin-bottom: 50px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.loveletter {
		margin: 1rem;
	}

	@media only screen and (min-width: 768px) {
		.main-content {
			flex-direction: row;
		}
	}
</style>
