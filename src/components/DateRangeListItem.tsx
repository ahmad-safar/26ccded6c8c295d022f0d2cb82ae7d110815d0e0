
import styled from 'styled-components'
import tw from 'twin.macro'
import { Button } from '../styles'

type Props = {
  dateRange: DateRange,
  index: number,
}

const Div1 = styled.div`
  ${tw`font-normal`}
`
const Div2 = styled.div`
  ${tw`font-bold`}
`

export const DateRangeListItem = ({ dateRange, index }: Props) => {
  return (
    <Button roundedFull dtRange
      hover={index === 0}
      disabled={dateRange.ddd === 'Sat' || dateRange.ddd === 'Sun'}>
      <Div1>{dateRange.ddd}</Div1>
      <Div2>{dateRange.DD}</Div2>
    </Button >
  )
}
