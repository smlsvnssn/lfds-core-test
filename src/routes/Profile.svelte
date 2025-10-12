<script>
  import LFQDBox from '$lib/LFQDBox.svelte'
  import LFQDLayout from '$lib/LFQDLayout.svelte'
  import LFQDPadding from '$lib/LFQDPadding.svelte'
  import LFQDRow from '$lib/LFQDRow.svelte'
  import LFQDSectionHeader from '$lib/LFQDSectionHeader.svelte'
</script>

<LFQDLayout>
  <LFQDSectionHeader padding={false} size="medium">
    Dina uppgifter
  </LFQDSectionHeader>

  <LFQDBox>
    <LFQDRow titleLeft="Kontaktuppgifter" icon="user-glow"></LFQDRow>
    <LFQDRow titleLeft="Konto för in- och utbetalning" icon="payment"></LFQDRow>
    <LFQDRow titleLeft="Kundkännedom" icon="balance"></LFQDRow>
    <LFQDRow titleLeft="Förmåner" icon="cup"></LFQDRow>
    <LFQDRow titleLeft="Avtal och dokument" icon="documents"></LFQDRow>
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
<!-- 
 Profil
Karin Svensson

DINA UPPGIFTER
Kontaktuppgifter
Konto för in- och utbetalning
Kundkännedom
Förmåner
Avtal och dokument

BANKTJÄNSTER
BankID
Swish
Bedrägeriskydd
*Snabbsaldo & snabböverföring

INSTÄLLNINGAR
Nyhetsbrev och andra utskick
Notiser 
Samtycken
(E-fakturor)?
Hur vill du ha din post?(Ta emot dokument)

*Utseende
*Datainsamling i appen 
-->
