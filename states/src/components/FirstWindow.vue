<script>
import State from './State.vue';
import axios from 'axios';
import Header from './Header.vue';
import BigState from './BigState.vue';
export default {
    components: { State, Header, BigState },
    data() {
        
        return {
            spisok: [],

        }
    },
    created() {
        axios.get('/api/GetStates')
            .then(response => {
                console.log('Успех');
                console.log(response);
                this.spisok = response.data;
            })
            .catch(error => {
                console.log('Не успех');
                console.log(error)
            })
    },
    methods: {
        GetStates() {
            axios.get('/api/GetStates')
            .then(response => {
                console.log('Успех');
                console.log(response);
                this.spisok = response.data;
            })
            .catch(error => {
                console.log('Не успех');
                console.log(error)
            })
        }
    }
  
}
</script>

<template>

<div className="big-window" v-for="(item, index) in spisok">
    <State :state_data="item" :key="index"></State>
    
</div>

</template>

<style scoped>

</style>
