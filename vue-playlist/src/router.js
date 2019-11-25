import addBlog from './components/AddBlog.vue';
import showBlogs from './components/GetBlog.vue';
import singleBlog from './components/singleBlog.vue';

export default [
    { path: '/', component: showBlogs},
    { path: '/add', component: addBlog},
    { path: '/blog/:id', component: singleBlog}

]
