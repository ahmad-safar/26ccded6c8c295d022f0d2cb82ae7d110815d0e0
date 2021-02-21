import { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { DateRangeListItem } from './DateRangeListItem'

type Props = {
  dateRanges: DateRange[]
}

const Div = styled.div.attrs({ className: 'prose lg:prose-xl' })`
  ${tw`block mt-4 overflow-x-scroll grid grid-flow-col auto-cols-max gap-1`}
`

export const DateRangeList = ({ dateRanges }: Props) => {
  return (
    <Div>
      {dateRanges.map((dateRange, index) => (
        <DateRangeListItem key={dateRange.DD} dateRange={dateRange} index={index} />
      ))}
    </Div>
  )
}
