<script>
  import LFQDBox from '$lib/LFQDBox.svelte'
  import LFQDLayout from '$lib/LFQDLayout.svelte'
  import LFQDBadge from '$lib/LFQDBadge.svelte'
  import LFQDRow from '$lib/LFQDRow.svelte'
  import LFQDSectionHeader from '$lib/LFQDSectionHeader.svelte'
  import { goto } from '$app/navigation'
</script>

<LFQDLayout>
  <LFQDSectionHeader padding={false} size="medium">
    Dina uppgifter
  </LFQDSectionHeader>

  <LFQDBox>
    <LFQDRow titleLeft="Kontaktuppgifter" icon="user-glow"></LFQDRow>
    <LFQDRow titleLeft="Konto för in- och utbetalning" icon="payment"></LFQDRow>
    <LFQDRow titleLeft="Kundkännedom" icon="balance"></LFQDRow>
    <LFQDRow
      titleLeft="Bonus och förmåner"
      icon="cup"
      onclick={() => goto('/mer/bonus')}
    ></LFQDRow>
    <LFQDRow titleLeft="Avtal och dokument" icon="documents"></LFQDRow>
    {#if true}
      <span class="badge">
        <LFQDBadge size="circle"></LFQDBadge>
      </span>
    {/if}
  </LFQDBox>

  <LFQDSectionHeader padding={false} size="medium">
    Banktjänster
  </LFQDSectionHeader>

  <LFQDBox>
    <LFQDRow titleLeft="BankID" icon="placeholder"></LFQDRow>

    <LFQDRow titleLeft="Swish" icon="placeholder"></LFQDRow>
    <LFQDRow titleLeft="Bedrägeriskydd" icon="shield"></LFQDRow>
    <LFQDRow titleLeft="(App) Snabbsaldo & snabböverföring" icon="transfer"
    ></LFQDRow>
  </LFQDBox>

  <LFQDSectionHeader padding={false} size="medium">
    Inställningar
  </LFQDSectionHeader>

  <LFQDBox>
    <LFQDRow titleLeft="Notiser" icon="bell"></LFQDRow>
    <LFQDRow titleLeft="Nyhetsbrev och andra utskick" icon="heart"></LFQDRow>
    <LFQDRow titleLeft="Samtycken och datadelning" icon="share-alt"></LFQDRow>
    <LFQDRow titleLeft="(E-fakturor?)" icon="e-invoice"></LFQDRow>
    <LFQDRow titleLeft="Hur vill du ha din post?" icon="snailmail"></LFQDRow>
    <LFQDRow titleLeft="Utseende (App (och web?))" icon="sun"></LFQDRow>
  </LFQDBox>
</LFQDLayout>

<style>
  .badge {
    position: relative;
    display: block;
    width: 0;
    height: 0;
    top: -3.25rem;
    left: 2rem;
  }
</style>
