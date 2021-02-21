import styled from "styled-components"
import tw from "twin.macro"

type BProps = {
  hover?: boolean,
  back?: boolean,
  dtRange?: boolean,
  rounded?: boolean,
  roundedFull?: boolean
}

export const Button = styled.button<BProps>`
  ${tw`border border-transparent
  text-xs font-medium rounded-full hover:text-white hover:bg-gray-700
  focus:outline-none disabled:text-black disabled:bg-white disabled:opacity-50`}

  ${props => props.rounded && tw`rounded`}
  ${props => props.roundedFull && tw`rounded-full`}
  ${props => props.hover && tw`text-white bg-gray-700`}
  ${props => props.dtRange && tw`w-11 h-11`}
  ${props => props.back && tw`p-2 mr-2`}
  ${props => props.back && `
    path {
      fill: black
    }  
    &:hover {
      path {
        fill: white
      }
    }
  `}
`
