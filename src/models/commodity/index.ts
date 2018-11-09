
export const PREFIX = 'commodity'
export interface comDetail {
  name: string,
  title: string,
  category: string,
  price: number,
  description: string,
  image: string,
  largeImage: string
}
export interface ComStatus {
  currentCommodity: comDetail,
  currentShow: boolean
}
export const initialState:ComStatus = {
  currentCommodity: {
    name: "name",
    title: "title",
    category: "category",
    price: 0.00,
    description: "description",
    image: "image",
    largeImage: "largeImage"
  },
  currentShow: false
}
export default {
  namespace: PREFIX,
  state: initialState
}
