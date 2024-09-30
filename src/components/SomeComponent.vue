<script setup>
import { state } from '@/stores/quizStore'

setTimeout(() => {
  state.name = 'quiz changed!'
}, 3000)
</script>

<template>
  <div>
    <h5>{{ state.name }}</h5>
  </div>
</template>
