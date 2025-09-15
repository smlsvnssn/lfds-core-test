<script>
  import LFQD_Padding from './LFQD_Padding.svelte'
  import LFQD_Box from './LFQD_Box.svelte'
  import LFQD_BoxHeader from './LFQD_BoxHeader.svelte'
  import LFQD_Row from './LFQD_Row.svelte'

  import lörem from 'loerem'
  import * as ö from 'ouml'

  import '@lansforsakringar/core-components'
  import '@lansforsakringar/core-components/index.css'

  import bubbel from './bubbel.svg'

  let sheetIsOpen = $state(false)
  let activeData = $state({})

  const closeSheet = () => (sheetIsOpen = false)

  const renderSheet = data => {
    activeData = {
      title: data.titleLeft,
      text: lörem({ numberOfParagraphs: 2, sentencesPerParagraph: 4 }),
      funky: getFunky(),
    }
    sheetIsOpen = true
  }

  const getFunky = () =>
    ö.times(ö.random(4) + 1, () => ({
      titleLeft: lörem({ isName: true }),
      subtitleLeft: ö.randomChars(),
      titleRight: ö.prettyNumber(Math.abs(ö.randomNormal(0, 50000))) + ' kr',
      icon: 'user',
    }))

  const renderBubbel = () => {
    activeData = { title: 'Varsågod!', bubbel }
    sheetIsOpen = true
  }

  $inspect(activeData)

  let bankdata = [
    {
      titleLeft: 'Lönekonto',
      subtitleLeft: '9022.01.21.66',
      titleRight: '13 649 kr',
      icon: 'atv',
    },
    {
      titleLeft: 'Bönekonto',
      subtitleLeft: '9022.01.21.99',
      titleRight: '2 912 kr',
      icon: 'bulb',
    },
    {
      titleLeft: 'Din mammas konto',
      subtitleLeft: '9022.01.21.33',
      titleRight: '461 kr',
      icon: 'pregnant',
    },
    {
      titleLeft: 'Din pappas kreditkort',
      subtitleLeft: '6666 6666 6666 6666',
      titleRight: '-32 901 kr',
      subtitleRight: 'Kvar att spendera: 17 099 kr ',
      icon: 'card',
    },
  ]

  let försäkringsdata = [
    {
      titleLeft: 'Villahemförsäkring',
      subtitleLeft: 'Trumpeten 11',
      titleRight: 'Betald 25 09 01',
      subtitleRight: '419 kr/mån',
      icon: 'house',
    },
    {
      titleLeft: 'Personbil',
      subtitleLeft: 'XXX 666',
      titleRight: 'Obetald',
      subtitleRight: '365 kr/mån',
      icon: 'car',
    },
    {
      titleLeft: 'Kattförsäkring',
      subtitleLeft: 'Solveig',
      subtitleRight: '212 kr/mån',
      icon: 'dog',
    },
    {
      titleLeft: 'Barnförsäkring',
      subtitleLeft: 'Karl Karlsson, 6 år',
      subtitleRight: '315 kr/mån',
      icon: 'baby',
    },
  ]
</script>

<LFQD_Box>
  <LFQD_BoxHeader>Mina konton</LFQD_BoxHeader>
  {#each bankdata as item}
    <LFQD_Row {...item} onclick={() => renderSheet(item)} />
  {/each}
</LFQD_Box>

<LFQD_Box>
  <LFQD_BoxHeader>Mina försäkringar</LFQD_BoxHeader>
  {#each försäkringsdata as item}
    <LFQD_Row {...item} onclick={() => renderSheet(item)} />
  {/each}
</LFQD_Box>

<LFQD_Box>
  <LFQD_BoxHeader>Mina uppgifter</LFQD_BoxHeader>
  <LFQD_Padding>
    <lfui-form-input
      label="Personnummer"
      type="number"
      help-text="12 siffror (ÅÅÅÅMMDDNNNN)"
    ></lfui-form-input>

    <lfui-form-input
      label="Vilken är din favoritkändis?"
      help-text="Det kan vara en nu levande eller död kändis, det spelar ingen roll."
    ></lfui-form-input>

    <lfui-form-input label="Vilket formulärelement saknar du mest i LFDS?"
    ></lfui-form-input>

    <form style="display: grid; width: 100%;">
      <p>
        Älskar du att checkboxar ligger ovanpå varandra istället för bredvid?
      </p>
      <lfui-form-checkbox id="demo-example-checkbox-1" label="Ja">
      </lfui-form-checkbox>
      <lfui-form-checkbox id="demo-example-checkbox-2" label="Nej">
      </lfui-form-checkbox>
      <lfui-form-checkbox id="demo-example-checkbox-2" label="Kanske">
      </lfui-form-checkbox>
    </form>

    <lfui-button type="button" onclick={() => renderBubbel()}>
      Fyll mitt glas med bubbel
    </lfui-button>
  </LFQD_Padding>
</LFQD_Box>

<lfui-dialog-side-sheet
  size=""
  open={sheetIsOpen}
  onclose={closeSheet}
  height=""
  heading={activeData?.title}
>
  <div style="width:100%; display:grid; place-items:center; margin-top: 3rem">
    <img src={activeData?.bubbel} alt="" /> 
  </div>

  <LFQD_Box>
    {#each activeData?.funky as item}
      <LFQD_Row {...item} onclick={() => renderSheet(item)} />
    {/each}
  </LFQD_Box>

  <div class="spacer"></div>

  {#if activeData.text}
    <LFQD_Box>
      <LFQD_Padding>
        {@html activeData.text}
      </LFQD_Padding>
    </LFQD_Box>
  {/if}
</lfui-dialog-side-sheet>

<style>
  .spacer {
    height: 1.5rem;
  }
</style>
