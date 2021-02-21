import { AppHeader } from './components/AppHeader'
import Moment from 'moment'
import { extendMoment } from 'moment-range'
const moment = extendMoment(Moment as any)

const dateRanges = (): DateRange[] => {
  const range = moment.range(moment().add(1, 'days'), moment().add(14, 'days'))

  return Array.from(range.by('day')).map(x => {
    return {
      ddd: x.format('ddd'),
      DD: x.format('DD')
    }
  })
}

function App () {
  return (
    <AppHeader dateRanges={dateRanges()}></AppHeader>
  )
}

export default App
