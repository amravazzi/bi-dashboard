<template>
  <modal name="filters-modal"
   :width="550"
   :height="550"
   @before-open="beforeOpen"
   @before-close="beforeClose"
  >

    <div class="row">
      <nav class="filters-modal-nav col-5">
        <ul class="nav flex-column filters-modal-ul" role="tablist">

          <li class="nav-item filters-modal-list filters-modal-header">
            <span @click="close"><i class="material-icons">arrow_back</i></span>
            <a class="nav-link" data-toggle="tab" href="#" role="tab" style="cursor:default">Opções Avançadas</a>
          </li>

          <ul class="filters-modal-body">
            <li class="nav-item filters-modal-list active">
              <a class="nav-link filters-modal-link" data-toggle="tab" href="#filtro1" role="tab">
                <p>Faturamento</p>
                <p>{{faturamentoFilter.name}}</p>
              </a>
              <i class="material-icons filters-modal-arrows">keyboard_arrow_right</i>
            </li>

            <li class="nav-item filters-modal-list">
              <a class="nav-link filters-modal-link" data-toggle="tab" href="#filtro2" role="tab">
                <p>Indicadores</p>
                <p>{{(indicadorFilter.length === indicadores.length) ? 'TODOS' : (indicadorFilter.length > 1) ? indicadorFilter.length + ' selecionados' : indicadorFilter.length + ' selecionado'}}</p>
              </a>
              <i class="material-icons filters-modal-arrows">keyboard_arrow_right</i>
            </li>

            <li class="nav-item filters-modal-list">
              <a class="nav-link filters-modal-link" data-toggle="tab" href="#filtro3" role="tab">
                <p>Visualização</p>
                <p>{{timeframeFilter.name}}</p>
              </a>
              <i class="material-icons filters-modal-arrows">keyboard_arrow_right</i>
            </li>

            <li class="nav-item filters-modal-list">
              <a class="nav-link filters-modal-link" data-toggle="tab" href="#filtro4" role="tab">
                <p>Início de semana</p>
                <p>{{weekStartAtFilter.name}}</p>
              </a>
              <i class="material-icons filters-modal-arrows">keyboard_arrow_right</i>
            </li>
          </ul>
        </ul>
      </nav>

      <div class="col-7 tab-content">
        <div class="tab-pane active" id="filtro1" role="tabpanel">
          <div class="row tab-header-upper filters-modal-margin-top"></div>

          <div class="row filters-modal-tab-content">
            <div class="form-check tick-checkbox" v-for="faturamento in faturamentos">
              <input type="radio" class="checkbox" v-bind:id="'modal-filter-faturamento-' + faturamento.value" name="faturamento" v-model="faturamentoFilter" v-bind:value="faturamento" v-bind:checked="faturamento.value == faturamentoFilter.value"/>
              <label v-bind:for="'modal-filter-faturamento-' + faturamento.value">
                {{faturamento.name}}
              </label>
            </div>
          </div>
        </div>

        <div class="tab-pane" id="filtro2" role="tabpanel">
          <div class="row tab-header-upper filters-modal-margin-top"></div>
          <div class="row filters-modal-tab-content">
            <div class="form-check tick-checkbox" v-for="indicador in indicadores">
              <input type="checkbox" class="checkbox" v-bind:id="'modal-filter-indicador-' + indicador.value" name="indicador-filter" v-model="indicadorFilter" v-bind:value="indicador" v-bind:checked="inArray(indicador, indicadorFilter)"/>
              <label v-bind:for="'modal-filter-indicador-' + indicador.value">
                {{indicador.name}}
              </label>
            </div>
          </div>
        </div>

        <div class="tab-pane" id="filtro3" role="tabpanel">
          <div class="row tab-header-upper filters-modal-margin-top"></div>

          <div class="row filters-modal-tab-content">
            <div class="form-check tick-checkbox" v-for="timeframe in timeframes">
              <input type="radio" class="checkbox" v-bind:id="'modal-filter-timeframe-' + timeframe.value" name="timeframe" v-model="timeframeFilter" v-bind:value="timeframe" v-bind:checked="timeframe.value == timeframeFilter.value"/>
              <label v-bind:for="'modal-filter-timeframe-' + timeframe.value">
                {{timeframe.name}}
              </label>
            </div>
          </div>
        </div>

        <div class="tab-pane" id="filtro4" role="tabpanel">
          <div class="row tab-header-upper filters-modal-margin-top"></div>

          <div class="row filters-modal-tab-content">
            <div class="form-check tick-checkbox" v-for="weekday in weekStartAt">
              <input type="radio" class="checkbox" v-bind:id="'modal-filter-weekday-' + weekday.value" name="weekStartAt" v-model="weekStartAtFilter" v-bind:value="weekday" v-bind:checked="weekday.value == weekStartAtFilter.value"/>
              <label v-bind:for="'modal-filter-weekday-' + weekday.value">
                {{weekday.name}}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>

