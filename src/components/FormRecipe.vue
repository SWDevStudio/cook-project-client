<template>
  <v-form @submit.prevent="onSubmit">
    hello world
  </v-form>
</template>

<script setup lang="ts">

const props = defineProps<{
  defaultForm: object
}>()



const onSubmit = () => {

}

</script>

<style scoped>

</style>