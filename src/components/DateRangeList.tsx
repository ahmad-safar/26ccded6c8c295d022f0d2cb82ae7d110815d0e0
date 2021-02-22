import styled from 'styled-components'
import tw from 'twin.macro'
import { DateRangeListItem } from './DateRangeListItem'

type Props = {
  dateRanges: DateRange[]
}

const Div = styled.div.attrs({ className: 'prose lg:prose-xl' })`
  ${tw`block w-full mt-4 px-2 pb-2 overflow-x-scroll grid grid-flow-col auto-cols-max gap-1`}
`

export const DateRangeList = ({ dateRanges }: Props) => {
  return (
    <Div>
      {dateRanges.map((dateRange, index) => (
        <DateRangeListItem key={index} dateRange={dateRange} index={index} />
      ))}
    </Div>
  )
}
