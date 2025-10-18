<script>
  import LFQDBox from '$lib/LFQDBox.svelte'
  import LFQDBoxHeader from '$lib/LFQDBoxHeader.svelte'
  import LFQDRow from '$lib/LFQDRow.svelte'
  import LFQDBadge from '$lib/LFQDBadge.svelte'
  import LFQDRowProgressBar from '$lib/LFQDRowProgressBar.svelte'

  import { random } from 'ouml'

  let { renderSheet, efakturor } = $props()

  let percent = $state(33)
  const progressHasBeenMade = () => (percent = (percent + random(5, 33)) % 100)
</script>

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
