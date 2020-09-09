import Vue from "vue";
import VueRouter from "vue-router";
import store from '../store/index';
// import Home from "../views/Home.vue";

Vue.use(VueRouter);


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "Login",
      meta: {
        requiresGuest: true
      },
      component: () =>
        import("../views/Login.vue")
    },
    {
      path: "/about",
      name: "About",
      meta: {
        requiresAuth: true
      },
      component: () =>
        import("../views/About.vue")
    },
    {
      path: "/profile",
      name: "Profile",
      meta: {
        requiresAuth: true
      },
      component: () =>
        import("../views/Profile.vue")
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      // Redirect to the Login Page
      next('/login');
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (store.getters.isLoggedIn) {
      // Redirect to the Login Page
      next('/profile');
    } else {
      next();
    }
  } else {
    next()
  }
});


export default router;
