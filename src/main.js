import Vue from "vue";
import App from "./App.vue";
import router from "./router"; // Adjust the import path if necessary

// Create and mount the Vue instance
new Vue({
  router, // Include the router
  render: (h) => h(App), // Render the App component
}).$mount("#app");
