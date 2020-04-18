<template>
<div class="hidden-sm-down">
  <nav id="nav">

    <div>
      <ul id="menu1a" class="is-visible mega-menu-first-fold">
        <li style="padding-bottom:40px;padding-top:40px;">
          <span class="text"></span>
          <i id="close-nav" class="material-icons" style="font-size:2rem;">close</i>
        </li>
        <li aria-controls="menu2a" style="margin-bottom:20px">
          <span><i class="material-icons">home</i></span>
          <span class="text-icon"><router-link :to="{ name: 'Dashboard' }">Dashboard</router-link></span>
        </li>
        <li aria-controls="menu2b">
          <span><i class="material-icons">local_atm</i></span>
          <span class="text-icon">Faturamento</span>
          <span><i class="material-icons">keyboard_arrow_right</i></span>
        </li>
        <li aria-controls="menu2c">
          <span><i class="material-icons">shopping_cart</i></span>
          <span class="text-icon">Vendas</span>
          <span><i class="material-icons">keyboard_arrow_right</i></span>
        </li>
        <li aria-controls="menu2d">
          <span><i class="material-icons">find_in_page</i></span>
          <span class="text-icon">Auditoria</span>
          <span><i class="material-icons">keyboard_arrow_right</i></span>
        </li>
        <li aria-controls="menu2e">
          <span><i class="material-icons">library_books</i></span>
          <span class="text-icon">Cadastro</span>
          <span><i class="material-icons">keyboard_arrow_right</i></span>
        </li>
      </ul>
    </div>

    <div style="display: none">
      <ul id="menu2b" class="mega-menu-second-fold">
        <li class="close-btn" style="padding-bottom:40px;padding-top:40px">
          <span class="text" style="color:#009399;font-weight:600;">Faturamento</span>
          <i class="material-icons" style="font-size:2rem;">close</i>
        </li>
        <li aria-controls="menu3a" data-url="AccumulatedRevenueReport">
          <span class="text">Acumulado</span>
          <span>
            <img style="width:36px;display: none;" src="../../assets/img/loading.svg">
            <i class="material-icons">keyboard_arrow_right</i>
          </span>
        </li>
        <li aria-controls="menu3a" data-url="CalendarRevenueReport">
          <span class="text">Acumulado Calendário</span>
          <span>
            <img style="width:36px;display: none;" src="../../assets/img/loading.svg">
            <i class="material-icons">keyboard_arrow_right</i>
          </span>
        </li>
        <li aria-controls="menu3a" data-url="HourRevenueReport">
          <span class="text">Hora a hora</span>
          <span>
            <img style="width:36px;display: none;" src="../../assets/img/loading.svg">
            <i class="material-icons">keyboard_arrow_right</i>
          </span>
        </li>
        <li aria-controls="menu3a" data-url="ReceiptTypeRevenueReport">
          <span class="text">Tipo de recebimento</span>
          <span>
            <img style="width:36px;display: none;" src="../../assets/img/loading.svg">
            <i class="material-icons">keyboard_arrow_right</i>
          </span>
        </li>
      </ul>
    </div>

    <div style="display: none">
      <ul id="menu2c" class="mega-menu-second-fold">
        <li class="close-btn" style="padding-bottom:40px;padding-top:40px">
          <span class="text" style="color:#009399;font-weight:600;">Faturamento</span>
          <i class="material-icons" style="font-size:2rem;">close</i>
        </li>
        <li aria-controls="menu3a" data-url="ProductsSellingReport">
          <span class="text">Produtos</span>
          <span>
            <img style="width:36px;display: none;" src="../../assets/img/loading.svg">
            <i class="material-icons">keyboard_arrow_right</i>
          </span>
        </li>
        <li aria-controls="menu3a" data-url="GroupsSellingReport">
          <span class="text">Grupos</span>
          <span>
            <img style="width:36px;display: none;" src="../../assets/img/loading.svg">
            <i class="material-icons">keyboard_arrow_right</i>
          </span>
        </li>
        <li aria-controls="menu3a" data-url="ProductsSellingPurchasingPowerParityReport">
          <span class="text">PPC Produto</span>
          <span>
            <img style="width:36px;display: none;" src="../../assets/img/loading.svg">
            <i class="material-icons">keyboard_arrow_right</i>
          </span>
        </li>
        <li aria-controls="menu3a" data-url="GroupsSellingPurchasingPowerParityReport">
          <span class="text">PPC Grupo</span>
          <span>
            <img style="width:36px;display: none;" src="../../assets/img/loading.svg">
            <i class="material-icons">keyboard_arrow_right</i>
          </span>
        </li>
      </ul>
    </div>

    <div style="display: none">
      <ul id="menu3a" class="mega-menu-third-fold">
        <li class="close-btn" style="padding-bottom:40px;padding-top:40px">
          <span class="text" style="color:#545c58;font-weight:600;">Acumulado</span>
          <i class="material-icons" style="font-size:2rem;">close</i>
        </li>

        <li class="mega-menu-dropdown-btn" data-toggle="collapse" data-target="#branches">
          <span class="text" style="color:#545c58;">
            <p class="upper-title">{{(branchMenuFilter.length > 1) ? 'Lojas' : 'Loja' }}</p>
            <p class="lower-title">{{branchMenuFilter.length}} {{(branchMenuFilter.length > 1) ? 'selecionadas' : 'selecionada'}}</p>
          </span>
          <span><i class="material-icons mega-menu-dropdown-arrows">keyboard_arrow_right</i></span>
        </li>

        <div class="mega-menu-dropdown-wrapper tick-checkbox collapse" id="branches">
          <div class="form-check" v-for="branch in branchFilters">
            <input type="checkbox" name="branch-filter" class="checkbox" v-bind:id="'branch-checkbox-menu-' + branch.id" v-model="branchMenuFilter"  v-bind:value="branch" v-bind:checked="inArray(branch, branchMenuFilter)" />
            <label v-bind:for="'branch-checkbox-menu-' + branch.id">
              <span>{{branch.fantasy_name}}</span>
            </label>
          </div>
        </div>

        <li class="mega-menu-dropdown-btn" data-toggle="collapse" data-target="#operacao">
          <span class="text" style="color:#545c58;">
            <p class="upper-title">Tipo de operação</p>
            <p class="lower-title">{{ operacaoMenuFilterLabel.join(', ') }}</p>
          </span>
          <span><i class="material-icons mega-menu-dropdown-arrows">keyboard_arrow_right</i></span>
        </li>

        <div class="mega-menu-dropdown-wrapper tick-checkbox collapse" id="operacao">
          <div class="form-check" v-for="operacao in operacaoMenuFilters">
            <input type="checkbox" class="checkbox" v-bind:id="'operacao-filter-menu-' + operacao.value" v-model="operacaoMenuFilter"  v-bind:value="operacao.value" v-bind:checked="inArray(operacao, operacaoMenuFilter)" />
            <label v-bind:for="'operacao-filter-menu-' + operacao.value">
              <span>{{operacao.name}}</span>
            </label>
          </div>
        </div>

        <li class="mega-menu-dropdown-btn" data-toggle="collapse" data-target="#periodo">
          <span class="text" style="color:#545c58;">
            <p class="upper-title">Período</p>
            <p class="lower-title">{{startDateLabel}} - {{endDateLabel}}</p>
          </span>
          <span><i class="material-icons mega-menu-dropdown-arrows">keyboard_arrow_right</i></span>
        </li>

        <div class="mega-menu-dropdown-wrapper tick-checkbox collapse" id="periodo">
          <div class="form-group row inner-addon right-addon">
            <label for="start-date">Data inicial</label>
            <i class="material-icons input-icon input-icon-full">today</i>
            <input type="text" class="form-control" id="start-date" v-mask="'##/##/####'" v-model="startDate">
          </div>
          <div class="form-group row inner-addon right-addon">
            <label for="end-date">Data final</label>
            <i class="material-icons input-icon input-icon-full">event</i>
            <input type="text" class="form-control" id="end-date" v-mask="'##/##/####'" v-model="endDate">
          </div>
          <div class="row">
            <div class="form-group col-6 inner-addon right-addon" style="padding-left:0;">
              <label for="start-time">Hora inicial</label>
            <i class="material-icons input-icon input-icon-half">access_time</i>
              <input type="text" class="form-control" id="start-time" v-mask="'##:##'" v-model="startDateTime" style="width:105%">
            </div>
            <div class="form-group col-6 inner-addon right-addon" style="padding-left:0;">
              <label for="end-time">Hora final</label>
            <i class="material-icons input-icon input-icon-half">access_time</i>
              <input type="text" class="form-control" id="end-time" v-mask="'##:##'" v-model="endDateTime" style="width:105%">
            </div>
          </div>
        </div>

        <li class="mega-menu-dropdown-btn" data-toggle="collapse" data-target="#operators">
          <span class="text" style="color:#545c58;">
            <p class="upper-title">Operador de caixa</p>
            <p class="lower-title">{{(operatorMenuFilter.length === 0) ? 'TODOS' : (operatorMenuFilter.length > 1) ? operatorMenuFilter.length + ' selecionados' : operatorMenuFilter.length + ' selecionado'}}</p>
          </span>
          <span><i class="material-icons mega-menu-dropdown-arrows">keyboard_arrow_right</i></span>
        </li>

        <div class="mega-menu-dropdown-wrapper tick-checkbox collapse" id="operators">
          <div class="row">
            <div class="form-group operator-search">
              <div class="row operator-search-label" v-if="operatorMenuFilter.length > 0">
                <div class="col-7">{{(operatorMenuFilter.length > 1) ? operatorMenuFilter.length + ' selecionados' : operatorMenuFilter.length + ' selecionado'}}</div>
                <div class="col-5 justify-content-end"><span v-on:click="clearOperator()">Limpar</span></div>
              </div>
              <input type="text" class="form-control" id="operator-search-input">
            </div>
          </div>

          <div class="form-check" v-for="operator in operatorMenuFilters">
            <input type="checkbox" name="branch-filter" class="checkbox" v-bind:id="'operator-checkbox-menu-' + operator.id" v-model="operatorMenuFilter"  v-bind:value="operator.id" v-bind:checked="inArray(operator.id, operatorMenuFilter)" />
            <label v-bind:for="'operator-checkbox-menu-' + operator.id">
              <span>{{operator.name}}</span>
            </label>
          </div>
        </div>

        <button type="submit" class="btn btn-primary show-report-btn" @click="submit()" :disabled="filterIsValid">Exibir relatório</button>

      </ul>
    </div>
  </nav>

  <!-- <button type="button" id="open-nav" data-toggle="collapse" data-target="#navbarNav" class="store-button" style="flex-shrink:0;background-color:transparent;border:none">
    <i class="material-icons" style="font-size:2rem;margin-top:-3px;">menu</i>
  </button> -->
