<script>
  import LFQDPadding from '$lib/components/LFQDPadding.svelte'
  import LFQDBox from '$lib/components/LFQDBox.svelte'
  import LFQDBoxHeader from '$lib/components/LFQDBoxHeader.svelte'
  import LFQDBoxFooter from '$lib/components/LFQDBoxFooter.svelte'
  import LFQDRow from '$lib/components/LFQDRow.svelte'
  import LFQDLink from '$lib/components/LFQDLink.svelte'
  import LFQDButton from '$lib/components/LFQDButton.svelte'

  import { renderSheet } from '$lib/utils.svelte'
</script>

<LFQDBox>
  <!-- <LFQDBoxHeader>Konton och kort</LFQDBoxHeader> -->

  <!-- <LFQDPadding>
    <LFQDButton
      icon="document"
      onclick={e => {
        renderSheet({
          title: 'Dina årsbesked',
        })
      }}>Dina årsbesked</LFQDButton
    >

    <LFQDButton
      icon="coins"
      onclick={e => {
        renderSheet({
          title: 'Räkna på din framtida pension',
        })
      }}>Räkna på din pension</LFQDButton
    >
  </LFQDPadding> -->

  <LFQDRow
    icon="document"
    titleLeft="Dina årsbesked"
    onclick={() =>
      renderSheet({
        title: 'Dina årsbesked',
        size: 'large',
      })}
  />

  <LFQDRow
    icon="coins"
    titleLeft="Räkna på din pension"
    subtitleLeft="Hur mycket får du?"
    onclick={() =>
      renderSheet({
        title: 'Räkna på din framtida pension',
        size: 'large',
      })}
  />

  <LFQDRow
    icon="sustainability"
    titleLeft="Så hållbara var dina fonder"
    subtitleLeft="Rapport för det senaste kalenderåret"
    onclick={() =>
      renderSheet({
        title: 'Hållbarhetsrapport',
        size: 'large',
      })}
  />
</LFQDBox>
