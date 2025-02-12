// 중괄호 쳐져 있으면 , 메서드를 import,  중괄호가 없다면, 해당파일 자체를 import
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; //index.js의 router파일을 불러오겠다
import vuetify from './plugins/vuetify';

const app = createApp(App);



app.use(vuetify)
app.use(router)//위에서 불러온 router를 사용하겠다.
app.mount('#app')
