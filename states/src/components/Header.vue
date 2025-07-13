<script setup>
import axios from 'axios';
import Registration from './Registration.vue';
import { useAuthStore } from '@/stores/authStore.js';


const authStore = useAuthStore();

function GetToken() {
  
    axios.get('/api/LoginAnonymous')
    .then(response => {
      console.log('Успех');
      authStore.login('Гость');
    })
    .catch(error => {
      console.log('Не успех');
    });
};
    
    

</script>

<template>
<div className="Head">
    <div className="Right">
        <RouterLink to="/login">
            <button>Войти</button>
        </RouterLink>
        <RouterLink to="/registration">
            <button>Регистрация</button>
        </RouterLink>
        <RouterLink to="/First">
        <button @click="GetToken()">Гостевой режим</button>
        </RouterLink>
    </div>
    <div className="Author">
        <label>{{ authStore.userName }}</label>
    </div>
   
    
</div>

</template>

<style scoped>
.Head {
    display: flex;
    background-color: #3f69fd;
    width: 100%;
    height: 9vh;
}
.Right {
    width: fit-content;
    margin-left: auto;
    margin-right: 10%;
}
button {
    height: 99%;
    background-color: #3f69fd;
    border: none;
    font-size: 17px;
    font-weight:600;
    color: #ffffff;
    
}
button:hover {
    cursor: pointer;
    border-bottom:3px solid #000000;
}
.Author {
    width: fit-content;
    height: fit-content;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 2%;
}
label {
    font-size: 17px;
    font-weight:600;
    color: #ffffff;
}




</style>
