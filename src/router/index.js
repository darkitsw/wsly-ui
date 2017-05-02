import Vue from 'vue'
import Router from 'vue-router'

import button from '../views/buttonView/buttonView'
import input from '../views/inputView/inputView'
import guideRouter from '../views/guideRouter/guideRouter'
import componentRouter from '../views/componentRouter/componentRouter'
import select from '../views/selectView/selectView'
import color from '../views/colorView/colorView'
import radio from '../views/radioView/radioView'
import checkbox from '../views/checkboxView/checkboxView'
import slider from '../views/sliderView/sliderView'

Vue.use(Router)
const routes = [
  {
    path: '/guide',
    name: 'guide',
    component: guideRouter,
    children: [
      {
        path: 'installation',
        name: 'installation',
        component: button
      },
      {
        path: 'design',
        name: 'design'
      },
      {
        path: 'nav',
        name: 'nav'
      }
    ]
  },
  {
    path: '/component',
    name: 'component',
    component: componentRouter,
    children: [
      {
        path: 'color',
        name: 'color',
        component: color
      },
      {
        path: 'button',
        name: 'button',
        component: button
      },
      {
        path: 'input',
        name: 'input',
        component: input
      },
      {
        path: 'select',
        name: 'select',
        component: select
      },
      {
        path: 'radio',
        name: 'radio',
        component: radio
      },
      {
        path: 'checkbox',
        name: 'checkbox',
        component: checkbox
      },
      {
        path: 'slider',
        name: 'slider',
        component: slider
      }
    ]
  },
  {
    path: '/resource',
    name: 'resource'
  },
  {
    path: '*',
    redirect: '/guide/installation'
  }
]

export default new Router({
  routes
})

