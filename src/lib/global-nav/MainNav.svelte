<script>
  import LFQDLogo from './Logo.svelte'
  import LFQDDialog from '../LFQDDialog.svelte'
  import LFQDDialogTakeover from '../LFQDDialogTakeover.svelte'
  import { page } from '$app/state'
  import { Enum } from 'ouml'
  import Profile from './Profile.svelte'
  import LFQDBadge from '$lib/LFQDBadge.svelte'

  let { links = [] } = $props()

  const sheets = Enum({
    readmessage: Symbol('readmessage'),
    writemessage: Symbol('writemessage'),
    profile: Symbol('profile'),
  })

  let sheetIsOpen = $state(false)
  let sheetHeading = $state('')
  let sheetType = $state()

  const openSheet = (heading, type, e) => (
    e?.preventDefault(),
    (sheetIsOpen = true),
    (sheetHeading = heading),
    (sheetType = type)
  )
  const closeSheet = () => (sheetIsOpen = false)

  let dialog = $state()
  const openDialog = e => (e.preventDefault(), dialog?.showModal())
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
          onclick={e => openSheet('Dina meddelanden', sheets.readmessage, e)}
          onkeydown={e =>
            e.key == 'Enter' &&
            openSheet('Dina meddelanden', sheets.readmessage, e)}
        >
          <lfui-icon icon-id="envelope" size="24" color="var(--iconClr)"
          ></lfui-icon>
          <span>Meddelanden</span>
          {#if true}
            <span class="badge">
              <LFQDBadge size="circle"></LFQDBadge>
            </span>
          {/if}
        </a>
      </li>

      <li>
        <a
          href="#"
          onclick={e =>
            openSheet('Skriv nytt meddelande', sheets.writemessage, e)}
          onkeydown={e =>
            e.key == 'Enter' &&
            openSheet('Skriv nytt meddelande', sheets.writemessage, e)}
        >
          <lfui-icon icon-id="edit" size="24" color="var(--iconClr)"
          ></lfui-icon>
          <span>Skriv nytt</span>
        </a>
      </li>

      <li>
        <a
          href="#"
          onclick={e => openSheet('Profil', sheets.profile, e)}
          onkeydown={e =>
            e.key == 'Enter' && openSheet('Profil', sheets.profile, e)}
        >
          <lfui-icon icon-id="user" size="24" color="var(--iconClr)"
          ></lfui-icon>
          <span>Profil</span>
          {#if true}
            <span class="badge">
              <LFQDBadge size="circle"></LFQDBadge>
            </span>
          {/if}
        </a>
      </li>

      <li>
        <a
          href="#"
          onclick={openDialog}
          onkeydown={e => e.key == 'Enter' && openDialog()}
        >
          <lfui-icon icon-id="logout" size="24" color="var(--iconClr)"
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
          <lfui-icon icon-id={icon} size="24" color="var(--iconClr)"
          ></lfui-icon>
          {name}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<LFQDDialog bind:dialog>
  <lfui-typography-heading level="h4">Vill du logga ut?</lfui-typography-heading
  >

  <div class="btns">
    <lfui-button
      type="button"
      role="button"
      tabindex="0"
      variant="secondary"
      onclick={() => dialog.close()}
      onkeydown={e => e.key == 'Enter' && dialog.close()}
    >
      Nej
    </lfui-button>

    <lfui-button
      type="button"
      role="button"
      tabindex="0"
      variant="tertiary"
      onclick={() => dialog.close()}
      onkeydown={e => e.key == 'Enter' && dialog.close()}
    >
      Ja
    </lfui-button>
  </div>
</LFQDDialog>

<lfui-dialog-side-sheet
  size="small"
  open={sheetIsOpen}
  onclose={closeSheet}
  height=""
  heading={sheetHeading || 'Hej.'}
>
  {#if sheetType == sheets.profile}
    <Profile />
  {:else}
    ...
  {/if}
</lfui-dialog-side-sheet>

<style>
  .mainNav {
    --bg: light-dark(
      var(--lfds-primitives-color-blue-100),
      var(--lfds-primitives-color-blue-950)
    );

    display: grid;
    grid: auto-flow / 1fr auto auto;
    place-items: stretch;

    background: oklch(from var(--bg) l c h / 0.95);
    backdrop-filter: blur(10px);

    z-index: 1000;
    position: sticky;
    top: 0;

    box-shadow: var(--lfqd-box-shadow);

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

    border-bottom: 1px solid var(--lfds-semantic-border-secondary);

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
          position: relative;

          transition: all 0.3s;

          border-bottom: 1px solid var(--lfds-semantic-border-secondary);

          color: var(--lfds-semantic-text-secondary);
          --iconClr: var(--lfds-semantic-icon-secondary);

          @media (width < 30rem) {
            min-width: unset;
          }

          &:hover {
            background: var(--lfds-semantic-background-hover);
            border-bottom-color: var(--lfds-semantic-border-hover);
            color: var(--lfds-semantic-text-hover);
            color: var(--lfds-semantic-text-link-pressed);
            --iconClr: var(--lfds-semantic-icon-primary);
          }
          &.selected {
            border-bottom-color: var(--lfds-semantic-border-selected);
            color: var(--lfds-semantic-text-selected);
            --iconClr: var(--lfds-semantic-icon-primary);
          }

          .badge {
            position: absolute;
            top: 0.5rem;
            left: 50%;
            translate: 0.4375rem;
          }
        }
      }
    }

    &.main {
      /* li:last-child a {
        padding-right: 4rem;
        } */
      /* box-shadow: var(--lfqd-box-shadow); */

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
      background: none;

      a {
        color: var(--lfds-semantic-text-link);
        --iconClr: var(--lfds-semantic-icon-primary);
      }
      @media (width < 30rem) {
        a {
          border-bottom: none;
        }
        span:not(.badge) {
          display: none;
        }
      }
    }
  }

  .btns {
    display: flex;
    gap: 1rem;
  }
</style>
