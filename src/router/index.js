import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Information from '@/components/Information'
import WhatsOn from '@/components/WhatsOn'
import AboutUs from '@/components/AboutUs'
import Location from '@/components/Location'
import FilmClassification from '@/components/FilmClassification'
import ComingSoon from '@/components/ComingSoon'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '',
      name: 'Home',
      component: Home
    },
    {
      path: '/information',
      name: 'Information',
      component: Information
    },
    {
      path: '/whatson',
      name: 'WhatsOn',
      component: WhatsOn
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/location',
      name: 'Location',
      component: Location
    },
    {
      path: '/filmclassification',
      name: 'FilmClassification',
      component: FilmClassification
    },
    {
      path: '/comingsoon',
      name: 'ComingSoon',
      component: ComingSoon
    }
  ]
})
