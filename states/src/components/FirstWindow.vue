<script>
import State from './State.vue';
import axios from 'axios';
import Header from './Header.vue';
import BigState from './BigState.vue';
import AddingState from './AddingState.vue';
export default {
    components: { State, Header, BigState, AddingState },
    data() {
        
        return {
            spisok: []
           

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
        },
        GetMoreStates() {
            const count_states = this.spisok.length + 3
            axios.get(`/api/GetMoreStates/${count_states}`)
            .then(response => {
                console.log('Успех');
                console.log(response);
                this.spisok = response.data
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
<div className="wind">
<div className="big-window" v-for="(item, index) in spisok">
    <State :state_data="item" :key="index"></State>
    
</div>
<button classNane="btn" @click="GetMoreStates()">Отобразить еще статьи</button>
<AddingState></AddingState>
</div>




</template>

<style scoped>
.wind {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}

</style>
