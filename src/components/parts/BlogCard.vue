<script setup>
    import {data, fn} from '../../data.js'; 
    defineProps({
        post: Object
    })
</script>
<template>
    <router-link :to="`/blog/${post.id}`" class="max-w-md rounded overflow-hidden shadow-lg">
      <img
        class="w-full"
        src="https://source.unsplash.com/random/300x200"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ fn.displayWords(post.title, 6) }}</div>
        <p class="text-gray-700 text-base">
         {{ fn.displayWords(post.body, 15) }}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span v-for="tag in post.tags" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >#{{ tag }}</span
        >
      </div>
    </router-link>
</template>

<style scoped>

</style>