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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav button {
  font-weight: bold;
  color: #2c3e50;
  background: none;
  border-radius: 12px;
  border-color: #42b983;
  margin: 10px;
}

#nav button:hover {
  color: #42b983;
}
.searchbar {
  background: white;
  position: fixed;
  display: flex;
  top: 10px;
  right: 30px;
}
.salary {
  background: white;
  position: fixed;
  display: flex;
  align-items: center;
  top: 50px;
  right: 30px;
}
.salary input {
  width: 80px;
  margin: 10px;
}
.searchbar > select {
  height: 30px;
  border-color: black;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  padding: 4px;
  
}
.searchbar > input {
  height: 30px;
  border-color: #42b983;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  text-align: center;
  padding: 2px 10px;
}
.searchbar > input:focus {
  outline: none;
}
</style>
