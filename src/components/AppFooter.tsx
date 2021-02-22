import { Transition } from '@headlessui/react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Footer = styled.footer`
  ${tw`fixed bottom-0 w-full flex`}
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
`
const Div = styled.div`
  ${tw`mx-3 mb-5 px-4 py-2 inline-flex items-center w-full bg-red-700 text-white rounded-lg`}
  h3 {
    ${tw`font-bold`}
  }
`

type Props = {
  carts: Cart[]
}

export const AppFooter = ({ carts }: Props) => {
  return (
    <Transition
      show={carts.length !== 0}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0">
      <Footer>
        <Div>
          <div className="flex-1">
            <h3>{carts.length} Item{carts.length > 1 ? 's' : ''} |
            Rp {carts.reduce((acc, cart) => acc + cart.price, 0).toLocaleString()}</h3>
            <div>Termasuk ongkos kirim</div>
          </div>
          <div className="inline-flex">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path fill="white" d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="white" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
          </div>
        </Div>
      </Footer>
    </Transition>
  )
}
