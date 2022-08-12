<script lang="ts">
	import loveletter from '$lib/assets/loveletter.svg';

	let name = '';

	function handleSubmit() {
		alert(`Danke, ${name}!`);
	}
</script>

<section id="newsletter" class="root">
	<div class="main-content">
		<h2>UP TO DATE BLEIBEN</h2>
		<p class="body">
			Unser Team stellt sich jeden Tag neuen Herausforderungen, um Bern so bunt wie nur möglich zu
			gestalten. Willst du mehr dazu erfahren? Melde dich zum Newsletter an und wir informieren dich
			über alles Wichtige!
		</p>

		<form on:submit|preventDefault={handleSubmit}>
			<img src={loveletter} alt="LoveLetter" height="80" class="loveletter-icon" />
			<input placeholder="Dein Vorname" bind:value={name} />
			<input type="email" placeholder="Deine Mail-Adresse" />
			<button type="submit">Abonnieren</button>
		</form>
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
		margin-top: 50px;
		margin-bottom: 50px;
	}

	.body {
		margin-top: 50px;
	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 70px;
	}

	input,
	.loveletter-icon {
		margin-bottom: 30px;
	}

	@media only screen and (min-width: 768px) {
		form {
			flex-direction: row;
		}

		input,
		.loveletter-icon {
			margin-bottom: 0;
		}

		input {
			margin-right: 20px;
		}

		.loveletter-icon {
			margin-right: 60px;
		}
	}
</style>
