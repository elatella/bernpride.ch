<script lang="ts">
	import logo from '$lib/images/logo-red.svg';
</script>

<footer class="root">
	<div class="main-content">
		<div class="left">
			<div><strong>Verein BernPride</strong></div>
			<div>Postadresse: BernPride, 3014 Bern</div>
		</div>
		<img src={logo} alt="BernPride" width="147" height="30" class="logo" />
		<div class="right">
			<div><a href="mailto:info@bernpride.ch"><strong>info@bernpride.ch</strong></a></div>
			<div><a href="/impressum" class="button">Impressum & Datenschautz</a></div>
		</div>
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

	.left,
	.right {
		flex-direction: column;
		line-height: 1.2em;
		padding: 0.5em;
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
		.left {
			text-align: left;
		}

		.right {
			text-align: right;
		}
	}
</style>
