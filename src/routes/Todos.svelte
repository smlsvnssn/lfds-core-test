<script>
  import LFQDBox from '$lib/LFQDBox.svelte'
  import LFQDBoxHeader from '$lib/LFQDBoxHeader.svelte'
  import LFQDRow from '$lib/LFQDRow.svelte'
  import LFQDBadge from '$lib/LFQDBadge.svelte'
  import LFQDRowProgressBar from '$lib/LFQDRowProgressBar.svelte'

  import { random, wait } from 'ouml'
  import { renderSheet } from '$lib/utils.svelte'

  let { efakturor, skada } = $props()

  let möte = $state(true)
  let dok = $state(true)
  let percent = $derived(skada ? 33 : 50)

  let todos = []
</script>

<LFQDBox>
  <LFQDBoxHeader>Att göra just nu</LFQDBoxHeader>

  <LFQDRow
    titleLeft="Du har ett digitalt möte om 12 minuter"
    onclick={() => {
      wait(1000, () => (möte = false))
      renderSheet({ title: 'Detaljer om ditt möte', content: 'möte' })
    }}
    subtitleLeft="Anslut till mötet"
    icon={möte ? 'calendar' : 'check-enclosed'}
    state={möte ? 'active' : 'inactive'}
  ></LFQDRow>

  <LFQDRow
    titleLeft="Du har nya e-fakturor"
    onclick={() =>
      renderSheet({ title: 'Nya e-fakturor', content: 'efakturor' })}
    state={efakturor ? 'active' : 'inactive'}
  >
    {#snippet icon()}
      {#if efakturor}
        <LFQDBadge>3</LFQDBadge>
      {:else}
        <lfui-icon size="24" icon-id="check-enclosed"></lfui-icon>
      {/if}
    {/snippet}
  </LFQDRow>

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
    state={dok ? 'active' : 'inactive'}
    subtitleLeft="Försäkringsavtal Villahemförsäkring"
  >
    {#snippet icon()}
      {#if dok}
        <LFQDBadge type="secondary">1</LFQDBadge>
      {:else}
        <lfui-icon size="24" icon-id="check-enclosed"></lfui-icon>
      {/if}
    {/snippet}
  </LFQDRow>

  <LFQDRowProgressBar
    titleLeft="Ditt skadeärende"
    subtitleLeft={skada ?
      'Komplettera med uppgifter'
    : 'Vi tittar på din komplettering'}
    titleRight="Pågående"
    type={skada ? 'secondary' : 'success'}
    onclick={() => {
      renderSheet({
        title: 'Din skada',
        size: 'medium',
        content: 'skada',
      })
    }}
    {percent}
  ></LFQDRowProgressBar>
</LFQDBox>
