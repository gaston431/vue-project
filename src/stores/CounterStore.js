import { defineStore } from 'pinia'

export let useCounterStore = defineStore('counter', {
  // data
  state() {
    return {
      count: 5
    }
  },

  // methods
  actions: {
    increment() {
      if (this.count < 10) {
        this.count++
      }
    }
  },

  // computed
  getters: {
    remaining() {
      return 10 - this.count
    }
  }
})

/* import { reactive } from 'vue'

export let counter = reactive({
  // state
  count: 0,

  // action
  increment() {
    if (this.count >= 10) {
      return
    }

    this.count++
  }
}) */
