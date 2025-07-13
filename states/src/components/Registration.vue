<script>
import axios from 'axios';


export default {
    data() {
        return {
            UserName: '',
            Email: '',
            password_first: '',
            password_second: ''


        }
    },
    methods: {
        SendRegData() {
            axios.post('/api/Registration', 
                {
                "UserName": this.UserName,
                "Email": this.Email,
                "password_first": this.password_first,
                "password_second": this.password_second
                }
            )
            .then(response => {
                console.log('Успех');
                console.log(response)
            })
            .catch(error => {
                console.log('Не успех');
                console.log(error)
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
<div className="Reg-window">
    <div className="inside">
        <div className="Reg">Регистрация</div>
        <div className="field">
            <div>Имя</div>
            <input type="text" placeholder="Введите имя" v-model="UserName">
        </div>
        <div className="field">
            <div>Email</div>
            <input type="text" placeholder="Введите email" v-model="Email">
        </div>
        <div className="field">
            <div>Пароль</div>
            <input type="text" placeholder="Введите пароль" v-model="password_first"> 
        </div>
        <div className="field">
            <div>Подтвердите пароль</div>
            <input type="text" placeholder="Введите пароль" v-model="password_second">
        </div>
        
        
        <div classname="bottom-panel">
            <button @click="SendRegData()">Зарегестрироваться</button>
            
            <RouterLink to="/First">
            <a href="" className="a-bottom-panel" @click="GetToken()">Войти анонимно</a>
            </RouterLink>
        </div>
        
        <div classsName="bottom-cont">
            <label className="bottom-label">Есть аккаунт?</label>
            
            <RouterLink to="/login">
            <label href="" className="bottom-a">Войти</label>
            </RouterLink>
        </div>
    </div>
</div>
</template>

<style scoped>
* {
    font-family: 'Roboto';
}
.Reg-window {
    width: 30%;
    height: 60vh;
    border-radius: 20px;
    box-shadow: 0px 0px 5px 3px rgba(245, 246, 255, 0.867);
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 18px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10vh;
}
.inside {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
}
.Reg {
    font-family: 'Roboto';
    font-size: 30px;
    

}
.bottom-panel {
    display: flex;
    justify-content: space-between;
    
}
.bottom-label {
    font-size: 10px;
}
.bottom-a {
    font-size: 10px;
}
.bottom-a:hover {
    cursor: pointer;
}
.bottom-cont {
    display:flex;
    justify-content: flex-end;
    
    
}
.a-bottom-panel {
    margin-left: 9%;
}
button {
    width: 50%;
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
.field {
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
