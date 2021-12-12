<template>
  <div class="backdrop" @click.self="$emit('closeModal')">
      <div class="modal-content">
          <h1>Edycja pracownika</h1>
          <p>ID: {{ worker.id }}</p>
          <input type="text" :placeholder="worker.firstName" v-model="firstName">
          <input type="text" :placeholder="worker.lastName" v-model="lastName">
          <input type="text" :placeholder="worker.address" v-model="address">
          <input type="text" :placeholder="worker.workplace" v-model="workplace">
          <input type="number" :placeholder="worker.salary" v-model="salary">
          <div>
            <button class="anuluj" @click="$emit('closeModal')">Anuluj</button>
            <button class="dodaj" @click="saveWorker(); $emit('closeModal')">Zapisz</button>
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
    setup(props){
        const store = useStore()
        const firstName = ref('');
        const lastName = ref('');
        const address = ref('');
        const workplace = ref('');
        const salary = ref('');
        const saveWorker = () => {
            if(firstName.value && lastName.value && address.value && workplace.value && salary.value){
                let updatedWorker = {
                    id: props.worker.id,
                    firstName: firstName.value,
                    lastName: lastName.value,
                    address: address.value,
                    workplace: workplace.value,
                    salary: salary.value
                }
                store.dispatch('updateWorker', updatedWorker)
            } else {
                alert('Wypełnij wszystkie pola')
            }
        }
        return {
            firstName,
            lastName,
            address,
            workplace,
            salary,
            saveWorker
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