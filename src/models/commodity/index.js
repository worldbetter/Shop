export const PREFIX = 'commodity';
export const initialState = {
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
};
export default {
    namespace: PREFIX,
    state: initialState
};
