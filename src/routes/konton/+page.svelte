<script>
  import LFQDRow from '$lib/LFQDRow.svelte'
  import LFQDLayout from '$lib/LFQDLayout.svelte'
  import LFQDLayoutArea from '$lib/LFQDLayoutArea.svelte'
  import LFQDPadding from '$lib/LFQDPadding.svelte'

  import LFQDBox from '$lib/LFQDBox.svelte'
  import LFQDBoxHeader from '$lib/LFQDBoxHeader.svelte'
  import LFQDBoxFooter from '$lib/LFQDBoxFooter.svelte'
  import LFQDLink from '$lib/LFQDLink.svelte'

  import * as ö from 'ouml'

  let junk = ö
    .times(4, () =>
      ö.shuffle([
    {
      titleLeft: 'Lönekonto',
      subtitleLeft: '9022.01.21.66',
      titleRight: '13 649 kr',
      icon: 'atv',
    },
    {
      titleLeft: 'Bönekonto',
      subtitleLeft: '9022.01.21.99',
      titleRight: '2 912 kr',
      icon: 'bulb',
    },
    {
      titleLeft: 'Din mammas konto',
      subtitleLeft: '9022.01.21.33',
      titleRight: '461 kr',
      icon: 'pregnant',
    },
    {
      titleLeft: 'Din pappas kreditkort',
      subtitleLeft: '6666 6666 6666 6666',
      titleRight: '-32 901 kr',
      subtitleRight: 'Kvar att spendera: 17 099 kr ',
      icon: 'card',
    },
  ]),
    )
    .flat()

  const försäkringsdata = () => ö.sample(junk, ö.random(3) + 2)
</script>

<LFQDLayout type="header">
  <LFQDLayoutArea type="header">
    <LFQDBox>
      <header>
        <lfui-icon icon-id="rabbit" size="72"></lfui-icon>

        <h1>Dina konton och kort</h1>
      </header>
    </LFQDBox>
  </LFQDLayoutArea>
</LFQDLayout>

<LFQDLayout type="masonry">
  {#each ö.times(ö.random(6) + 3) as thing}
    <LFQDBox>
      <LFQDBoxHeader>Konton och kort</LFQDBoxHeader>
      {#each försäkringsdata() as item}
        {console.log(item)}
        <LFQDRow {...item} onclick={() => renderSheet(item)} />
      {/each}
      <LFQDBoxFooter>
        <LFQDLink href="#">
          Alla konton
          <lfui-icon icon-id="chevron-right" size="24"></lfui-icon>
        </LFQDLink>
      </LFQDBoxFooter>
    </LFQDBox>
  {/each}
</LFQDLayout>

<style>
  .highlight {
    background: var(--lfds-semantic-background-highlight-primary);
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

  p {
    font-size: 1.125rem;
    max-width: 60ch;
    @media (width < 30rem) {
      font-size: 1rem;
    }
  }
</style>
