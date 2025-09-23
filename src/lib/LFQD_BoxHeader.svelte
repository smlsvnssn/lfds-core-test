<script>
  let { children } = $props()
</script>

<div class="row">
  <h4>{@render children()}</h4>
</div>

<style>
  .row {
    font-family: var(--lfds-typography-font-family-ibm);

    padding: 1rem 0.75rem;

    border-bottom: 1px solid var(--lfds-semantic-border-primary);
    background: var(--lfds-semantic-background-secondary);

    h4 {
      font-size: 1.125rem;
      font-weight: var(--lfds-typography-weight-semibold);
      color: var(--lfds-semantic-text-brand-primary);
      margin: 0;
    }
  }
</style>
