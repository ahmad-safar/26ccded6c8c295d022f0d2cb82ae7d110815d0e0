import styled from 'styled-components'
import tw from 'twin.macro'
import { CardListItem } from './CardListItem'

const Rows = styled.div`
  ${tw`grid md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-5`}
`

type Props = {
  lists: List[]
  addCart: AddCart
}

export const CardList = ({ lists, addCart }: Props) => {
  return (
    <Rows>
      {lists.map((list, index) => (
        <CardListItem key={index} list={list} addCart={addCart}></CardListItem>
      ))}
    </Rows>
  )
}
