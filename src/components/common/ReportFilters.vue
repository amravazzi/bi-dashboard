<template>
<div>
  <div class="row align-items-center filters-wrapper hidden-sm-down">

    <div class="dropdown-wrapper-filter report-filters">
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle uppernav-dropdown-filter" type="button" id="" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
          <b>Operação</b>: {{(operacaoFilter.length === operacaoFilters.length) ? 'TODOS' : (operacaoFilter.length > 1) ? operacaoFilter.length + ' selecionados' : operacaoFilter.length + ' selecionado'}}
        </button>
        <div class="dropdown-menu uppernav-filter-menu input-text-filter do-not-close tick-checkbox" aria-labelledby="dropdownMenuButton">
          <div class="form-check" v-for="operacao in operacaoFilters">
            <input  type="checkbox" class="checkbox" name="operacao-filter"  v-bind:id="'operacao-filter-report-' + operacao.value" v-model="operacaoFilter" v-bind:value="operacao.value" v-bind:checked="inArray(operacao.value, operacaoFilter)">
            <label class="input-label-filter" v-bind:for="'operacao-filter-report-' + operacao.value">
              <span>{{operacao.name}}</span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="dropdown-wrapper-filter report-filters">
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle uppernav-dropdown-filter" type="button" id="" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
          <b>Período</b>: {{startDateLabel}} - {{endDateLabel}}
        </button>
        <div class="dropdown-menu uppernav-filter-menu do-not-close input-text-filter" aria-labelledby="dropdownMenuButton">
          <div class="form-group row">
            <label for="start-date">Data Inicial</label>
            <i class="material-icons input-icon">today</i>
            <input type="text" class="form-control" id="start-date-report" v-mask="'##/##/####'" v-model="startDate">
          </div>

          <div class="form-group row">
            <label for="start-date">Data Final</label>
            <i class="material-icons input-icon">event</i>
            <input type="text" class="form-control" id="end-date-report" v-mask="'##/##/####'" v-model="endDate">
          </div>

          <div class="form-group row">
            <label for="start-date">Hora Inicial</label>
            <i class="material-icons input-icon">access_time</i>
            <input type="text" class="form-control" id="start-time-report" v-mask="'##:##'" v-model="startDateTime">
          </div>

          <div class="form-group row">
            <label for="start-date">Hora Final</label>
            <i class="material-icons input-icon">access_time</i>
            <input type="text" class="form-control" id="end-time-report" v-mask="'##:##'" v-model="endDateTime">
          </div>
        </div>
      </div>
    </div>

    <div class="dropdown-wrapper-filter report-filters">
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle uppernav-dropdown-filter" type="button" id="" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
          <b>Operador de caixa</b>: {{(operatorFilter.length === 0) ? 'TODOS' : (operatorFilter.length > 1) ? operatorFilter.length + ' selecionados' : operatorFilter.length + ' selecionado'}}
        </button>
        <div class="dropdown-menu uppernav-filter-menu input-text-filter do-not-close tick-checkbox" aria-labelledby="dropdownMenuButton">
          <div class="form-group row" style="padding-bottom:20px; margin-bottom: 20px; border-bottom: 1px solid #DDD;
  box-shadow: 0 2px 5px #CCC;">
            <label for="start-date" style="cursor:pointer">Todos</label>
            <i class="material-icons input-icon">search</i>
            <input type="text" class="form-control" id="operator-search-input">
          </div>
          <div class="form-check" v-for="operator in operatorFilters">
            <input type="checkbox" name="branch-filter" class="checkbox" v-bind:id="'operator-checkbox-report-' + operator.id" v-model="operatorFilter"  v-bind:value="operator.id" v-bind:checked="inArray(operator.id, operatorFilter)" />
            <label class="input-label-filter" v-bind:for="'operator-checkbox-report-' + operator.id">
              <span>{{operator.name}}</span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="dropdown-wrapper-filter">
      <button class="btn btn-secondary uppernav-dropdown-filter" type="button" @click="open" style="cursor: pointer;border: 1px solid #00B2B9; border-radius: 5px;padding-bottom:6px;color: #00B2B9;margin-top:-10px;">
        Opções Avançadas
      </button>
    </div>

  </div>
