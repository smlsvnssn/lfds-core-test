<script>
  /**
   * @import { Snippet } from 'svelte'
   * @type {{
   *   title?: string
   *   amount: string | number
   *   subtitle?: string
   *   children?: Snippet
   * }}
   */
  let { title = 'Totalt:', amount, subtitle = '', children } = $props()
</script>

<header>
  <p>{title}</p>
  <h4>{amount ?? '---'}</h4>

  {#if subtitle !== ''}
    <small>{subtitle}</small>
  {/if}

  {@render children?.()}
</header>

<style>
  header {
    display: grid;
    gap: 0.25rem;
    place-items: center;
    padding: 2rem 1.5rem 2.5rem;
    border-bottom: 1px solid var(--lfds-semantic-border-primary);

    @media (width < 30rem) {
      gap: 0.25rem;
    }
  }

  h4 {
    font-family: var(--lfds-typography-font-family-ibm);
    font-weight: var(--lfds-typography-weight-semibold);
    color: var(--lfds-semantic-text-brand-primary);
    font-size: 2rem;
    text-align: center;
    margin: 0%;

    @media (width < 30rem) {
      font-size: 1.875rem;
    }
  }

  p {
    font-weight: var(--lfds-typography-weight-semibold);
    color: var(--lfds-semantic-text-brand-primary);
    font-size: 1rem;
    max-width: 60ch;
    @media (width < 30rem) {
      font-size: 1rem;
    }
  }

  small {
    font-family: var(--lfds-typography-font-family-ibm);
    font-weight: var(--lfds-typography-weight-regular);
    color: var(--lfds-semantic-text-secondary);
    font-size: 0.875rem;
  }
</style>
