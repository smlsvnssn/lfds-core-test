<script>
  let { type = 'onecol', children } = $props()
</script>

<div class="layout {type}">
  {@render children()}
</div>

<style>
  .layout {
    --narrow: 35rem;
    --wide: 65rem;

    display: grid;
    gap: 0.5rem;
    margin: auto;
    margin-bottom: 5rem;
    width: 100%;
    max-width: var(--narrow);

    grid-template-areas:
        'main' 'aside' 'secondary';

    @media (width < 30rem) {
      border-radius: 0;
    }
    
    &.twocol {
      grid-template-columns: 2fr 1fr;
      gap: 1.5rem;
      max-width: var(--wide);
      
      grid-template-areas:
      'main aside'
      'secondary aside';
      
      @media (width < 30rem) {
        gap: 0.5rem;
        grid-template-columns: 1fr;
        grid-template-areas: 'main' 'aside' 'secondary ';
      }
    }

    &.twocol-with-header {
      grid-template-columns: 2fr 1fr;
      gap: 1.5rem;
      max-width: var(--wide);

      grid-template-areas:
        'header header'
        'main aside'
        'secondary aside';

      @media (width < 30rem) {
        gap: 0.5rem;
        grid-template-columns: 1fr;
        grid-template-areas: 'header' 'main' 'aside' 'secondary ';
      }
    }
    
    &.threecol {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1.5rem;
      max-width: var(--wide);
      
      grid-template-areas: 'main aside secondary';
      
      @media (width < 30rem) {
        gap: 0.5rem;
        grid-template-columns: 1fr;
        grid-template-areas: 'main' 'aside' 'secondary';
      }
    }
    
    &.threecol-with-header {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1.5rem;
      max-width: var(--wide);
      
      grid-template-areas:
      'header header header'
      'main aside secondary';
      
      @media (width < 30rem) {
        gap: 0.5rem;
        grid-template-columns: 1fr;
        grid-template-areas: 'header' 'main' 'aside' 'secondary ';
      }
    }

    :global(.layout-area) {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    :global(.aside) {
      grid-area: aside;
    }
    :global(.main) {
      grid-area: main;
    }
    :global(.secondary) {
      /* padding-top: 6rem; */
      grid-area: secondary;
    }
    :global(.header) {
      grid-area: header;
    }
  }
</style>
