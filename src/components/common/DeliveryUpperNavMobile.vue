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
    <DeliveryNav></DeliveryNav>
    </div>
  </div>
</template>

<script>

import DeliveryNav from '@/components/common/DeliveryNav'

export default {
  name: 'UpperNavMobile',
  components: {
    DeliveryNav
  },
  data () {
    return {
      branchFilter: [],
      branchFilters: this.$store.state.auth.branch
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
