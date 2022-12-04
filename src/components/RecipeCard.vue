<template>
  <v-card
      class="flex"
      max-width="300px"
      min-width="250px"
  >
    <v-img
        :src="getFullPath(recipe.attributes.image.data?.attributes.url) || foodImg"
        height="200px"
        cover
    />

    <v-card-title>
      {{ recipe.attributes.name }}
    </v-card-title>

    <v-card-actions>
      <v-btn
          color="primary"
          rounded
      >
        Подробнее
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import {RecipeDto} from "@/entities/recipe/dto/RecipeDto";
import foodImg from "@/assets/img/food.png"
import HttpService from "@/assets/service/HttpService";

const props = defineProps<{
  recipe: RecipeDto
}>()

const getFullPath = (path: string) => path ? HttpService.instance.baseURL + path : ''
</script>

<style scoped>

</style>