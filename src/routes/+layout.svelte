<script>
  import LFQDMainNav from '../lib/LFQDMainNav.svelte'
  import { onNavigate } from '$app/navigation'

  import favicon from '$lib/assets/bullseye.png'

  import '@lansforsakringar/core-components'
  import '@lansforsakringar/core-components/index.css'

  let { children } = $props()

  let innerWidth = $state(0)

  onNavigate(navigation => {
    if (!document.startViewTransition) return

    return new Promise(resolve => {
      document.startViewTransition(async () => {
        resolve()
        await navigation.complete
      })
    })
  })
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<svelte:window bind:innerWidth />

<LFQDMainNav
  links={innerWidth < 16 * 60 ?
    [
      { path: '/', icon: 'house', name: 'Start' },
      { path: '/rows', icon: 'savings', name: 'Spara' },
      //´{ path: '/bonus', icon: 'cup', name: 'Bonus' },
      { path: '/forsakring', icon: 'umbrella', name: 'Försäkring' },
      { path: '/layout', icon: 'more-horizontal', name: 'Mer' },
    ]
  : [
      { path: '/', icon: 'house', name: 'Start' },
      { path: '/konton', icon: 'card', name: 'Konton och kort' },
      { path: '/rows', icon: 'savings', name: 'Spara' },
      { path: '/lan', icon: 'mortgage', name: 'Lån' },
      //´{ path: '/bonus', icon: 'cup', name: 'Bonus' },
      { path: '/forsakring', icon: 'umbrella', name: 'Försäkring' },
      { path: '/pension', icon: 'pension', name: 'Pension' },
      { path: '/layout', icon: 'more-horizontal', name: 'Mer' },
    ]}
></LFQDMainNav>

<main>
  {@render children?.()}
</main>

<footer>här kan det vara en footer om man vill</footer>

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
      margin: 1.5rem 1.5rem 10rem;
      @media (width < 30rem) {
        margin: 0 0 10rem;
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
    margin: 5rem auto;
    line-height: 1.5;
  }
</style>
