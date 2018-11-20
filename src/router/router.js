import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const musicBar = r => require.ensure([],() => r (require('@/components/musicBar.vue')),'musicBar')
const topMenu = r => require.ensure([],() => r (require('@/components/topMenu.vue')),'topMenu')
const topTab = r => require.ensure([],() => r (require('@/components/topTab.vue')),'topTab')
const myPage = r => require.ensure([],() => r (require('@/page/myPage.vue')),'myPage')
const discovery = r => require.ensure([],() => r (require('@/page/discovery.vue')),'discovery')
const radio = r => require.ensure([],() => r (require('@/page/radio.vue')),'radio')
const playPage = r => require.ensure([],() => r (require('@/page/playPage.vue')),'playPage')
const videoUpdate = r => require.ensure([],() => r (require('@/page/videoUpdate.vue')),'videoUpdate')
const msgUpdate = r => require.ensure([],() => r (require('@/page/msgUpdate.vue')),'msgUpdate')
const localMusic = r => require.ensure([],() => r (require('@/page/localMusic.vue')),'localMusic')
const playRecently = r => require.ensure([],() => r (require('@/page/playRecently.vue')),'playRecently')


const routes = [
  {
  path:'/musicBar',
  component: musicBar,
  children:[
    {
        path:'topMenu',
        component: topMenu,
        children:[
          {
            path: 'topTab',
            component: topTab,
            children: [
              {
                path: 'myPage',
                component: myPage
              },
              {
                path: 'discovery',
                component: discovery
              },
              {
                path: 'radio',
                component: radio
              }
            ]
          },
          {
            path: 'videoUpdate',
            component: videoUpdate
          },
          {
            path: 'msgUpdate',
            component: msgUpdate
          }
        ]
      },
      {
        path: 'localMusic',
        component: localMusic
      },
      {
        path: 'playRecently',
        component: playRecently
      }
    ]
   },
   {
     path: '/playPage',
     component: playPage
   },
   {
     path:'/',
     redirect:'/musicBar/topMenu/topTab/myPage'
   }
]

const router = new VueRouter({
        routes
})

export default router
