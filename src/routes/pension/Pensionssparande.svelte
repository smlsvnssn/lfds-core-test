<script>
  import LFQDAmountHeader from '$lib/components/LFQDAmountHeader.svelte'
  import LFQDBox from '$lib/components/LFQDBox.svelte'
  import LFQDBoxHeader from '$lib/components/LFQDBoxHeader.svelte'
  import LFQDBoxFooter from '$lib/components/LFQDBoxFooter.svelte'
  import LFQDRow from '$lib/components/LFQDRow.svelte'
  import LFQDLink from '$lib/components/LFQDLink.svelte'

  import { prettyNumber, round, sum } from 'ouml'
  import { pensionsdata } from '$lib/mockdata.svelte'
  import { parseToNumber, renderSheet } from '$lib/utils.svelte'
  import { Tween } from 'svelte/motion'
  import { expoOut } from 'svelte/easing'
  import Erbjudande from './Erbjudande.svelte'
  import LFQDPadding from '$lib/components/LFQDPadding.svelte'

  let amount = Tween.of(
    () => sum(pensionsdata.map(({ titleRight }) => parseToNumber(titleRight))),
    { easing: expoOut, duration: 500 },
  )
</script>

<LFQDBox>
  <LFQDBoxHeader>Ditt pensionssparande</LFQDBoxHeader>

  <LFQDAmountHeader
    title="Värde hos oss:"
    amount={prettyNumber(amount.current, undefined, 0) + ' kr'}
    subtitle="1,2% mer än samma tid förra månaden"
  ></LFQDAmountHeader>

  <LFQDPadding>
    <Erbjudande></Erbjudande>
  </LFQDPadding>

  {#each pensionsdata as item}
    <LFQDRow {...item} onclick={() => renderSheet(item)} />
  {/each}

  <LFQDBoxFooter padEnd="true">
    <LFQDLink
      href="/konton"
      onclick={e => {
        e.preventDefault()
        renderSheet({
          title: 'Ändra utbetalningskonto',
          size: 'medium',
          content: 'mock',
        })
      }}
    >
      Ändra utbetalningskonto
      <lfui-icon icon-id="chevron-right" size="24"></lfui-icon>
    </LFQDLink>
  </LFQDBoxFooter>
</LFQDBox>
