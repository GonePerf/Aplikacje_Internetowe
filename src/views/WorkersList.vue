<script>

import EditWorker from '@/components/EditWorker.vue'
import ConfirmationModal from '@/components/ConfirmationModal.vue'
import { computed, onMounted, ref } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default {
  name: 'WorkersList',

  components: {
    EditWorker,
    ConfirmationModal
  },

  setup() {
    //odnośnik do store
    const store = useStore()
    //zmienna przechowująca wybranego pracownika
    const worker = ref(null)
    //zmienne przechowujące info o włączonych modalach
    const editModal = ref(false)
    const deleteModal = ref(false)
    // Funkcja wykonująca się na początku - pobranie listy pracowników
    onMounted(() => {
      store.dispatch('fetchWorkers')
    })
    
    //funkcje wykonujące się po kliknięciu w akcję określonego pracownika (edycja, usuwanie)
    const deleteWorker = w => {
      worker.value = w
      deleteModal.value = true
    }
    const editWorker = (w) => {
      worker.value = w
      editModal.value = true
    }

    //funkcje wykonujące się po zamknięciu modali przyciskiem confirm
    const confirmDelete = () => {
      store.dispatch('deleteWorker', worker.value)
      worker.value = null
      deleteModal.value = false
    }
    const confirmEdit = (w) => {
      store.dispatch('editWorker', w)
      worker.value = null
    }
    // funkcja wykonująca się po zamknięciu modala przyciskiem cancel
    const toggleModal = () => {
      editModal.value = false
      deleteModal.value = false
    }
    return {
      workers: computed(() => store.getters.workers),
      deleteWorker,
      toggleModal,
      editModal,
      deleteModal,
      confirmDelete,
      confirmEdit,
      editWorker,
      worker
    }
  },
}
</script>
<template>
  <div class="home">
  <table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col">Imie</th>
        <th scope="col">Nazwisko</th>
        <th scope="col">Adres</th>
        <th scope="col">Stanowisko</th>
        <th scope="col">Wynagrodzenie</th>
        <th scope="col">Akcje</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="worker in workers" :key="worker.id">
        <td>{{ worker.firstName }}</td>
        <td>{{ worker.lastName }}</td>
        <td>{{ worker.address }}</td>
        <td>{{ worker.workplace }}</td>
        <td><b>{{ worker.salary }}</b> zł</td>
        <td>
          <button @click="editWorker(worker)">
            <span class="material-icons edit-icon">edit</span>
          </button>
          <button @click="deleteWorker(worker)">
            <span class="material-icons delete">delete</span>
          </button>
        </td>
      </tr>
    </tbody>
  </table>

  <div v-if="editModal">
    <EditWorker :worker="worker" @closeModal="toggleModal" />
  </div>
  <div>
    <ConfirmationModal v-if="deleteModal" @confirm="confirmDelete" :worker="worker" @cancel="toggleModal"  />
  </div>
  
  </div>
</template>
