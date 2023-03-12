<script lang="ts">
	import advisory from '$lib/images/advisory.webp';
</script>

<section id="description" class="root">
	<div class="main-content">
		<h2>Organisation</h2>
		<br />

		<p>
			Im Jahr 2023 wird die BernPride durch den Verein EuroGames Bern organisiert, welcher nach den
			EuroGames wieder aufgelöst wird. Eine jährliche Weiterführung der BernPride wird jedoch
			angestrebt. Die BernPride und der Verein EuroGames verfolgen keine kommerziellen Interessen.
			Allfällige Gewinne werden künftigen Veranstaltungen zur Verfügung gestellt, welche dieselben
			Ziele verfolgen, z.B. die Organisation der BernPride 2024. Der Verein wird begleitet durch
			einen Beirat, in dem die Organisationen der Community (LGBTI-Verbände) vereint sind.
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
