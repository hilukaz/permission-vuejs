import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import CadastroView from "../views/CadastroView.vue";
import PerfilShowView from '../views/PerfilShowView.vue'
import PerfilView from '../views/PerfilView.vue';
import axios from 'axios';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'postagem',
    component: PerfilShowView
    
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: PerfilView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: CadastroView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = localStorage.getItem('token')
    if (!token) {//se token não existe
      next('/login')
    } else {
      // console.log(token)
      axios.get('http://localhost:3000/auth',{
        
        headers: {//header só pode ser transmitido de página por página, não adianta mudar algo no navegador
          retornar:true,//a função auth vai pro middleware, porém um middleware não tem retorno
          //adicionei o atributo retornar, para cair numa condinção dentro do middleware que retornará um resultado
          Authorization: `Bearer ${token}`//passa token pelo header
        }
      })
      .then(response => {
        console.log(response.data.status);//pega o retorno do status
        if(response.data.status===false){//se o retorno de status:false, aplique next
          next('/login')
        }else{
          next()
        }
      })
      .catch(error => {
        console.error(error);
      });
    }
    
  } else {
    next()
  }
})

export default router
