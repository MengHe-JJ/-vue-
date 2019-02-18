import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Page from '@/pages/Page'
import Classify from '@/pages/Classify'
import Rank from '@/pages/Rank'
import Download from '@/components/Download'
import SearchIndex from '@/components/search/SearchIndex'

Vue.use(Router)


export default new Router({
    mode:'history',
    routes: [
        {
          path: '/search',
          name: 'SearchIndex',
          component: SearchIndex
        },
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: '/page',
          name: 'Page',
          component: Page
        },
        {
          path: '/classify',
          name: 'Classify',
          component: Classify
        },
        {
          path: '/rank',
          name: 'Rank',
          component: Rank
        },
        {
          path: '/download',
          name: 'Download',
          component: Download
        }

    ]
})

