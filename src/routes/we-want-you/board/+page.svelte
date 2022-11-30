<script lang="ts">
	import Heroine from './Heroine.svelte';
	import Description from './Description.svelte';
	import Board from './Board.svelte';
	import TermsAndConditions from '../TermsAndConditions.svelte';
	import Other from '../Other.svelte';
</script>

<svelte:head>
	<title>Vorstand</title>
</svelte:head>

<Heroine />

<Description />

<Board />

<TermsAndConditions backgroundColor="#d6e3ff" />

<Other />
