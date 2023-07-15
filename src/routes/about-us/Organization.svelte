<script lang="ts">
	import advisory from '$lib/images/advisory.webp';
</script>

<section id="description" class="root">
	<div class="main-content">
		<h2>Organisation</h2>
		<br />

		<p>
			Im Jahr 2023 wird die BernPride durch den Verein EuroGames Bern organisiert, welcher nach den
			EuroGames wieder aufgelöst wird. Eine Weiterführung der BernPride wird jedoch angestrebt. Die
			BernPride und der Verein EuroGames verfolgen keine kommerziellen Interessen. Allfällige
			Gewinne werden künftigen Veranstaltungen zur Verfügung gestellt, welche dieselben Ziele
			verfolgen, z.B. die Organisation einer nächsten BernPride. Wer interessiert ist, für eine
			nächste BernPride in Verein oder OK mitzuarbeiten, laden wir gerne zu einem ersten Treffen
			nach der BernPride 2023 ein. Schreibt uns auf <a href="mailto:info@bernpride.ch"
				>info@bernpride.ch</a
			> und wir senden dir bald nähere Informationen über das Treffen zu. Übrigens, die BernPride 2023
			wird begleitet durch einen Beirat, in dem die Organisationen der Community (LGBTI-Verbände) vereint
			sind.
		</p>
		<br />
		<br />

		<img src={advisory} alt="Beirat" width="380" height="268" />
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
		align-items: center;
		margin-top: 50px;
		margin-bottom: 50px;
	}
</style>
