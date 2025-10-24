<script>
  import LFQDPadding from '$lib/components/LFQDPadding.svelte'
  import LFQDBox from '$lib/components/LFQDBox.svelte'
  import LFQDBoxHeader from '$lib/components/LFQDBoxHeader.svelte'

  import löremIpsum from 'loerem'
  import { random, times } from 'ouml'

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

    <lfui-button
      type="button"
      onclick={close}
      tabindex="0"
      role="link"
      onkeydown={e => e.key == 'Enter' && close()}
    >
      {buttontext}
    </lfui-button>
  </LFQDPadding>
</LFQDBox>
