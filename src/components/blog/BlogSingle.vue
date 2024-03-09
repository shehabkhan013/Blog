<script setup>
    import {useRoute} from 'vue-router'
    import {data, fn} from '../../data.js'
    import {ref, watch} from 'vue'
    import BlogCard from '../parts/BlogCard.vue';
    import { Carousel, Slide, Navigation } from 'vue3-carousel';
    import 'vue3-carousel/dist/carousel.css'
   
    const route = useRoute();
    const post = ref({});

const getPost = () => {
  const res = fn.fetchPublicApi(`/posts/${route.params.id}`, "get");
  res.then((response) => {
    post.value = response;
  });
};

getPost();
watch(route, getPost);
</script>
<template>
     <div class="max-w-full rounded overflow-hidden shadow-lg">
        <img
        class="w-full"
        src="https://source.unsplash.com/random/300x200"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ post.title }}</div>
        <p class="text-gray-700 text-base">
         {{ post.body }}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span v-for="tag in post.tags" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >#{{ tag }}</span
        >
       
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >{{ post.reactions }}</span
        >
       
      </div>
     </div>
     <h2 class="text-2xl font-bold mb-4 mt-10">Related Post</h2>
     <Carousel :items-to-show="3.6" :wrap-around="true">
    
        <Slide v-for="post in data.posts" :key="post.id">
            <router-link :to="`/blog/${post.id}`" class="max-w-md rounded overflow-hidden shadow-lg">
                <img
                    class="w-full"
                    src="https://source.unsplash.com/random/300x200"
                    alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{{ fn.displayWords(post.title, 6) }}</div>
                    <p class="text-gray-700 text-base">
                    {{ fn.displayWords(post.body, 20) }}
                    </p>
                </div>
            </router-link>
        </Slide>
        <template #addons>
            <Navigation />
        </template>
    </carousel>

</template>

<style lang="scss" scoped>

</style>