<script>
  import LFQDBox from '$lib/LFQDBox.svelte'
  import LFQDBoxHeader from '$lib/LFQDBoxHeader.svelte'
  import LFQDRow from '$lib/LFQDRow.svelte'
  import LFQDLayout from '$lib/LFQDLayout.svelte'
  import LFQDLayoutArea from '$lib/LFQDLayoutArea.svelte'
  import LFQDPadding from '$lib/LFQDPadding.svelte'

  import bonus from './bonus.svg'
</script>

<LFQDLayout type="twocol-with-header">
  <LFQDLayoutArea type="header">
    <LFQDBox>
      <header>
        <lfui-icon icon-id="chicken" size="72"></lfui-icon>
        <h1>Två kolumner med header</h1>
      </header>
    </LFQDBox>
  </LFQDLayoutArea>

  <LFQDLayoutArea type="main">
    <LFQDBox>
      <div class="placeholder">
        <h2>Main</h2>
      </div>
    </LFQDBox>
  </LFQDLayoutArea>

  <LFQDLayoutArea type="aside">
    <LFQDBox>
      <div class="placeholder">
        <h2>Aside</h2>
      </div>
    </LFQDBox>
  </LFQDLayoutArea>

  <LFQDLayoutArea type="secondary">
    <LFQDBox>
      <div class="placeholder">
        <h2>Secondary</h2>
      </div>
    </LFQDBox>
  </LFQDLayoutArea>
</LFQDLayout>

<LFQDLayout type="twocol">
  <LFQDLayoutArea type="main">
    <LFQDBox>
      <header>
        <lfui-icon icon-id="bird" size="72"></lfui-icon>
        <h1>Två kolumner</h1>
      </header>
    </LFQDBox>
  </LFQDLayoutArea>

  <LFQDLayoutArea type="aside">
    <LFQDBox>
      <div class="placeholder">
        <h2>Aside</h2>
      </div>
    </LFQDBox>
  </LFQDLayoutArea>

  <LFQDLayoutArea type="secondary">
    <LFQDBox>
      <div class="placeholder">
        <h2>Secondary</h2>
      </div>
    </LFQDBox>
  </LFQDLayoutArea>
</LFQDLayout>

<LFQDLayout type="threecol-with-header">
  <LFQDLayoutArea type="header">
    <LFQDBox>
      <header>
        <lfui-icon icon-id="chicken" size="72"></lfui-icon>
        <h1>Tre kolumner med header</h1>
      </header>
    </LFQDBox>
  </LFQDLayoutArea>

  <LFQDLayoutArea type="main">
    <LFQDBox>
      <div class="placeholder">
        <h2>Main</h2>
      </div>
    </LFQDBox>
  </LFQDLayoutArea>

  <LFQDLayoutArea type="aside">
    <LFQDBox>
      <div class="placeholder">
        <h2>Aside</h2>
      </div>
    </LFQDBox>
  </LFQDLayoutArea>

  <LFQDLayoutArea type="secondary">
    <LFQDBox>
      <div class="placeholder">
        <h2>Secondary</h2>
      </div>
    </LFQDBox>
  </LFQDLayoutArea>
</LFQDLayout>

<LFQDLayout type="threecol">
  <LFQDLayoutArea type="main">
    <LFQDBox>
      <header>
        <lfui-icon icon-id="bird" size="72"></lfui-icon>
        <h1>Tre kolumner</h1>
      </header>
    </LFQDBox>
  </LFQDLayoutArea>

  <LFQDLayoutArea type="aside">
    <LFQDBox>
      <div class="placeholder">
        <h2>Aside</h2>
      </div>
    </LFQDBox>
  </LFQDLayoutArea>

  <LFQDLayoutArea type="secondary">
    <LFQDBox>
      <div class="placeholder">
        <h2>Secondary</h2>
      </div>
    </LFQDBox>
  </LFQDLayoutArea>
</LFQDLayout>

<LFQDLayout type="onecol">
  <LFQDLayoutArea type="main">
    <LFQDBox>
      <header>
        <lfui-icon icon-id="rabbit" size="72"></lfui-icon>
        <h1>En kolumn</h1>
      </header>
    </LFQDBox>
  </LFQDLayoutArea>

  <LFQDLayoutArea type="secondary">
    <LFQDBox>
      <div class="placeholder">
        <h2>Secondary</h2>
      </div>
    </LFQDBox>
  </LFQDLayoutArea>

  <LFQDLayoutArea type="aside">
    <LFQDBox>
      <div class="placeholder">
        <h2>Aside</h2>
      </div>
    </LFQDBox>
  </LFQDLayoutArea>
</LFQDLayout>

<LFQDLayout type="onecol">
  <LFQDLayoutArea>
    <LFQDBox>
      <header>
        <lfui-icon icon-id="horse" size="72"></lfui-icon>
        <h1>En kolumn utan namngivna areor</h1>
      </header>
    </LFQDBox>
  </LFQDLayoutArea>

  <LFQDLayoutArea>
    <LFQDBox>
      <div class="placeholder">
        <h2>Thing</h2>
      </div>
    </LFQDBox>
  </LFQDLayoutArea>

  <LFQDLayoutArea>
    <LFQDBox>
      <div class="placeholder">
        <h2>Thing</h2>
      </div>
    </LFQDBox>
  </LFQDLayoutArea>
</LFQDLayout>

<style>
  .highlight {
    background: var(--lfds-semantic-background-highlight-primary);
  }

  .placeholder {
    height: 10rem;
    background: var(--lfds-semantic-background-secondary);
    padding: 1rem;
  }

  header {
    display: grid;
    gap: 1.5rem;
    place-items: center;
    padding: 5rem 3.5rem 3.5rem;
    @media (width < 30rem) {
      gap: 1rem;
      padding: 3rem 1rem 1.5rem;
    }
  }

  h1 {
    font-family: var(--lfds-typography-font-family-lf);
    font-weight: var(--lfds-typography-weight-medium);
    color: var(--lfds-semantic-text-brand-primary);
    font-size: 2rem;
    margin: 0%;

    @media (width < 30rem) {
      font-size: 1.875rem;
    }
  }

  h2 {
    font-family: var(--lfds-typography-font-family-lf);
    font-weight: var(--lfds-typography-weight-medium);
    color: var(--lfds-semantic-text-brand-primary);
    font-size: 1.5rem;
    margin: 0%;

    @media (width < 30rem) {
      font-size: 1.25rem;
    }
  }

  p {
    font-size: 1.125rem;
    @media (width < 30rem) {
      font-size: 1rem;
    }
  }
</style>
