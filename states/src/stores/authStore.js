import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false);
  const userName = ref('Аноним');
  
  const login = (name) => {
    isAuthenticated.value = true;
    userName.value = name;
  };
  
  const logout = () => {
    isAuthenticated.value = false;
    userName.value = 'Аноним';
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