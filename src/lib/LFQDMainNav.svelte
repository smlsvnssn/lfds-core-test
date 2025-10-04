<script>
  let { links = [] } = $props()

  import { page } from '$app/state'

  let currentPath = page.url.pathname

  $inspect(currentPath)
</script>

<nav>
  <ul>
    {#each links as { path, icon, name }}
      <li>
        <a href={path} class={path == page.url.pathname ? 'selected' : ''}>
          <lfui-icon
            icon-id={icon}
            size="24"
            color="var(--lfds-semantic-icon-{path == page.url.pathname ? 'selected' : 'secondary'})"
          ></lfui-icon>
          {name}
        </a>
      </li>
    {/each}
  </ul>
</nav>

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
      gap: 0.5rem;
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

  nav {
    font-family: var(--lfds-typography-font-family-ibm);
    font-weight: var(--lfds-typography-weight-medium);
    font-size: 0.6875rem;

    z-index: 1000;
    position: sticky;
    top: 0;
    background: var(--lfds-semantic-background-secondary);

    @media (width < 30rem) {
      margin: 0;
      width: 100%;
      position: fixed;
      top: auto;
      bottom: 0;
    }

    ul {
      display: grid;
      grid-auto-flow: column;
      padding: 0;
      margin: 0;
      li {
        list-style: none;

        a {
          display: grid;
          gap: 0.25rem;
          padding: 0.75rem;
          place-items: center;
          text-decoration: none;

          transition: all 0.3s;

          border-bottom: var(--lfds-semantic-sizes-border-width-medium) solid
            var(--lfds-semantic-border-secondary);

          color: var(--lfds-semantic-text-secondary);

          &:hover {
            background: var(--lfds-semantic-background-hover);
            border-bottom-color: var(--lfds-semantic-border-hover);
            color: var(--lfds-semantic-text-hover);
          }

          &.selected {
            border-bottom-color: var(--lfds-semantic-border-selected);
            color: var(--lfds-semantic-text-selected);
          }

          @media (width < 30rem) {
            border-bottom: none;
            border-top: var(--lfds-semantic-sizes-border-width-medium) solid
              var(--lfds-semantic-border-secondary);
            &:hover {
              border-top-color: var(--lfds-semantic-border-hover);
            }
          }
        }
      }
    }
  }
</style>
