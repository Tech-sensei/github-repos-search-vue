<template>
  <main>
    <article class="repos__container container">
      <div className="repos__container-title">
        <h3 className="repos__container-title--text">Latest Creation</h3>
        <p>
          From ideation to execution, my repositories highlights my ability to
          translate complex technical requirements into elegant solutions.
        </p>
      </div>

      <div class="repos__container-contents">
        <router-link
          v-for="repo in displayedRepos"
          :to="{ name: 'Repo', params: { id: repo.id } }"
          :key="repo.id"
          class="repos__container-contents--item"
        >
          <figure>
            <img src="../assets/logo.png" alt="Repos image" />
          </figure>

          <div className="repos__container-contents--item-info">
            <h3>{{ repo.name }}</h3>
          </div>
        </router-link>
      </div>

      <div class="repos__container-pagination">
        <button v-if="startPage > 1" @click="changePage(startPage - 1)">
          ⏪
        </button>
        <button
          v-for="page in displayedPages"
          :key="page"
          :class="{ active: page === currentPage }"
          @click="changePage(page)"
        >
          {{ page }}
        </button>
        <button
          v-if="endPage < totalPages && !isLoading"
          @click="changePage(endPage + 1)"
        >
          ⏩
        </button>
      </div>
    </article>
  </main>
</template>

<script>
export default {
  name: "AppRepos",

  data() {
    return {
      search: "",
      currentPage: 1,
      reposPerPage: 6,
      startPage: 1,
      endPage: 5,
    };
  },

  props: {
    isLoading: Boolean,
    searchGithubUser: Function,
    repos: Array,
  },

  computed: {
    totalPages() {
      return Math.ceil(this.repos.length / this.reposPerPage);
    },

    displayedPages() {
      const pages = [];
      for (let i = this.startPage; i <= this.endPage; i++) {
        pages.push(i);
      }
      return pages;
    },

    displayedRepos() {
      const startIndex = (this.currentPage - 1) * this.reposPerPage;
      const endIndex = startIndex + this.reposPerPage;
      return this.repos.slice(startIndex, endIndex);
    },
  },

  methods: {
    changePage(page) {
      if (page === "next") {
        if (this.currentPage < this.totalPages) {
          this.currentPage += 1;
          if (this.currentPage > this.endPage) {
            this.startPage += 1;
            this.endPage += 1;
          }
        }
      } else if (page === "prev") {
        if (this.currentPage > 1) {
          this.currentPage -= 1;
          if (this.currentPage < this.startPage) {
            this.startPage -= 1;
            this.endPage -= 1;
          }
        }
      } else {
        this.currentPage = page;
        if (page > this.endPage) {
          this.startPage += 1;
          this.endPage += 1;
        } else if (page < this.startPage) {
          this.startPage -= 1;
          this.endPage -= 1;
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
.repos__container {
  display: flex;
  flex-direction: column;
  gap: 4rem;

  &-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h3 {
      font-size: 2rem;
      font-weight: var(--font-medium);
      color: var(--clr-grey-3);
      text-transform: capitalize;
      font-family: fantasy;
    }

    p {
      color: var(--clr-grey-7);
    }

    span {
      color: var(--clr-primary-10);
      font-weight: var(--font-bold);
    }
  }

  &-contents {
    display: grid;
    grid-gap: 1rem;
    margin-bottom: 2rem;

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    &--item {
      padding: 1rem;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      transition: var(--transition);
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
      cursor: pointer;

      &:hover {
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
      }

      &-info {
        h3 {
          color: var(--clr-grey-3);
        }
      }
    }
  }

  &-pagination {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    background-color: var(--clr-white);
    width: 100%;
    padding: 0.6rem 0;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);

    button {
      background-color: var(--clr-grey-9);
      border: none;
      color: var(--clr-grey-1);
      padding: 0.5rem 0.8rem;
      font-size: 1.2rem;
      margin: 0 5px;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;
      border-radius: var(--radius);

      &:hover {
        background-color: var(--clr-grey-7);
      }

      &.active {
        background-color: var(--clr-primary-9);
        color: var(--clr-grey-2);
      }
    }
  }
}
</style>
