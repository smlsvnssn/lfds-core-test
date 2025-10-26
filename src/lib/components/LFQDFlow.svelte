<script>
  /**
   * @import { Snippet } from 'svelte'
   * @typedef {{
   *   index:number,
   *   snippet:Snippet<PageValidatedCallback[]>,
   *   isValidated:boolean,
   *   isVisited:boolean,
   *   element:HTMLLIElement | undefined
   * }} Page
   *
   * @typedef {(v: boolean, page:Page) => void} PageValidatedCallback
   * @type {{
   *   confirmationPage?: Snippet
   * } & {
   *   [key: string]: Snippet<PageValidatedCallback[]>;
   * }}
   */

  import { isFunc, log, waitFrames } from 'ouml'
  import { fade } from 'svelte/transition'

  let { confirmationPage, ...pageSnippets } = $props()

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
      pages[activePage]?.element?.scrollIntoView({ container: 'nearest' })
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

<div class="flow">
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
              {i}
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
    display: grid;
    gap: 1rem;
  }

  ul.pages {
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    scroll-snap-stop: always;
    scroll-behavior: smooth;
    scrollbar-width: none;
    margin: 0;
    padding: 0;

    box-sizing: border-box;

    width: 100%;
    display: flex;
    gap: 1rem;

    li {
      scroll-snap-align: start;
      list-style: none;

      flex: 0 0 100%;
      width: 100%;
    }
  }

  nav.pagination {
    display: grid;
    place-items: center;
    position: sticky;
    top: 0;

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
          background: var(--lfds-semantic-background-secondary);
          border-radius: 100%;
          transition: all var(--lfqd-time-default);

          display: grid;
          place-items: center;

          font-family: var(--lfds-typography-font-family-ibm);
          font-weight: var(--lfds-typography-weight-semibold);
          font-size: 0.875rem;

          border: 1px solid var(--lfds-semantic-border-secondary);
          color: var(--lfds-semantic-text-secondary);

          &.valid {
            border: 1px solid var(--lfds-semantic-border-selected);
            color: var(--lfds-semantic-text-link);
          }

          &.active {
            cursor: auto;
            color: var(--lfds-semantic-text-inverted);
            background: var(--lfds-semantic-background-selected);
            border: 1px solid var(--lfds-semantic-border-selected);
          }

          &[disabled] {
            cursor: auto;
            border: 1px solid var(--lfds-semantic-border-secondary);
            color: var(--lfds-semantic-text-secondary);
          }
        }
      }
    }
  }

  nav.steps {
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;

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
