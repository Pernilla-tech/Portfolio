

  const app = Vue.createApp({})

const About = { template: '<h1>Om mig</h1>' },
const CV = { template: '<h1>CV</h1>'},
const Work = { template: '<h1>Mina projekt</h1>'},
const Home = { template: '<h1>Hem</h1>'}

const routes = [
{
          component: About,
          path: '/about'
        },
        {
            component: CV,
            path: '/cv'

        },
        {
            component: Work,
            path: '/work'
        },
        {
            component: Home,
            path: '/'
        }

]
const router = VueRouter.createRouter({
        history: VueRouter.createWebHashHistory(),
        routes: routes
      })
app.use(router)
app.mount('#app')
