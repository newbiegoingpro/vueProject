import Vue from "vue";
import VueRouter from "vue-router";
import Main from '../pages/Main.vue';
import User from '../pages/User.vue'
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/user/:id',
        component: User
    }
];

export default new VueRouter({
    mode: 'history',
    routes
})