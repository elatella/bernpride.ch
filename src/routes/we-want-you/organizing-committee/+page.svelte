<script lang="ts">
	import Heroine from './Heroine.svelte';
	import Description from './Description.svelte';
	import Positions from './Positions.svelte';
	import TermsAndConditions from '../TermsAndConditions.svelte';
	import Other from '../Other.svelte';
</script>

<svelte:head>
	<title>Organisationskomitee</title>
</svelte:head>

<Heroine />

<Description />

<Positions />

<TermsAndConditions backgroundColor="#d6e3ff" />

<Other />
