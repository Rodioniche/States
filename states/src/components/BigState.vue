<script>
import axios from 'axios';
axios.defaults.withCredentials = true
import Comm from './Comm.vue';







export default {
    components: { Comm },
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
            spisok_comms: []
            

        }
    },
    props: {
        state_data: {
            type: Object,
            required: true
        }
    },
    created() {
        this.GetComms()
        this.GetFilesNames()
    },
   
    methods: {
        async PublishComm() {
            axios.post('/api/PostComm',
                {
                    "text": this.text_comment,
                    "id_state": this.state_data.id_state
                },
                
                
            )
            .then(response => {
                console.log('Успех');
                console.log(response);
                this.text_comment = '';
                this.spisok_comms = response.data;
            })
            .catch(error => {
                console.log('Не успех');
                console.log(error);
            })
        },
        async GetComms() {
            
            axios.get(`/api/GetComm/${this.state_data.id_state}`)
            .then(response => {
                console.log('Успех');
                console.log(response);
                this.spisok_comms = response.data;
            })
            .catch(error => {
                console.log('Не успех');
                console.log(error);
                console.log(this.state_data.id_state)
            })
        },
        async GetFilesNames() {
            axios.get(`/api/files/${this.state_data.id_state}`)
            .then(response => {
                console.log('Успех');
                console.log(response);
                this.spisok_files = response.data;
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
<div className="State-main">
    <div className="inside">
        <div className="articles">
            <h1>{{ state_data.username }}</h1>
            <h3>{{ state_data.title }}</h3>
        </div>
        <article className="texting">{{ state_data.text }}</article>
        <div className="files" v-for="(item, index) in spisok_files">
            <article>{{ item.filename }}</article>
        </div>
        <article v-if="spisok_comms.length==0">Пока комментариев нет</article>
        <Comm v-for="(item, index) in spisok_comms" :comm_info="item" :key="index" ></Comm>
        
        
        <div className="fields">
                <input type="text" placeholder="Написать комментарий..." v-model="text_comment">
                <svg width="800px" height="800px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" @click="PublishComm">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.455 9.8834L7.063 4.1434C6.76535 3.96928 6.40109 3.95274 6.08888 4.09916C5.77667 4.24558 5.55647 4.53621 5.5 4.8764C5.5039 4.98942 5.53114 5.10041 5.58 5.2024L7.749 10.4424C7.85786 10.7903 7.91711 11.1519 7.925 11.5164C7.91714 11.8809 7.85789 12.2425 7.749 12.5904L5.58 17.8304C5.53114 17.9324 5.5039 18.0434 5.5 18.1564C5.55687 18.4961 5.77703 18.7862 6.0889 18.9323C6.40078 19.0785 6.76456 19.062 7.062 18.8884L18.455 13.1484C19.0903 12.8533 19.4967 12.2164 19.4967 11.5159C19.4967 10.8154 19.0903 10.1785 18.455 9.8834V9.8834Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
        </div>
    </div>
</div>

</template>

<style scoped>
.State-main {
    width: 50%;
    min-height: 80vh;
    max-height: 90vh;
    border-radius: 20px;
    box-shadow: 0px 0px 5px 3px rgba(221, 222, 228, 0.867);
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 18px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3vh;
}
.inside {
    width: 80%;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
}
svg {
    width: 8%;
    height: 8%;

}
svg:hover {
    cursor: pointer;
}
.fields {
    min-height: 5vh;
    max-height: 20vh;
    display: flex;
    flex-direction:row;
    margin-top: 2vh;
    padding-top:0.5vh;
    padding-bottom: 0.5vh;
    margin-left: 0%;
}
input {
    width: 95%;
    min-height: 5vh;
    max-height: 20vh;
    font-size: 20px;
    border: 2px solid #e9e9e9;
    border-radius: 4px;
    outline: none;  
}
input:hover {
    border: 2px solid #b7b7b7;
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
</style>
