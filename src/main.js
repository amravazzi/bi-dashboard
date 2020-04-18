// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('bootstrap')

import Vue from 'vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import './assets/style/app.scss'
import App from './components/App.vue'
import Auth from './auth'
import vmodal from 'vue-js-modal'
import VueMask from 'v-mask'
import VTooltip from 'v-tooltip'
import VueGoodTable from 'vue-good-table'

const moment = require('moment')
require('moment/locale/pt-br')

Vue.use(require('vue-moment'), {
  moment
})

Vue.use(VueMask)

Vue.use(vmodal)

Vue.use(VueResource)

Vue.config.productionTip = false

Vue.use(Auth)

Vue.use(VTooltip)

Vue.use(VueGoodTable)

Vue.mixin({
  data: function () {
    return {
      get faturamentoFilters () {
        return [
          {
            name: 'Bruto',
            value: 'gross_billing'
          },
          {
            name: 'Líquido',
            value: 'net_billing'
          }
        ]
      },
      get operacaoFilters () {
        return [
          {
            name: 'Salão',
            value: '1'
          },
          {
            name: 'Balcão',
            value: '2'
          },
          {
            name: 'Delivery',
            value: '3'
          },
          {
            name: 'Auto Atendimento',
            value: '4'
          },
          {
            name: 'Todas',
            value: 'all'
          }
        ]
      },
      get periodoFilters () {
        return [
          {
            name: 'Hoje (Real Time)',
            value: 'today'
          },
          {
            name: 'Esta Semana',
            value: 'current_week'
          },
          {
            name: 'Este mês',
            value: 'current_month'
          },
          {
            name: 'Ontem',
            value: 'yesterday'
          },
          {
            name: 'Semana Anterior',
            value: 'last_week'
          },
          {
            name: 'Mês Anterior',
            value: 'last_month'
          },
          {
            name: 'Últimos 7 dias',
            value: 'last_7'
          },
          {
            name: 'Últimos 15 dias',
            value: 'last_15'
          },
          {
            name: 'Últimos 30 dias',
            value: 'last_30'
          }
        ]
      }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  created: function () {
    window.Vue = this
  },
  router,
  store,
  render: h => h(App)
})
