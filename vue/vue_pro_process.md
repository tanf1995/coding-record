## 安装

        vue create -n pro
        yarn add vue-router
        yarn add vuex

## 配置 vue-router

    + router/router.js
    
            import Vue from 'vue';
            import VueRouter from 'vue-router';


            Vue.use(VueRouter);

            const routes =  [
                {
                    path: '/',
                    component: () => import('@/views/HomePage')
                }
            ]

            export default new VueRouter({
                routes
            })

    main.js

            import Vue from 'vue';
            import App from './App.vue';
            + import router from '@/router/router';

            Vue.config.productionTip = false

            new Vue({
                + router,
                render: h => h(App),
            }).$mount('#app')    