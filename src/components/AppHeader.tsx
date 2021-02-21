import styled from 'styled-components'
import tw from 'twin.macro'
import { DateRangeList } from './DateRangeList'
import { Button } from '../styles'

const Header = styled.header`
  ${tw`px-2 py-2`}
`
const NavbarDiv = styled.div`
  ${tw`flex inline-flex`}
`
const Span = styled.span`
  ${tw`text-xs`}
`
const H1 = styled.h1`
  ${tw`font-bold text-lg`}
  svg {
    display: inline
  }
`

type Props = {
  dateRanges: DateRange[]
}

export const AppHeader = ({ dateRanges }: Props) => {

  return (
    <Header>
      <NavbarDiv>
        <Button roundedFull back>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
        </Button>
        <div>
          <Span>ALAMAT PENGANTARAN</Span>
          <H1>Tokopedia Tower
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" fill="red" />
            </svg>
          </H1>
        </div>
      </NavbarDiv>
      <DateRangeList dateRanges={dateRanges} />
    </Header>
  )
}