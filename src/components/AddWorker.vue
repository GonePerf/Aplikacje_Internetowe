<template>
  <div class="backdrop" @click.self="$emit('closeModal')">
      <div class="modal-content">
          <h1>Dodawanie pracownika</h1>
          <input type="text" placeholder="Imie" v-model="firstName" maxlength="20">
          <p class="error" v-if="firstNameError">Niepoprawidłowa ilosc znakow</p>
          <input type="text" placeholder="Nazwisko" v-model="lastName" maxlength="20">
            <p class="error" v-if="lastNameError">Niepoprawidłowa ilosc znakow</p>
          <input type="text" placeholder="Adres" v-model="address" maxlength="50">
            <p class="error" v-if="addressError">Niepoprawidłowa ilosc znakow</p>
          <input type="text" placeholder="Stanowisko" v-model="workplace" maxlength="20">
            <p class="error" v-if="workplaceError">Niepoprawidłowa ilosc znakow</p>
          <input type="number" placeholder="Pensja" v-model="salary" maxlength="9">
          <div>
            <button class="anuluj" @click="$emit('closeModal')">Anuluj</button>
            <button class="dodaj" @click="addNewWorker">Dodaj</button>
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
        const addNewWorker = () => {
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
                    emit('closeModal')
                    store.dispatch('addWorker', {
                        firstName: firstName.value,
                        lastName: lastName.value,
                        address: address.value,
                        workplace: workplace.value,
                        salary: salary.value
                    })
                    
                }
                
            }
            else {
                alert('Wypełnij wszystkie pola')
            }
        }
        return {
            firstName,
            lastName,
            address,
            workplace,
            salary,
            addNewWorker,
            firstNameError,
            lastNameError,
            addressError,
            workplaceError,
            salaryError
        }
    }
}
</script>
