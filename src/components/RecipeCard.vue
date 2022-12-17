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


      <v-dialog
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ props }">
          <v-btn
              color="primary"
              rounded
              v-bind="props"
          >
            Редактировать
          </v-btn>
        </template>
        <v-card>
          <v-toolbar
              dark
              color="primary"
          >
            <v-btn
                icon
                dark
                @click="dialog = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Settings</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn
                  dark
                  text
                  @click="dialog = false"
              >
                Save
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text>
            <FormRecipe />
          </v-card-text>

        </v-card>
      </v-dialog>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import {RecipeDto} from "@/entities/recipe/dto/RecipeDto";
import foodImg from "@/assets/img/food.png"
import HttpService from "@/assets/service/HttpService";
import {ref, Ref} from "vue";
import FormRecipe from "@/components/FormRecipe.vue";

const props = defineProps<{
  recipe: RecipeDto
}>()

let dialog: Ref<boolean> = ref(false)

let notifications: Ref<boolean> = ref(false),
    sound: Ref<boolean> = ref(true),
    widgets: Ref<boolean> = ref(false)

const getFullPath = (path: string) => path ? HttpService.instance.baseURL + path : ''
</script>

<style scoped>

</style>