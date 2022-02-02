<template>
  <v-container class="mt-16">
    <h1 class="heading">Список пользователей</h1>
    <v-simple-table class="table">
      <thead></thead>
      <tbody>
        <tr
          v-for="user in $store.getters.getAllUsers"
          v-bind:user="user"
          v-bind:key="user.id"
        >
          <td class="name">{{ user.name }}</td>
          <td v-on:click="saveUserLocally(user.id)"><router-link :to="`/user/${user.id}`" >Подробно</router-link></td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  data: function () {
    return {
      user: {},
    };
  },
  methods: {
   
    saveUserLocally(user){
      let userData = this.$store.getters.getAllUsers.find((u) => u.id == user)
      localStorage.setItem('user', JSON.stringify(userData)) //сохраняю юзера в локальное хранилище чтобы данные сохранялись при рефреше стр юзера
    }
  }
  };
</script>

<style>
.heading {
  font-size: 22px;
  padding-bottom: 15px;
  padding-left: 13px;
}
.name {
  font-size: 10px;
}
</style>