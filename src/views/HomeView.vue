<script setup>
import TheWelcome from '../components/TheWelcome.vue'
// import { ref, onMounted } from 'vue'
import { useFlash } from '../composables/useFlash'

let { flash } = useFlash()

// let message = ref('Hello World!')

// onMounted(() => {
//   alert('test')
// })

// setTimeout(() => {
//   message.value = 'Changed!'
// }, 3000)

// let doSomething = () => {
//   alert('click')
// }
</script>

<template>
  <main>
    <TheWelcome />

    <!-- <p>{{ message }}</p>
    <p>
      <input type="text" v-model="message" />
    </p>
    <button @click="doSomething">Click Me</button> -->

    <p>
      <button @click="flash('test', 'It Works', 'info')">Click Me</button>
    </p>
  </main>
</template>
