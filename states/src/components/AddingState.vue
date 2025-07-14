<script>
import axios from 'axios';
export default {
    data() {
        return {
            title: '',
            text: ''
        }
    },
    methods: {
        PublishState() {
        axios.post('/api/PostState',
            {
                "title": this.title,
                "text": this.text
            }
        )
        .then(response => {
            console.log(response);
            console.log('Успех')
            this.text = '';
            this.title = '';
        })
        .catch(error => {
            console.log('error');
            console.log('Не успех');
            this.text = '';
            this.title = '';
        })
    },
    ScrUp() {
        window.scrollTo({
        top: 0,
        behavior: 'smooth' // Плавная анимация
      });
    }
}
}
</script>

<template>
<div className="all-components">
    <div className="inside-inputs">
        <h1>Добавить статью</h1>
        <div className="fields">
                <label>Заголовок</label>
                <input type="text" placeholder="Введите Email пользователя" v-model="title">
            </div>
        <div className="fields">
                <label>Текст</label>
                <input type="text" placeholder="Введите Email пользователя" v-model="text">
            </div>
        <button @click="PublishState(), ScrUp()">Опубликовать</button>
    </div>

</div>
</template>

<style scoped>
.all-components {
    width: 100%;
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
.inside-inputs {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
}
.fields {
    display: flex;
    flex-direction: column;
    margin-top: 2vh;
    padding-top:0.5vh;
    padding-bottom: 0.5vh;
    margin-left: 0%;
}
input {
    font-size: 20px;
    border: 2px solid #e9e9e9;
    border-radius: 4px;
    outline: none;  
}
input:hover {
    border: 2px solid #b7b7b7;
}

button {
    width: 30%;
    height: 4.5vh;
    background-color: #3f69fd;
    border: none;
    border-radius: 5px;
    margin-top: 2vh;
    color: #ffff;
    font-size: 17px;
    transition: all 0.3s ease;
}
button:hover {
    scale: 1.03;
    cursor: pointer;
    transform: translateY(-3px);  
}
</style>
