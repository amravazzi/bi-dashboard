<template>

  <nav class="row navbar navbar-light main-nav">

    <div class="row align-items-center">

      <!-- <div class="col col-10 col-md-4 col-lg-5" style="display:flex;min-width:230px;flex-wrap:nowrap"> -->
      <div class="col-6 col-sm-8 col-md-4 col-lg-5" style="display:flex;min-width:;flex-wrap:nowrap">

        <button type="button" id="open-nav" data-toggle="collapse" data-target="#navbarNav" class="store-button hidden-sm-down" style="flex-shrink:0;background-color:transparent;border:none">
          <i class="material-icons" style="font-size:2rem;margin-top:-3px;">menu</i>
        </button>

        <MegaMenu></MegaMenu>

        <span class="hidden-sm-down uppernav-title float-right" style="flex-shrink:0;padding-left:30px;">{{title}}</span>

        <BranchMenu></BranchMenu>

        <div class="dropdown dropdown-filter-btn hidden-md-up">
          <a href="#" id="open-menu-mobile" class="open-menu-mobile-closed" style="border:none;">
            <i class="fa fa-filter fa-2x" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      <div class="col col-md-5 col-lg-5 hidden-sm-down"></div>

      <div class="col-5 col-sm-4 col-md-3 col-lg-2" style="">
        <AccountMenu></AccountMenu>
      </div>
    </div>

    <Filters v-if="!showReportFilter"></Filters>
    <ReportFilters v-if="showReportFilter"></ReportFilters>
  </nav>
</template>

<script>
import Auth from '@/auth'
import Filters from '@/components/common/Filters'
import ReportFilters from '@/components/common/ReportFilters'
import MegaMenu from '@/components/common/MegaMenu'
import FiltersModal from '@/components/common/FiltersModal'
import BranchMenu from '@/components/common/BranchMenu'
import AccountMenu from '@/components/common/AccountMenu'

export default {
  name: 'UpperNav',
  props: ['title'],
  components: {
    Filters,
    FiltersModal,
    MegaMenu,
    ReportFilters,
    BranchMenu,
    AccountMenu
  },
  data () {
    return {
    }
  },
  methods: {
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

    // for (const A of document.querySelectorAll('*')) A.style.outline = `solid hsl(${(A + A).length * 9},99%,50%)1px`

    Array.prototype.forEach.call(doNotClose, function (el) {
      el.addEventListener('click', e => {
        e.stopPropagation()
      })
    })

    const filterBtn = document.getElementById('open-menu-mobile')

    filterBtn.addEventListener('click', () => {
      if (filterBtn.classList.contains('open-menu-mobile-active')) {
        filterBtn.classList.remove('open-menu-mobile-active')
        filterBtn.classList.add('open-menu-mobile-closed')
      } else {
        filterBtn.classList.remove('open-menu-mobile-closed')
        filterBtn.classList.add('open-menu-mobile-active')
      }
    })

    document.title = 'Altec Relatórios'
  },
  computed: {
    showReportFilter: function () {
      return this.$route.path.indexOf('/reports') === 0
    }
  }
}
</script>
