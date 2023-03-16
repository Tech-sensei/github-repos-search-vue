<template>
  <section class="repo">
    <article class="repo__container container">
      <div className="repo__container-title">
        <h3 className="repo__container-title--text">{{ repo.name }}</h3>
      </div>

      <div class="repo__container-contents">
        <figure>
          <img src="../assets/repo.jpg" alt="single repo" />
        </figure>

        <div class="repo__details">
          <h3>Owner: {{ repo.owner.login }}</h3>
          <h5 class="repo-desc">
            {{
              repo.description ||
              " From ideation to execution, my repositories highlights my ability to translate complex technical requirements into elegant solutions."
            }}
          </h5>

          <h5>
            Link:
            <a :href="repo.html_url" target="_blank"> Source code</a>
          </h5>

          <h5>Used Language: {{ repo.language }}</h5>
        </div>
      </div>
      <router-link to="/repositories" class="repo-link">
        <button>Back</button>
      </router-link>
    </article>
  </section>
</template>

<!--  -->
<script>
export default {
  name: "AppRepo",

  props: {
    repoId: {
      type: Number,
      required: true,
    },

    repos: {
      type: Array,
      required: true,
    },
  },

  computed: {
    repo() {
      return this.repos.find((repo) => repo.id === this.repoId);
    },
  },
};
</script>

<!--  -->
<style scoped lang="scss">
.repo {
  &__container {
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
    }

    &-contents {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      gap: 3rem;

      @media screen and (min-width: 600px) {
        flex-direction: row;
        align-items: flex-start;
      }

      figure {
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
        padding: 1rem;
        border-radius: 0.7rem;

        img {
          width: 250px;
          height: 250px;
        }
      }

      .repo__details {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        text-align: center;
        @media screen and (min-width: 767px) {
          text-align: initial;
        }
        .repo-desc {
          @media screen and (min-width: 992px) {
            width: 60%;
          }
        }
        h5 {
          a {
            color: var(--clr-grey-5);

            &:hover {
              color: var(--clr-grey-3);
            }
          }
        }
      }
    }
    .repo-link {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: var(--mb-2);
    }
    button {
      border-radius: 5px;
      border-color: transparent;
      padding: 0.25rem 0.5rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      background: var(--clr-primary-5);
      color: var(--clr-white);
      transition: var(--transition);
      cursor: pointer;

      &:hover {
        background: var(--clr-primary-8);
        color: var(--clr-primary-1);
      }
    }
  }
}
</style>
