import { product } from "../data";

export const state = () => ({
    products: product,
    cartItems: []
});

export const mutations = {
    add(state, item){
        const productExist = state.cartItems.findIndex(pdt => pdt.id === item.id);
        if(productExist < 0){
           return state.cartItems.push({...item, quantity: 1});
        }
        const updateProduct = {...state.cartItems[productExist]};
        const updatedProduct = {...updateProduct, quantity: updateProduct.quantity + 1 }
        state.cartItems.splice(productExist, 1, updatedProduct);
    },
    remove(state, index){
        const itemIndex = state.cartItems.findIndex(pdt => pdt.id === index);
        state.cartItems.splice(itemIndex);
    },
    custom(state, val){
        const itemIndex = state.cartItems.findIndex(pdt => pdt.id === val.index);
        const updateProduct = {...state.cartItems[itemIndex]};
        const updatedProduct = {...updateProduct, quantity: val.quantity }
        state.cartItems.splice(itemIndex, 1, updatedProduct);
    }
}