<script setup>
import Header from './components/Header.vue';
import axios from 'axios';
axios.defaults.withCredentials = true
import { useAuthStore } from '@/stores/authStore.js';


const authStore = useAuthStore();



function Reg_or_not() {
     axios.get("http://127.0.0.1:8000/api/rememberMe")
    .then(response => {
        console.log('Успех');
        console.log(response);
        authStore.login(response.data.userName, response.data.email)
        })
    .catch(error => {
        console.log('Успех');
        console.log(error);
    })
}
Reg_or_not()    


</script>

<template>
<Header></Header>
<RouterView></RouterView>
</template>

<style scoped>


</style>
