<template>
  <v-card elevation="2" height="100%"  class="overflow-auto" >
    <v-card-title>Список ваших рецептов</v-card-title>
    <v-card-text>
      <v-row>
        <v-col v-for="recipe in recipes" :key="recipe.id" class="v-col-auto">
          <RecipeCard :recipe="recipe"/>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import RecipeCard from "@/components/RecipeCard.vue";
import {ref, Ref} from "vue";
import {RecipeDto} from "@/entities/recipe/dto/RecipeDto";
import RecipeService from "@/entities/recipe/RecipeService";
import FormRecipe from "@/components/FormRecipe.vue";

let recipes: Ref<RecipeDto[]> = ref([])

RecipeService.instance.loadAll()
    .then(r => recipes.value = r)
    .catch(() => [])
</script>

<style scoped>

</style>