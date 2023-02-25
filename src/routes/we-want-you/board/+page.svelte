<script lang="ts">
	import Heroine from './Heroine.svelte';
	import Description from './Description.svelte';
	import TermsAndConditions from '../TermsAndConditions.svelte';
	import Other from '../Other.svelte';
</script>

<svelte:head>
	<title>BernPride - Vorstand</title>
</svelte:head>

<Heroine />

<Description />

<TermsAndConditions backgroundColor="#d6e3ff" />

<Other />
