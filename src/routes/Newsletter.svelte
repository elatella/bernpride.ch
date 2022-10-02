<script lang="ts">
	import loveletter from '$lib/images/loveletter.svg';

	let firstName = '';
	let email = '';
	let isValid = false;

	$: {
		if (firstName.length > 0 && email.includes('@')) {
			isValid = true;
		} else {
			isValid = false;
		}
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

		<form
			action="https://bernpride.us14.list-manage.com/subscribe/post?u=12afb8ee8379b949a0052c9e3&amp;id=ab139bcf71&amp;f_id=0046f2e0f0"
			method="POST"
		>
			<img src={loveletter} alt="LoveLetter" width="69" height="80" class="loveletter-icon" />
			<input name="FNAME" placeholder="Dein Vorname" bind:value={firstName} />
			<input name="EMAIL" type="email" placeholder="Deine Mail-Adresse" bind:value={email} />
			<button type="submit" disabled={!isValid}>Abonnieren</button>
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
