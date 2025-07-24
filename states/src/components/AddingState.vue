<script>
import axios from 'axios';
import UplFile from './UplFile.vue';
axios.defaults.withCredentials = true
export default {
    components: { UplFile },
    data() {
        return {
            title: '',
            text: '',
            files: [],
            uploading: false,
            message: '',
            isError: false,
            id_state: '',
            butt_or_form: false
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
            this.$emit('state_added', response.data);
            this.id_state = response.data.id_state;
            this.upload()
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
    },
    handleFiles(event) {
      const selected = Array.from(event.target.files);
      const MAX_SIZE = 20 * 1024 * 1024;
      // Проверка количества файлов
      if (selected.length > 5) {
        this.message = 'Максимум 5 файлов!';
        this.isError = true;
        this.$refs.fileInput.value = '';
        return;
      }
      const totalSize = selected.reduce((sum, file) => sum + file.size, 0);
        if (totalSize > MAX_SIZE) {
            this.message = `Общий размер файлов превышает 20 МБ! (${this.formatSize(totalSize)})`;
            this.isError = true;
            this.$refs.fileInput.value = '';
            return;
      }
      this.files = selected;
      this.message = '';
      this.isError = false;
    },
    
    async upload() {
  if (!this.files.length) return;
  
  this.uploading = true;
  this.message = 'Загрузка...';
  
  try {
    const formData = new FormData();
    
    // Добавляем ID состояния (должен быть динамическим, здесь пример с 1234)
    formData.append('id_state', this.id_state);  // FastAPI автоматически конвертирует в int
    
    // Добавляем файлы под именем 'uploaded_files' (как ожидает сервер)
    this.files.forEach(file => {
      formData.append('uploaded_files', file);  // Ключ должен совпадать с серверным
    });
    
    // Правильная структура запроса
    const response = await axios.post(
      '/api/files', 
      formData,  // Все данные здесь
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    
    this.message = `Успешно загружено ${this.files.length} файлов!`;
    this.isError = false;
    this.files = [];
    this.$refs.fileInput.value = '';
    
  } catch (error) {
    // Улучшенная обработка ошибок
    let errorMessage = error.message;
    if (error.response) {
      errorMessage = error.response.data?.detail || 
                     error.response.data?.message || 
                     JSON.stringify(error.response.data);
    }
    
    this.message = `Ошибка: ${errorMessage}`;
    this.isError = true;
  } finally {
    this.uploading = false;
  }
},
    
    formatSize(bytes) {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    },
    ChangeForm() {
      if (this.butt_or_form == false) {
        this.butt_or_form = true;
      }
      else {
        this.butt_or_form = false;
      }
      
    }
  }
};


</script>

<template>
<button @click="ChangeForm()">+</button>

<div className="all-components" v-if="butt_or_form == true">
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
        <div>
    <input 
      type="file" 
      multiple 
      @change="handleFiles" 
      ref="fileInput"
      accept=".jpg,.png,.pdf" 
    >
    
    
    <div v-if="files.length">
      <p>Выбрано файлов: {{ files.length }}/5</p>
      <ul>
        <li v-for="(file, index) in files" :key="index">
          {{ file.name }} ({{ formatSize(file.size) }})
        </li>
      </ul>
    </div>
    
    
  </div>
        <button @click="PublishState(), ScrUp()" >Опубликовать</button>
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
