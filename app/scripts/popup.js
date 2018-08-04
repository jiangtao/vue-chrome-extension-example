import Vue from 'vue';
import App from '../component/app.vue';
import iview from 'iview';

Vue.use(iview);

new Vue({
  el:'#app',
  data:{
    name:'vue-chrome-extension'
  },
  render: h =>h(App)
})
