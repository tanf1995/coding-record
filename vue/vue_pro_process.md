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


## 配置 element-UI 按需引入

    * 安装

            yarn add element-ui
            yarn add babel-plugin-component babel-preset-env -D


    * babel.config.js

            module.exports = {
                presets: [
                    '@vue/app',
                    [
                        "@babel/preset-env",
                        {
                            "modules": false
                        }
                    ]
                ],
                plugins: [
                    [
                        "component",
                        {
                            "libraryName": "element-ui",
                            "styleLibraryName": "theme-chalk"
                        }
                    ]
                ]
            }

    * element.js

            import Vue from 'vue';
            import { Button } from 'element-ui';

            Vue.component(Button.name, Button);
