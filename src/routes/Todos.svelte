<script>
  import LFQDBox from '$lib/LFQDBox.svelte'
  import LFQDBoxHeader from '$lib/LFQDBoxHeader.svelte'
  import LFQDRow from '$lib/LFQDRow.svelte'
  import LFQDBadge from '$lib/LFQDBadge.svelte'
  import LFQDRowProgressBar from '$lib/LFQDRowProgressBar.svelte'

  import { random, wait } from 'ouml'
  import { renderSheet } from '$lib/utils.svelte'

  let { efakturor } = $props()

  let möte = $state(true)
  let dok = $state(true)
  let percent = $state(33)
  const progressHasBeenMade = () => (percent = (percent + random(5, 33)) % 100)
</script>

<LFQDBox>
  <LFQDBoxHeader>Att göra just nu</LFQDBoxHeader>

  {#if möte}
    <LFQDRow
      titleLeft="Du har ett digitalt möte om 12 minuter"
      onclick={() => {
        wait(1000, () => (möte = false))
        renderSheet({ title: 'Detaljer om ditt möte', content: 'möte' })
	}}
      subtitleLeft="Anslut till mötet"
      icon="calendar"
	  ></LFQDRow>
	  {/if}
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

{#if dok}
<LFQDRow
titleLeft="Du har ett nytt dokument"
onclick={() => {
		  wait(1000, () => (dok = false))
        renderSheet({
          title: 'Försäkringsavtal Villahemförsäkring',
          size: 'medium',
          content: 'dok',
        })
      }}
      subtitleLeft="Försäkringsavtal Villahemförsäkring"
    >
      {#snippet icon()}
        <LFQDBadge type="secondary">1</LFQDBadge>
      {/snippet}
    </LFQDRow>
  {/if}
  <LFQDRowProgressBar
    titleLeft="Ditt skadeärende"
    subtitleLeft="Komplettera med uppgifter"
    titleRight="Pågående"
    onclick={() => {
      progressHasBeenMade()
      renderSheet({
        title: 'Din skada',
        size: 'medium',
      })
    }}
    {percent}
  ></LFQDRowProgressBar>
</LFQDBox>
