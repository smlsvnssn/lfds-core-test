<script>
  import Sheet from './Sheet.svelte'
  import LFQDPadding from '$lib/components/LFQDPadding.svelte'
  import LFQDBox from '$lib/components/LFQDBox.svelte'
  import LFQDBoxHeader from '$lib/components/LFQDBoxHeader.svelte'
  import LFQDBoxFooter from '$lib/components/LFQDBoxFooter.svelte'
  import LFQDRow from '$lib/components/LFQDRow.svelte'
  import LFQDLink from '$lib/components/LFQDLink.svelte'
  import LFQDLayout from '$lib/components/LFQDLayout.svelte'

  import lörem from 'loerem'
  import * as ö from 'ouml'
  import { bankdata, försäkringsdata } from '$lib/mockdata.svelte'

  import bubbel from '$lib/assets/bubbel.svg'

  import { page } from '$app/state'
  import { renderSheet } from '$lib/utils.svelte'

  const renderFakedata = (data) =>
    renderSheet({
      title: data?.titleLeft,
      text: lörem({ numberOfParagraphs: 2, sentencesPerParagraph: 4 }),
      dummy: ö.times(ö.random(4) + 1, () => ({
        titleLeft: lörem({ isName: true }),
        subtitleLeft: ö.randomChars(),
        titleRight: ö.prettyNumber(Math.abs(ö.randomNormal(0, 50000))) + ' kr',
        icon: 'user',
      })),
    })

  const renderBubbel = () => renderSheet({ title: 'Varsågod!', bubbel })
</script>

<Sheet state={page.state}></Sheet>


<LFQDLayout type="header">
  <LFQDBox>
    <header>
      <lfui-icon icon-id="savings" size="72"></lfui-icon>

      <h1>Ditt sparande</h1>
      <p>
        Här testar vi också hur navigation bakåt skulle kunna funka med sheets.
      </p>
    </header>
  </LFQDBox>
</LFQDLayout>

<LFQDLayout>
  <LFQDBox>
    <LFQDBoxHeader>Mina konton</LFQDBoxHeader>

    {#each bankdata as item}
      <LFQDRow {...item} onclick={() => renderFakedata(item)} />
    {/each}

    <LFQDBoxFooter padEnd="true">
      <LFQDLink href="#">
        <lfui-icon icon-id="coins" size="24"></lfui-icon>
        Fyll konto
      </LFQDLink>

      <LFQDLink href="#">
        <lfui-icon icon-id="wallet" size="24"></lfui-icon>
        Töm konto
      </LFQDLink>
    </LFQDBoxFooter>
  </LFQDBox>

  <LFQDBox>
    <LFQDBoxHeader>Mina försäkringar</LFQDBoxHeader>

    {#each försäkringsdata as item}
      <LFQDRow {...item} onclick={() => renderFakedata(item)} />
    {/each}

    <LFQDBoxFooter>
      <LFQDLink href="#">
        Alla försäkringar
        <lfui-icon icon-id="chevron-right" size="24"></lfui-icon>
      </LFQDLink>
    </LFQDBoxFooter>
  </LFQDBox>

  <LFQDBox>
    <LFQDBoxHeader>Mina uppgifter</LFQDBoxHeader>
    <LFQDPadding>
      <lfui-form-input
        label="Personnummer"
        type="number"
        help-text="12 siffror (ÅÅÅÅMMDDNNNN)"
      ></lfui-form-input>

      <lfui-form-input
        label="Vilken är din favoritkändis?"
        help-text="Det kan vara en nu levande eller död kändis, det spelar ingen roll."
      ></lfui-form-input>

      <lfui-form-input label="Vilket formulärelement saknar du mest i LFDS?"
      ></lfui-form-input>

      <form style="display: grid; width: 100%;">
        <p>
          Älskar du att checkboxar ligger ovanpå varandra istället för bredvid?
        </p>
        <lfui-form-checkbox id="demo-example-checkbox-1" label="Ja">
        </lfui-form-checkbox>
        <lfui-form-checkbox id="demo-example-checkbox-2" label="Nej">
        </lfui-form-checkbox>
        <lfui-form-checkbox id="demo-example-checkbox-2" label="Kanske">
        </lfui-form-checkbox>
      </form>

      <lfui-button
        type="button"
        onclick={() => renderBubbel()}
        tabindex="0"
        role="link"
        onkeydown={e => e.key == 'Enter' && renderBubbel()}
      >
        Fyll mitt glas med bubbel
      </lfui-button>
    </LFQDPadding>
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
