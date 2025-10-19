<script>
  import LFQDAmountHeader from '$lib/LFQDAmountHeader.svelte'
  import LFQDPadding from '$lib/LFQDPadding.svelte'
  import LFQDBox from '$lib/LFQDBox.svelte'
  import LFQDBoxHeader from '$lib/LFQDBoxHeader.svelte'
  import LFQDBoxFooter from '$lib/LFQDBoxFooter.svelte'
  import LFQDRow from '$lib/LFQDRow.svelte'
  import LFQDLink from '$lib/LFQDLink.svelte'

  import { log, prettyNumber, random, sum } from 'ouml'

  import { bankdata } from '$lib/mockdata'
  import { renderSheet } from '$lib/utils.svelte'
</script>

<LFQDBox>
  <LFQDBoxHeader>Konton och kort</LFQDBoxHeader>

  <LFQDAmountHeader
    amount={prettyNumber(
      sum(bankdata.map(v => +v.titleRight.replace(/[^\d-]/g, ''))),
    ) + ' kr'}
    subtitle="12% mindre än samma tid förra månaden"
  ></LFQDAmountHeader>

  <LFQDPadding>
    <div style="width:100%; display: grid; gap:1rem; grid-auto-flow:column">
      <a
        href="#"
        class="fancyLink"
        onclick={e => {
          e.preventDefault()
          renderSheet({
            title: 'Lägg till betalning',
            size: 'medium',
            content: 'mock',
          })
        }}
      >
        <lfui-icon icon-id="payment" size="24"></lfui-icon>
        <p>Ny betalning</p>
      </a>

      <a
        href="#"
        class="fancyLink"
        onclick={e => {
          e.preventDefault()
          renderSheet({
            title: 'Gör överföring',
            size: 'medium',
            content: 'mock',
          })
        }}
      >
        <lfui-icon icon-id="transfer" size="24"></lfui-icon>
        <p>Ny överföring</p>
      </a>
    </div>
  </LFQDPadding>

  {#each bankdata as item}
    <LFQDRow {...item} onclick={() => renderSheet(item)} />
  {/each}

  <LFQDBoxFooter padEnd="true">
    <LFQDLink href="/konton">
      Alla konton och kort
      <lfui-icon icon-id="chevron-right" size="24"></lfui-icon>
    </LFQDLink>
  </LFQDBoxFooter>
</LFQDBox>

<style>
  .fancyLink {
    background: var(--lfds-semantic-background-button-tertiary);
    border: 1px solid var(--lfds-semantic-border-on-highlight-primary);
    border-radius: var(--lfds-semantic-sizes-radius-sm);

    text-decoration: none;
    display: grid;
    place-items: center;
    gap: 0.25rem;
    padding: 0.75rem;
    transition: all 0.3s;
    lfui-icon {
      transition: all 0.3s;
    }

    &:hover {
      /* everything is broken */
      /* background: var(--lfds-semantic-background-button-tertiary-hover); */
      background: var(--lfds-primitives-color-blue-250);
      lfui-icon {
        translate: 0 -0.125rem;
      }
    }

    p {
      font-weight: var(--lfds-typography-weight-medium);
    }
  }
</style>
