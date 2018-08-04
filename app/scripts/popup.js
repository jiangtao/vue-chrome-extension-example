import Vue from 'vue';
import App from '../component/app.vue';

new Vue({
  el:'#app',
  data:{
    name:'vue-chrome-extension'
  },
  render: h =>h(App)
})
