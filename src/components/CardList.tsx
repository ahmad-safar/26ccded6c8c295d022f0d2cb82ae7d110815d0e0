import styled from 'styled-components'
import tw from 'twin.macro'
import { CardListItem } from './CardListItem'

const Rows = styled.div`
  ${tw`grid sm:grid-cols-5 gap-5`}
`

type Props = {
  lists: List[]
}

export const CardList = ({ lists }: Props) => {
  return (
    <Rows>
      {lists.map((list, index) => (
        <CardListItem key={index} list={list}></CardListItem>
      ))}
    </Rows>
  )
}
