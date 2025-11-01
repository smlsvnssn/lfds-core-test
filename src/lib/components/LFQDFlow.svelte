<script>
  /**
   * Uses a few bleeding edge things around scrolling not yet in firefox/safari.
   * Scrollend event polyfill: https://github.com/igorskyflyer/npm-scrollend-polyfill
   * container-type: scroll-state; and scroll-state queries: Doable with js
   *
   *
   * TODO:
   * Snippet args for button text
   * Pagination without numbers
   * Fullview variant? Better height handling
   * √ Sticky top and/or bottom (Row has overflow hidden for rounded corners. Possible other solution? Clip-path?)
   * https://kevdees.com/fixing-border-radius-clipping-with-css-contain-paint/
   * "Pricebox" - option for accumulated value
   * Handle layout using existing components
   */

  import { isFunc, log, waitFrames } from 'ouml'
  import { fade } from 'svelte/transition'

  /**
   * @import { Snippet } from 'svelte'
   *
   * @typedef {{
   *   index:number,
   *   snippet:Snippet<PageValidatedCallback[]>,
   *   isValidated:boolean,
   *   isVisited:boolean,
   *   element:HTMLLIElement | undefined
   * }} Page
   *
   * @typedef {(v: boolean, page:Page) => void} PageValidatedCallback
   *
   * @type {{
   *   confirmationPage?: Snippet
   *   background?: 'primary' | 'secondary'
   *   isInSheet?: boolean
   * } & {
   *   [key: string]: Snippet<PageValidatedCallback[]>;
   * }}
   */
  let {
    confirmationPage,
    background = 'secondary',
    isInSheet = false,
    ...pageSnippets
  } = $props()

  /**
   * Wraps incoming snippets with some state, and stores the rendered element
   * @type {Page[]}
   */
  let pages = $state(
    Object.values(pageSnippets)
      .filter(isFunc)
      .map((snippet, i) => ({
        index: i,
        snippet,
        isValidated: false,
        isVisited: false,
        element: undefined,
      })),
  )

  let activePage = $state(0)

  let isScrollingByNavigation = $state(false)

  /** @type {HTMLUListElement | undefined} */
  let pageList = $state()

  /**
   * @param {Page} page
   * @param {number} i
   */
  const shouldRenderPage = (page, i) =>
    page.isValidated || page.isVisited || activePage == i

  const scrollToPage = n => {
    if (pages[n]) pages[n].isVisited = true
    activePage = n

    waitFrames(1, () => {
      isScrollingByNavigation = true
      pages[activePage]?.element?.scrollIntoView({ block: 'nearest' })
    })
  }

  const back = () => scrollToPage(activePage >= 0 ? activePage - 1 : 0)

  /**
   * @type {PageValidatedCallback}
   * @param {boolean} v
   * @param {Page} page
   */
  const pageValidatedCallback = (v, page) => {
    page.isValidated = !!v
    if (page.isValidated) scrollToPage(activePage + 1)
  }

  // detects manual scroll
  //const onScroll = () => (isScrollingByNavigation = true)
  const onScrollEnd = () => (isScrollingByNavigation = false)

  // sets up handling for manual scroll

  /** @type {IntersectionObserver} */
  let intersector

  /** @param {IntersectionObserverEntry[]} entries  */
  const onEnterView = entries => {
    let incoming = entries.find(v => v.isIntersecting)

    if (incoming && !isScrollingByNavigation)
      activePage = pages.findIndex(v => v.element === incoming.target)
  }

  $effect(() => {
    //pageList?.addEventListener('scroll', onScroll)
    pageList?.addEventListener('scrollend', onScrollEnd)
    intersector ??= new IntersectionObserver(onEnterView, {
      root: pageList,
      threshold: 0.5,
    })

    pages.forEach((page, i) => {
      if (shouldRenderPage(page, i) && page.element)
        intersector.observe(page.element)
    })

    return () => {
      intersector.disconnect()
      pageList?.removeEventListener('scrollend', onScrollEnd)
    }
  })
</script>

<div
  class="flow {isInSheet ? 'inSheet' : ''}"
  style="--background: {background == 'primary' ?
    'var(--lfds-semantic-background-primary);'
  : 'var(--lfds-semantic-background-secondary);'}"
