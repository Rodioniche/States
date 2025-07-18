<script>
import State from './State.vue';
import axios from 'axios';
import Header from './Header.vue';
import BigState from './BigState.vue';
import AddingState from './AddingState.vue';
import UplFile from './UplFile.vue';

export default {
    components: { State, Header, BigState, AddingState, UplFile },
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
        },
        recived_msg(payload) {
                this.spisok.unshift(payload)
                console.log(this.spisok)
        }

    }
  
}
</script>

<template>
<div className="wind">
    <div className="big-window" v-for="(item, index) in spisok">
        <State :state_data="item" :key="index"></State>
    
    </div>
    <div className="knopka">
        <a className="btn" @click="GetMoreStates()">Показать следующие статьи</a>
    </div>
    <AddingState @state_added="recived_msg"></AddingState>
</div>




</template>

<style scoped>
.wind {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    
}

.knopka {
    text-align: center;
    margin-top: 3%;
    cursor: pointer;
    font-size: 18px;
    color: #3f69fd;
}
a:hover {
    border-bottom: 2px #3f69fd solid;
}

</style>
