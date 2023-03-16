<template>
  <UserSearch
    :requests="requests"
    :error="error"
    :isLoading="isLoading"
    :searchGithubUser="searchGithubUser"
  />

  <div v-if="isLoading" class="loading container">
    <img src="../assets/spinner.svg" alt="spinner" class="spinner" />
  </div>

  <div v-if="!isLoading" class="home__user-container">
    <UserInfo :github-users="githubUsers" />
    <AppUser :github-users="githubUsers" :followers="followers" />
  </div>
</template>

<!-- Script Logic for Home -->
<script>
import UserSearch from "../components/UserSearch.vue";
import UserInfo from "../components/UserInfo.vue";
import AppUser from "../components/User.vue";

export default {
  name: "AppHome",

  components: {
    UserSearch,
    UserInfo,
    AppUser,
  },

  props: {
    githubUsers: Object,
    followers: Array,
    requests: Number,
    error: Object,
    isLoading: Boolean,
    searchGithubUser: Function,
    repos: Array,
  },
};
</script>

<!-- Styles For the Home -->
<style lang="scss"></style>
