import { useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { DateRangeList } from './DateRangeList'
import { Button } from '../styles'
import { useScroll } from '../useScroll'

const Header = styled.header`
  ${tw`pt-2 fixed w-full bg-white shadow text-gray-600`}
`
const NavbarDiv = styled.div`
  ${tw`px-1 flex inline-flex`}
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
const Div = styled.div`
${tw`py-2 px-4 border-t border-gray-200`}
`
const ButtonLocation = styled.div`
${tw`px-2 rounded hover:bg-gray-200 cursor-pointer`}
`

type Props = {
  dateRanges: DateRange[]
}

export const AppHeader = ({ dateRanges }: Props) => {
  const [selectedRadio, setSelectedRadio] = useState(0)
  const [isOpen, setIsOpen] = useState(true)
  const { scrollDirection } = useScroll()

  useEffect(() => {
    setIsOpen(scrollDirection === 'up' ? false : true)
  }, [scrollDirection])

  return (
    <Header>
      <NavbarDiv>
        <Button roundedFull back>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
        </Button>
        <ButtonLocation>
          <Span>ALAMAT PENGANTARAN</Span>
          <H1>Tokopedia Tower
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" fill="red" />
            </svg>
          </H1>
        </ButtonLocation>
      </NavbarDiv>

      <DateRangeList dateRanges={dateRanges} />
      <Transition
        show={isOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0">
        <Div>
          <Button radioLeft hover={selectedRadio === 0} onClick={() => setSelectedRadio(0)}>Lunch</Button>
          <Button radioRight hover={selectedRadio === 1} onClick={() => setSelectedRadio(1)}>Dinner</Button>
        </Div>
      </Transition>

    </Header>
  )
}
