<script lang="ts">
	import logo from '$lib/images/logo-red.svg';
</script>

<footer class="root">
	<div class="main-content">
		<strong>Verein EuroGames Bern</strong>
		<img src={logo} alt="BernPride" width="147" height="30" class="logo" />
		<a href="mailto:info@bernpride.ch">info@bernpride.ch</a>
	</div>
</footer>

<style>
	.root {
		display: flex;
		justify-content: center;
		background-color: var(--white);
		color: var(--red);
		font-size: 0.6rem;
	}

	.main-content {
		flex-direction: column;
		justify-content: space-between !important;
		align-items: center;
	}

	.logo {
		position: relative;
		top: 6px;
		padding-bottom: 10px;
	}

	@media only screen and (min-width: 768px) {
		.main-content {
			flex-direction: row;
		}
		.logo {
			padding-bottom: 0;
		}
	}
</style>
