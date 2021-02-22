import { useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { DateRangeList } from './DateRangeList'
import { Button } from '../styles'
import { useScroll } from '../useScroll'
import Modal from './Modal'

const dummyLocations = [
  {
    title: 'Kulina',
    address: 'Jalan Tulodong'
  },
  {
    title: 'Pancoran Riverside Appartment',
    address: 'Pengadegan'
  },
  {
    title: 'Jalan Tulodong Atas 28',
    address: 'Jalan Tulodong Atas 28, Senayan'
  },
  {
    title: 'Block71 Jakarta',
    address: 'Ariobimo Sentral'
  },
]

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
const StyledModal = styled.div`
  ${tw`bg-white p-4 sm:p-6`}
`
const H3 = styled.h3`
  ${tw`text-xl leading-6 font-medium text-gray-600 pt-8 sm:pt-2`}
`
const Div = styled.div`
${tw`py-2 px-4 border-t border-gray-200`}
`
const ButtonLocation = styled.div`
${tw`px-2 rounded hover:bg-gray-200 cursor-pointer`}
`
const ButtonClose = styled.div`
${tw`text-right float-right focus:outline-none`}
`
const FormInput = styled.div`
  ${tw`mt-4 relative rounded-md shadow-sm`}
  > div {
    ${tw`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none`}
    > span {
      ${tw`text-gray-500 sm:text-sm`}
    }
  }
  input {
    ${tw`focus:ring-red-500 focus:border-red-500 block w-full pl-12 pr-7 sm:text-sm border-gray-300 rounded-md`}
  }
`
const Locations = styled.div`
  ${tw`grid text-gray-600 pl-1 py-5`}
  > div {
    ${tw`flex items-center`}
    > div#location-icon {
      ${tw`rounded-full bg-gray-200 p-1`}
    }
  }
`
const Location = styled.div`
  ${tw`flex-1 ml-4 py-2 border-b`}
  h4 {
    ${tw`text-base font-medium`}
  }
  span {
    ${tw`text-sm text-gray-500`}
  }
`

type Props = {
  dateRanges: DateRange[]
}

export const AppHeader = ({ dateRanges }: Props) => {
  const [selectedRadio, setSelectedRadio] = useState(0)
  const [isOpen, setIsOpen] = useState(true)
  const [isModalShow, setIsModalShow] = useState(false)
  const [isLocationShow, setIsLocationShow] = useState(false)
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
        <ButtonLocation onClick={() => setIsModalShow(true)}>
          <Span>ALAMAT PENGANTARAN</Span>
          <H1>Tokopedia Tower
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" fill="red" />
            </svg>
          </H1>
        </ButtonLocation>
        <Modal isOpen={isModalShow}>
          <StyledModal>
            <ButtonClose onClick={() => {
              setIsModalShow(false)
              setIsLocationShow(false)
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </ButtonClose>

            <H3>
              Cek makanan yang tersedia di lokasi kamu!
            </H3>
            <FormInput>
              <div>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                      fill="#f9423a" />
                  </svg>
                </span>
              </div>
              <input type="text"
                placeholder="Masukkan alamat kamu"
                onChange={(e) => {
                  if (e.target.value.length >= 3) {
                    setIsLocationShow(true)
                  } else {
                    setIsLocationShow(false)
                  }
                }}
              />
            </FormInput>
            <Locations>
              {isLocationShow ? dummyLocations.map((location, index) => (
                <div key={index}>
                  <div id="location-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                        fill="gray" />
                    </svg>
                  </div>
                  <Location>
                    <h4>{location.title}</h4>
                    <span>{location.address}</span>
                  </Location>
                </div>
              )) : null}
            </Locations>
          </StyledModal>
        </Modal>
      </NavbarDiv>

      <DateRangeList dateRanges={dateRanges} />
      <Transition
        show={isOpen}
        enter="transition-opacity duration-150"
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
