<script setup>
// import team from '@/team.json'
import TeamHeader from '@/components/Teams/TeamHeader.vue'
import TeamMembers from '@/components/Teams/TeamMembers.vue'
import TeamFooter from '@/components/Teams/TeamFooter.vue'
import { useTeamStore } from '@/stores/TeamStore'
import Modal from '@/components/Modal.vue'
import { ref } from 'vue'

let team = useTeamStore()
team.fill()

// Example of calling a store action.
setTimeout(() => {
  team.grow(25)
}, 2000)
</script>

<template>
  <div class="grid m-2 p-2">
    <div class="place-self-center">
      <TeamHeader />

      <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
        <TeamMembers />
      </div>

      <TeamFooter />
    </div>
  </div>
</template>
