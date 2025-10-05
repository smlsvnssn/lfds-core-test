<script>
  import LFQDLogo from './LFQDLogo.svelte'
  import { page } from '$app/state'

  let { links = [] } = $props()

  let sheetIsOpen = $state(false)
  let sheetHeading = $state('')

  const openSheet = heading => ((sheetIsOpen = true), (sheetHeading = heading))
  const closeSheet = () => (sheetIsOpen = false)
</script>

<div class="mainNav">
  <div class="logo">
    <LFQDLogo />
  </div>

  <nav class="utils">
    <ul>
      <li>
        <a
          href="#"
          onclick={() => openSheet('Dina meddelanden')}
          onkeydown={e => e.key == 'Enter' && openSheet('Dina meddelanden')}
        >
          <lfui-icon
            icon-id="envelope"
            size="24"
            color="var(--lfds-semantic-icon-primary)"
          ></lfui-icon>
          <span>Meddelanden</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          onclick={() => openSheet('Skriv nytt meddelande')}
          onkeydown={e =>
            e.key == 'Enter' && openSheet('Skriv nytt meddelande')}
        >
          <lfui-icon
            icon-id="edit"
            size="24"
            color="var(--lfds-semantic-icon-primary)"
          ></lfui-icon>
          <span>Skriv nytt</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          onclick={() => openSheet('Profil')}
          onkeydown={e => e.key == 'Enter' && openSheet('Profil')}
        >
          <lfui-icon
            icon-id="user"
            size="24"
            color="var(--lfds-semantic-icon-primary)"
          ></lfui-icon>
          <span>Profil</span>
        </a>
      </li>
      <li>
        <a href="#">
          <lfui-icon
            icon-id="logout"
            size="24"
            color="var(--lfds-semantic-icon-primary)"
          ></lfui-icon>
          <span>Logga ut</span>
        </a>
      </li>
    </ul>
  </nav>
</div>

<nav class="main">
  <ul>
    {#each links as { path, icon, name }}
      <li>
        <a href={path} class={path == page.url.pathname ? 'selected' : ''}>
          <lfui-icon
            icon-id={icon}
            size="24"
            color="var(--lfds-semantic-icon-{path == page.url.pathname ?
              'selected'
            : 'secondary'})"
          ></lfui-icon>
          {name}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<lfui-dialog-side-sheet
  size=""
  open={sheetIsOpen}
  onclose={closeSheet}
  height=""
  heading={sheetHeading || 'Hej.'}
>
  ...
</lfui-dialog-side-sheet>

<style>
  .mainNav {
    display: grid;
    grid: auto-flow / 1fr auto auto;
    place-items: stretch;
    background: light-dark(
      var(--lfds-primitives-color-blue-100),
      var(--lfds-primitives-color-blue-950)
    );

    z-index: 1000;
    position: sticky;
    top: 0;

    @media (width < 30rem) {
      position: relative;
      /* padding-top: 0.5rem; */
      margin-bottom: 0.5rem;
    }
  }

  .logo {
    display: grid;
    place-items: center start;
    padding-left: 0.75em;

    border-bottom: var(--lfds-semantic-sizes-border-width-medium) solid
      var(--lfds-semantic-border-secondary);

    @media (width < 30rem) {
      padding-left: 0.5em;
      border-bottom: none;
    }
  }

  nav {
    font-family: var(--lfds-typography-font-family-ibm);
    font-weight: var(--lfds-typography-weight-medium);
    font-size: 0.6875rem;

    background: var(--lfds-semantic-background-secondary);

    ul {
      display: grid;
      grid-auto-flow: column;
      padding: 0;
      margin: 0;
      li {
        list-style: none;

        a {
          min-width: 3.5rem;
          display: grid;
          gap: 0.25rem;
          padding: 0.75rem;
          place-items: center;
          text-decoration: none;

          transition: all 0.3s;

          border-bottom: var(--lfds-semantic-sizes-border-width-medium) solid
            var(--lfds-semantic-border-secondary);

          color: var(--lfds-semantic-text-secondary);

          @media (width < 30rem) {
            min-width: unset;
          }

          &:hover {
            background: var(--lfds-semantic-background-hover);
            border-bottom-color: var(--lfds-semantic-border-hover);
            color: var(--lfds-semantic-text-hover);
          }

          &.selected {
            border-bottom-color: var(--lfds-semantic-border-selected);
            color: var(--lfds-semantic-text-selected);
          }
        }
      }
    }

    &.main {
      /* li:last-child a {
        padding-right: 4rem;
        } */

      ul {
        justify-content: center;
        grid-auto-flow: column;
      }

      a {
        font-size: 0.875rem;
        grid-auto-flow: column;
        padding: 0.75rem 1.5rem;
        border-bottom: none;
        gap: 0.75rem;
        font-weight: var(--lfds-typography-weight-regular);
      }

      @media (width < 60rem) {
        margin: 0;
        width: 100%;
        position: fixed;
        top: auto;
        bottom: 0;
        z-index: 1000;
        background: var(--lfds-semantic-background-secondary);

        ul {
          justify-content: stretch;
        }
        a {
          font-size: 0.6875rem;
          font-weight: var(--lfds-typography-weight-medium);

          gap: 0.5rem;
          grid-auto-flow: unset;
          padding: 0.75rem;
          border-bottom: none;
          border-top: var(--lfds-semantic-sizes-border-width-medium) solid
            var(--lfds-semantic-border-secondary);

          &:hover {
            border-top-color: var(--lfds-semantic-border-hover);
          }
        }
      }
    }

    &.utils {
      background: light-dark(
        var(--lfds-primitives-color-blue-100),
        var(--lfds-primitives-color-blue-950)
      );
      a {
        color: var(--lfds-semantic-text-link);
      }
      @media (width < 30rem) {
        a {
          border-bottom: none;
        }
        span {
          display: none;
        }
      }
    }
  }
</style>
