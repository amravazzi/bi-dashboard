<template>
	<div>
    <div class="dropdown-wrapper hidden-sm-down">
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="uppernav-dropdown-store-menu" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false" style="font-size:0.8rem">
          {{branchFilter.length}} {{(branchFilter.length > 1) ? 'lojas selecionadas' : 'loja selecionada'}}
        </button>
        <div class="dropdown-menu uppernav-store-menu tick-checkbox do-not-close" aria-labelledby="dropdownMenuButton" style="border:none">
          <div class="form-check" v-for="branch in branchFilters" >
            <input type="checkbox" name="branch-filter"  v-bind:id="'branch-checkbox-' + branch.id" class="checkbox" v-model="branchFilter"  v-bind:value="branch" v-bind:checked="inArray(branch, branchFilter)" />
            <label v-bind:for="'branch-checkbox-' + branch.id">
              <span>{{branch.fantasy_name}}</span>
            </label>
          </div>
        </div>
      </div>
    </div>
	</div>
</template>
<script>

import Auth from '@/auth'

export default {
  name: 'BranchMenu',
  data () {
    return {
      branchFilter: [],
      branchFilters: this.$store.state.auth.branch
    }
  },
  mounted () {
    this.interval = setInterval(function () {
      this.sync()
    }.bind(this), 1000)
  },
  created: function () {
    this.branchFilter = JSON.parse(localStorage.getItem('branchFilter'))
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
      const branches = JSON.parse(localStorage.getItem('branchFilter'))

      if (branches !== this.branchFilter) {
        this.branchFilter = branches
      }
    },
    logout () {
      Auth.logout()
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
          if (haystack[key] === needle) {
            return true
          }
        }
      }
      return false
    }
  },
  watch: {
    branchFilter: function (val, oldVal) {
      if (val.length === 0) {
        this.branchFilter = oldVal
      }

      if (Object.keys(oldVal).length > 0) {
        if (JSON.stringify(val) !== JSON.stringify(oldVal)) {
          this.emitReport()
        }
      }

      localStorage.setItem('branchFilter', JSON.stringify(val))
    }
  },
  beforeDestroy: function () {
    clearInterval(this.interval)
  }
}
</script>
