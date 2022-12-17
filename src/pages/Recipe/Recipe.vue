<template>
  <v-card elevation="2" height="100%">
    <v-card-text>
      {{ recipe }}
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import RecipeService from "@/entities/recipe/RecipeService";
import {RecipeDto} from "@/entities/recipe/dto/RecipeDto";
import {Ref, ref} from "vue";

const route = useRoute()
let recipe: Ref<RecipeDto | null> = ref(null)

if (Number(route.params.id))
  RecipeService.instance.load(Number(route.params.id))
      .then(res => recipe.value = res)

console.log(route.params)
</script>

<style scoped>

</style>