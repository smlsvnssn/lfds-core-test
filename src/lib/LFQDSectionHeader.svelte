<script>
  let { children } = $props()
</script>

<div class="sectionHeader">
  <h3>{@render children?.()}</h3>
</div>

<style>
  .sectionHeader {
    font-family: var(--lfds-typography-font-family-ibm);

    padding: 2rem 1rem 0.25rem;

    h3 {
      font-size: 1.5rem;
      font-weight: var(--lfds-typography-weight-semibold);
      color: var(--lfds-semantic-text-brand-primary);
      margin: 0;
    }
  }
</style>
