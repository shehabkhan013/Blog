import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Blog from "./components/Blog.vue";
import BlogHome from "./components/blog/BlogHome.vue";
import BlogSingle from "./components/blog/BlogSingle.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => Home,
    },
    {
        path: "/about",
        name: "About",
        component: () => About,
    },
    {
        path: "/blog",
        name: "Blog",
        component: () => Blog,
        children: [
            {
                path: "",
                name: "BlogHome",
                component: () => BlogHome
            },
            {
                path: ":id",
                name: "BlogSingle",
                component: () => BlogSingle
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router