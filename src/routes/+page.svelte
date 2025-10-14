<script>
  import Header from './Header.svelte'
  import LFQDAmountHeader from '$lib/LFQDAmountHeader.svelte'
  import LFQDPadding from '$lib/LFQDPadding.svelte'
  import LFQDBox from '$lib/LFQDBox.svelte'
  import LFQDBoxHeader from '$lib/LFQDBoxHeader.svelte'
  import LFQDBoxFooter from '$lib/LFQDBoxFooter.svelte'
  import LFQDRow from '$lib/LFQDRow.svelte'
  import LFQDLink from '$lib/LFQDLink.svelte'
  import LFQDBadge from '$lib/LFQDBadge.svelte'
  import LFQDLayout from '$lib/LFQDLayout.svelte'
  import LFQDLayoutArea from '$lib/LFQDLayoutArea.svelte'
  import LFQDRowProgressBar from '$lib/LFQDRowProgressBar.svelte'
  import LFQDDialogTakeover from '$lib/LFQDDialogTakeover.svelte'

  import { prettyNumber, random, sum } from 'ouml'

  import { bankdata, försäkringsdata } from '$lib/mockdata'

  let sheetIsOpen = $state(false)
  const openSheet = () => (sheetIsOpen = true)
  const closeSheet = () => (sheetIsOpen = false)

  let dialog = $state()

  let percent = $state(33)
  const progressHasBeenMade = () => (percent = (percent + random(33)) % 100)
</script>

<Header />

<LFQDLayout type="masonry">
  <LFQDBox>
    <LFQDBoxHeader>Att göra just nu</LFQDBoxHeader>

    <LFQDRow
      titleLeft="Du har ett digitalt möte om 12 minuter"
      subtitleLeft="Anslut till mötet"
      icon="calendar"
    ></LFQDRow>

    <LFQDRow titleLeft="Du har nya e-fakturor">
      {#snippet icon()}
        <LFQDBadge>3</LFQDBadge>
      {/snippet}
    </LFQDRow>

    <LFQDRow
      titleLeft="Du har ett nytt dokument"
      subtitleLeft="Försäkringsavtal Villahemförsäkring"
    >
      {#snippet icon()}
        <LFQDBadge type="secondary">1</LFQDBadge>
      {/snippet}
    </LFQDRow>

    <LFQDRowProgressBar
      titleLeft="Ditt skadeärende"
      subtitleLeft="Komplettera med uppgifter"
      titleRight="Pågående"
      onclick={progressHasBeenMade}
      {percent}
    ></LFQDRowProgressBar>
  </LFQDBox>

  <LFQDBox>
    <div class="highlight placeholder">
      <p>Viktig sak vi vill påminna om.</p>
    </div>
  </LFQDBox>

  <LFQDBox>
    <LFQDBoxHeader>Konton och kort</LFQDBoxHeader>

    <LFQDAmountHeader
      amount={prettyNumber(
        sum(bankdata.map(v => +v.titleRight.replace(/[^\d-]/g, ''))),
      ) + ' kr'}
      subtitle="12% mindre än samma tid förra månaden"
    ></LFQDAmountHeader>

    {#each bankdata as item}
      <LFQDRow {...item} onclick={() => renderSheet(item)} />
    {/each}

    <LFQDBoxFooter padEnd="true">
      <LFQDLink href="#">
        <lfui-icon icon-id="payment" size="24"></lfui-icon>
        Ny betalning
      </LFQDLink>

      <LFQDLink href="#">
        <lfui-icon icon-id="transfer" size="24"></lfui-icon>
        Ny överföring
      </LFQDLink>
    </LFQDBoxFooter>
  </LFQDBox>

  <LFQDBox>
    <LFQDBoxHeader>Betala och överföra</LFQDBoxHeader>
    <div class="placeholder"></div>
  </LFQDBox>

  <LFQDBox>
    <LFQDBoxHeader>Försäkringar</LFQDBoxHeader>

    {#each försäkringsdata as item}
      <LFQDRow {...item} onclick={() => renderSheet(item)} />
    {/each}

    <LFQDBoxFooter>
      <LFQDLink href="#">
        Alla försäkringar
        <lfui-icon icon-id="chevron-right" size="24"></lfui-icon>
      </LFQDLink>
    </LFQDBoxFooter>
  </LFQDBox>

  <LFQDBox>
    <LFQDBoxHeader>Bolån</LFQDBoxHeader>
    <div class="placeholder"></div>
  </LFQDBox>

  <LFQDBox>
    <LFQDBoxHeader>Kommande transaktioner</LFQDBoxHeader>
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
      <lfui-button onclick={() => dialog.showModal()}>Månadsspara</lfui-button>
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
  <lfui-button onclick={() => dialog.close()}>Stäng</lfui-button>
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

  .placeholder {
    height: 10rem;
    background: var(--lfds-semantic-background-secondary);
    padding: 1rem;
    display: grid;
    place-content: center;
    place-items: center;
    gap: 1rem;
    p {
      font-size: 0.875rem;
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

  form.cards {
    display: grid;
    grid: auto-flow / 1fr 1fr;
    gap: 1rem;
  }

  h1 {
    font-family: var(--lfds-typography-font-family-lf);
    font-weight: var(--lfds-typography-weight-medium);
    color: var(--lfds-semantic-text-brand-primary);
    font-size: 2rem;
    text-align: center;
    margin: 0%;

    @media (width < 30rem) {
      font-size: 1.875rem;
    }
  }

  p {
    font-size: 1.125rem;
    max-width: 60ch;
    @media (width < 30rem) {
      font-size: 1rem;
    }
  }
</style>
