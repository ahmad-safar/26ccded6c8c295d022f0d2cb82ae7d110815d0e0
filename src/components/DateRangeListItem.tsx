
import { Button } from '../styles'

type Props = {
  dateRange: DateRange,
  index: number,
}

export const DateRangeListItem = ({ dateRange, index }: Props) => {
  return (
    <Button roundedFull dtRange
      hover={index === 0}
      disabled={dateRange.ddd === 'Sat' || dateRange.ddd === 'Sun'}>
      <div>{dateRange.ddd}</div>
      <div>{dateRange.DD}</div>
    </Button >
  )
}
