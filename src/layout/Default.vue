<template>
  <v-card>
    <v-layout>
      <v-app-bar color="primary">
        <v-app-bar-title>Cook client</v-app-bar-title>
      </v-app-bar>
      <v-navigation-drawer
          expand-on-hover
          v-model="drawer"
          :rail="rail"
          permanent
          @click="rail = false"
      >
        <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
            title="John Leider"
            nav
        >
          <template v-slot:append>
            <v-btn
                variant="text"
                icon="mdi-chevron-left"
                @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item to="/recipe" prepend-icon="mdi-home-city" title="Рецепты" />
          <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 100vh">
        <v-container fluid class="fill-height">
          <router-view />
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
import {ref} from "vue";

let drawer = true
let items = [
  {title: 'Home', icon: 'mdi-home-city'},
  {title: 'My Account', icon: 'mdi-account'},
  {title: 'Users', icon: 'mdi-account-group-outline'},
]
let rail = true
</script>

<style scoped>

</style>