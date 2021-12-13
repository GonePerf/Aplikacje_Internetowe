<template>
  <div class="backdrop" @click.self="$emit('closeModal')">
      <div class="modal-content">
          <h1>Edycja pracownika</h1>
          <p>ID: {{ worker.id }}</p>
          <input type="text" :placeholder="worker.firstName" v-model="firstName" maxlength="20">
          <p class="error" v-if="firstNameError">Niepoprawidłowa ilosc znakow</p>
          <input type="text" :placeholder="worker.lastName" v-model="lastName" maxlength="20">
          <p class="error" v-if="lastNameError">Niepoprawidłowa ilosc znakow</p>
          <input type="text" :placeholder="worker.address" v-model="address" maxlength="50">
          <p class="error" v-if="addressError">Niepoprawidłowa ilosc znakow</p>
          <input type="text" :placeholder="worker.workplace" v-model="workplace" maxlength="20">
          <p class="error" v-if="workplaceError">Niepoprawidłowa ilosc znakow</p>
          <input type="number" :placeholder="worker.salary" v-model="salary" maxlength="9">
          <p class="error" v-if="salaryError">Niepoprawidłowa ilosc znakow</p>
          <div>
            <button class="anuluj" @click="$emit('closeModal')">Anuluj</button>
            <button class="dodaj" @click="saveWorker">Zapisz</button>
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
    setup(props, { emit }) {
        const store = useStore()
        const firstName = ref('');
        const firstNameError = ref(false);
        const lastName = ref('');
        const lastNameError = ref(false);
        const address = ref('');
        const addressError = ref(false);
        const workplace = ref('');
        const workplaceError = ref(false);
        const salary = ref('');
        const salaryError = ref(false);
        const saveWorker = () => {
            if(firstName.value && lastName.value && address.value && workplace.value && salary.value){
                
                if(firstName.value.length < 3 || firstName.value.length > 20){
                    firstNameError.value = true;
                }
                else if(lastName.value.length < 3 || lastName.value.length > 20){
                    firstNameError.value = false;
                    lastNameError.value = true;
                }
                else if(address.value.length < 8 || address.value.length > 50){
                    firstNameError.value = false;
                    lastNameError.value = false;
                    addressError.value = true;
                }
                else if(workplace.value.length < 3 || workplace.value.length > 20){
                    firstNameError.value = false;
                    lastNameError.value = false;
                    addressError.value = false;
                    workplaceError.value = true;
                }
                else if(salary.value.length < 4) {
                    firstNameError.value = false;
                    lastNameError.value = false;
                    addressError.value = false;
                    workplaceError.value = false;
                    salaryError.value = true;
                }
                else {
                    firstNameError.value = false;
                    lastNameError.value = false;
                    addressError.value = false;
                    workplaceError.value = false;
                    salaryError.value = false;
                }

                
                if(firstNameError.value === false && lastNameError.value === false && addressError.value === false && workplaceError.value === false && salaryError.value === false){
                    let updatedWorker = {
                        id: props.worker.id,
                        firstName: firstName.value,
                        lastName: lastName.value,
                        address: address.value,
                        workplace: workplace.value,
                        salary: salary.value
                    }
                    store.dispatch('updateWorker', updatedWorker)
                    emit('closeModal')
                }
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
            saveWorker,
            firstNameError,
            lastNameError,
            addressError,
            workplaceError,
            salaryError
        }
    }
}
</script>
