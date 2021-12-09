

<script>
import EdytujPracownika from '@/components/EdytujPracownika.vue'
import { computed, onMounted, ref } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
  name: 'Home',
  components: {
    EdytujPracownika
  },
  setup() {
    const store = useStore()
    const worker = ref(null)
    onMounted(() => {
      store.dispatch('fetchWorkers')
    })
    const editModal = ref(false)

    const deleteWorker = worker => {
      console.log(worker)
      store.dispatch('deleteWorker', worker)
    }
    const editWorker = (w) => {
      worker.value = w
      editModal.value = true
    }
    const closeModal = () => {
      editModal.value = false
    }
    return {
      workers: computed(() => store.getters.workers),
      deleteWorker,
      closeModal,
      editModal,
      editWorker,
      worker
    }
  },
}
</script>
<template>
  <div class="home">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Address</th>
        <th scope="col">Position</th>
        <th scope="col">Salary</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="worker in workers" :key="worker.id">
        <td>{{ worker.firstName }}</td>
        <td>{{ worker.lastName }}</td>
        <td>{{ worker.address }}</td>
        <td>{{ worker.workplace }}</td>
        <td>{{ worker.salary }} zł</td>
        <td>
          <button @click="editWorker(worker)">
            <span class="material-icons">edit</span>
          </button>
          <button @click="deleteWorker(worker)">
            <span class="material-icons delete">delete</span>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <div v-if="editModal">
    <EdytujPracownika :worker="worker" @closeModal="closeModal" />
  </div>
  
  </div>
</template>
<style scoped>
td > button {
  background: transparent;
  border: none;
}
td > button:hover {
  color: #7b7b7b;
}
table.table{
  padding: 10px;
}
tr:hover {
  background: #fafafa;
  cursor: pointer;
}
thead {
  background: #fafafa;
}
.delete:hover {
  color: red;
}
.edit:hover {
  color: #7b7b7b;
}
</style>
