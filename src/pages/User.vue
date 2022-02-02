<template>
  <v-container>
    Страница {{ this.userObj.name }}
    <p class="ma-0"><span>E-Mail: </span>{{ this.userObj.email }}</p>
    <p class="ma-0"><span>Юзернейм: </span>{{ this.userObj.username }}</p>
    <ul class="list pa-0">
      <span>Домашний адрес:</span>
      <li
        v-for="(value, name) in this.userObj.address"
        :key="name"
        v-show="name != 'geo'"
      >
        {{ name }} : {{ value }}
      </li>
    </ul>

    <p><span>Контактный телефон: </span>{{ this.userObj.phone }}</p>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      userObj: {},
    };
  },
  mounted() {
    if (localStorage.user) {
      this.userObj = JSON.parse(localStorage.user);
    } else {
      this.userObj = this.$store.getters.getAllUsers.find(
        (u) => u.id == this.$route.params.id
      ); // находим нужного пользователя
    }
  },

  beforeDestroy() {
    localStorage.removeItem("user"); // данные юзера удаляю из хранилища при выходе со страницы
  },
};
</script>

<style>
.list {
  list-style: none;
  padding: 0;
}
li {
  padding-left: 5px;
}
</style>