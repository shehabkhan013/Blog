<script setup>
    import {data , fn} from '../../data.js'
    import { ref } from 'vue';
    import BlogCard from '../parts/BlogCard.vue';
    import Pagination from '../parts/Pagination.vue';
    const loading = ref(false);
    const posts = ref([]);

    const getPostsFromServer = () => {
        loading.value = true;
        const res = fn.fetchPublicApi("/posts", {}, "GET");
        res.then((response) => {
            
            loading.value = false;
            data.posts = response.posts;
            posts.value = data.posts;
        });
    }

    getPostsFromServer();
   
    const getPosts = () => {
        let indexNumber = 0;
        if(data.page > 1) {
            indexNumber = (data.page*6);
        }
        if (data.posts) {
            posts.value = data.posts;
            return posts.value.splice(indexNumber, 6);
        } else {
            return [];
        }
    }
    
</script>
<template>
    <div class="grid grid-cols-3 gap-20 items-center justify-between p-24">
        <BlogCard v-for="post in getPosts()" :key="post.id" :post="post"/>
    </div>
    <Pagination v-if="!loading"/>
</template>

<style lang="scss" scoped>

</style>