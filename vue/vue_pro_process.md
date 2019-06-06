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
            yarn add babel-plugin-component -D


    * babel.config.js

            module.exports = {
                presets: [
                    '@vue/app'
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


## 配置接收命令行传的自定义参数，用于做多模式

> **思路： 修改webpack配置，将参数传入process.env**

* vue.config.js

        + const {argv} = require('yargs');


        ...
        chainWebpack: config => {
            config.plugin("define").tap(options => {
                options[0]["process.env"].realApi = argv.realApi;
                return options
            })
        },
        ...