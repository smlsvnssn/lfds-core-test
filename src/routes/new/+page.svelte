<script>
  import Sheet from './Sheet.svelte'

  import LFQDPadding from '$lib/LFQDPadding.svelte'
  import LFQDBox from '$lib/LFQDBox.svelte'
  import LFQDBoxHeader from '$lib/LFQDBoxHeader.svelte'
  import LFQDBoxFooter from '$lib/LFQDBoxFooter.svelte'
  import LFQDRow from '$lib/LFQDRow.svelte'
  import LFQDLink from '$lib/LFQDLink.svelte'

  import lörem from 'loerem'
  import * as ö from 'ouml'

  import bubbel from './bubbel.svg'

  import { pushState } from '$app/navigation'
  import { page } from '$app/state'
  import LFQDLayout from '$lib/LFQDLayout.svelte'

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
        dummy: ö.times(ö.random(4) + 1, () => ({
          titleLeft: lörem({ isName: true }),
          subtitleLeft: ö.randomChars(),
          titleRight:
            ö.prettyNumber(Math.abs(ö.randomNormal(0, 50000))) + ' kr',
          icon: 'user',
        })),
      },
    })
  }

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

<LFQDLayout>
  <LFQDBox>
    <LFQDBoxHeader>Mina konton</LFQDBoxHeader>

    {#each bankdata as item}
      <LFQDRow {...item} onclick={() => renderSheet(item)} />
    {/each}

    <LFQDBoxFooter padEnd="true">
      <LFQDLink href="#">
        <lfui-icon icon-id="coins" size="24"></lfui-icon>
        Fyll konto
      </LFQDLink>

      <LFQDLink href="#">
        <lfui-icon icon-id="wallet" size="24"></lfui-icon>
        Töm konto
      </LFQDLink>
    </LFQDBoxFooter>
  </LFQDBox>

  <LFQDBox>
    <LFQDBoxHeader>Mina försäkringar</LFQDBoxHeader>

    {#each försäkringsdata as item}
      <LFQDRow {...item} onclick={() => renderSheet(item)} />
    {/each}

    <LFQDBoxFooter>
      <LFQDLink href="#">
        Alla försäkringar
        <lfui-icon icon-id="chevron-right" size="24"></lfui-icon>
      </LFQDLink>
    </LFQDBoxFooter>
  </LFQDBox>

  <LFQDBox>
    <LFQDBoxHeader>Mina uppgifter</LFQDBoxHeader>
    <LFQDPadding>
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
    </LFQDPadding>
  </LFQDBox>
</LFQDLayout>

<Sheet state={page.state} render={renderSheet} close={closeSheet}></Sheet>
