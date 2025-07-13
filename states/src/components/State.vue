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
        }
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
</div>

<div className="not_see" v-if="modalState == true">
    <div className="overlay" @click="ChangeModal()">
        <BigState :state_data="state_data" className="window" @click.stop></BigState>
    </div>
</div>
</template>

<style scoped>
.State-main {
    width: 50%;
    min-height: 10vh;
    max-height: 70vh;
    border-radius: 20px;
    box-shadow: 0px 0px 5px 3px rgba(221, 222, 228, 0.867);
    display: flex;
    flex-direction: column;
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
    margin-left: auto;
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
