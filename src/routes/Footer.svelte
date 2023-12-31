<script lang="ts">
	import logo from '$lib/images/logo-red.svg';
</script>

<footer class="root">
	<div class="main-content">
		<strong>Verein BernPride</strong>
		<img src={logo} alt="BernPride" width="147" height="30" class="logo" />
		<a href="/impressum" class="button">Impressum</a>
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

	a.button {
		margin: 15px 0;
		width: fit-content;
		text-decoration: none;
		border-radius: 999px;
		border-color: var(--red);
		border-style: solid;
		padding: 10px 20px 14px;
		font-size: 80%;
		color: var(--white);
		background-color: var(--red);
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
