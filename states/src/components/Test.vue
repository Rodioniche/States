<script>
import axios from 'axios';

export default {
    data() {
        return {
            state: false

        }
    },
    methods: {
        ChangeM() {
            if (this.state == false) {
                this.state = true;
            }
            else {
                this.state = false;
            }
        }
    }

            
}
    
    

</script>

<template>
<div className="see" v-if="state == false">
<div className="all_window">Простое окно
<button @click="ChangeM()">Открыть</button>
</div>
</div>

<div className="notsee" v-if="state == true">
    <div className="overlay">
        <div className="window">
            <div className="all_window">Большое окно
            <button @click="ChangeM()">Закрыть</button>
        </div>
        </div>
</div>
</div>

</template>

<style scoped>
.all_window {
    height: 40vh;
    width: 50%;
    background-color: aquamarine;
    margin-left: auto;
    margin-right: auto;
}





.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Полупрозрачный чёрный */
  display: flex; /* Скрыто изначально */
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Поверх всех элементов */
}
.window {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 1001; /* Поверх затемнения */
  max-width: 500px;
  width: 100%;
}
</style>
