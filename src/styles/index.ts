import styled from 'styled-components'
import tw from 'twin.macro'

type BProps = {
  hover?: boolean
  back?: boolean
  dtRange?: boolean
  roundedFull?: boolean
  radioLeft?: boolean
  cardAdd?: boolean
  radioRight?: boolean
}

export const Button = styled.button<BProps>`
  ${tw`border border-transparent
  text-xs font-medium rounded-full hover:text-white hover:bg-gray-700
  focus:outline-none disabled:text-black disabled:bg-white disabled:opacity-50`}

  ${props => props.cardAdd && tw`inline-flex text-base items-center rounded font-bold px-4 py-1.5 text-white bg-red-500 hover:bg-red-600`}
  ${props => props.radioLeft && tw`border border-gray-300 hover:border-gray-700 rounded rounded-r-none py-2 w-1/2`}
  ${props => props.radioRight && tw`border border-gray-300 hover:border-gray-700 rounded rounded-l-none py-2 w-1/2`}
  ${props => props.roundedFull && tw`rounded-full`}
  ${props => props.hover && tw`text-white bg-gray-700 border-gray-700`}
  ${props => props.dtRange && tw`w-11 h-11`}
  ${props => props.back && tw`p-2 mr-2`}
  ${props => props.back && `
    path {
      --tw-text-opacity: 1;
      fill: rgba(75,85,99,var(--tw-text-opacity));
    }  
    &:hover {
      path {
        fill: white;
      }
    }
  `}
`
