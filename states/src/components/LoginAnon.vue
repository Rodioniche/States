<script>
import axios from 'axios';
axios.defaults.withCredentials = true
export default {
    data() {
        return {

        }
    },
    methods: {
        GetToken() {
            axios.get('/api/LoginAnonymous')
            .then(response => {
                console.log('Успех');
                console.log(response);
            })
            .catch(error => {
                console.log('Не успех');
                console.log(error);
            })
        }
    }
}
</script>

<template>
<button @click="GetToken()">Войти анонимно</button>

</template>

<style scoped>


</style>
