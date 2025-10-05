<script>
  import MiniMasonry from 'minimasonry'
  let { type = 'onecol', children } = $props()

  let el, masonry

  $effect(() => {
    // TODO: super unreliable masonry lib, use another
    if (type == 'masonry') {
      let s = {
        container: el,
        baseWidth: 350,
        gutter: 24,
        surroundingGutter: false,
      }
      masonry = new MiniMasonry(s)

      // Ugliest hack ever.
      requestAnimationFrame(() => {
        masonry.layout(s)
        setTimeout(() => {
          masonry.layout(s)
        }, 50)
      })
    } else masonry?.destroy()
    return () => masonry?.destroy()
  })
</script>

<div class="layout {type}" bind:this={el}>
  {@render children()}
</div>

<style>
  .layout {
    --narrow: 35rem;
    --wide: 65rem;
    --wider: 85rem;

    display: grid;
    gap: 0.5rem;
    margin: auto;
    /* margin-bottom: 5rem; */
    width: 100%;
    max-width: var(--narrow);

    grid-template-areas: 'main' 'aside' 'secondary';

    @media (width < 30rem) {
      gap: 0.5rem;
      grid-template-columns: 1fr;
      border-radius: 0;
    }

    &.header {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      max-width: var(--wider);

      grid-template-areas: 'header';
    }

    &.twocol {
      grid-template-columns: 2fr 1fr;
      gap: 1.5rem;
      max-width: var(--wide);

      grid-template-areas:
        'main aside'
        'secondary aside';

      @media (width < 30rem) {
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
        grid-template-columns: 1fr;
        grid-template-areas: 'header' 'main' 'aside' 'secondary ';
      }
    }

    &.threecol {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1.5rem;
      max-width: var(--wider);

      grid-template-areas: 'main aside secondary';

      @media (width < 30rem) {
        grid-template-columns: 1fr;
        grid-template-areas: 'main' 'aside' 'secondary';
      }
    }

    &.threecol-with-header {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1.5rem;
      max-width: var(--wider);

      grid-template-areas:
        'header header header'
        'main aside secondary';

      @media (width < 30rem) {
        grid-template-columns: 1fr;
        grid-template-areas: 'header' 'main' 'aside' 'secondary ';
      }
    }

    &.masonry {
      position: relative;
      display: block;
      max-width: var(--wider);

      :global(> *) {
        position: absolute;
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
