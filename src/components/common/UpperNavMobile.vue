<template>
  <div class="hidden-md-up" style="position:relative;z-index:1">
    <div id="menu-mobile-wrapper">
      <div class="form-check">
        <div class="dropdown-wrapper dropdown-wrapper-mobile">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle text-left" type="button" id="uppernav-dropdown-store-menu-mobile" data-toggle="dropdown">
              {{branchFilter.length}} {{(branchFilter.length > 1) ? 'lojas selecionadas' : 'loja selecionada'}}
            </button>
            <div class="dropdown-menu uppernav-store-menu tick-checkbox do-not-close-mobile" style="background-color:#FFF;width:104%;margin-left:-2%;border:none;border-radius:0;">

              <div class="form-check" v-for="branch in branchFilters">
                <input type="checkbox" name="branch-filter-m"  v-bind:id="'branch-checkbox-m-' + branch.id" class="checkbox" v-model="branchFilter"  v-bind:value="branch" v-bind:checked="inArray(branch, branchFilter)" />
                <label v-bind:for="'branch-checkbox-m-' + branch.id">
                  <span>{{branch.fantasy_name}}</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row" style="width:100%;">
        <div class="col col-4 col-md-4 col-lg-4 dropdown-wrapper-filter">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle uppernav-dropdown-filter" type="button" id="" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
              {{faturamentoFilter.name}}
            </button>
            <div class="dropdown-menu uppernav-filter-menu do-not-close-mobile" style="width:100%;" aria-labelledby="dropdownMenuButton">
              <div class="form-check" v-for="faturamento in faturamentoFilters">
                <input class="form-check-input" type="radio" name="faturamento-filter-m" v-bind:id="'profit-filter-m-' + faturamento.value" v-model="faturamentoFilter" v-bind:value="faturamento" v-bind:checked="faturamento.value == faturamentoFilter.value">
                <label class="form-check-label" v-bind:for="'profit-filter-m-' + faturamento.value">
                  <span>{{faturamento.name}}</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="col col-4 col-md-4 col-lg-4 dropdown-wrapper-filter" style="">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle uppernav-dropdown-filter" type="button" id="" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false" style="">
              {{operacaoFilter.name}}
            </button>
            <div class="dropdown-menu uppernav-filter-menu do-not-close-mobile" aria-labelledby="dropdownMenuButton">
              <div class="form-check" v-for="operacao in operacaoFilters">
                <input class="form-check-input" type="radio" name="operacao-filter-m"  v-bind:id="'operacao-filter-m-' + operacao.value" v-model="operacaoFilter" v-bind:value="operacao" v-bind:checked="operacao.value == operacaoFilter.value">
                <label class="form-check-label" v-bind:for="'operacao-filter-m-' + operacao.value">
                  <span>{{operacao.name}}</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="col col-4 col-md-4 col-lg-4 dropdown-wrapper-filter" style="">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle uppernav-dropdown-filter filter-ellipsis" type="button" id="" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
              {{periodoFilter.name}}
            </button>
            <div class="dropdown-menu uppernav-filter-menu do-not-close-mobile dropdown-menu-last-child" aria-labelledby="dropdownMenuButton">
              <template v-for="(periodo, key) in periodoFilters">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="periodo-filter-m" v-bind:id="'periodo-filter-m-' + periodo.value" v-model="periodoFilter" v-bind:value="periodo" v-bind:checked="periodo.value == periodoFilter.value">
                  <label class="form-check-label" v-bind:for="'periodo-filter-m-' + periodo.value">
                    <span>{{periodo.name}}</span>
                  </label>
                </div>
                <div class="dropdown-divider" v-if="inArray(key, [2, 5, 8])"></div>
              </template>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="form-check">
        <div class="dropdown-wrapper" style="width:100%;margin:0;">
          <div class="dropdown">
            <button class="btn btn-secondary" type="button" id="uppernav-dropdown-store-menu-mobile" data-toggle="dropdown" style="background-color:#00b2b9;border-radius:0;color:#FFF;" v-on:click.prevent="getDashboard()">
              <img style="width:2em;padding:5px;padding-top:2px" class="uppernav-logo" src="../../assets/img/refresh.svg" alt="Altec" v-bind:class="{ 'loading': filters.loggingIn }"></a>Atualizar
            </button>
          </div>
        </div>
      </div> -->

    </div>
  </div>
</template>

<script>

export default {
  name: 'UpperNavMobile',
  data () {
    return {
      branchFilter: [],
      branchFilters: this.$store.state.auth.branch,
      faturamentoFilter: {},
      operacaoFilter: {},
      periodoFilter: {}
    }
  },
  methods: {
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
    getDashboard: function () {
      this.$emit('getDashboard')
    },
    loadFilters () {
      this.faturamentoFilter = JSON.parse(localStorage.getItem('faturamentoFilter'))
      this.operacaoFilter = JSON.parse(localStorage.getItem('operacaoFilter'))
      this.periodoFilter = JSON.parse(localStorage.getItem('periodoFilter'))
      this.branchFilter = JSON.parse(localStorage.getItem('branchFilter'))
    }
  },
  mounted () {
    const openMenuMobile = document.getElementById('open-menu-mobile')
    const menuMobileWrapper = document.getElementById('menu-mobile-wrapper')
    openMenuMobile.addEventListener('click', e => {
      e.preventDefault()
      if (menuMobileWrapper.classList.contains('is-visible')) {
        menuMobileWrapper.classList.remove('fade-in')
        menuMobileWrapper.classList.remove('is-visible')
      } else {
        menuMobileWrapper.classList.add('fade-in')
        menuMobileWrapper.classList.add('is-visible')
      }
    })

    const doNotCloseMobile = document.getElementsByClassName('do-not-close-mobile')

    Array.prototype.forEach.call(doNotCloseMobile, function (el) {
      el.addEventListener('click', e => {
        e.stopPropagation()
      })
    })

    this.interval = setInterval(function () {
      this.loadFilters()
    }.bind(this), 1000)
  },
  watch: {
    branchFilter: function (val, oldVal) {
      localStorage.setItem('branchFilter', JSON.stringify(val))
    },
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
  beforeDestroy: function () {
    clearInterval(this.interval)
  }
}
</script>
