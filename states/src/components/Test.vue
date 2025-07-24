<script>
import axios from 'axios';

export default {
    data() {
        return {
            text: ''
        }
    }
    ,
    methods: {
        getData() {
            axios.get('/api/test')
            .then(response => {
                console.log('Успех');
                console.log(response);
                this.text = response.data.content
            })
            .catch(error => {
                console.log('Не успех');
                console.log(error);
            })
        },
        safeHtml(html) {
        // Разрешаем только тег <d> с заменой на <strong>
        return html
            .replace(/<d>/gi, '<strong>')
            .replace(/<\/d>/gi, '</strong>')
            // Защита от XSS - удаляем все остальные теги
            //.replace(/<[^>]*(>|$)/g, '');
    }
    }  
}
    
    

</script>

<template>
<button @click="getData"></button>
<article v-html="safeHtml(text)"></article>
</template>

<style scoped>

</style>
