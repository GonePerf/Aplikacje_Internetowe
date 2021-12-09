<template>
  <div class="backdrop" @click.self="$emit('closeModal')">
      <div class="modal-content">
          <h1>Edycja pracownika</h1>
          <p>ID: {{ worker.id }}</p>
          <input type="text" placeholder="Imie" :value="worker.firstName">
          <input type="text" placeholder="Nazwisko" :value="worker.lastName">
          <input type="text" placeholder="Adres" :value="worker.address">
          <input type="text" placeholder="Stanowisko" :value="worker.workplace">
          <input type="number" placeholder="Pensja" :value="worker.salary">
          <div>
            <button class="anuluj" @click="$emit('closeModal')">Anuluj</button>
            <button class="dodaj">Zapisz</button>
          </div>
      </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
export default {
    props: ['worker'],
    emits: ['closeModal'],
    setup(){
        const store = useStore()
        const firstName = ref('');
        const lastName = ref('');
        const address = ref('');
        const workplace = ref('');
        const salary = ref('');
        const saveWorker = () => {
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
    .modal-content > button {
        width: 30%;
        margin: 10px auto;
        background: #42b983;
        font-weight: bold;
        color: #fff;
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