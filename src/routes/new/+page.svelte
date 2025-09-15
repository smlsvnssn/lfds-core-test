<script>
  import LFQD_Box from './LFQD_Box.svelte'
  import LFQD_BoxHeader from './LFQD_BoxHeader.svelte'

  import LFQD_Row from './LFQD_Row.svelte'

  import '@lansforsakringar/core-components'
  import '@lansforsakringar/core-components/index.css'

  let sheetIsOpen = $state(false)
  let activeTitle = $state('')
  let activeText = $state('')

  const toggle = () => (sheetIsOpen = !sheetIsOpen)

  const renderSheet = data => {
    activeTitle = data.titleLeft
    activeText = data.subtitleLeft
    toggle()
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
</LFQD_Box>

<LFQD_Box>
  <LFQD_BoxHeader>Mina försäkringar</LFQD_BoxHeader>
  {#each försäkringsdata as item}
    <LFQD_Row {...item} onclick={() => renderSheet(item)} />
  {/each}
</LFQD_Box>

<lfui-dialog-side-sheet
  size=""
  open={sheetIsOpen}
  height=""
  heading={activeTitle}
>
  {activeText}
</lfui-dialog-side-sheet>

<style>
</style>
