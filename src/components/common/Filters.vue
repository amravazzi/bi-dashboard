<template>
<div>
  <div class="row align-items-center filters-wrapper hidden-sm-down">

    <div class="dropdown-wrapper-filter">
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle uppernav-dropdown-filter" type="button" id="" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
          <b>Faturamento</b>: {{faturamentoFilter.name}}
        </button>
        <div class="dropdown-menu uppernav-filter-menu do-not-close" aria-labelledby="dropdownMenuButton">
          <div class="form-check" v-for="faturamento in faturamentoFilters">
            <input class="form-check-input" type="radio" name="faturamento-filter" v-bind:id="'profit-filter-' + faturamento.value" v-model="faturamentoFilter" v-bind:value="faturamento" v-bind:checked="faturamento.value == faturamentoFilter.value">
            <label class="form-check-label" v-bind:for="'profit-filter-' + faturamento.value">
              <span>{{faturamento.name}}</span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="dropdown-wrapper-filter">
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle uppernav-dropdown-filter" type="button" id="" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
          <b>Operação</b>: {{operacaoFilter.name}}
        </button>
        <div class="dropdown-menu uppernav-filter-menu do-not-close" aria-labelledby="dropdownMenuButton">
          <div class="form-check" v-for="operacao in operacaoFilters">
            <input class="form-check-input" type="radio" name="operacao-filter"  v-bind:id="'operacao-filter-' + operacao.value" v-model="operacaoFilter" v-bind:value="operacao" v-bind:checked="operacao.value == operacaoFilter.value">
            <label class="form-check-label" v-bind:for="'operacao-filter-' + operacao.value">
              <span>{{operacao.name}}</span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="dropdown-wrapper-filter">
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle uppernav-dropdown-filter" type="button" id="" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
          <b>Período</b>: {{periodoFilter.name}}
        </button>
        <div class="dropdown-menu uppernav-filter-menu do-not-close" aria-labelledby="dropdownMenuButton">
          <template v-for="(periodo, key) in periodoFilters">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="periodo-filter" v-bind:id="'periodo-filter-' + periodo.value" v-model="periodoFilter" v-bind:value="periodo" v-bind:checked="periodo.value == periodoFilter.value">
              <label class="form-check-label" v-bind:for="'periodo-filter-' + periodo.value">
                <span>{{periodo.name}}</span>
              </label>
            </div>
            <div class="dropdown-divider" v-if="inArray(key, [2, 5, 8])"></div>
          </template>
        </div>
      </div>
    </div>

    <!-- <div class="dropdown-wrapper-filter">
      <div class="dashboard-reload text-center">
        <a data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><img style="width:60%;padding:5px;" class="uppernav-logo " src="../../assets/img/refresh.svg" alt="Altec" v-bind:class="{ 'loading': value.loggingIn }" v-on:click.prevent="getDashboard()"></a>
      </div>
    </div> -->

  </div>
</div>
</template>

<script>
export default {
  name: 'Filters',
  components: {
  },
  data () {
    return {
      faturamentoFilter: {},
      operacaoFilter: {},
      periodoFilter: {}
    }
  },
  watch: {
    faturamentoFilter: function (val, oldVal) {
      localStorage.setItem('faturamentoFilter', JSON.stringify(val))
    },
    operacaoFilter: function (val, oldVal) {
      localStorage.setItem('operacaoFilter', JSON.stringify(val))
    },
    periodoFilter: function (val, oldVal) {
      localStorage.setItem('periodoFilter', JSON.stringify(val))
    }
  },
  created: function () {
    this.loadFilters()
  },
  methods: {
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
    },
    loadFilters () {
      this.faturamentoFilter = JSON.parse(localStorage.getItem('faturamentoFilter'))
      this.operacaoFilter = JSON.parse(localStorage.getItem('operacaoFilter'))
      this.periodoFilter = JSON.parse(localStorage.getItem('periodoFilter'))
    }
  },
  mounted () {
    const doNotClose = document.getElementsByClassName('do-not-close')

    Array.prototype.forEach.call(doNotClose, function (el) {
      el.addEventListener('click', e => {
        e.stopPropagation()
      })
    })
  }
}
</script>
