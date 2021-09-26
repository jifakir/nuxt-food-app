<template>
  <div class="select-none w-full min-h-screen pt-14 bg-gray-800 scrollbar-thin scrollbar-thumb-green-500">
    <main class="container mx-auto py-5 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-5">
      <ProductCard 
        v-for="product in products" 
        :key="product.id"
        :product-id="product.id"
        :product-name="product.name" 
        :price="product.price" 
        :description="product.description" />
    </main>
  </div>
</template>

<script >
export default {
    
    computed: {
      products () {
        return this.$store.state.products
      }
    }
}
</script>
