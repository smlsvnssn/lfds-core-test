<script>
  import LFQDMainNav from '../lib/global-nav/MainNav.svelte'
  import { onNavigate } from '$app/navigation'
  import { isSmallScreen } from '$lib/utils.svelte'

  import favicon from '$lib/assets/bullseye.png'

  import '@lansforsakringar/core-components'
  import '@lansforsakringar/core-components/index.css'
  import '$lib/lfqd.css'

  let { children } = $props()

  let innerWidth = $state(0)

  // Basic global view transition
  onNavigate(navigation =>
    document.startViewTransition ?
      new Promise(resolve => {
        document.startViewTransition(async () => {
          resolve()
          await navigation.complete
        })
      })
    : undefined,
  )
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<svelte:window bind:innerWidth />

<LFQDMainNav
  links={isSmallScreen(innerWidth) ?
    [
      { path: '/', icon: 'house', name: 'Start' },
      { path: '/spara', icon: 'savings', name: 'Spara' },
      { path: '/forsakring', icon: 'umbrella', name: 'Försäkring' },
      { path: '/mer', icon: 'more-horizontal', name: 'Mer' },
    ]
  : [
      { path: '/', icon: 'house', name: 'Start' },
      { path: '/konton', icon: 'card', name: 'Konton och kort' },
      { path: '/spara', icon: 'savings', name: 'Spara' },
      { path: '/lan', icon: 'mortgage', name: 'Lån' },
      { path: '/forsakring', icon: 'umbrella', name: 'Försäkring' },
      { path: '/pension', icon: 'pension', name: 'Pension' },
      { path: '/mer', icon: 'more-horizontal', name: 'Mer' },
    ]}
></LFQDMainNav>

<main>
  {@render children?.()}
  
  <footer>
    <a href="https://github.com/smlsvnssn/lfds-core-test">
      https://github.com/smlsvnssn/lfds-core-test
    </a>
  </footer>
</main>


<style>
  :global(:root) {
    color-scheme: light dark;
  }

  :global(body) {
    margin: 0;
    background: var(--lfds-semantic-background-primary);
    -webkit-font-smoothing: antialiased;

    main {
      display: grid;
      gap: 1.5rem;
      padding: 1.5rem 1.5rem 10rem;

      @media (width < 30rem) {
        padding: 0 0 10rem;
      }
    }
  }

  :global(p) {
    font-family: var(--lfds-typography-font-family-ibm);
    font-weight: var(--lfds-typography-weight-regular);
    font-size: 1rem;
    margin: 0;
    line-height: 1.5;
  }

  :global(a) {
    color: var(--lfds-semantic-text-link);
    &:hover {
      color: var(--lfds-semantic-text-link-pressed);
    }
  }

  footer {
    font-family: var(--lfds-typography-font-family-ibm);
    font-weight: var(--lfds-typography-weight-regular);
    color: var(--lfds-semantic-text-secondary);
    font-size: 0.875rem;
    width: 100%;
    text-align: center;
    margin: 5rem auto 8rem;
    line-height: 1.5;
  }
</style>
