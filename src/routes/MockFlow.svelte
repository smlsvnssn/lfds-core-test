<script>
  import LFQDPadding from '$lib/components/LFQDPadding.svelte'
  import LFQDBox from '$lib/components/LFQDBox.svelte'
  import LFQDFlow from '$lib/components/LFQDFlow.svelte'
  import MockForm from './MockForm.svelte'
</script>

<LFQDFlow background="primary" isInSheet={true}>
  {#snippet page1(pageIsValid)}
    <MockForm buttontext=""></MockForm>
  {/snippet}

  {#snippet page2(pageIsValid)}
    <MockForm buttontext=""></MockForm>
  {/snippet}

  {#snippet page3(pageIsValid)}
    <MockForm buttontext=""></MockForm>
  {/snippet}

  {#snippet page4(pageIsValid)}
    <MockForm buttontext=""></MockForm>
  {/snippet}

  {#snippet confirmationPage()}
    <div class="kvitto">
      <h1>Tack för att du deltog!</h1>
      <p>
        Det här skulle kunna vara ditt kvitto, eller så visar vi bara köpt
        produkt i kontext, med onboarding.
      </p>
    </div>
  {/snippet}
</LFQDFlow>

<style>
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
    font-family: var(--lfds-typography-font-family-ibm);
    font-weight: var(--lfds-typography-weight-semibold);
    color: var(--lfds-semantic-text-brand-primary);
    font-size: 1rem;
    margin: 0%;

    /* @media (width < 30rem) {
      font-size: 1.25rem;
    } */
  }
  .kvitto {
    display: grid;
    place-content: center;
    place-items: center;
    min-height: 40vh;

    p {
      text-align: center;
      max-width: 80%;
    }
  }
</style>
