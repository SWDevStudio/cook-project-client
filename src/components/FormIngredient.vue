<template>
  <v-form @submit.prevent="">
    <v-row>
      <v-col cols="12" class="v-col-sm-4">
        <v-text-field
            v-model="form.name"
            label="Название ингредиента"
        />
      </v-col>
      <v-col cols="12" class="v-col-sm-4">
        <v-text-field
            v-model.number="form.weight"
            label="Размер"
        />
      </v-col>
      <v-col cols="12" class="v-col-sm-4">
        <v-select
            v-model="form.weightType"
            :items="weightTypesArr"
        />
      </v-col>
      <v-col cols="12">
        <v-row>
          <v-btn color="primary" class="ml-auto">
            Создать ингредиент
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import {IngredientCreateDto} from "@/entities/ingredient/dto/IngredientDto";
import {WeightIngredient} from "@/entities/ingredient/types";


const weightTypesArr = Object.entries(WeightIngredient).map(i => i[1])

const form: IngredientCreateDto = reactive({
  name: '',
  weight: 0,
  weightType: WeightIngredient.Unit,
})
</script>

<style scoped lang="sass">

</style>