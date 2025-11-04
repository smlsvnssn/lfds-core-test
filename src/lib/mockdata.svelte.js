import { Enum } from 'ouml'

export let bankdata = $state([
  {
    titleLeft: 'Lönekonto',
    subtitleLeft: '9022.01.21.66',
    titleRight: '13 649 kr',
    icon: 'atv',
  },
  {
    titleLeft: 'Sparkonto',
    subtitleLeft: '9022.01.21.99',
    titleRight: '85 912 kr',
    icon: 'bulb',
  },
  {
    titleLeft: 'Din mammas konto',
    subtitleLeft: '9022.01.21.33',
    titleRight: '46 119 kr',
    icon: 'savings',
  },
  {
    titleLeft: 'Din pappas kreditkort',
    subtitleLeft: '1234 5436 8573 4953',
    titleRight: '-32 901 kr',
    subtitleRight: 'Att spendera: 17 099 kr ',
    icon: 'card',
  },
])

export let pensionsdata = $state([
  {
    titleLeft: 'Individuellt pensionssparande',
    titleRight: '628 878 kr',
    icon: 'savings',
  },
  {
    titleLeft: 'Deloitte AB Tjänstepensionsplan',
    subtitleLeft: '100001008043',
    titleRight: '185 912 kr',
    icon: 'pension',
  },
  {
    titleLeft: 'Eget pensionssparande',
    subtitleLeft: '00263163',
    titleRight: '102 477 kr',
    icon: 'pension',
  },
])

export let försäkringsdata = $state([
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
])

export const topicList = Enum({
  start: Symbol('start'),
  möte: Symbol('möte'),
  dokument: Symbol('dokument'),
  bank: Symbol('bank'),
  försäkring: Symbol('försäkring'),
  pension: Symbol('pension'),
})

export const todos = $state([
  {
    type: 'todo',
    topics: [topicList.start],
    titleLeft: 'Du har en offert att ta ställning till',
    subtitleLeft: 'Hemförsäkring och fordonsförsäkring',
    sheetData: { title: 'Offert'},
    delay: 1000,
    callback: todo => {
      todo.state = 'inactive'
      todo.iconId = 'check-enclosed'
    },
    iconId: 'contract',
    state: 'active',
  },
  {
    type: 'todo',
    topics: [topicList.möte, topicList.start],
    titleLeft: 'Du har ett digitalt möte om 12 minuter',
    subtitleLeft: 'Anslut till mötet',
    sheetData: { title: 'Detaljer om ditt möte', content: 'möte' },
    delay: 1000,
    callback: todo => {
      todo.state = 'inactive'
      todo.iconId = 'check-enclosed'
    },
    iconId: 'calendar',
    state: 'active',
  },
  {
    type: 'todo',
    topics: [topicList.bank, topicList.start],
    titleLeft: 'Du har nya e-fakturor',
    sheetData: { title: 'Nya e-fakturor', content: 'efakturor' },
    callback: todo => {
      todo.state = 'inactive'
      todo.iconId = 'check-enclosed'
    },
    iconId: 'calendar',
    state: 'active',
    badge: 3,
  },
  {
    type: 'todo',
    topics: [topicList.försäkring, topicList.dokument],
    titleLeft: 'Du har ett nytt dokument',
    subtitleLeft: 'Försäkringsavtal Villahemförsäkring',
    sheetData: {
      title: 'Försäkringsavtal Villahemförsäkring',
      size: 'medium',
      content: 'dok',
    },
    iconId: 'calendar',
    delay: 1000,
    callback: todo => {
      todo.state = 'inactive'
      todo.iconId = 'check-enclosed'
    },
    state: 'active',
    badge: 1,
    badgeType: 'secondary',
  },
  {
    type: 'process',
    topics: [topicList.försäkring, topicList.start],
    titleLeft: 'Ditt skadeärende',
    subtitleLeft: 'Komplettera med uppgifter',
    titleRight: 'Pågående',
    sheetData: {
      title: 'Din skada',
      size: 'medium',
      content: 'skada',
    },
    state: 'active',
    percentCompleted: 33,
    callback: todo => {
      todo.subtitleLeft = 'Vi tittar på din komplettering'
      todo.state = 'success'
      todo.percentCompleted = 66
    },
  },
  {
    type: 'todo',
    topics: [topicList.pension],
    titleLeft: 'Vill du ändra villkor till Nya Trad?',
    subtitleLeft: 'Det betyder i korthet x, y, och Ω.',
    sheetData: {
      title: 'Ändra villkor till Nya Trad',
      size: 'medium',
    },
    iconId: 'pension',
    delay: 1000,
    callback: todo => {
      todo.state = 'inactive'
      todo.iconId = 'check-enclosed'
    },
    state: 'active',
  },
  {
    type: 'todo',
    topics: [topicList.pension],
    titleLeft: 'Gör en genomgång av din tjänstepension',
    subtitleLeft: 'Är din pension bra placerad? Kolla!',
    sheetData: {
      title: 'Genomgång av din tjänstepension',
      size: 'medium',
    },
    iconId: 'pension',
    delay: 1000,
    callback: todo => {
      todo.state = 'inactive'
      todo.iconId = 'check-enclosed'
    },
    state: 'active',
  },
])
