<script>
  import Header from './Header.svelte'
  import Konton from './Konton.svelte'
  import Todos from './Todos.svelte'
  import Sheet from './Sheet.svelte'

  import LFQDBox from '$lib/components/LFQDBox.svelte'
  import LFQDBoxHeader from '$lib/components/LFQDBoxHeader.svelte'
  import LFQDBoxFooter from '$lib/components/LFQDBoxFooter.svelte'
  import LFQDRow from '$lib/components/LFQDRow.svelte'
  import LFQDLink from '$lib/components/LFQDLink.svelte'
  import LFQDLayout from '$lib/components/LFQDLayout.svelte'
  import LFQDDialogTakeover from '$lib/components/LFQDDialogTakeover.svelte'
  import LFQDBadge from '$lib/components/LFQDBadge.svelte'

  import { försäkringsdata, todos } from '$lib/mockdata.svelte'
  import { renderSheet } from '$lib/utils.svelte'

  import { page } from '$app/state'
  import LFQDToggle from '$lib/components/LFQDToggle.svelte'

  let dialog = $state()

  let activeTodo = $state()

 // $inspect(page.state)
</script>

<Sheet
  data={page.state?.sheetData}
  open={page.state?.sheetIsOpen && page.state?.sheetId == 0 ?
    page.state?.sheetIsOpen
  : false}
  {activeTodo}
/>

<Header />

<LFQDLayout type="masonry">
  <Todos {todos} bind:activeTodo />

  <LFQDBox>
    <div class="highlight placeholder">
      <p>Viktig sak vi vill påminna om.</p>
      
    </div>
  </LFQDBox>

  <LFQDBox>
    <LFQDRow
      titleLeft="Lisa Flitig"
      icon="user"
      chevron="false"
      state="disabled"
    />
    {#if true}
      <span class="badge">
        <LFQDBadge size="circle"></LFQDBadge>
      </span>
    {/if}
    <LFQDRow titleLeft="Lisa Flitig AB" icon="briefcase" />
    <LFQDRow titleLeft="Lars Flitig" icon="family" />
    <LFQDRow titleLeft="Leonora Flitig" icon="family" />
  </LFQDBox>

  <Konton />

  <LFQDBox>
    <LFQDBoxHeader>Försäkringar</LFQDBoxHeader>

    {#each försäkringsdata as item}
      <LFQDRow {...item} onclick={() => renderSheet(item)} />
    {/each}

    <LFQDBoxFooter>
      <LFQDLink href="/forsakring">
        Alla försäkringar
        <lfui-icon icon-id="chevron-right" size="24"></lfui-icon>
      </LFQDLink>
    </LFQDBoxFooter>
  </LFQDBox>

  <LFQDBox>
    <LFQDBoxHeader>Lån</LFQDBoxHeader>
    <div class="placeholder"></div>
  </LFQDBox>

  <LFQDBox>
    <LFQDBoxHeader>Kommande transaktioner</LFQDBoxHeader>
    <div class="placeholder"></div>
  </LFQDBox>

  <LFQDBox>
    <LFQDBoxHeader>Pengakollen</LFQDBoxHeader>
    <div class="placeholder"></div>
  </LFQDBox>

  <LFQDBox>
    <LFQDBoxHeader>Pension</LFQDBoxHeader>
    <div class="placeholder"></div>
  </LFQDBox>

  <LFQDBox>
    <LFQDBoxHeader>Sparande</LFQDBoxHeader>
    <div class="placeholder"></div>
  </LFQDBox>

  <LFQDBox>
    <div class="highlight placeholder">
      <p>Guldkund? Guldkund!</p>
      <lfui-button
        tabindex="0"
        role="button"
        onkeydown={e => e.key == 'Enter' && dialog.showModal()}
        onclick={() => dialog.showModal()}
      >
        Månadsspara
      </lfui-button>
    </div>
  </LFQDBox>
</LFQDLayout>

<LFQDLayout type="header">
  <LFQDBox>
    <header><p>Här kan kommunikationsytor ligga</p></header>
  </LFQDBox>
</LFQDLayout>

<LFQDDialogTakeover bind:dialog>
  <p>Hej.</p>
  <p>Så här skulle vi kunna göra med vyer som kräver lite utrymme.</p>
  <lfui-button
    tabindex="0"
    role="button"
    onkeydown={e => e.key == 'Enter' && dialog.close()}
    onclick={() => dialog.close()}
  >
    Stäng
  </lfui-button>
</LFQDDialogTakeover>

<style>
  header {
    display: grid;
    gap: 1.5rem;
    place-items: center;
    padding: 5rem 3.5rem 3.5rem;
    @media (width < 30rem) {
      gap: 1rem;
      padding: 3rem 1rem 1.5rem;
    }
  }

  .highlight {
    background: var(--lfds-semantic-background-highlight-primary);
    border: 1px solid var(--lfds-semantic-border-on-highlight-primary);
    border-radius: var(--lfds-semantic-sizes-radius-md);

    @media (width < 30rem) {
      border-radius: 0;
      border: none;
    }
  }

  .badge {
    position: relative;
    display: block;
    width: 0;
    height: 0;
    top: -3.25rem;
    left: 2rem;
  }
</style>
