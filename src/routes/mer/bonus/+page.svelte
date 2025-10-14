<script>
  import LFQDBox from '$lib/LFQDBox.svelte'
  import LFQDBoxHeader from '$lib/LFQDBoxHeader.svelte'
  import LFQDRow from '$lib/LFQDRow.svelte'
  import LFQDLayout from '$lib/LFQDLayout.svelte'
  import LFQDLayoutArea from '$lib/LFQDLayoutArea.svelte'
  import LFQDPadding from '$lib/LFQDPadding.svelte'
  import LFQDSectionHeader from '$lib/LFQDSectionHeader.svelte'

  import bonus from './bonus.svg'

  import * as ö from 'ouml'
</script>

<LFQDLayout type="twocol-with-header">
  <LFQDLayoutArea type="header">
    <LFQDBox>
      <header>
        <img src={bonus} alt="" />
        <h1>Bonus och förmåner</h1>
        <p>
          Ju mer av din ekonomi och dina försäkringar du samlar hos oss, desto
          mer kan vi hjälpa dig fatta bra beslut. Samlar du din hemförsäkring,
          ditt lönekonto och ditt sparande hos oss får du dessutom 15 procent
          rabatt.
        </p>
      </header>
    </LFQDBox>
  </LFQDLayoutArea>

  <LFQDLayoutArea type="main">
    <LFQDBox>
      <LFQDBoxHeader>Din bonusnivå är:</LFQDBoxHeader>
      <LFQDRow
        icon="cup"
        titleLeft="Silverkund"
        titleRight="10% rabatt"
        subtitleRight="på dina sakförsäkringar"
        chevron="false"
      ></LFQDRow>
    </LFQDBox>
    <LFQDBox>
      <LFQDBoxHeader>Du får även:</LFQDBoxHeader>
      <LFQDRow
        icon="check-enclosed"
        titleLeft="Bekväma vardagen (kort, privat- och sparkonto, bankapp, Swish och mobilt bankID) utan årsavgift"
        chevron="false"
      ></LFQDRow>
      <LFQDRow
        icon="check-enclosed"
        titleLeft="Ingen årsavgift på kreditkortet"
        chevron="false"
      ></LFQDRow>
      <LFQDRow
        icon="check-enclosed"
        titleLeft="1 500 kronor i rabatt på självrisken vid din första skada"
        chevron="false"
      ></LFQDRow>
    </LFQDBox>
  </LFQDLayoutArea>

  <LFQDLayoutArea type="aside">
    <LFQDBox>
      <LFQDBoxHeader>För att bli guldkund behöver du:</LFQDBoxHeader>
      <LFQDRow icon="check-enclosed" titleLeft="Hemförsäkring" chevron="false"
      ></LFQDRow>
      <LFQDRow
        icon="check-enclosed"
        titleLeft="Aktivt lönekonto hos Länsförsäkringar"
        chevron="false"
      ></LFQDRow>
      <div class="highlight">
        <LFQDRow
          icon="circle"
          titleLeft="Sparande på minst 500 kr/mån eller minst 200 000 kr i sparkapital "
          chevron="false"
        ></LFQDRow>
      </div>
      <LFQDPadding>
        <lfui-button type="button" align="right">
          Bli guldkund? Månadsspara!
        </lfui-button>
      </LFQDPadding>
    </LFQDBox>
  </LFQDLayoutArea>
</LFQDLayout>

<style>
  .highlight {
    background: var(--lfds-semantic-background-highlight-primary);
  }

  .placeholder {
    height: 10rem;
    background: var(--lfds-semantic-background-secondary);
    padding: 1rem;
  }

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

  h1 {
    font-family: var(--lfds-typography-font-family-lf);
    font-weight: var(--lfds-typography-weight-medium);
    color: var(--lfds-semantic-text-brand-primary);
    font-size: 2rem;
    margin: 0%;

    @media (width < 30rem) {
      font-size: 1.875rem;
    }
  }

  h2 {
    font-family: var(--lfds-typography-font-family-ibm);
    font-weight: var(--lfds-typography-weight-semibold);
    color: var(--lfds-semantic-text-brand-primary);
    font-size: 1rem;
    margin: 0%;

    /* @media (width < 30rem) {
      font-size: 1.25rem;
    } */
  }

  p {
    font-size: 1.125rem;
    @media (width < 30rem) {
      font-size: 1rem;
    }
  }
</style>