</div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'ReportFilters',
  components: {
    moment
  },
  data () {
    return {
      operacaoFilter: [],
      operacaoFilters: [
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
      ],
      operatorFilter: {},
      operatorFilters: [],
      startDate: '',
      startDateLabel: '',
      startDateTime: '',
      endDate: '',
      endDateLabel: '',
      endDateTime: ''
    }
  },
  watch: {
    operacaoFilter: function (val, oldVal) {
      if (Object.keys(oldVal).length > 0) {
        this.emitReport()
      }
      localStorage.setItem('operacaoMenuFilter', JSON.stringify(this.operacaoFilter.map(function (filter) { return filter })))
    },
    operatorFilter: function (val, oldVal) {
      if (Object.keys(oldVal).length > 0) {
        this.emitReport()
      }
      localStorage.setItem('operatorMenuFilter', JSON.stringify(val))
    },
    startDate: function (val, oldVal) {
      const elStartDate = document.getElementById('start-date-report')

      const date = moment(val, 'DD/MM/YYYY')
      const endDate = moment(this.endDate, 'DD/MM/YYYY')

      if (date.isValid()) {
        if (oldVal) {
          this.emitReport()
        }
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
      const elStartDate = document.getElementById('start-date-report')
      const elEndDate = document.getElementById('end-date-report')

      const startDate = moment(this.startDate, 'DD/MM/YYYY')
      const date = moment(val, 'DD/MM/YYYY')

      if (date.isValid()) {
        if (oldVal) {
          this.emitReport()
        }
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
      const elstartDateTime = document.getElementById('start-time-report')

      const date = moment(this.startDate + ' ' + val, 'DD/MM/YYYY HH:mm')
      const startDateTime = moment(val, 'HH:mm')
      const endDate = moment(this.endDate + ' ' + this.endDateTime, 'DD/MM/YYYY HH:mm')

      if (!startDateTime.isValid()) {
        if (!elstartDateTime.classList.contains('danger')) {
          elstartDateTime.classList.add('danger')
        }
      } else {
        if (oldVal) {
          this.emitReport()
        }
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
      const elEndDateTime = document.getElementById('end-time-report')

      const date = moment(this.endDate + ' ' + val, 'DD/MM/YYYY HH:mm')
      const startDate = moment(this.startDate + ' ' + this.startDateTime, 'DD/MM/YYYY HH:mm')

      if (!date.isValid()) {
        if (!elEndDateTime.classList.contains('danger')) {
          elEndDateTime.classList.add('danger')
        }
      } else {
        if (oldVal) {
          this.emitReport()
        }

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
    }
  },
  created: function () {
    this.operacaoFilter = JSON.parse(localStorage.getItem('operacaoMenuFilter'))

    this.operatorFilter = JSON.parse(localStorage.getItem('operatorMenuFilter'))
    this.operatorFilters = JSON.parse(localStorage.getItem('operatorMenuFilters'))

    this.startDate = JSON.parse(localStorage.getItem('startDate'))
    this.endDate = JSON.parse(localStorage.getItem('endDate'))
    this.startDateTime = JSON.parse(localStorage.getItem('startDateTime'))
    this.endDateTime = JSON.parse(localStorage.getItem('endDateTime'))

    this.interval = setInterval(function () {
      this.sync()
    }.bind(this), 1000)
  },
  methods: {
    emitReport () {
      if (this.timeout) {
        clearTimeout(this.timeout)
        this.timeout = null
      }

      this.timeout = setTimeout(function () {
        this.$parent.$emit('getReport')
      }.bind(this), 3000)
    },
    sync () {
      const operatorFilters = JSON.parse(localStorage.getItem('operatorMenuFilters'))
      const startDate = JSON.parse(localStorage.getItem('startDate'))
      const endDate = JSON.parse(localStorage.getItem('endDate'))

      if (operatorFilters !== this.operatorFilters) {
        this.operatorFilters = operatorFilters
      }
      if (startDate !== this.startDate) {
        this.startDate = startDate
      }
      if (endDate !== this.endDate) {
        this.endDate = endDate
      }
    },
    open () {
      this.$modal.show('filters-modal')
    },
    inArray: function (needle, haystack, argStrict) {
      var key = ''
      var strict = !!argStrict
      if (strict) {
        for (key in haystack) {
          if (haystack[key] === needle) {
            return true
          }
        }
      } else {
        for (key in haystack) {
          if (haystack[key] == needle) { // eslint-disable-line eqeqeq
            return true
          }
        }
      }
      return false
    }
  },
  mounted () {
    const doNotClose = document.getElementsByClassName('do-not-close')

    Array.prototype.forEach.call(doNotClose, function (el) {
      el.addEventListener('click', e => {
        e.stopPropagation()
      })
    })
  },
  beforeDestroy: function () {
    clearInterval(this.interval)
  }
}
</script>
