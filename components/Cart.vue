<template>
  <div class="absolute select-none bg-white text-gray-900 w-60 top-10 right-0 rounded-lg shadow-md overflow-hidden" >
      <h1 class="text-center uppercase py-2 bg-green-500">cart</h1>
      <div class="w-full h-40 bg-gray-900 overflow-y-auto scrollbar-thin scrollbar-thumb-green-300">
        <ul v-if="products.length > 0" >
          <li v-for="product in products"  :key="product.id" class="py-1 text-gray-300 h-10 flex justify-between px-2">
              <img src="/default-pasta.jpg" alt="Paste" class="h-full w-1/5">
              <div class="w-3/5 px-1">
                  <h1 class="text-sm font-semibold">{{product.name}}</h1>
                  <p class="text-xs font-semibold">${{product.price * product.quantity}}</p>
              </div>
              <div class="w-1/5 flex items-center">
                <input class="w-2/3 focus:outline-none bg-gray-900" min="1" type="number" :value="product.quantity" @change="changeQt(product.id, $event)" />
                <div class="w-1/3 cursor-pointer text-green-500 hover:text-red-500" @click="removeItem(product.id)">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
                </div>
            </div>
          </li>
        </ul>
        <div v-else class="w-full min-h-full text-xs text-center flex justify-center items-center">
            <p class="text-red-500">Sorry! no items in cart.</p>
        </div>
      </div>
      <button class="w-full transition-all duration-500 ease-in-out  bg-green-300 hover:bg-green-500 text-white uppercase font-medium" @click="checkoutHandler">Checkout</button>
  </div>
</template>

<script >
export default {
    props: {
        products: {
            type: Array,
            default: () => []
        },
        checkoutHandler: {
            type: Function,
            required: true
        }
    },
    methods: {
        removeItem(index){
            this.$store.commit('remove', index);
        },
        changeQt(idx, e){
            const val = e.target.value;
            if(val <= 0){
                return this.$vToastify.warning(`Quantity ${val} isn't allowed.`);
            }
            this.$store.commit('custom', {index: idx, quantity: Number(val)});
        }
    }
}
</script>