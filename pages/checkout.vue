<template>
  <div class="page-container w-full bg-gradient-to-br from-gray-800 to-gray-700 pt-20 pb-5">
      <div class="container mx-auto flex">
        <div class="w-2/3">
          <form class="w-full grid grid-cols-2 gap-5" @submit.prevent="submitHandler()">
            <label for="name">
              <input id="name" type="text" class="w-full px-3 py-2 focus:outline-none rounded font-medium bg-gray-900 text-gray-400" placeholder="Write your name...">
            </label>
            <label for="email">
              <input id="email" type="email" class="w-full px-3 py-2 focus:outline-none rounded font-medium bg-gray-900 text-gray-400" placeholder="Type your email....">
            </label>
            <label for="mobile">
              <input id="mobile" type="tel" class="w-full px-3 py-2 focus:outline-none rounded font-medium bg-gray-900 text-gray-400" placeholder="Type your mobile no...">
            </label>
            <label for="address" class="col-span-2">
              <textarea id="address" type="text" class="w-full col-span-2 px-3 py-2 focus:outline-none rounded font-medium bg-gray-900 text-gray-400" placeholder="Write your address..."></textarea>
            </label>
          </form>
          <button class="px-5 py-2 flex items-center justify-center bg-green-500 my-10 rounded text-xl font-medium uppercase" @click="goToPayment()">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></svg>
            Pay
          </button>
        </div>
        <div class="w-1/3 pl-10">
          <ul >
            <li v-for="product in cartItems"  :key="product.id" class="py-1 h-10 flex justify-between items-center px-2">
                <img src="/default-pasta.jpg" alt="Paste" class="h-full w-1/5">
                <div class="w-3/5 px-1 text-white">
                    <h1 class="text-sm font-semibold">{{product.name}}</h1>
                    <p class="text-xs font-semibold">${{product.price * product.quantity}}</p>
                </div>
                <div class="w-1/5 flex items-center">
                  <input class="w-full h-full focus:outline-none bg-gray-900 text-lg text-center rounded text-gray-500 font-medium pl-2" min="1" type="number" :value="product.quantity" readonly />
              </div>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems(){
      return this.$store.state.cartItems;
    }
  },
  methods: {
    submitHandler(){
      return alert("submitted!");
    },
    goToPayment(){
      return alert("Sorry! payment gateway is not available.")
    }
  }
}
</script>
<style>
  .page-container {
    min-height: calc(100vh - 39px);
  }
</style>