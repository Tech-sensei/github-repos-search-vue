<template>
  <header class="app__nav">
    <nav class="app__nav-container container">
      <div class="app__nav-logo">
        <img src="../assets/Techsensei.png" alt="logo" />
      </div>

      <div :class="navClass + ' app__nav-menu'">
        <ul class="app__nav-list">
          <li v-for="link in links" :key="link.id" class="app__nav-item">
            <router-link
              :to="link.url"
              class="app__nav-link"
              @click="toggleMenu"
            >
              {{ link.text }}
            </router-link>
          </li>
        </ul>

        <ul class="app__nav-social-mobile">
          <li v-for="link in socialLinks" :key="link.id">
            <a :href="link.url" target="_blank">
              <i :class="link.icon"></i>
            </a>
          </li>
        </ul>
      </div>

      <ul class="app__nav-social">
        <li v-for="link in socialLinks" :key="link.id">
          <a :href="link.url" target="_blank">
            <i :class="link.icon"></i>
          </a>
        </li>
      </ul>

      <div className="app__nav-toggle">
        <button @click="toggleMenu" class="app__nav-btn">
          <i
            :class="menuVisible ? 'fa fa-times' : 'fa fa-bars'"
            aria-hidden="true"
          ></i>
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
import { links, socialLinks } from "../data";
export default {
  name: "AppNavbar",
  //   similar to useState
  data() {
    return {
      menuVisible: false,
      brand: "My App",
      links,
      socialLinks,
    };
  },

  computed: {
    navClass() {
      return this.menuVisible ? "showNav" : "";
    },
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
  },
};
</script>

<style scoped lang="scss">
/* Navbar styles */

.app__nav {
  position: fixed;
  position: relative;
  width: 100%;
  height: var(--header-height);
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--clr-white);
  z-index: 2;

  &-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    color: var(--clr-white);

    .app__nav-logo {
      cursor: pointer;
      z-index: 1000;
      img {
        width: 30px;
        height: 40px;
      }

      @media screen and (min-width: 767px) {
        font-size: 1.5rem;
      }
    }

    @media screen and (max-width: 767px) {
      .app__nav-menu {
        position: fixed;
        top: -100%;
        right: 0;
        width: 100%;
        height: 50%;
        transition: all 0.5s linear;
        background-color: var(--clr-primary-10);
        z-index: var(--z-fixed);
        border-radius: 0 0 var(--radius) var(--radius);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }

      .app__nav-social {
        display: none;
      }

      .app__nav-social-mobile {
        display: block;
      }
    }

    /* show Menu toggle from classList in JS */
    .showNav {
      top: 0;
    }

    .app__nav-list {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: relative;

      @media screen and (min-width: 767px) {
        flex-direction: row;
      }
    }

    .app__nav-item {
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 767px) {
        padding: 1rem 0;
      }

      .app__nav-link {
        color: var(--clr-grey-1);
        text-transform: capitalize;
        letter-spacing: 0.1rem;
        display: block;
        transition: var(--transition);
        position: relative;
        @media screen and (min-width: 767px) {
          font-size: 1rem;
          padding: 0;
          margin: 0 0.8rem;
        }
        &:hover {
          color: var(--clr-primary-1);
        }

        &:hover::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 50%;
          height: 0.2rem;
          background: var(--clr-primary-5);
          border-radius: var(--radius);
          transition: var(--transition);
        }
      }
    }

    .app__nav-toggle {
      display: block;
      z-index: 1000;
      transition: var(--transition);

      @media screen and (min-width: 767px) {
        display: none;
      }

      .app__nav-btn {
        font-size: 1.5rem;
        color: var(--clr-primary-1);
        background: transparent;
        border-color: transparent;
        transition: var(--transition);
        cursor: pointer;
      }
    }

    .app__nav-social {
      @media screen and (min-width: 767px) {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        a {
          color: var(--clr-grey-1);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          background: var(--clr-grey-10);
          border-width: 1px;
          border-style: solid;
          border-color: transparent;
          border-image: initial;
          border-radius: 0.7rem;
          padding: 0.8rem;
          transition: var(--transition);

          &:hover {
            color: var(--clr-grey-5);
            background: transparent;
            border-color: var(--clr-grey-5);
          }
        }
      }
    }

    .app__nav-social-mobile {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-top: 3rem;
      a {
        color: var(--clr-grey-1);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        background: var(--clr-primary-9);
        border-width: 1px;
        border-style: solid;
        border-color: transparent;
        border-image: initial;
        border-radius: 0.7rem;
        padding: 0.8rem;
        transition: var(--transition);

        &:hover {
          color: var(--clr-grey-5);
          background: transparent;
          border-color: var(--clr-grey-5);
        }
      }
      @media screen and (min-width: 767px) {
        display: none;
      }
    }
  }
}
</style>
