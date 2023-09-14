// router/index.js
import Vue from "vue";
import VueRouter from "vue-router";
import signup from "@/components/Signup.vue";
import Login from "@/components/Login.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/Signup",component: signup },
  { path: "/Login", component: Login },
  { path: "/", redirect: "/Signup" } // Redirect to signup by default
];

const router = new VueRouter({
  routes
});

export default router;
// // main.js
// import Vue from "vue";
// import App from "./App.vue";
// import router from "./router";

// Vue.config.productionTip = false;

// new Vue({
//   router,
//   render: (h) => h(App)
// }).$mount("#app");