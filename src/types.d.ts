type DateRange = {
    ddd: string
    DD: string
}

type List = {
    title: string
    img: string
}

type Cart = {
    price: number
}

type setClicked = (clicked: boolean) => void
type AddCart = (price: number) => void
