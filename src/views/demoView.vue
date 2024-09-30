<script setup>
import { useStorage } from '@/composables/useStorage'
import TabbableTextarea from '@/components/TabbableTextarea.vue'
import { ref } from 'vue'
import SomeComponent from '../components/SomeComponent.vue'

let food = useStorage('food', 'tacos')

let comment = ref('initial textarea value')

setTimeout(() => {
  comment.value = 'it works!'
}, 3000)
</script>

<template>
  <main>
    <p>
      What is your favorite food?
      <input class="border rounded border-gray-600 text-black" type="text" v-model="food" />
    </p>

    <form>
      <TabbableTextarea v-model="comment" style="width: 100%; height: 300px" />
    </form>

    <SomeComponent />
  </main>
</template>
