<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main>
	{@render children?.()}
</main>

<style>
	main {
		display: grid;
		gap: 1.5rem;
		margin: auto;
		max-width: 35rem;
	}

	:global(body) {
		margin: 6rem 1rem;
		margin-top: 6rem;
		background: var(--lfds-semantic-background-primary);
	}
</style>