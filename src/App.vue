<template>
  <div id="nav">
    <button @click="setRandomWorkers">
      GENERUJ 10 PRACOWNIKÓW
    </button>
    <button @click="addNewWorker">DODAJ NOWEGO PRACOWNIKA</button>
  </div>
  <div class="searchbar">
    <select @change="changeBy" v-model="by">
      <option value="firstName" selected>Imie</option>
      <option value="lastName">Nazwisko</option>
      <option value="address">Adres</option>
      <option value="workplace">Stanowisko</option>
    </select>
    <input type="text" @input="setSearch" v-model="search" placeholder="Szukaj">
  </div>
  <router-view/>
  <AddWorker @closeModal="closeModal" v-if="addingModal"/>
</template>
<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
import AddWorker from './components/AddWorker.vue'
export default {
  components: {
    AddWorker
  },
  setup() {
    const store = useStore()
    const setRandomWorkers = () => {
      store.dispatch('addRandomWorkers')
    }
    const by = ref('firstName');
    const search = ref('');
    const salaryFrom = ref('');
    const salaryTo = ref('');

    const addingModal = ref(false);

    const changeBy = () => {
      store.commit('setBy', by.value)
    }
    const salaryChange = () => {
      store.commit('setSalary', {
        from: parseInt(salaryFrom.value),
        to: parseInt(salaryTo.value)
      })
    }
    const closeModal = () => {
      addingModal.value = false
    }
    const setSearch = () => {
      store.commit('setSearch', search.value)
      store.dispatch('filterWorkers')
    }
    const addNewWorker = () => {
      addingModal.value = true
    }
    return {
      setRandomWorkers,
      by,
      search,
      addingModal,
      addNewWorker,
      closeModal,
      changeBy,
      setSearch,
      salaryChange
    }
  },
}
</script>