export default {
  name: 'SellingModal',
  props: ['enabledFilters'],
  data () {
    return {
      faturamentoFilter: {},
      indicadorFilter: [],
      timeframeFilter: {},
      weekStartAtFilter: {},

      weekStartAt: [
        {
          name: 'Domingo',
          value: 'sunday'
        },
        {
          name: 'Segunda',
          value: 'monday'
        }
      ],

      timeframes: [
        {
          name: 'Diário',
          value: 'daily'
        },
        {
          name: 'Semanal',
          value: 'weekly'
        },
        {
          name: 'Mensal',
          value: 'monthly'
        },
        {
          name: 'Anual',
          value: 'yearly'
        }
      ],

      faturamentos: [
        {
          name: 'Bruto',
          value: 'gross_billing'
        },
        {
          name: 'Líquido',
          value: 'net_billing'
        }
      ],

      indicadores: [
        {
          name: 'Faturamento',
          value: '1'
        },
        {
          name: 'Clientes',
          value: '2'
        },
        {
          name: 'Ticket médio',
          value: '3'
        }
      ]
    }
  },
  created: function () {
    if (localStorage.getItem('revenue.indicadorFilter') === null) {
      localStorage.setItem('revenue.indicadorFilter', JSON.stringify(this.indicadores))
    }
    if (localStorage.getItem('revenue.timeframeFilter') === null) {
      localStorage.setItem('revenue.timeframeFilter', JSON.stringify(this.timeframes[2]))
    }
    if (localStorage.getItem('revenue.weekStartAtFilter') === null) {
      localStorage.setItem('revenue.weekStartAtFilter', JSON.stringify(this.weekStartAt[0]))
    }

    this.faturamentoFilter = JSON.parse(localStorage.getItem('faturamentoFilter'))
    this.indicadorFilter = JSON.parse(localStorage.getItem('revenue.indicadorFilter'))
    this.timeframeFilter = JSON.parse(localStorage.getItem('revenue.timeframeFilter'))
    this.weekStartAtFilter = JSON.parse(localStorage.getItem('revenue.weekStartAtFilter'))
  },
  watch: {
    faturamentoFilter: function (val, oldVal) {
      if (Object.keys(oldVal).length > 0) {
        this.emitReport()
      }
      localStorage.setItem('faturamentoFilter', JSON.stringify(val))
    },
    indicadorFilter: function (val, oldVal) {
      if (val.length === 0) {
        this.indicadorFilter = oldVal
      }

      if (oldVal.length > 0) {
        this.emitReport()
      }

      localStorage.setItem('revenue.indicadorFilter', JSON.stringify(val))
    },
    timeframeFilter: function (val, oldVal) {
      if (Object.keys(oldVal).length > 0) {
        this.emitReport()
      }
      localStorage.setItem('revenue.timeframeFilter', JSON.stringify(val))
    },
    weekStartAtFilter: function (val, oldVal) {
      if (Object.keys(oldVal).length > 0) {
        this.emitReport()
      }
      localStorage.setItem('revenue.weekStartAtFilter', JSON.stringify(val))
    }
  },
  methods: {
    emitReport () {
      if (this.timeout) {
        clearTimeout(this.timeout)
        this.timeout = null
      }

      this.timeout = setTimeout(function () {
        this.$emit('getReport')
      }.bind(this), 5000)
    },
    close () {
      this.$modal.hide('filters-modal')
    },
    beforeOpen (event) {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    },
    beforeClose (event) {
      document.getElementsByTagName('body')[0].style.overflow = 'scroll'
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
  }
}
</script>
