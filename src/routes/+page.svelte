<script>
  import Header from './Header.svelte'
  import Konton from './Konton.svelte'
  import Todos from './Todos.svelte'
  import Sheet from './Sheet.svelte'

  import LFQDBox from '$lib/LFQDBox.svelte'
  import LFQDBoxHeader from '$lib/LFQDBoxHeader.svelte'
  import LFQDBoxFooter from '$lib/LFQDBoxFooter.svelte'
  import LFQDRow from '$lib/LFQDRow.svelte'
  import LFQDLink from '$lib/LFQDLink.svelte'
  import LFQDLayout from '$lib/LFQDLayout.svelte'
  import LFQDDialogTakeover from '$lib/LFQDDialogTakeover.svelte'

  import { page } from '$app/state'

  import { försäkringsdata } from '$lib/mockdata'
  import { renderSheet } from '$lib/utils.svelte'

  let dialog = $state()

  let efakturor = $state(true)
  let skada = $state(true)

  $inspect(page.state?.sheetIsOpen)
</script>

<Header />

<LFQDLayout type="masonry">
  <Todos {efakturor} {skada} />

  <LFQDBox>
    <div class="highlight placeholder">
      <p>Viktig sak vi vill påminna om.</p>
    </div>
  </LFQDBox>

  <LFQDBox>
    <div class="placeholder">
      <p>Lisa Flitig AB</p>
      <p>Lisa Flitig HB</p>
      <p>Lars Flitig (6 år)</p>
      <p>Leonora Flitig (17 år)</p>
    </div>
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

<Sheet
  data={page.state?.sheetData}
  open={page.state?.sheetIsOpen}
  bind:efakturor
  bind:skada
/>

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
</style>
