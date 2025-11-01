<script>
  import MiniMasonry from 'minimasonry'
  import { debounce, waitFrames } from 'ouml'

  /**
   * @import { Snippet } from 'svelte'
   * @type {{
   *   type?: 'onecol' | 'twocol' | 'header' | 'twocol-with-header' | 'threecol' | 'threecol-with-header' | 'masonry'
   *   children?: Snippet
   * }}
   */
  let { type = 'onecol', children } = $props()

  let el, masonry, resizeSniffer

  const destroy = () => {
    resizeSniffer?.disconnect()
    masonry?.destroy()
  }

  $effect(() => {
    if (type == 'masonry' && el) {
      masonry ??= new MiniMasonry({
        container: el,
        baseWidth: 350,
        gutter: 24,
        surroundingGutter: false,
        ultimateGutter: 8,
      })

      resizeSniffer ??= new ResizeObserver(debounce(() => masonry.layout(), 10))
      ;[...el.children].forEach(element => resizeSniffer.observe(element))

      // wait 1 tick, rerun
      waitFrames(1, () => masonry.layout())
    } else destroy()
    return destroy
  })
</script>

<section>
  <div class="layout {type}" bind:this={el}>{@render children?.()}</div>
</section>

<style>
  section {
    container-type: inline-size;
  }
  .layout {
    display: grid;
    margin: auto;
    width: 100%;

    grid: 'main' 'aside' 'secondary' / 1fr;

    gap: 1.5rem;
    max-width: var(--lfqd-layout-narrow);

    @container (width < 30rem) {
      gap: 0.5rem !important;
      grid-template-columns: 1fr;
      border-radius: 0;
    }

    &.header {
      grid: 'header' / 1fr;

      gap: 1.5rem;
      max-width: var(--lfqd-layout-wider);
    }

    &.twocol {
      grid:
        'main      aside'
        'secondary aside'
        / 2fr 1fr;

      gap: 1.5rem;
      max-width: var(--lfqd-layout-wide);

      @container (width < 30rem) {
        grid: 'main' 'aside' 'secondary' / 1fr;
      }
    }

    &.twocol-with-header {
      grid:
        'header    header'
        'main      aside'
        'secondary aside'
        / 2fr 1fr;

      gap: 1.5rem;
      max-width: var(--lfqd-layout-wide);

      @container (width < 30rem) {
        grid: 'header' 'main' 'aside' 'secondary' / 1fr;
      }
    }

    &.threecol {
      grid: 'main aside secondary' / 1fr 1fr 1fr;

      gap: 1.5rem;
      max-width: var(--lfqd-layout-wider);

      @media (width < 30rem) {
        grid: 'main' 'aside' 'secondary' / 1fr;
      }
    }

    &.threecol-with-header {
      grid:
        'header header header'
        'main   aside  secondary' / 1fr 1fr 1fr;

      gap: 1.5rem;
      max-width: var(--lfqd-layout-wider);

      @container (width < 30rem) {
        grid: 'header' 'main' 'aside' 'secondary ' / 1fr;
      }
    }

    &.masonry {
      position: relative;
      display: block;
      max-width: var(--lfqd-layout-wider);

      :global(> *) {
        position: absolute;
      }
    }

    :global(> .layout-area) {
      display: grid;
      justify-items: stretch;
      align-items: start;
      gap: 1.5rem;

      @container (width < 30rem) {
        gap: 0.5rem !important;
      }
    }

    :global(> .aside) {
      grid-area: aside;
    }
    :global(> .main) {
      grid-area: main;
    }
    :global(> .secondary) {
      grid-area: secondary;
    }
    :global(> .header) {
      grid-area: header;
    }
  }
</style>
