<template>
  <section class="users">
    <article class="users__container container">
      <div class="users__container-contents">
        <div class="users__container-contents--left">
          <header class="header">
            <img :src="avatarUrl" :alt="name" />
            <div>
              <h4>{{ name }}</h4>
              <p>@{{ twitterUsername || "john-doe" }}</p>
            </div>
            <a :href="htmlUrl" target="_blank"> follow </a>
          </header>

          <p class="bio">{{ bio }}</p>

          <div class="links">
            <p>
              <i class="fa fa-building" aria-hidden="true"></i>
              {{ company || "CleanCache" }}
            </p>
            <p>
              <i class="fa fa-location-arrow" aria-hidden="true"></i>
              {{ location || "London, United Kingdom" }}
            </p>
            <a href="https://tobiakinpelu.com">
              <i class="fa fa-link" aria-hidden="true"></i>
              {{ blog || "Link.com" }}
            </a>
          </div>
        </div>

        <div class="users__container-contents--right">
          <div class="followers">
            <article v-for="follower in followers" :key="follower.id">
              <img :src="follower.avatar_url" :alt="follower.login" />
              <div>
                <h4>{{ follower.login }}</h4>
                <a :href="follower.html_url">{{ follower.html_url }}</a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>
<script>
export default {
  name: "AppUser",

  props: {
    githubUsers: Object,
    followers: Array,
  },

  computed: {
    // Destructure the githubUsers object in computed properties
    name() {
      const { name } = this.githubUsers;
      return name;
    },
    avatarUrl() {
      const { avatar_url } = this.githubUsers;
      return avatar_url;
    },
    htmlUrl() {
      const { html_url } = this.githubUsers;
      return html_url;
    },
    company() {
      const { company } = this.githubUsers;
      return company;
    },
    blog() {
      const { blog } = this.githubUsers;
      return blog;
    },
    bio() {
      const { bio } = this.githubUsers;
      return bio;
    },
    location() {
      const { location } = this.githubUsers;
      return location;
    },
    twitterUsername() {
      const { twitter_username } = this.githubUsers;
      return twitter_username;
    },
  },
};
</script>

<style scoped lang="scss">
.users {
  &__container {
    &-contents {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 3rem 2rem;
      margin: 3rem 0;

      @media (min-width: 992px) {
        flex-direction: row;
      }

      &--left {
        width: 50%;
        background: var(--clr-white);
        padding: 1.5rem 2rem;
        border-top-right-radius: var(--radius);
        border-bottom-left-radius: var(--radius);
        border-bottom-right-radius: var(--radius);
        position: relative;
        @media screen and (max-width: 992px) {
          width: 100%;
        }
        &::before {
          content: "user";
          position: absolute;
          top: 0;
          left: 0;
          transform: translateY(-100%);
          background: var(--clr-white);
          color: var(--clr-primary-5);
          border-top-right-radius: var(--radius);
          border-top-left-radius: var(--radius);
          text-transform: capitalize;
          padding: 0.5rem 1rem 0 1rem;
          letter-spacing: var(--spacing);
          font-size: 1rem;
        }
        .header {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          column-gap: 1rem;
          margin-bottom: 1rem;
          img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
          }
          h4 {
            margin-bottom: 0.25rem;
            color: var(--clr-grey-3);
          }
          p {
            margin-bottom: 0;
          }
          a {
            color: var(--clr-primary-5);
            border: 1px solid var(--clr-primary-5);
            padding: 0.25rem 0.75rem;
            border-radius: 1rem;
            text-transform: capitalize;
            letter-spacing: var(--spacing);
            transition: var(--transition);
            cursor: pointer;
            &:hover {
              background: var(--clr-primary-5);
              color: var(--clr-white);
            }
          }
        }
        .bio {
          color: var(--clr-grey-6);
          margin-bottom: 1rem;
        }
        .links {
          p,
          a {
            margin-bottom: 0.25rem;
            display: flex;
            align-items: center;

            i {
              margin-right: 0.5rem;
              font-size: 1.3rem;
            }
          }
          a {
            color: var(--clr-grey-6);
            transition: var(--transition);
            svg {
              color: var(--clr-grey-5);
            }
            &:hover {
              color: var(--clr-grey-3);
            }
          }
        }
      }

      &--right {
        width: 50%;
        background: var(--clr-white);
        border-top-right-radius: var(--radius);
        border-bottom-left-radius: var(--radius);
        border-bottom-right-radius: var(--radius);
        position: relative;
        @media screen and (max-width: 992px) {
          width: 100%;
        }

        &::before {
          content: " followers";
          position: absolute;
          top: 0;
          left: 0;
          transform: translateY(-100%);
          background: var(--clr-white);
          color: var(--clr-primary-5);
          border-top-right-radius: var(--radius);
          border-top-left-radius: var(--radius);
          text-transform: capitalize;
          padding: 0.5rem 1rem 0 1rem;
          letter-spacing: var(--spacing);
          font-size: 1rem;
        }

        .followers {
          overflow: scroll;
          height: 280px;
          display: grid;
          grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
          gap: 1.25rem 1rem;
          padding: 1rem 2rem;
        }
        article {
          transition: var(--transition);
          padding: 0.15rem 0.5rem;
          border-radius: var(--radius);
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: center;
          column-gap: 1rem;
          img {
            height: 100%;
            width: 45px;
            border-radius: 50%;
            object-fit: cover;
          }
          h4 {
            margin-bottom: 0;
          }
          a {
            color: var(--clr-grey-5);
          }
        }
      }
    }
  }
}
</style>
