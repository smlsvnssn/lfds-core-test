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

  <LFQDPadding>
    <!-- <div style="width:100%; display: grid; gap:1rem; grid-auto-flow:column"> -->
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
    <!-- </div> -->
  </LFQDPadding>

  <LFQDRow
    icon="sustainability"
    titleLeft="Så hållbara var dina fonder"
    subtitleLeft="Rapport för det senaste kalenderåret"
    onclick={() =>
      renderSheet({
        title: 'Hållbarhetsrapport',
        size:'large'
      })}
  />
</LFQDBox>
