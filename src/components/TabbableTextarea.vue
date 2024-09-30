<script setup>
defineProps({
  modelValue: String
})

let emit = defineEmits(['update:modelValue'])

function onTabPress(e) {
  let textarea = e.target

  let val = textarea.value,
    start = textarea.selectionStart,
    end = textarea.selectionEnd

  textarea.value = val.substring(0, start) + '\t' + val.substring(end)

  textarea.selectionStart = textarea.selectionEnd = start + 1
}
</script>

<template>
  <textarea
    class="border rounded border-gray-600 text-black"
    @keydown.tab.prevent="onTabPress"
    @keyup="emit('update:modelValue', $event.target.value)"
    v-text="modelValue"
  />
</template>
