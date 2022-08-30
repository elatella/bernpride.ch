<script lang="ts">
	import sprinklesLeft from '$lib/assets/sprinkles-left.svg';
	import sprinklesRight from '$lib/assets/sprinkles-right.svg';
	import plus from '$lib/assets/plus.svg';
	import minus from '$lib/assets/minus.svg';

	const faqs = [
		{
			question: 'Datum und Zeit',
			answer:
				'Die BernPride findet am 29. Juli 2022 tagsüber statt. Der genaue Zeitpunkt wird noch kommuniziert.',
			expanded: false
		},
		{
			question: 'Ort',
			answer: 'Die BernPride wird in unserer schönen Bundesstadt Bern stattfinden.',
			expanded: false
		},
		{
			question: 'Programm',
			answer:
				'Wir arbeiten mit Hochdruck daran, ein spannendes Programm auf die Beine zu stellen. Das genaue Programm wird noch kommuniziert.',
			expanded: false
		},
		{
			question: 'Social Media',
			answer:
				'Wenn du nichts über die BernPride verpassen möchtest, kannst du uns gerne auf unseren Social Media-Kanälen folgen. Wir sind präsent auf Instagram, Facebook und TikTok unter @bernpride.ch.',
			expanded: false
		},
		{
			question: 'Awareness Konzept',
			answer:
				'Unser Awareness-Konzept wird gerade ausgearbeitet. Das komplette Konzept wird noch kommuniziert.',
			expanded: false
		},
		{
			question: 'Noch Fragen?',
			answer:
				'Falls Deine Fragen hier nicht beantwortet wurden, schreib uns doch einfach unter info@bernpride.ch. Wir freuen uns von Dir zu lesen!',
			expanded: false
		}
	];

	function toggleFaqExpanded(index: number) {
		faqs[index].expanded = !faqs[index].expanded;
	}
</script>

<section id="faq" class="root">
	<div class="main-content">
		<div class="title">
			<img src={sprinklesLeft} alt="Sprinkles Left" height="100" />
			<h2 class="title-text">FAQ</h2>
			<img src={sprinklesRight} alt="Sprinkles Right" height="100" />
		</div>

		<div class="faqs">
			{#each faqs as faq, i (faq.question)}
				<div class="faq">
					<div
						class="expander"
						on:click={() => {
							toggleFaqExpanded(i);
						}}
					>
						<h3>{faq.question}</h3>
						<img src={faq.expanded ? minus : plus} alt="More" height="30" />
					</div>
					{#if faq.expanded}
						<p>{faq.answer}</p>
					{/if}
				</div>
			{/each}
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
		margin-top: 50px;
		margin-bottom: 50px;
	}

	.title {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.title-text {
		position: relative;
		bottom: 7px;
	}

	.faqs {
		margin-top: 70px;
	}

	.faq {
		display: flex;
		flex-direction: column;
		margin-bottom: 30px;
	}

	.faq p {
		text-align: left;
		margin-top: 10px;
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
