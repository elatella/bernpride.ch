<script lang="ts">
	import { page } from '$app/stores';
	import arrow from '$lib/images/arrow-right-white.svg';
	import arrowRed from '$lib/images/arrow-right-red.svg';
</script>

<section id="other" class="root">
	<div class="main-content">
		<h2>Anderweitig engagieren?</h2>
		<br />

		<div class="buttons">
			<a href="/we-want-you" class="button">
				Übersicht <img src={arrow} alt="arrow right" width="30" height="18" class="arrow" />
			</a>
			{#if !$page.url.pathname.endsWith('/organizing-committee')}
				<a href="/we-want-you/organizing-committee" class="button secondary">
					Organisationskomitee
					<img src={arrowRed} alt="arrow right" width="30" height="18" />
				</a>
			{/if}
			{#if !$page.url.pathname.endsWith('/board')}
				<a href="/we-want-you/board" class="button secondary">
					Vorstand <img src={arrowRed} alt="arrow right" width="30" height="18" class="arrow" />
				</a>
			{/if}
			{#if !$page.url.pathname.endsWith('/volunteers')}
				<a href="/we-want-you/volunteers" class="button secondary">
					Volunteers <img src={arrowRed} alt="arrow right" width="30" height="18" class="arrow" />
				</a>
			{/if}
		</div>
	</div>
</section>

<style>
	.root {
		display: flex;
		justify-content: center;
		color: var(--red);
	}

	.main-content {
		flex-direction: column;
		margin-top: 50px;
		margin-bottom: 50px;
	}

	a {
		text-decoration: underline;
	}

	.buttons {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		margin-top: 30px;
	}

	a.button {
		margin: 15px 0;
		width: 100%;
		text-decoration: none;
		border-radius: 999px;
		border-color: var(--red);
		border-style: solid;
		padding: 10px 20px 14px;
		font-size: 80%;
		color: var(--white);
		background-color: var(--red);
	}

	a.button.secondary {
		color: var(--red);
		background-color: var(--white);
	}

	a.button:hover {
		filter: brightness(85%);
	}

	.arrow {
		margin-left: 15px;
	}

	@media only screen and (min-width: 768px) {
		.buttons {
			flex-direction: row;
		}

		a.button {
			margin: 20px;
		}
	}
</style>
