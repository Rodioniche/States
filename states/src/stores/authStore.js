import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false);
  const userName = ref('Аноним');
  const useremail = ref('Неизвестно')
  
  const login = (name, email) => {
    isAuthenticated.value = true;
    userName.value = name;
    useremail.value = email;
  };
  
  const logout = () => {
    isAuthenticated.value = false;
    userName.value = 'Аноним';
    useremail.value = 'Неизвестно';
  };
  
  const updateName = (name) => {
    userName.value = name;
  };
  
  return {
    isAuthenticated,
    userName,
    login,
    logout,
    updateName
  };
});