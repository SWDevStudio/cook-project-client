<template>
  <div class="flex-row">
    <div>
    </div>
    <div>
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">

const items = [
  {
    label: 'Options',
    items: [{label: 'New', icon: 'pi pi-fw pi-plus', command:() => {} },
      {label: 'Delete', icon: 'pi pi-fw pi-trash', url: 'https://www.primetek.com.tr'}]
  },
  {
    label: 'Account',
    items: [{label: 'Options', icon: 'pi pi-fw pi-cog', to: '/options'},
      {label: 'Sign Out', icon: 'pi pi-fw pi-power-off', to: '/logout'} ]
  }
];
</script>

<style scoped>

</style>