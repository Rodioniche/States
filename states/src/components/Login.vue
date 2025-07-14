<script>
import axios from 'axios';
export default {
    data() {
        return {
            Email: '',
            Password: '',
            reged: 'not'
        }
    },
    methods: {
        SendDataLogin() {
            axios.post('/api/Login',
                {
                "Email": this.Email,
                "password": this.Password
                }
            )
            .then(response => {
                console.log(response);
                console.log('Успех');
                this.reged = response.data.reged;
                this.$router.push('/');

            })
            .catch(error => {
                console.log(error);
                console.log('Не успех');
                this.reged = 'false';
            })
        },
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
<div className="all-window">
    <div className="small-window">
        <div className="auth">Авторизация</div>
            <div className="fields">
                <label>Email</label>
                <input type="text" placeholder="Введите Email пользователя" v-model="Email">
            </div>
            <div className="fields">
                <label>Пароль</label>
                <input type="text" placeholder="Введите Пароль пользователя" v-model="Password">
            </div>
            <div v-if="reged='false'">Ошибка</div>
            <div classname="bottom-panel">
            <button @click="SendDataLogin()">Войти</button>
            <RouterLink to="/">
                <a href="" className="a-bottom-panel" @click="GetToken()">Войти анонимно</a>
            </RouterLink>
        </div>
        
        <div classsName="bottom-cont">
            <label className="bottom-label">Нет аккаунта?</label>
            <RouterLink to="/registration">
                <label href="" className="bottom-a">Зарегестрироваться</label>
            </RouterLink>
        </div>
    </div>
</div>   

</template>

<style scoped>
* {
    font-family: 'Roboto';
}
.all-window {
    width: 30%;
    height: 40vh;
    border-radius: 20px;
    box-shadow: 0px 0px 5px 3px rgba(245, 246, 255, 0.867);
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 18px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20vh;
}


.bottom-label {
    font-size: 10px;
}
.bottom-a {
    font-size: 10px;
}
.bottom-cont {
    display:flex;
    justify-content: flex-end;
    
    
}
.a-bottom-panel {
    margin-left: 24%;
}
.auth {
    font-family: 'Roboto';
    font-size: 30px;
    

}
.bottom-panel {
    display: flex;
    justify-content: space-between;
    
}

button {
    width: 35%;
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
.small-window {
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
</style>
