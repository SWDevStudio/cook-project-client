<template>
  <v-form @submit.prevent="onSubmit">
    <v-row>
      <v-col cols="12">
        <v-text-field
            label="Название"
            v-model="form.name"
        />
      </v-col>
      <v-col cols="12">
        <v-textarea
            label="Описание"
            v-model="form.description"
        />
      </v-col>
      <v-col cols="12">

      </v-col>
      <v-col cols="12">
        <FormIngredient/>
      </v-col>
    </v-row>


  </v-form>
</template>

<script setup lang="ts">

import {reactive, ref, Ref} from "vue";
import {RecipeCreateDto} from "@/entities/recipe/dto/RecipeDto";
import FormIngredient from "@/components/FormIngredient.vue";
import {IngredientDto} from "@/entities/ingredient/dto/IngredientDto";
import IngredientService from "@/entities/ingredient/IngredientService";

const props = defineProps<{
  defaultForm?: object
}>()

const ingredient: Ref<IngredientDto[]> = ref([])

IngredientService.instance.loadAll().then(r => {
  ingredient.value = r
})

const form: RecipeCreateDto = reactive({
  name: '',
  ingredients: [],
  steps: [],
  description: ''
})

const onSubmit = () => {

}

</script>

<style scoped>

</style>