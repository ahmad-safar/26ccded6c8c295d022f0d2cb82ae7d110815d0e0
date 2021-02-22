import { FunctionComponent, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { Transition } from '@headlessui/react'
import styled from 'styled-components'
import tw from 'twin.macro'

const modalElement = document.getElementById('modal-root')!

type Props = {
  isOpen: boolean
}

const StyledModal = styled.div`
  ${tw`fixed z-10 inset-0 overflow-y-auto`}
  > div {
    ${tw`flex items-end justify-center min-h-screen pt-4 pb-20 text-center sm:block sm:p-0`}
    > div:nth-child(1) {
      ${tw`fixed inset-0 transition-opacity`}
      > div {
        ${tw`absolute inset-0 bg-gray-500 opacity-75`}
      }
    }
    > span {
      ${tw`hidden sm:inline-block sm:align-middle sm:h-screen`}
    }
    > div[role="dialog"] {
      ${tw`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl
      transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full`}
    }
  }
`

const Modal: FunctionComponent<Props> = ({ isOpen, children }) => {
  return createPortal(
    <Transition
      show={isOpen}
      enter="transition-opacity duration-150"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0">
      <StyledModal>
        <div>
          <div aria-hidden="true">
            <div></div>
          </div>
          <span aria-hidden="true">&#8203;</span>
          <div role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            {children}
          </div>
        </div>
      </StyledModal>
    </Transition>
    , modalElement)
}
export default Modal
