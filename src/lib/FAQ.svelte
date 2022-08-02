<script lang="ts">
	import sprinklesLeft from '$lib/assets/sprinkles-left-red.svg';
	import sprinklesRight from '$lib/assets/sprinkles-right-red.svg';
	import plus from '$lib/assets/plus.svg';
	import minus from '$lib/assets/minus.svg';

	let dateAndTimeIsExpanded = false;
	let placeExpanded = false;
	let programExpanded = false;
	let socialMediaExpanded = false;
	let awarenessConceptExpanded = false;

	function toggleDateAndTimeExpanded() {
		dateAndTimeIsExpanded = !dateAndTimeIsExpanded;
	}

	function togglePlaceExpanded() {
		placeExpanded = !placeExpanded;
	}

	function toggleProgramExpanded() {
		programExpanded = !programExpanded;
	}

	function toggleSocialMediaExpanded() {
		socialMediaExpanded = !socialMediaExpanded;
	}

	function toggleAwarenessConceptExpanded() {
		awarenessConceptExpanded = !awarenessConceptExpanded;
	}
</script>

<section id="faq" class="root">
	<div class="main-content">
		<div class="title">
			<img src={sprinklesLeft} alt="Sprinkles Left" height="100" />
			<h2 class="title-text">FAQ</h2>
			<img src={sprinklesRight} alt="Sprinkles Right" height="100" />
		</div>

		<div>
			<div class="category">
				<div class="expander" on:click={toggleDateAndTimeExpanded}>
					<h3>Datum und Zeit</h3>
					<img src={dateAndTimeIsExpanded ? minus : plus} alt="More" height="30" />
				</div>
				{#if dateAndTimeIsExpanded}
					<p>
						Die BernPride findet am 29. Juli 2022 statt tagsüber statt. Der genaue Zeitpunkt wird
						noch kommuniziert.
					</p>
				{/if}
			</div>
			<div class="category">
				<div class="expander" on:click={togglePlaceExpanded}>
					<h3>Ort</h3>
					<img src={placeExpanded ? minus : plus} alt="More" height="30" />
				</div>
				{#if placeExpanded}
					<p>Die BernPride wird in unserer schönen Bundesstadt Bern stattfinden.</p>
				{/if}
			</div>
			<div class="category">
				<div class="expander" on:click={toggleProgramExpanded}>
					<h3>Programm</h3>
					<img src={programExpanded ? minus : plus} alt="More" height="30" />
				</div>
				{#if programExpanded}
					<p>
						Wir arbeiten mich Hochdruck daran, ein spannendes Programm auf die Beine zu stellen. Das
						genaue Programm wird noch kommuniziert.
					</p>
				{/if}
			</div>
			<div class="category">
				<div class="expander" on:click={toggleSocialMediaExpanded}>
					<h3>Social Media</h3>
					<img src={socialMediaExpanded ? minus : plus} alt="More" height="30" />
				</div>
				{#if socialMediaExpanded}
					<p>
						Wenn du nichts über die BernPride verpassen möchtest, kannst du uns gerne auf unseren
						Social Media-Kanälen folgen. Wir sind präsent auf Instagram, Facebook und TikTok unter
						@bernpride.ch.
					</p>
				{/if}
			</div>
			<div class="category">
				<div class="expander" on:click={toggleAwarenessConceptExpanded}>
					<h3>Awareness Konzept</h3>
					<img src={awarenessConceptExpanded ? minus : plus} alt="More" height="30" />
				</div>
				{#if awarenessConceptExpanded}
					<p>
						Unser Awareness-Konzept wird gerade ausgearbeitet. Das komplette Konzept wird noch
						kommuniziert.
					</p>
				{/if}
			</div>
		</div>
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
		margin-top: 20px;
		margin-bottom: 50px;
	}

	.title {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-bottom: 20px;
	}

	.title-text {
		position: relative;
		bottom: 8px;
	}

	.category {
		display: flex;
		flex-direction: column;
		margin-bottom: 30px;
	}

	.category p {
		text-align: left;
		margin-left: 50px;
		margin-right: 50px;
	}

	.expander {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.expander:hover {
		cursor: pointer;
	}

	.expander h3 {
		margin: 0;
	}
</style>
