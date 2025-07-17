import { createRouter, createWebHashHistory } from "vue-router";

import Header from "./components/Header.vue";
import One from "./components/One.vue";
import FirstWindow from "./components/FirstWindow.vue";
import Registration from "./components/Registration.vue";
import Login from "./components/Login.vue";
import BigState from "./components/BigState.vue";
import Test from "./components/Test.vue";
import AddingState from "./components/AddingState.vue";



export default createRouter ({
  history: createWebHashHistory(),
  routes: [
        { path: '/', component: FirstWindow },
        { path: '/One', component: One },
        { path: '/registration', component: Registration},
        { path: '/login', component: Login},
        { path: '/BigState', component: BigState},
        { path: '/Test', component: Test},
        { path: '/Adding', component: AddingState},
        
        
  ]
})


