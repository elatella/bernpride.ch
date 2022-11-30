<script lang="ts">
	export let name: string;
	export let pronouns: string;
	export let area: string;
	export let imgURL: string;
</script>

<div class="member">
	<img src={imgURL} alt="Portrait {name}" />
	<h3>{name}</h3>
	<div class="description">
		<p>{pronouns}</p>
		<p>{area}</p>
	</div>
</div>

<style>
	.member {
		margin: 30px 10px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		max-width: 280px;
	}

	h3 {
		font-size: 0.8rem;
		line-height: 100%;
		margin: 0.4rem;
	}

	p {
		font-size: 0.6rem;
		line-height: 110%;
		margin-bottom: 0.3rem;
	}

	@media only screen and (min-width: 768px) {
		.member {
			margin-top: 60px;
			margin-bottom: 0;
			width: 22%;
		}
	}
</style>
