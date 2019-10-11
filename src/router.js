import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import Test from "./views/Test.vue";
import Apps from "./views/Apps.vue";
import Websites from "./views/Websites.vue";
import MoreApps from "./views/MoreApps.vue";
import Graphics from "./views/Graphics.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    },
    {
      path: "/test",
      name: "test",
      components: {
        header: AppHeader,
        default: Test,
        footer: AppFooter
      }
    },
    {
      path: "/websites",
      name: "websites",
      components: {
        header: AppHeader,
        default: Websites,
        footer: AppFooter
      }
    },
    {
      path: "/moreapps",
      name: "moreapps",
      components: {
        header: AppHeader,
        default: MoreApps,
        footer: AppFooter
      }
    },
    {
      path: "/apps",
      name: "apps",
      components: {
        header: AppHeader,
        default: Apps,
        footer: AppFooter
      }
    },
    {
      path: "/graphics",
      name: "graphics",
      components: {
        header: AppHeader,
        default: Graphics,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
