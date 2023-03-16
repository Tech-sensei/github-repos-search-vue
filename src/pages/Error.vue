<template lang="">
  <section class="repo">
    <article class="error__container container">
      <div className="error__container-title">
        <h3 className="error__container-title--text">Error</h3>
        <p>
          "Oops, it seems that the page you're trying to access doesn't exist."
        </p>
      </div>

      <div class="error__container-contents">
        <figure className="error__container--image">
          <img src="../assets/error.svg" alt="error" />
        </figure>
      </div>
    </article>
  </section>
</template>
<script>
export default {
  name: "AppError",
};
</script>
<style lang="scss">
.error {
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

      p {
        color: var(--clr-grey-7);
      }

      span {
        color: var(--clr-primary-10);
        font-weight: var(--font-bold);
      }
    }

    &-contents {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3rem;
      //   height: 100vh;
    }

    .error__container--image {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    img {
      object-fit: cover;
      width: 90%;
      height: 12rem;
    }
  }
}
</style>
