import styled from 'styled-components'
import tw from 'twin.macro'
import { Button } from '../styles'

const Img = styled.img`
  ${tw`h-56 w-full rounded-t`}
  object-fit: cover;
`
const Card = styled.div`
  ${tw`bg-white shadow overflow-hidden rounded-md sm:rounded-lg`}
`
const CardDesc = styled.div`
  ${tw`p-4 sm:px-6 border-t border-gray-200`}
  h3 {
    ${tw`text-lg leading-6 font-medium`}
  }
  p {
    ${tw`max-w-2xl text-sm text-gray-500`}
  }
  span {
    ${tw`font-bold mr-1`}
  }
`
const Star = styled.span`
  ${tw`text-red-500`}
`
const Flex = styled.div`
  ${tw`flex pt-4`}
  h3 {
    ${tw`flex-1`}
  }
`
const AddIcon = styled.div`
  ${tw`ml-1`}
`

type Props = {
  list: List
  addCart: AddCart
}

export const CardListItem = ({ list, addCart }: Props) => {
  return (
    <Card>
      <div>
        <Img alt="" src={list.img} />
      </div>
      <CardDesc>
        <p>
          <span>4.0</span>
          <Star>&#9733;&#9733;&#9733;&#9733;&#9734;</Star>
        </p>
        <h3>
          {list.title}
        </h3>
        <p>
          By Kulina ・ Uptown Lunch
        </p>
        <Flex>
          <h3>
            Rp 35,000
          </h3>
          <Button cardAdd onClick={() => addCart(35000)}>
            <div>ADD</div>
            <AddIcon>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="20">
                <path d="M0 0h24v24H0z" fill="none" /><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="white" />
              </svg>
            </AddIcon>
          </Button>
        </Flex>
      </CardDesc>
    </Card>
  )
}
