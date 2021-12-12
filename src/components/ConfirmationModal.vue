<template>
  <div class="backdrop" @click.self="$emit('cancel')">
      <div class="modal-content">
          <h1>Potwierdź operację</h1>
          <p>Czy na pewno chcesz usunąć pracownika {{ worker.firstName }} {{ worker.lastName }}?</p>
          <div>
            <button class="anuluj" @click="$emit('cancel')">Anuluj</button>
            <button class="dodaj" @click="$emit('confirm')">Potwierdzam</button>       
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: ['message', 'worker'],
    emits: ['confirm', 'cancel']
}
</script>

<style>
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
        margin: 180px auto;
        background: url('../assets/bckg.jpg');
        background-size: cover;
        border-radius: 10px;
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