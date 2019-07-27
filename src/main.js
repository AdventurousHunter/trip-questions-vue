import Vue from "vue"
import App from "./App.vue"
import BootstrapVue from "bootstrap-vue"
import router from "./router"
import store from "./store/store"
import upperFirst from "lodash/upperFirst"
import camelCase from "lodash/camelCase"
import "@/assets/bootstrap-variables.sass"
import "nprogress/nprogress.css"
import Vuelidate from "vuelidate"

Vue.use(Vuelidate)
Vue.use(BootstrapVue)

const requireComponent = require.context(
  "./components",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})

// Document.getElementByClassName(".select").change(function() {
//   if (this.children("option:first-child").is(":selected")) {
//     this.addClass("placeholder")
//   } else {
//     this.removeClass("placeholder")
//   }
// })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
