<script>
  import LFQDPadding from '$lib/components/LFQDPadding.svelte'
  import LFQDBox from '$lib/components/LFQDBox.svelte'
  import LFQDBoxHeader from '$lib/components/LFQDBoxHeader.svelte'

  import löremIpsum from 'loerem'
  import { pipe, prettyNumber, random, times, strToNum } from 'ouml'
  import { bankdata } from '$lib/mockdata.svelte'
  import LFQDSelect from '$lib/components/LFQDSelect.svelte'

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
      pipe(account.titleRight, strToNum, v => v - random(1000), prettyNumber) +
      ' kr'
    close()
  }
</script>

<LFQDBox>
  <LFQDBoxHeader>{heading()}</LFQDBoxHeader>
  <LFQDPadding>
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

    <!-- {#snippet optionContent()}
      <lfui-icon color="currentcolor" icon-id="heart"></lfui-icon>
      <span>Fyran</span>
    {/snippet}

    <LFQDSelect label="LFQD Select är i huset:">
      <option disabled selected>Välj en siffra</option>

      <option>Ettan</option>
      <option>Tvåan</option>
      <option>Trean</option>
      <option>{@render optionContent()}</option>
    </LFQDSelect>
     -->

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
  </LFQDPadding>
</LFQDBox>
