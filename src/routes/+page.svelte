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

  import { log, prettyNumber, random, sum } from 'ouml'

  import { bankdata, försäkringsdata } from '$lib/mockdata'

  let dialog = $state()
  let sheet = $state()

  let efakturor = $state(true)

  let percent = $state(33)
  const progressHasBeenMade = () => (percent = (percent + random(33)) % 100)

  import { pushState } from '$app/navigation'
  import { page } from '$app/state'
  import löremIpsum from 'loerem'

  const onCloseSheet = () => history.back()

  const renderSheet = data => {
    log(data)
    pushState(``, {
      sheetIsOpen: true,
      sheetData: data,
    })
  }
</script>

<Header />

<lfui-dialog-side-sheet
  size={page.state.sheetData?.size ?? 'small'}
  open={page.state?.sheetIsOpen ? true : false}
  onclose={onCloseSheet}
  height=""
  bind:this={sheet}
  heading={page.state.sheetData?.title ?? page.state.sheetData?.titleLeft}
>
  {#if page.state.sheetData?.content == 'möte'}
    <LFQDBox>
      <LFQDPadding>
        <p>{löremIpsum()}</p>
        <lfui-button onclick={()=>sheet.close()}>Anslut till mötet</lfui-button>
      </LFQDPadding>
    </LFQDBox>
  {:else if page.state.sheetData?.content == 'dok'}
    <LFQDBox>
      <LFQDPadding>
        {@html löremIpsum({ numberOfParagraphs: 10 })}
        <lfui-button onclick={()=>sheet.close()}>
          Gör något som en konsekvens av dokumentet
        </lfui-button>
      </LFQDPadding>
    </LFQDBox>
  {:else if page.state.sheetData?.content == 'efakturor'}
    <LFQDBox>
      <LFQDRow titleLeft="Kundklubb" titleRight="100 kr" icon="e-invoice"
      ></LFQDRow>
      <LFQDRow titleLeft="Hundklubb" titleRight="100 kr" icon="e-invoice"
      ></LFQDRow>
    </LFQDBox>

    <lfui-button
      onclick={() => {
        sheet.close()
        efakturor = false
      }}
      style="margin-top: 1rem"
    >
      Gör din grej
    </lfui-button>
  {:else}
    <LFQDBox>
      <LFQDRow {...page.state.sheetData} />
    </LFQDBox>
  {/if}
</lfui-dialog-side-sheet>

<LFQDLayout type="masonry">
  <LFQDBox>
    <LFQDBoxHeader>Att göra just nu</LFQDBoxHeader>

    <LFQDRow
      titleLeft="Du har ett digitalt möte om 12 minuter"
      onclick={() =>
        renderSheet({ title: 'Detaljer om ditt möte', content: 'möte' })}
      subtitleLeft="Anslut till mötet"
      icon="calendar"
    ></LFQDRow>
    {#if efakturor}
      <LFQDRow
        titleLeft="Du har nya e-fakturor"
        onclick={() =>
          renderSheet({ title: 'Nya e-fakturor', content: 'efakturor' })}
      >
        {#snippet icon()}
          <LFQDBadge>3</LFQDBadge>
        {/snippet}
      </LFQDRow>
    {/if}

    <LFQDRow
      titleLeft="Du har ett nytt dokument"
      onclick={() =>
        renderSheet({
          title: 'Försäkringsavtal Villahemförsäkring',
          size: 'medium',
          content: 'dok',
        })}
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
      <LFQDLink href="/forsakring">
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
      <lfui-button onclick={() => dialog.showModal()}>Månadsspara </lfui-button>
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
</style>
