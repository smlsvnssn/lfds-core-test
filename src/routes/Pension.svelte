<script>
  import LFQDButton from '../lib/components/LFQDButton.svelte'

  import LFQDAmountHeader from '$lib/components/LFQDAmountHeader.svelte'
  import LFQDPadding from '$lib/components/LFQDPadding.svelte'
  import LFQDBox from '$lib/components/LFQDBox.svelte'
  import LFQDBoxHeader from '$lib/components/LFQDBoxHeader.svelte'
  import LFQDBoxFooter from '$lib/components/LFQDBoxFooter.svelte'
  import LFQDRow from '$lib/components/LFQDRow.svelte'
  import LFQDLink from '$lib/components/LFQDLink.svelte'

  import { prettyNumber, round, sum, strToNum } from 'ouml'
  import { personas, activePersona } from '$lib/mockdata.svelte'
  import { renderSheet } from '$lib/utils.svelte'
  import { Tween } from 'svelte/motion'
  import { expoOut } from 'svelte/easing'

  let pensionsdata = personas[activePersona.id].data.pensionsdata

  let amount = Tween.of(
    () => sum(pensionsdata.map(({ titleRight }) => strToNum(titleRight))),
    { easing: expoOut, duration: 500 },
  )
</script>

<LFQDBox>
  <LFQDBoxHeader>Pension</LFQDBoxHeader>

  <LFQDAmountHeader
    amount={prettyNumber(amount.current, 0) + ' kr'}
    subtitle="1,2% mer än samma tid förra året"
  ></LFQDAmountHeader>

  {#each pensionsdata as item}
    <LFQDRow {...item} onclick={() => renderSheet(item)} />
  {/each}

  <LFQDBoxFooter >
    <LFQDLink href="/pension">
      Allt om din pension
      <lfui-icon icon-id="chevron-right" size="24"></lfui-icon>
    </LFQDLink>
  </LFQDBoxFooter>
</LFQDBox>

<style>
  .fancyLink {
    background: var(--lfds-semantic-background-button-tertiary);
    border: 1px solid var(--lfds-semantic-border-on-highlight-primary);
    border-radius: var(--lfds-semantic-sizes-radius-sm);

    text-decoration: none;
    display: grid;
    place-items: center;
    gap: 0.25rem;
    padding: 0.75rem;
    transition: all 0.3s;
    lfui-icon {
      transition: all 0.3s;
    }

    &:hover {
      /* everything is broken */
      /* background: var(--lfds-semantic-background-button-tertiary-hover); */
      background: var(--lfds-primitives-color-blue-250);
      lfui-icon {
        translate: 0 -0.125rem;
      }
    }

    p {
      font-weight: var(--lfds-typography-weight-medium);
    }
  }
</style>
