<script lang="ts">
	import heroineDesktop from '$lib/images/heroine-desktop.webp';
	import heroineMobile from '$lib/images/heroine-mobile.webp';
</script>

<section id="heroine" class="root">
	<div class="main-content">
		<div>
			<img src={heroineMobile} alt="Love Is Love" class="heroine-mobile" />
			<img src={heroineDesktop} alt="Love Is Love" class="heroine-desktop" />
		</div>
	</div>
</section>

<style>
	.root {
		display: flex;
		justify-content: center;
		background-color: var(--red);
		color: var(--yellow);
	}

	.root img {
		width: 100%;
		margin-top: 20px;
		margin-bottom: 50px;
	}

	.heroine-desktop {
		display: none;
	}

	@media only screen and (min-width: 768px) {
		.heroine-mobile {
			display: none;
		}

		.heroine-desktop {
			display: inherit;
		}
	}
</style>
