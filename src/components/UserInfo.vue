<template>
  <section class="info">
    <article class="info__container container">
      <ul class="info__container-contents">
        <!-- Yeah, i know i supposed to loop but the logic is not working that's. Help me fix it -->
        <!-- 1 -->
        <router-link to="/repositories">
          <li class="item">
            <span class="pink">
              <i class="fa fa-briefcase" aria-hidden="true"></i>
            </span>

            <div>
              <h3>{{ githubUsers.public_repos }}</h3>
              <p>Repos</p>
            </div>
          </li>
        </router-link>

        <!-- 2 -->
        <li class="item">
          <span class="green">
            <i class="fa fa-users" aria-hidden="true"></i>
          </span>

          <div>
            <h3>{{ githubUsers.followers }}</h3>
            <p>Followers</p>
          </div>
        </li>

        <!-- 3 -->
        <li class="item">
          <span class="purple">
            <i class="fa fa-user-plus" aria-hidden="true"></i>
          </span>

          <div>
            <h3>{{ githubUsers.following }}</h3>
            <p>Following</p>
          </div>
        </li>

        <!-- 4 -->
        <li class="item">
          <span class="yellow">
            <i class="fa fa-user-plus" aria-hidden="true"></i>
          </span>

          <div>
            <h3>{{ githubUsers.public_gists }}</h3>
            <p>Gists</p>
          </div>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
export default {
  name: "UserInfo",

  props: {
    githubUsers: Object,
  },
};
</script>

<style scoped lang="scss">
.info {
  &__container {
    &-contents {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1rem 2rem;
      @media (min-width: 640px) {
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      }
      .item {
        border-radius: var(--radius);
        padding: 1rem 2rem;
        background: var(--clr-white);
        display: grid;
        grid-template-columns: auto 1fr;
        column-gap: 3rem;
        align-items: center;
        span {
          width: 3rem;
          height: 3rem;
          display: grid;
          place-items: center;
          border-radius: 50%;
        }
        .icon {
          font-size: 1.5rem;
        }
        h3 {
          margin-bottom: 0;
          letter-spacing: 0;
          color: var(--clr-grey-3);
        }
        p {
          margin-bottom: 0;
          text-transform: capitalize;
          color: var(--clr-grey-3);
        }
        .pink {
          background: #ffe0f0;
          color: #da4a91;
        }
        .green {
          background: var(--clr-primary-10);
          color: var(--clr-primary-5);
        }
        .purple {
          background: #e6e6ff;
          color: #5d55fa;
        }
        .yellow {
          background: #fffbea;
          color: #f0b429;
        }
      }
    }
  }
}
</style>
