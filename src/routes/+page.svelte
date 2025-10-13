<script>
  import Header from './Header.svelte'

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

  let sheetIsOpen = $state(false)

  const openSheet = () => (sheetIsOpen = true)
  const closeSheet = () => (sheetIsOpen = false)

  let försäkringsdata = [
    {
      titleLeft: 'Villahemförsäkring',
      subtitleLeft: 'Trumpeten 11',
      titleRight: 'Betald 25 09 01',
      subtitleRight: '419 kr/mån',
      icon: 'house',
    },
    {
      titleLeft: 'Personbil',
      subtitleLeft: 'XXX 666',
      titleRight: 'Obetald',
      subtitleRight: '365 kr/mån',
      icon: 'car',
    },
    {
      titleLeft: 'Kattförsäkring',
      subtitleLeft: 'Solveig',
      subtitleRight: '212 kr/mån',
      icon: 'dog',
    },
    {
      titleLeft: 'Barnförsäkring',
      subtitleLeft: 'Karl Karlsson, 6 år',
      subtitleRight: '315 kr/mån',
      icon: 'baby',
    },
  ]
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
      percent="33"
    ></LFQDRowProgressBar>
  </LFQDBox>

  <LFQDBox>
    <div class="highlight placeholder">
      <p>Viktig sak vi vill påminna om.</p>
    </div>
  </LFQDBox>

<LFQDBox>
    <LFQDBoxHeader>Konton och kort</LFQDBoxHeader>
    <div class="placeholder"></div>
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
      <lfui-button>Månadsspara</lfui-button>
    </div>
  </LFQDBox>
</LFQDLayout>

<LFQDLayout type="header">
  <LFQDBox>
    <header><p>Här kan kommunikationsytor ligga</p></header>
  </LFQDBox>
</LFQDLayout>

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
