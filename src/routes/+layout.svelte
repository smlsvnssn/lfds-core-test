<script>
  import favicon from '$lib/assets/favicon.svg'

  import '@lansforsakringar/core-components'
  import '@lansforsakringar/core-components/index.css'

  let { children } = $props()
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<style>
  :global(:root) {
    color-scheme: light dark;
  }

  :global(body) {
    margin: 1rem 1rem 10rem;
    display: grid;
    gap: 0.5rem;
    background: var(--lfds-semantic-background-primary);
    -webkit-font-smoothing: antialiased;

    @media (width < 30rem) {
      margin: 0 0 10rem;
    }
  }
  :global(p) {
    font-family: var(--lfds-typography-font-family-ibm);
    font-weight: var(--lfds-typography-weight-regular);
    font-size: 1rem;
    margin: 0;
    line-height: 1.5;
  }
</style>
