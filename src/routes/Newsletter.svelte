<script lang="ts">
	import instagram from '$lib/images/instagram-big.svg';
	import facebook from '$lib/images/facebook-big.svg';
	import tiktok from '$lib/images/tiktok-red.png';

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
	const socialNetworks: { name: string; logo: string; link: string }[] = [
		{ name: 'Instagram', logo: instagram, link: 'https://www.instagram.com/bernpride.ch/' },
		{ name: 'Facebook', logo: facebook, link: 'https://www.facebook.com/bernpride.ch/' },
		{ name: 'TikTok', logo: tiktok, link: 'https://www.tiktok.com/@bernpride.ch' }
	];
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
			<div class="socialmedia">
				{#each socialNetworks as nw (nw.name)}
					<a
						href={nw.link}
						target="_blank"
						rel="noreferrer"
						class="social-icon"
						style="text-decoration:none"
					>
						<img src={nw.logo} alt={nw.name} width="60" height="60" />
					</a>
				{/each}
			</div>
			<input name="FNAME" placeholder="Dein Vorname" bind:value={firstName} class="form-input" />
			<br />
			<input
				name="EMAIL"
				type="email"
				placeholder="Deine Mail-Adresse"
				bind:value={email}
				class="form-input"
			/>
			<br />
			<button type="submit" disabled={!isValid}>ABONNIEREN</button>
		</form>
	</div>
</section>

<style>
	.root {
		display: flex;
		justify-content: center;
		background-color: var(--blue);
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

	.socialmedia {
		padding: 20px;
	}

	.form-input {
		margin-right: 10px;
	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 70px;
	}

	@media only screen and (min-width: 768px) {
		form {
			flex-direction: row;
		}
	}
</style>