</div>
</template>

<script>

import Vue from 'vue'
import moment from 'moment'
import router from '../../router'

export default {
  name: 'MegaMenu',
  components: {
    moment
  },
  data () {
    return {
      startDate: '',
      startDateLabel: '',
      startDateTime: '',
      endDate: '',
      endDateLabel: '',
      endDateTime: '',
      branchMenuFilter: [],
      branchFilters: this.$store.state.auth.branch,
      operacaoMenuFilter: [],
      operacaoMenuFilterLabel: [],
      operatorMenuFilter: [],
      operatorMenuFilters: [],
      reportValid: true,
      reportUrl: '',
      operacaoMenuFilters: [
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
        }
      ]
    }
  },
  created: function () {
    if (localStorage.getItem('startDate') === null) {
      localStorage.setItem('startDate', JSON.stringify(Vue.moment().startOf('month').format('DD/MM/YYYY')))
    }
    if (localStorage.getItem('endDate') === null) {
      localStorage.setItem('endDate', JSON.stringify(Vue.moment().endOf('month').format('DD/MM/YYYY')))
    }
    if (localStorage.getItem('startDateTime') === null) {
      localStorage.setItem('startDateTime', JSON.stringify(Vue.moment().startOf('day').format('HH:mm')))
    }
    if (localStorage.getItem('endDateTime') === null) {
      localStorage.setItem('endDateTime', JSON.stringify(Vue.moment().endOf('day').format('HH:mm')))
    }
    if (localStorage.getItem('operacaoMenuFilter') === null) {
      localStorage.setItem('operacaoMenuFilter', JSON.stringify(this.operacaoMenuFilters.map(function (filter) { return filter.value })))
    }
    if (localStorage.getItem('operatorMenuFilter') === null) {
      localStorage.setItem('operatorMenuFilter', JSON.stringify([]))
    }

    this.startDate = JSON.parse(localStorage.getItem('startDate'))
    this.endDate = JSON.parse(localStorage.getItem('endDate'))
    this.startDateTime = JSON.parse(localStorage.getItem('startDateTime'))
    this.endDateTime = JSON.parse(localStorage.getItem('endDateTime'))

    this.operatorMenuFilter = JSON.parse(localStorage.getItem('operatorMenuFilter'))
    this.operatorMenuFilters = JSON.parse(localStorage.getItem('operatorMenuFilters'))
    this.operacaoMenuFilter = JSON.parse(localStorage.getItem('operacaoMenuFilter'))
    this.branchMenuFilter = JSON.parse(localStorage.getItem('branchFilter'))
  },
  mounted () {
    const megaMenuDropdownBtns = document.querySelectorAll('.mega-menu-dropdown-btn')

    for (const megaMenuDropdownBtn of megaMenuDropdownBtns) {
      megaMenuDropdownBtn.addEventListener('click', () => {
        if (megaMenuDropdownBtn.classList.contains('active')) {
          megaMenuDropdownBtn.classList.remove('active')
        } else {
          megaMenuDropdownBtn.classList.add('active')
        }
      })
    }

    const openToggles = document.querySelectorAll('[aria-controls]')
    const closeBtns = document.querySelectorAll('.close-btn')

    for (const closeBtn of closeBtns) {
      closeBtn.addEventListener('click', () => {
        closeBtn.parentElement.classList.remove('is-open')

        const nextSiblings = []

        let currentEl = closeBtn.parentElement.parentElement

        const currentElOpenToggle = currentEl.previousElementSibling.children

        for (const x of currentElOpenToggle) {
          for (const y of x.children) {
            y.classList.remove('active')
          }
        }

        currentEl.style.display = 'none'

        while ((currentEl = currentEl.nextElementSibling)) {
          nextSiblings.push(currentEl)
        }

        for (const x of nextSiblings) {
          for (const y of x.children) {
            y.classList.remove('is-open')
          }
        }
      })
    }

    for (const openToggle of openToggles) {
      const control = openToggle.getAttribute('aria-controls')
      const url = openToggle.getAttribute('data-url')
      const elToOpen = document.getElementById(control)

      openToggle.addEventListener('click', () => {
        this.openedToggle(control, url, openToggle)

        const siblings = [...elToOpen.parentNode.children].filter(child =>
          child !== elToOpen
        )

        for (const sibling of siblings) {
          sibling.classList.remove('is-open')
          sibling.parentNode.style.display = 'none'
        }

        const nextSiblings = []

        let currentEl = openToggle.parentElement.parentElement

        const currentElOpenToggle = openToggle.parentElement.children

        for (const x of currentElOpenToggle) {
          x.classList.remove('active')
        }

        while ((currentEl = currentEl.nextElementSibling)) {
          nextSiblings.push(currentEl)
        }

        for (const x of nextSiblings) {
          for (const y of x.children) {
            for (const z of y.children) {
              if (z.classList.contains('active')) {
                z.classList.remove('active')
              }
            }

            y.classList.remove('is-open')
            y.parentNode.style.display = 'none'
          }
        }

        openToggle.classList.add('active')

        if (elToOpen.classList.contains('is-open')) {
          elToOpen.classList.remove('is-open')
          elToOpen.parentNode.style.display = 'none'
        } else {
          elToOpen.classList.add('is-open')
          elToOpen.parentNode.style.display = ''
        }
      })
    }

    const openNavBtn = document.getElementById('open-nav')
    const closeNavBtn = document.getElementById('close-nav')
    const nav = document.getElementById('nav')
    const body = document.getElementsByTagName('body')[0]

    openNavBtn.addEventListener('click', function (e) {
      e.stopPropagation()

      if (nav.classList.contains('is-on-canvas')) {
        nav.classList.remove('is-on-canvas')
      } else {
        nav.classList.add('is-on-canvas')
        body.style.overflow = 'hidden'
      }
    })

    closeNavBtn.addEventListener('click', function () {
      nav.classList.remove('is-on-canvas')
      body.style.overflow = 'scroll'
    })

    const appContent = document.querySelectorAll('.app-content')[0]

    appContent.addEventListener('click', function (e) {
      if (nav.classList.contains('is-on-canvas') && $('#nav').find(e.target).length === 0) {
        nav.classList.remove('is-on-canvas')
        body.style.overflow = 'scroll'
      }
    })

    this.interval = setInterval(function () {
      this.sync()
    }.bind(this), 1000)
  },
  methods: {
    openedToggle: function (control, url, openToggle) {
      if (control === 'menu3a') {
        var toggleIcon = openToggle.getElementsByTagName('span')[1]

        var loadingIcon = toggleIcon.getElementsByTagName('img')[0]
        var arrowIcon = toggleIcon.getElementsByTagName('i')[0]

        loadingIcon.style.display = ''
        arrowIcon.style.display = 'none'

        this.getOperators()

        loadingIcon.style.display = 'none'
        arrowIcon.style.display = ''

        this.reportUrl = url
      }
    },
    sync () {
      const branches = JSON.parse(localStorage.getItem('branchFilter'))

      if (branches.length !== this.branchMenuFilter.length) {
        this.branchMenuFilter = branches
      }
    },
    clearOperator () {
      this.operatorMenuFilter = []
    },
    getOperators: function () {
      this.$http.get('http://localhost:3000/reports/v1/filters/operators', { params: {
        branch: this.branchMenuFilter.map(function (branch) { return branch.id }).join(',')
      }})
      .then((response) => {
        this.operatorMenuFilters = response.body
      })
      .catch((response) => {
      })
    },
    submit: function () {
      if (this.$route.name === this.reportUrl) {
        this.closeNav()
      } else {
        router.push({ name: this.reportUrl })
      }
    },
    inArray (needle, haystack, argStrict) {
      return utils.inArray(needle, haystack, argStrict)
    },
    checkedPeriod: function (string) {
      return this.inArray(string.value, this.operacaoMenuFilter)
    },
    closeNav () {
      const nav = document.getElementById('nav')
      const body = document.getElementsByTagName('body')[0]

      nav.classList.remove('is-on-canvas')
      body.style.overflow = 'scroll'
    }
  },
  computed: {
    filterIsValid: function () {
      const date = moment(this.startDate + ' ' + this.startDateTime, 'DD/MM/YYYY HH:mm')
      const endDate = moment(this.endDate + ' ' + this.endDateTime, 'DD/MM/YYYY HH:mm')

      return (!date.isValid() || !endDate.isValid() || date.isAfter(endDate))
    }
  },
  watch: {
    startDate: function (val, oldVal) {
      const elStartDate = document.getElementById('start-date')

      const date = moment(val, 'DD/MM/YYYY')
      const endDate = moment(this.endDate, 'DD/MM/YYYY')

      if (date.isValid()) {
        if (elStartDate.classList.contains('danger')) {
          elStartDate.classList.remove('danger')
        }
        this.startDate = val
        this.startDateLabel = date.format('DD MMM YYYY')
      } else {
        if (!elStartDate.classList.contains('danger')) {
          elStartDate.classList.add('danger')
        }
      }

      if (date.isAfter(endDate)) {
        if (!elStartDate.classList.contains('danger')) {
          elStartDate.classList.add('danger')
        }
      }

      localStorage.setItem('startDate', JSON.stringify(val))
    },
    endDate: function (val, oldVal) {
      const elStartDate = document.getElementById('start-date')
      const elEndDate = document.getElementById('end-date')

      const startDate = moment(this.startDate, 'DD/MM/YYYY')
      const date = moment(val, 'DD/MM/YYYY')

      if (date.isValid()) {
        if (elEndDate.classList.contains('danger')) {
          elEndDate.classList.remove('danger')
        }
        this.endDate = val
        this.endDateLabel = date.format('DD MMM YYYY')
      } else {
        if (!elEndDate.classList.contains('danger')) {
          elEndDate.classList.add('danger')
        }
      }

      if (date.isBefore(startDate)) {
        if (!elStartDate.classList.contains('danger')) {
          elStartDate.classList.add('danger')
        }
      }

      localStorage.setItem('endDate', JSON.stringify(val))
    },
    startDateTime: function (val, oldVal) {
      const elstartDateTime = document.getElementById('start-time')

      const date = moment(this.startDate + ' ' + val, 'DD/MM/YYYY HH:mm')
      const startDateTime = moment(val, 'HH:mm')
      const endDate = moment(this.endDate + ' ' + this.endDateTime, 'DD/MM/YYYY HH:mm')

      if (!startDateTime.isValid()) {
        if (!elstartDateTime.classList.contains('danger')) {
          elstartDateTime.classList.add('danger')
        }
      } else {
        if (elstartDateTime.classList.contains('danger')) {
          elstartDateTime.classList.remove('danger')
        }
      }

      if (date.isSameOrAfter(endDate)) {
        if (!elstartDateTime.classList.contains('danger')) {
          elstartDateTime.classList.add('danger')
        }
      }

      localStorage.setItem('startDateTime', JSON.stringify(val))
    },
    endDateTime: function (val, oldVal) {
      const elEndDateTime = document.getElementById('end-time')

      const date = moment(this.endDate + ' ' + val, 'DD/MM/YYYY HH:mm')
      const startDate = moment(this.startDate + ' ' + this.startDateTime, 'DD/MM/YYYY HH:mm')

      if (!date.isValid()) {
        if (!elEndDateTime.classList.contains('danger')) {
          elEndDateTime.classList.add('danger')
        }
      } else {
        if (elEndDateTime.classList.contains('danger')) {
          elEndDateTime.classList.remove('danger')
        }
      }

      if (date.isSameOrBefore(startDate)) {
        if (!elEndDateTime.classList.contains('danger')) {
          elEndDateTime.classList.add('danger')
        }
      }

      localStorage.setItem('endDateTime', JSON.stringify(val))
    },
    branchMenuFilter: function (val, oldVal) {
      if (val.length === 0) {
        this.branchMenuFilter = oldVal
      } else {
        this.getOperators()
      }

      localStorage.setItem('branchFilter', JSON.stringify(val))
    },
    operatorMenuFilter: function (val, oldVal) {
      localStorage.setItem('operatorMenuFilter', JSON.stringify(this.operatorMenuFilter.map(function (filter) { return filter })))
    },
    operatorMenuFilters: function (val, oldVal) {
      localStorage.setItem('operatorMenuFilters', JSON.stringify(val))
    },
    operacaoMenuFilter: function (val, oldVal) {
      this.operacaoMenuFilterLabel = this.operacaoMenuFilters.filter(this.checkedPeriod).map(function (filter) { return filter.name })

      if (this.operacaoMenuFilterLabel.length === 0) {
        this.reportValid = false
        this.operacaoMenuFilterLabel = ['SELECIONE UMA OPÇÃO']
      }

      localStorage.setItem('operacaoMenuFilter', JSON.stringify(this.operacaoMenuFilter.map(function (filter) { return filter })))
    }
  },
  beforeDestroy: function () {
    const body = document.getElementsByTagName('body')[0]
    body.style.overflow = 'scroll'

    clearInterval(this.interval)
  }
}
</script>
