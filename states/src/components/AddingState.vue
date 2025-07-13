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
    }
}
}
</script>

<template>
<div className="all-components">
    <div className="inside-inputs">
        <h1>Добавить статью</h1>
        <div>заголовок</div>
        <input type="text" placeholder="Введите заголовок" v-model="title">
        <div>Текст</div>
        <input type="text" placeholder="Введите Текст" v-model="text">
        <button @click="PublishState()">Опубликовать</button>
    </div>

</div>
</template>

<style scoped>
* {
    background-color: blueviolet;
}
</style>
