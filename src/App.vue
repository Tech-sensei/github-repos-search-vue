<template>
  <AppNavbar />
  <router-view
    :github-users="githubUsers"
    :followers="followers"
    :requests="requests"
    :error="error"
    :isLoading="isLoading"
    :searchGithubUser="searchGithubUser"
    :repos="repos"
  />
</template>

<script>
import AppNavbar from "./components/Navbar.vue";
import { mockFollowers, mockUser, mockRepos } from "./data";
const rootUrl = "https://api.github.com";
import axios from "axios";

export default {
  name: "App",

  data() {
    return {
      githubUsers: mockUser,
      followers: mockFollowers,
      repos: mockRepos,
      requests: 0,
      isLoading: false,
      error: { show: false, msg: "" },
    };
  },

  components: {
    AppNavbar,
  },

  methods: {
    // search user

    async searchGithubUser(user = "Tech-sensei") {
      try {
        this.isLoading = true;
        this.toggleError(false); // set error flag to false initially
        const response = await axios(`${rootUrl}/users/${user}`).catch((err) =>
          console.log(err.message)
        );
        if (response) {
          this.githubUsers = response.data;
          const { login, followers_url } = this.githubUsers;
          // repos
          axios(`${rootUrl}/users/${login}/repos?per_page=100`).then(
            (response) => (this.repos = response.data)
          );
          // followers
          axios(`${followers_url}?per_page=100`).then(
            (response) => (this.followers = response.data)
          );
          this.toggleError(false); // set error flag to false if response is successful
        } else {
          this.toggleError(true, "there is no user with that username");
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        this.isLoading = false;
        this.checkRequests();
      }
    },

    // check rate
    checkRequests() {
      axios(`${rootUrl}/rate_limit`)
        .then(({ data }) => {
          let {
            rate: { remaining },
          } = data;
          this.requests = remaining;
          if (remaining === 0) {
            // throw an error
            this.toggleError(
              true,
              "sorry, you have exceeded your hourly rate limit!"
            );
          }
        })
        .catch((err) => console.log(err));
    },

    // error
    toggleError(show = false, msg = "") {
      this.error = { show, msg };
    },
  },

  created() {
    this.searchGithubUser();
    this.checkRequests();
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
}
/*===== GOOGLE FONTS =====*/
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

/*===== VARIABLES CSS =====*/
:root {
  --header-height: 4rem;
  --app-height: calc(100% - 125px);

  /*========== Colors ==========*/
  /* dark shades of primary color*/
  --clr-primary-1: hsl(185, 91%, 17%);
  --clr-primary-2: hsl(185, 84%, 25%);
  --clr-primary-3: hsl(185, 81%, 29%);
  --clr-primary-4: hsl(185, 77%, 34%);
  /* primary/main color */
  --clr-primary-5: hsl(185, 62%, 45%);
  /* lighter shades of primary color */
  --clr-primary-6: hsl(185, 57%, 50%);
  --clr-primary-7: hsl(184, 65%, 59%);
  --clr-primary-8: hsl(184, 80%, 74%);
  --clr-primary-9: hsl(185, 94%, 87%);
  --clr-primary-10: hsl(186, 100%, 94%);
  /* darkest grey - used for headings */
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-2: hsl(211, 39%, 23%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: hsl(209, 28%, 39%);
  /* grey used for paragraphs */
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-6: hsl(209, 23%, 60%);
  --clr-grey-7: hsl(211, 27%, 70%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: hsl(206, 33%, 96%);
  --clr-white: #fff;
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-green-dark: hsl(125, 67%, 44%);
  --clr-green-light: hsl(125, 71%, 66%);
  --clr-black: #222;

  /*========== Font-size/family ==========*/
  --body-font: "Poppins", sans-serif;
  --biggest-font-size: 2.25rem;
  --h1-font-size: 1.5rem;
  --h2-font-size: 1.25rem;
  --h3-font-size: 1rem;
  --normal-font-size: 0.938rem;
  --small-font-size: 0.853rem;
  --smaller-font-size: 0.75rem;

  /*========== Font weights ==========*/
  --font-medium: 500;
  --font-semi-bold: 600;
  --font-bold: 700;

  /*========== Margins ==========*/
  --mb-1: 0.5rem;
  --mb-2: 1rem;
  --mb-3: 1.5rem;
  --mb-4: 2rem;
  --mb-5: 2.5rem;
  --mb-6: 5rem;

  /*========== z index ==========*/
  --z-tooltip: 10;
  --z-fixed: 100;
  --z-modal: 200;

  /*========== constant css ==========*/
  --transition: all 0.3s ease-in-out;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --radius: 0.7rem;
  --spacing: 0.1rem;
}

@media screen and (min-width: 768px) {
  :root {
    --biggest-font-size: 4rem;
    --h1-font-size: 2rem;
    --h2-font-size: 1.5rem;
    --h3-font-size: 1.25rem;
    --normal-font-size: 1rem;
    --small-font-size: 0.875rem;
    --smaller-font-size: 0.813rem;
  }
}

/*========== BASE ==========*/
*,
::before,
::after {
  box-sizing: border-box;
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
}

html {
  font-size: 95%;
}

body {
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  background: var(--clr-grey-10);
  color: var(--clr-grey-5);
  transition: var(--transition);
  position: relative;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3,
p,
ul {
  margin: 0;
}

ul {
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

/*=============== REUSABLE CSS CLASSES ===============*/
.section {
  padding: 4.5rem 0 1rem;
}

.section__title,
.section__title-center {
  font-size: var(--h2-font-size);
  color: var(--first-color);
  text-align: center;
  margin-bottom: var(--mb-1);
}

/*========== LAYOUT ==========*/
.container {
  max-width: 1200px;
  width: calc(100% - 3rem);
  margin-inline: auto;
}

.grid {
  display: grid;
  gap: 1.5rem;
}

/*=============== SCROLL BAR ===============*/
::-webkit-scrollbar {
  width: 0rem;
  border-radius: 0.2rem;
  background-color: transparent;
  transition: var(--transition);
}

::-webkit-scrollbar-thumb {
  background-color: var(--clr-primary-1);
  border-radius: 0.5rem;
}

/*=============== LOADING ===============*/

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
}

.spinner {
  height: 2rem;
  width: 2rem;
  fill: var(--clr-primary-10);
  animation: rotate 2s infinite linear;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
