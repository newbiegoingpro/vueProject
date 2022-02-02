<template>
  <v-container fluid class="pa-0">
    <v-app-bar color="accent" dark>
      <h1 v-if="$route.path === '/'" color="primary">VUE EXAMPLE</h1>
      <router-link v-else style="color: white; text-decoration: none" to="/">
        <v-btn color="primary">
          <span class="pr-2">&larr;</span>На Главную
        </v-btn>
      </router-link>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {};
</script>