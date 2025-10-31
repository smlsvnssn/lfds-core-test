<script>
  let { icon = 'placeholder', onclick = v => v, children } = $props()
</script>

<button class="fancyLink" {onclick}>
  <lfui-icon icon-id={icon} size="24"></lfui-icon>
  <p>{@render children?.()}</p>
</button>

<style>
  .fancyLink {
    background: var(--lfds-semantic-background-button-tertiary);
    border: 1px solid var(--lfds-semantic-border-on-highlight-primary);
    border-radius: var(--lfds-semantic-sizes-radius-sm);
    color: var(--lfds-semantic-text-link);

    cursor: pointer;
    text-decoration: none;
    display: grid;
    place-items: center;
    gap: 0.25rem;
    padding: 0.75rem;
    transition: all 0.3s;
    lfui-icon {
      transition: all 0.3s;
    }

    &:hover {
      /* everything is broken */
      /* background: var(--lfds-semantic-background-button-tertiary-hover); */
      background: var(--lfds-primitives-color-blue-250);
      lfui-icon {
        translate: 0 -0.125rem;
      }
    }

    p {
      font-weight: var(--lfds-typography-weight-medium);
    }
  }
</style>
