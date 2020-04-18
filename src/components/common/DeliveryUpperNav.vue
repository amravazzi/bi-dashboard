<template>

  <nav class="row navbar navbar-light main-nav">

    <div class="row align-items-center">

      <div class="col-6 col-sm-8 col-md-4 col-lg-5 delivery-uppernav-wrapper">

        <span class="hidden-sm-down uppernav-title float-right" style="white-space: nowrap;">{{title}}</span>

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

    <DeliveryNav class="hidden-sm-down"></DeliveryNav>

    <nav>

    </nav>


  </nav>
</template>

<script>
import Auth from '@/auth'
import MegaMenu from '@/components/common/MegaMenu'
import BranchMenu from '@/components/common/BranchMenu'
import AccountMenu from '@/components/common/AccountMenu'
import DeliveryNav from '@/components/common/DeliveryNav'

export default {
  name: 'DeliveryUpperNav',
  props: ['title'],
  components: {
    MegaMenu,
    BranchMenu,
    AccountMenu,
    DeliveryNav
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
    // for (const A of document.querySelectorAll('*')) A.style.outline = `solid hsl(${(A + A).length * 9},99%,50%)1px`

    const doNotClose = document.getElementsByClassName('do-not-close')

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
  },
  computed: {
    showReportFilter: function () {
      return this.$route.path.indexOf('/reports') === 0
    }
  }
}
</script>
