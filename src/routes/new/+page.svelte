<script>
  import Sheet from './Sheet.svelte'

  import LFQD_Padding from './LFQD_Padding.svelte'
  import LFQD_Box from './LFQD_Box.svelte'
  import LFQD_BoxHeader from './LFQD_BoxHeader.svelte'
  import LFQD_BoxFooter from './LFQD_BoxFooter.svelte'
  import LFQD_Row from './LFQD_Row.svelte'
  import LFQD_Link from './LFQD_Link.svelte'

  import lörem from 'loerem'
  import * as ö from 'ouml'

  import bubbel from './bubbel.svg'

  import { pushState } from '$app/navigation'
  import { page } from '$app/state'

  const closeSheet = () => {
    pushState(``, {
      sheetIsOpen: false,
    })
  }

  const renderSheet = data => {
    pushState(``, {
      sheetIsOpen: true,
      sheetData: {
        title: data?.titleLeft,
        text: lörem({ numberOfParagraphs: 2, sentencesPerParagraph: 4 }),
        dummy: getDummy(),
      },
    })
  }

  const getDummy = () =>
    ö.times(ö.random(4) + 1, () => ({
      titleLeft: lörem({ isName: true }),
      subtitleLeft: ö.randomChars(),
      titleRight: ö.prettyNumber(Math.abs(ö.randomNormal(0, 50000))) + ' kr',
      icon: 'user',
    }))

  const renderBubbel = () => {
    pushState('', {
      sheetIsOpen: true,
      sheetData: { title: 'Varsågod!', bubbel },
    })
  }

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

  <LFQD_BoxFooter padEnd="true">
    <LFQD_Link href="#">
      <lfui-icon icon-id="coins" size="24"></lfui-icon>
      Fyll konto
    </LFQD_Link>

    <LFQD_Link href="#">
      <lfui-icon icon-id="wallet" size="24"></lfui-icon>
      Töm konto
    </LFQD_Link>
  </LFQD_BoxFooter>
</LFQD_Box>

<LFQD_Box>
  <LFQD_BoxHeader>Mina försäkringar</LFQD_BoxHeader>

  {#each försäkringsdata as item}
    <LFQD_Row {...item} onclick={() => renderSheet(item)} />
  {/each}

  <LFQD_BoxFooter>
    <LFQD_Link href="#">
      Alla försäkringar
      <lfui-icon icon-id="chevron-right" size="24"></lfui-icon>
    </LFQD_Link>
  </LFQD_BoxFooter>
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

<Sheet state={page.state} render={renderSheet} close={closeSheet}></Sheet>
