<script>
  import LFQD_Padding from '$lib/LFQD_Padding.svelte'
  import LFQD_Box from '$lib/LFQD_Box.svelte'

  let sheetIsOpen = $state(false)

  const openSheet = () => (sheetIsOpen = true)
  const closeSheet = () => (sheetIsOpen = false)
</script>

<LFQD_Box>
  <LFQD_Padding>
    <lfui-typography-heading level="h1"
      >LF:s Designade Småbitar (LFDS)</lfui-typography-heading
    >

    <lfui-typography-heading level="h1">H1</lfui-typography-heading>
    <lfui-typography-heading level="h2">H2</lfui-typography-heading>
    <lfui-typography-heading level="h3">H3</lfui-typography-heading>
    <lfui-typography-heading level="h4">H4</lfui-typography-heading>

    <div style="display: flex; gap: 2rem; align-items: center;">
      <lfui-icon icon-id="placeholder" size="40"></lfui-icon>
      <lfui-icon icon-id="arrow-right" size="32"></lfui-icon>
      <lfui-icon icon-id="payment-mc" size="48"></lfui-icon>
    </div>

    <lfui-button-shortcut
      href="/new"
      label="Hemförsäkring"
      description="XXXXXXXX-XXXX"
      icon-id="house"
    ></lfui-button-shortcut>

    <form style="display: grid; grid: auto-flow / 1fr 1fr; wrap; gap: 1.5rem;">
      <lfui-form-radio-card
        name="animal"
        icon-id="horse"
        checked
        id="example-radio-card"
        label="Häst"
        description="Vår bästa vän"
      >
      </lfui-form-radio-card>

      <lfui-form-radio-card
        name="animal"
        icon-id="dog"
        id="example-radio-card"
        label="Hund"
        description="Vår näst bästa vän"
      >
      </lfui-form-radio-card>

      <lfui-form-radio-card
        name="animal"
        icon-id="cat"
        id="example-radio-card"
        label="Lejon"
        description="Vår tertiära bästa vän"
      >
      </lfui-form-radio-card>

      <lfui-form-radio-card
        name="animal"
        icon-id="fish"
        id="example-radio-card"
        label="Lax"
        description="Också en bra vän"
      >
        Vad händer här?
      </lfui-form-radio-card>

      <lfui-form-radio-card
        name="animal"
        icon-id="chicken"
        id="example-radio-card"
        label="Höna"
        description="Medioker som vän betraktad"
      >
      </lfui-form-radio-card>

      <lfui-form-radio-card
        name="animal"
        icon-id="cow"
        id="example-radio-card"
        label="Ko"
        description="Ett helt ok djur"
      >
      </lfui-form-radio-card>
    </form>

    <lfui-form-checkbox-card
      icon-id="sustainability"
      id="checkbox-card-1"
      label="Hållbarhet"
      description="För framtiden"
    ></lfui-form-checkbox-card>

    <form style="display: grid; width: 100%;">
      <lfui-form-checkbox id="demo-example-checkbox-1" label="Stockholm">
      </lfui-form-checkbox>
      <lfui-form-checkbox id="demo-example-checkbox-2" label="Göteborg">
      </lfui-form-checkbox>
      <lfui-form-checkbox id="demo-example-checkbox-2" label="Borås">
      </lfui-form-checkbox>
    </form>

    <form style="display: grid; width: 100%; ">
      <lfui-form-radio name="betalsatt" checked id="example" label="E-faktura"
      ></lfui-form-radio>

      <lfui-form-radio name="betalsatt" id="example" label="Autogiro"
      ></lfui-form-radio>
    </form>

    <lfui-form-input
      label="Personnummer"
      type="number"
      help-text="12 siffror (ÅÅÅÅMMDDNNNN)"
    ></lfui-form-input>

    <lfui-form-input
      label="Vilken är din favoritkändis?"
      help-text="Det kan vara en nu levande eller död kändis, det spelar ingen roll."
    ></lfui-form-input>

    <lfui-button type="button" onclick={openSheet}> Open Side Sheet </lfui-button>

    <lfui-button type="button" variant="secondary" onclick={openSheet}>
      Open Side Sheet
    </lfui-button>

    <lfui-button type="button" variant="tertiary" onclick={openSheet}>
      Open Side Sheet
      <lfui-spinner slot="trailing" color="currentcolor" size="20"
      ></lfui-spinner>
    </lfui-button>

    <lfui-dialog-side-sheet
      size=""
      open={sheetIsOpen}
      onclose={closeSheet}
      height=""
      heading="Side sheet header"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </lfui-dialog-side-sheet>

    <lfui-notification-alert heading="Optional title.">
      Provide users with non-disruptive feedback. <lfui-button
        slot="button"
        variant="secondary"
        size="small">Button</lfui-button
      >
    </lfui-notification-alert>
  </LFQD_Padding>
</LFQD_Box>
