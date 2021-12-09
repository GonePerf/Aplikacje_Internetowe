<template>
  <div class="backdrop" @click.self="$emit('closeModal')">
      <div class="modal-content">
          <h1>Dodawanie pracownika</h1>
          <input type="text" placeholder="Imie">
          <input type="text" placeholder="Nazwisko">
          <input type="text" placeholder="Adres">
          <input type="text" placeholder="Stanowisko">
          <input type="number" placeholder="Pensja">
          <div>
            <button class="anuluj" @click="$emit('closeModal')">Anuluj</button>
            <button class="dodaj">Dodaj</button>
          </div>
          
      </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
export default {
    props: ['title'],
    emits: ['closeModal'],
    setup(){
        const store = useStore()
        const firstName = ref('');
        const lastName = ref('');
        const address = ref('');
        const workplace = ref('');
        const salary = ref('');
        const addNewWorker = () => {
            store.commit('addNewWorker')
        }
    }
}
</script>

<style scoped>
    .backdrop {
        top: 0;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
    }
    .modal-content {
        width: 600px;
        z-index: 1;
        padding: 20px;
        margin: 100px auto;
        background: url('../assets/bckg.jpg');
        background-size: cover;
        border-radius: 10px;
    }
    .modal-content > input {
        width: 60%;
        margin: 10px auto;
        border-radius: 12px;
        padding: 5px;
    }
    .dodaj {
        background: #42b983;
    }
    .anuluj { 
        background: #f44336;
    }
    .modal-content > div {
        display: flex;
    }
    .modal-content > div > button {
        width: 30%;
        margin: 10px auto;
        
        font-weight: bold;
        color: #fff;
        border-radius: 12px;
        padding: 5px;
    }
</style>