<script setup>
import { useFlash } from '../composables/useFlash'
//import flash from '../mixins/flash.js'
import { useCounterStore } from '@/stores/CounterStore'
let counter = useCounterStore()
let { flash } = useFlash()
/* export default {
  mixins: [flash]
} */
</script>

<template>
  <!-- <div class="about">
    <h1>This is an about page</h1>
  </div> -->

  <p>
    <button @click="flash('test', 'It Works from About Page')">Click Me</button>
    The count is {{ counter.count }}
  </p>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
