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
		width: 18%;
		margin: 1%;
	}

	h3 {
		font-size: 0.8rem;
		line-height: 100%;
		margin-bottom: 0.4rem;
	}

	p {
		font-size: 0.6rem;
		line-height: 110%;
		margin-bottom: 0.3rem;
	}
</style>
