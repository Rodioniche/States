<script>
import axios from 'axios';
axios.defaults.withCredentials = true
import BigState from './BigState.vue';






export default {
    components: { BigState },
    data() {
        return {
            text: '',
            title: '',
            //только отправка на сервер, остальное приходит через props
            
            id_state: 1234,
            id_owner: '',
            username_owner: '',
            spisok_files: [],
            
            id_owner_comment: 124234,
            text_comment: '',
            spisok_comms: [],
            modalState: false
            

        }
    },
    props: {
        state_data: {
            type: Object,
            required: true
        }
    },
    methods: {
        PublishComm() {
            axios.post('/api/PostComm',
                {
                    "text": this.text_comment,
                    "id_state": this.state_data.id_state
                },
                
                
            )
            .then(response => {
                console.log('Успех');
                console.log(response);
            })
            .catch(error => {
                console.log('Не успех');
                console.log(error);
            })
        },
        
        
        ChangeModal() {
            if (this.modalState == false) {
                this.modalState = true;
            }
            else {
                this.modalState = false;
            }
        },
        DelState() {
            axios.post('/api/deleteState',
                {
                    "id_state": this.state_data.id_state
                }
            )
            .then(response => {
                console.log('Успех');
                console.log(response);
                window.location.reload();
            })
            .catch(error => {
                console.log('Не успех');
                console.log(error);
            })
        },
        
    }
    
}
</script>

<template>
<div className="State-main" v-if="modalState == false" @click="ChangeModal()">
    
    <div className="inside" >
    <div className="articles">
        <h1>{{ state_data.username }}</h1>
        <h3>{{ state_data.title }}</h3>
    </div>
    
    <article className="texting" >{{ state_data.text }}</article>
    
    
    
    </div>
    <svg width="800px" @click.stop height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" @click="DelState()" >
        <path d="M10 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>

<div className="not_see" v-if="modalState == true">
    <div className="overlay" @click="ChangeModal()">
        <BigState :state_data="state_data" className="window" @click.stop></BigState>
    </div>
</div>
</template>

<style scoped>
.State-main {
    width: 100%;
    min-height: 10vh;
    max-height: 70vh;
    border-radius: 20px;
    box-shadow: 0px 0px 5px 3px rgba(221, 222, 228, 0.867);
    display: flex;
    
    justify-content: center;
    font-size: 18px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3vh;
    cursor: pointer;
    transition: all 0.3s ease;
}
.State-main:hover {
    scale: 1.03;
    cursor: pointer;
    transform: translateY(-3px);  
}

.inside {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-left: 10%;
    margin-right: auto;
}
.articles {
    text-align: left;
    
}
.articles > * {
    margin-top: 1vh;
    margin-bottom: 1vh;
}
.texting {
    text-align: left;
    margin-bottom: 2vh;
}

svg {
    width: 5%;
    height: 5%;
    margin-right:2%;
    margin-left:auto;
    margin-top: 2%;
    
}


.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex; 
  justify-content: center;
  align-items: center;
  z-index: 1000; 
}

.window {
  background: rgb(255, 255, 255);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 1001; 
  width: 50%;
}
</style>
