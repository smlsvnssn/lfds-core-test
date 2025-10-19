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
    <LFQDRow titleLeft="Kontaktuppgifter" icon="user-glow" />
    <LFQDRow
      titleLeft="Bonus och förmåner"
      icon="cup"
      onclick={() => goto('/mer/bonus')}
    />
    <LFQDRow titleLeft="Avtal och dokument" icon="documents" />
    {#if true}
      <span class="badge">
        <LFQDBadge size="circle"></LFQDBadge>
      </span>
    {/if}
    <LFQDRow titleLeft="Konto för in- och utbetalning" icon="payment" />
    <LFQDRow titleLeft="Kundkännedom" icon="balance" />
  </LFQDBox>

  <LFQDSectionHeader padding={false} size="medium">
    Banktjänster
  </LFQDSectionHeader>

  <LFQDBox>
    <LFQDRow titleLeft="BankID" icon="placeholder" />

    <LFQDRow titleLeft="Swish" icon="placeholder" />
    <LFQDRow titleLeft="Bedrägeriskydd" icon="shield" />
    <LFQDRow titleLeft="(App) Snabbsaldo & snabböverföring" icon="transfer" />
  </LFQDBox>

  <LFQDSectionHeader padding={false} size="medium">
    Inställningar
  </LFQDSectionHeader>

  <LFQDBox>
    <LFQDRow titleLeft="Notiser" icon="bell" />
    <LFQDRow titleLeft="Nyhetsbrev och andra utskick" icon="heart" />
    <LFQDRow titleLeft="Samtycken och datadelning" icon="share-alt" />
    <LFQDRow titleLeft="(E-fakturor?)" icon="e-invoice" />
    <LFQDRow titleLeft="Hur vill du ha din post?" icon="snailmail" />
    <LFQDRow titleLeft="Utseende (App (och web?))" icon="sun" />
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
