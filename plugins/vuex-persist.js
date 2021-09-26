import { VuexPersistence } from 'vuex-persist';

export default ({ store }) => {
  new VuexPersistence({
  reducer: (state) => ({cartItems: state.cartItems})
  }).plugin(store);
};