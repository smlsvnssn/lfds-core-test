<script>
  import LFQD_Padding from '$lib/LFQD_Padding.svelte'
  import LFQD_Box from '$lib/LFQD_Box.svelte'
  import LFQD_BoxHeader from '$lib/LFQD_BoxHeader.svelte'
  import LFQD_BoxFooter from '$lib/LFQD_BoxFooter.svelte'
  import LFQD_Row from '$lib/LFQD_Row.svelte'
  import LFQD_Link from '$lib/LFQD_Link.svelte'

  import * as ö from 'ouml'

  import bonus from './bonus.svg'

  import { page } from '$app/state'
</script>

<LFQD_Box>
  <header>
    <img src={bonus} alt="" />
    <h1>Bonus och förmåner</h1>
    <p>
      Ju mer av din ekonomi och dina försäkringar du samlar hos oss, desto mer
      kan vi hjälpa dig fatta bra beslut. Samlar du din hemförsäkring, ditt
      lönekonto och ditt sparande hos oss får du dessutom 15 procent rabatt.
    </p>
  </header>
</LFQD_Box>

<LFQD_Box>
  <LFQD_BoxHeader>Din bonusnivå är:</LFQD_BoxHeader>

  <LFQD_Row
    icon="cup"
    titleLeft="Silverkund"
    titleRight="10% rabatt"
    subtitleRight="på dina sakförsäkringar"
    chevron="false"
  ></LFQD_Row>
</LFQD_Box>

<LFQD_Box>
  <LFQD_BoxHeader>Du får även:</LFQD_BoxHeader>

  <LFQD_Row
    icon="check-enclosed"
    titleLeft="Bekväma vardagen (kort, privat- och sparkonto, bankapp, Swish och mobilt bank-ID) utan årsavgift"
    chevron="false"
    rightCol="false"
  ></LFQD_Row>

  <LFQD_Row
    icon="check-enclosed"
    titleLeft="Ingen årsavgift på kreditkortet"
    chevron="false"
    rightCol="false"
  ></LFQD_Row>

  <LFQD_Row
    icon="check-enclosed"
    titleLeft="1 500 kronor i rabatt på självrisken vid din första skada"
    chevron="false"
    rightCol="false"
  ></LFQD_Row>
</LFQD_Box>

<LFQD_Box>
  <LFQD_BoxHeader>För att bli guldkund behöver du:</LFQD_BoxHeader>

  <LFQD_Row
    icon="check-enclosed"
    titleLeft="Hemförsäkring"
    chevron="false"
    rightCol="false"
  ></LFQD_Row>

  <LFQD_Row
    icon="check-enclosed"
    titleLeft="Aktivt lönekonto hos Länsförsäkringar"
    chevron="false"
    rightCol="false"
  ></LFQD_Row>

  <div class="highlight">
    <LFQD_Row
      icon="circle"
      titleLeft="Sparande på minst 500 kr/mån eller minst 200 000 kr i sparkapital "
      chevron="false"
      rightCol="false"
    ></LFQD_Row>
  </div>
</LFQD_Box>

<lfui-button type="button" align="right">
  Bli guldkund? Månadsspara!
</lfui-button>

<style>
  .highlight {
    background: var(--lfds-semantic-background-highlight-primary);
  }

  header {
    display: grid;
    gap: 1.5rem;
    padding: 5rem 3.5rem 2.5rem;
    place-items: center;
  }

  h1 {
    font-family: var(--lfds-typography-font-family-lf);
    font-weight: var(--lfds-typography-weight-medium);
    color: var(--lfds-semantic-text-brand-primary);
    font-size: 1.875rem;
    margin: 0%;
  }

  p {
    font-family: var(--lfds-typography-font-family-ibm);
    font-weight: var(--lfds-typography-weight-regular);
  }
</style>
