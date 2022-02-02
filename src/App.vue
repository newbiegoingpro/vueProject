<template>
  <v-app>
    <Header />
    <router-view />
  </v-app>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "App",
  components: {
    Header,
  },
  data: function(){
    return{
      users: [],
    }
  },
  mounted() {
    this.$store.dispatch("fetchUsers"); //вызывается при монтировании
  },
};
</script>
