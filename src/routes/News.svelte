<script lang="ts">
	import news from '$lib/images/news.svg';
	import facebook from '$lib/images/facebook-big.svg';
	import instagram from '$lib/images/instagram-big.svg';
</script>

<section id="countdown" class="root">
	<div class="main-content">
		<img src={news} alt="News" width="95" height="70" style="margin-bottom:1em;" />
		<h3 style="margin-bottom:1em;">Alle aktuellen Informationen gibt es hier:</h3>
		<div style="margin-bottom:1em;">
			<a href="https://www.facebook.com/bernpride.ch/">
				<img src={facebook} alt="Facebook" width="50" height="50" style="margin-right:0.3em" />
			</a>
			<a href="https://www.instagram.com/bernpride.ch/">
				<img src={instagram} alt="Instagram" width="50" height="50" />
			</a>
		</div>
	</div>
</section>

<style>
	.root {
		display: flex;
		justify-content: center;
		background-color: var(--white);
		color: var(--red);
		padding-top: 30px;
		padding-bottom: 30px;
	}

	.main-content {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}
	@media only screen and (min-width: 768px) {
		.main-content {
			flex-direction: row;
		}
	}
</style>
