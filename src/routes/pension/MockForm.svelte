<script>
  import LFQDPadding from '$lib/components/LFQDPadding.svelte'
  import LFQDBox from '$lib/components/LFQDBox.svelte'
  import LFQDSectionHeader from '$lib/components/LFQDSectionHeader.svelte'

  import löremIpsum from 'loerem'
  import { pipe, prettyNumber, random, times } from 'ouml'
  import { bankdata } from '$lib/mockdata.svelte'
  import { parseToNumber } from '$lib/utils.svelte'

  let { close, buttontext = 'Skicka' } = $props()

  const heading = () =>
    löremIpsum({
      isHeadline: true,
      useLörem: false,
      sentencesPerParagraph: 1,
      maxSentenceLength: 4,
    })

  const q = () =>
    löremIpsum({
      isHeadline: true,
      useLörem: false,
      sentencesPerParagraph: 1,
      maxSentenceLength: 4,
      punchline: 'Är du drabbad',
    })
  const helptext = () =>
    löremIpsum({
      useLörem: false,
      sentencesPerParagraph: 1,
      maxSentenceLength: 8,
    })

  const stealRandomAmount = () => {
    let account = bankdata.find(({ titleLeft }) => titleLeft == 'Lönekonto')
    account.titleRight =
      pipe(
        account.titleRight,
        parseToNumber,
        v => v - random(1000),
        prettyNumber,
      ) + ' kr'
    close()
  }
</script>

<LFQDSectionHeader size="medium" padding={false}>{heading()}</LFQDSectionHeader>
<div>
  {#each times(random(1, 6))}
    <lfui-form-input label="{q()}?" help-text={helptext()}></lfui-form-input>
  {/each}

  <form style="display: grid; width: 100%;">
    <p>
      {q()}?
    </p>
    {#each times(random(1, 6))}
      <lfui-form-checkbox label={heading()}> </lfui-form-checkbox>
    {/each}
  </form>
</div>

{#if buttontext}
  <lfui-button
    type="button"
    onclick={stealRandomAmount}
    tabindex="0"
    role="link"
    onkeydown={e => e.key == 'Enter' && stealRandomAmount()}
  >
    {buttontext}
  </lfui-button>{/if}

<style>
  div {
    display: grid;
    gap: 1rem;
    padding: 1rem 0 0 0;
  }
</style>
