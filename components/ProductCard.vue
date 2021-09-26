<template>
  <div class="w-full rounded-lg p-5 bg-gray-900 shadow-md">
      <div class="relative w-full h-36">
        <img src="/default-pasta.jpg" class="w-full h-full" alt="Pasta">
        <div class="absolute text-green-600 bg-gray-100 bg-opacity-30 p-2 w-full flex justify-between bottom-0">
          <div class="cursor-pointer transition-all hover:text-green-400 text-xl hover:text-2xl duration-500 ease-in-out" @click="addItem()">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z"></path></svg>
          </div>
          <div class="cursor-pointer" @click="$router.push(`/product/${productId}`)">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"></path></svg>
          </div>
        </div>
      </div>
      <div class="w-full font-semibold text-green-500 flex justify-between py-3">
          <h1 class="">{{productName}}</h1>
          <h2 class="">${{price}}</h2>
      </div>
      <div class="w-full text-gray-400">
        <p class="">{{description}}</p>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    productId: {
      type: Number,
      required: true
    },
    productName: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  methods: {
    addItem(){
      this.$store.commit('add',{
        id: this.productId,
        name: this.productName, 
        price: this.price, 
        description: this.description});
        this.$vToastify.success("Item added to cart");
    }
  }
};
</script>