import { createStore } from 'vuex'
import { firestore } from '../firebase/config'
import { collection, getDocs, deleteDoc, addDoc, doc, updateDoc } from '@firebase/firestore'
import getRandomWorkers from '../helpers/getRandomWorkers'

export default createStore({
  state: {
    allWorkers: [],
    workers: [],
    by: 'firstName',
    search: '',
    slary: {
      from: 0,
      to: 0
    }
  },
  getters: {
    workers: state => state.workers,
    allWorkers: state => state.allWorkers,
    by: state => state.by,
    search: state => state.search,
  },
  mutations: {
    setWorkers(state, workers) {
      state.workers = workers
    },
    setAllWorkers(state, workers) {
      state.allWorkers = workers
    },
    setBy(state, by) {
      state.by = by
    },
    setSearch(state, search) {
      state.search = search
    } 
  },
  actions: {
    async fetchWorkers({ commit }) {
      const querySnapshot = await getDocs(collection(firestore, 'workers'));
      let workers = [];
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().firstName}`);
        let worker = {
          id: doc.id,
          firstName: doc.data().firstName,
          lastName: doc.data().lastName,
          workplace: doc.data().workplace,
          address: doc.data().address,
          salary: doc.data().salary,
        }
        workers.push(worker);
      });
      commit('setWorkers', workers);
      commit('setAllWorkers', workers);
    },
    async addWorker({ commit }, worker) {
      console.log(worker);
      try {
        await addDoc(collection(firestore, 'workers'), worker);
        this.state.workers.push(worker);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    async updateWorker({ commit }, worker) {
      let docRef = doc(firestore, 'workers', worker.id);
      console.log(docRef);
      await updateDoc(docRef, worker);
      this.dispatch('fetchWorkers');
    },
    async deleteWorker({ commit }, worker) {
      this.state.workers = this.state.workers.filter(w => w.id !== worker.id);
      await deleteDoc(doc(firestore, 'workers', worker.id));
    },
    async addRandomWorkers({ commit }) {
      let workers = getRandomWorkers();
      workers.forEach(worker => {
        this.dispatch('addWorker', worker);
      })
      commit('setWorkers', workers);
    },
    filterWorkers({ commit }) {
      if(this.state.search.length === 0) {
        commit('setWorkers', this.state.allWorkers);
      }
      if(this.state.by === 'firstName') {
        this.state.workers = this.state.allWorkers.filter(w => w.firstName.toLowerCase().includes(this.state.search.toLowerCase()));
      }
      else if(this.state.by === 'lastName') {
        this.state.workers = this.state.allWorkers.filter(w => w.lastName.toLowerCase().includes(this.state.search.toLowerCase()));
      }
      else if(this.state.by === 'workplace') {
        this.state.workers = this.state.allWorkers.filter(w => w.workplace.toLowerCase().includes(this.state.search.toLowerCase()));
      }
      else if(this.state.by === 'address') {
        this.state.workers = this.state.allWorkers.filter(w => w.address.toLowerCase().includes(this.state.search.toLowerCase()));
      }
    }
  },
  modules: {
  }
})
