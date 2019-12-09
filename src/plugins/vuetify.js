import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import VImageInput from 'vuetify-image-input'

Vue.use(Vuetify)
Vue.component(VImageInput.name, VImageInput)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#383838',
        secondary: '#A80000',
        accent: '#A70000',
        error: '#ff0000',
        active: '#42A5F5'
      }
    }
  },
  icons: {
    iconfont: 'mdi'
  }
})
