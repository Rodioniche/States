<template>
  <div>
    <input 
      type="file" 
      multiple 
      @change="handleFiles" 
      ref="fileInput"
      accept=".jpg,.png,.pdf" 
    >
    <button @click="upload" :disabled="!files.length || uploading">
      {{ uploading ? 'Загрузка...' : 'Отправить' }}
    </button>
    
    <div v-if="files.length">
      <p>Выбрано файлов: {{ files.length }}/5</p>
      <ul>
        <li v-for="(file, index) in files" :key="index">
          {{ file.name }} ({{ formatSize(file.size) }})
        </li>
      </ul>
    </div>
    
    <p v-if="message" :class="{ error: isError }">{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      files: [],
      uploading: false,
      message: '',
      isError: false
    };
  },
  methods: {
    handleFiles(event) {
      const selected = Array.from(event.target.files);
      
      // Проверка количества файлов
      if (selected.length > 5) {
        this.message = 'Максимум 5 файлов!';
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
    formData.append('id_state', "1234");  // FastAPI автоматически конвертирует в int
    
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
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
ul {
  padding-left: 20px;
}
</style>