>
  {#if activePage == pages.length}
    {@render confirmationPage?.()}
  {:else}
    <nav class="pagination">
      <ul>
        {#each pages as page, i}
          <li>
            <button
              disabled={!shouldRenderPage(page, i)}
              class={i == activePage ? 'active'
              : page.isValidated ? 'valid'
              : ''}
              onclick={() => scrollToPage(i)}
            >
              {i + 1}
            </button>
          </li>
        {/each}
      </ul>
    </nav>

    <ul class="pages" bind:this={pageList}>
      {#each pages as page, i}
        {#if shouldRenderPage(page, i)}
          <li bind:this={page.element}>
            {@render page.snippet(v => pageValidatedCallback(v, page))}
          </li>
        {/if}
      {/each}
    </ul>

    <nav class="steps">
      {#if activePage > 0}
        <button transition:fade onclick={back}>
          <lfui-icon icon-id="arrow-small-left" size="24" color="currentcolor"
          ></lfui-icon>
          Tillbaka
        </button>
      {:else}&nbsp;
      {/if}

      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <lfui-button
        size="medium"
        onclick={() => pageValidatedCallback(true, pages[activePage])}
      >
        Gå vidare till nästa steg
        <lfui-icon
          slot="trailing"
          icon-id="arrow-small-right"
          size="24"
          color="currentcolor"
        >
        </lfui-icon>
      </lfui-button>
    </nav>
  {/if}
</div>

<style>
  div.flow {
    /* TODO: set these dynamically somehow */
    --topMenuHeight: 4rem;
    --bottomMenuHeight: 4.5rem;
    --background: var(--lfds-semantic-background-secondary);

    display: grid;
    gap: 1rem;
    box-sizing: border-box;

    &.inSheet {
      --topMenuHeight: 1rem;
      --bottomMenuHeight: 0;

      @media (width < 30rem) {
        nav {
          margin: -1rem;
          padding: 1rem;
          width: calc(100% + 2rem);
        }
        nav.pagination {
          top: var(--topMenuHeight);
        }
        nav.steps {
          translate: 0 2rem;
        }
      }
    }
  }

  ul.pages {
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: none;
    margin: 0;
    padding: 0;

    box-sizing: border-box;

    width: 100%;
    display: flex;
    gap: 1rem;

    li {
      scroll-snap-stop: always;
      scroll-snap-align: start;
      list-style: none;

      flex: 0 0 100%;
      width: 100%;
    }
  }

  nav {
    display: grid;
    position: sticky;
    container-type: scroll-state;
    box-sizing: border-box;
    width: 100%;

    z-index: 1;

    background: var(--background);

    &:before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: -1;
      transition: box-shadow var(--lfqd-time-default) ease-out;
    }
  }

  nav.pagination {
    place-items: center;
    top: var(--topMenuHeight);

    @media (width < 30rem) {
      top: 0;
    }

    &:before {
      @container scroll-state(stuck: top) {
        box-shadow: var(--lfqd-box-shadow);
      }
    }

    ul {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      display: flex;
      gap: 0.5rem;

      li {
        list-style: none;

        button {
          cursor: pointer;
          width: 2rem;
          aspect-ratio: 1;
          border-radius: 100%;
          transition: all var(--lfqd-time-default);

          display: grid;
          place-items: center;

          font-family: var(--lfds-typography-font-family-ibm);
          font-weight: var(--lfds-typography-weight-semibold);
          font-size: 0.875rem;

          background: var(--lfds-semantic-background-secondary);
          color: var(--lfds-semantic-text-secondary);
          border: 1px solid var(--lfds-semantic-border-secondary);

          &.valid {
            color: var(--lfds-semantic-text-link);
            border: 1px solid var(--lfds-semantic-border-selected);
          }

          &.active {
            cursor: auto;
            background: var(--lfds-semantic-background-selected);
            color: var(--lfds-semantic-text-inverted);
            border: 1px solid var(--lfds-semantic-border-selected);
          }

          &[disabled] {
            cursor: auto;
            color: var(--lfds-semantic-text-secondary);
            border: 1px solid var(--lfds-semantic-border-secondary);
          }
        }
      }
    }
  }

  nav.steps {
    grid-auto-flow: column;
    justify-content: space-between;

    bottom: 0;

    @media (width < 30rem) {
      bottom: var(--bottomMenuHeight);
    }

    &:before {
      @container scroll-state(stuck: bottom) {
        box-shadow: var(--lfqd-box-shadow-upwards);
      }
    }

    button {
      cursor: pointer;
      display: flex;
      place-items: center;
      gap: 0.5rem;
      background: none;
      border: none;

      font-family: var(--lfds-typography-font-family-ibm);
      font-weight: var(--lfds-typography-weight-regular);
      color: var(--lfds-semantic-text-link);
      font-size: 0.875rem;
    }
  }
</style>
