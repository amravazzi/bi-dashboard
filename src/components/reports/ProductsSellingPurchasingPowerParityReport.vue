<template>
<div>

  <UpperNav :title="pageTitle" v-on:getReport="getReport"></UpperNav>

  <div class="container-fluid h-100">
    <spinner v-show="loading"></spinner>

    <div class="row">
      <p class="upper-title-reports bold">Período de {{startDateLabel}} a {{endDateLabel}}</p>
    </div>

    <div class="row">
      <div class="col-12" v-for="sellingRow in sellingRows">
        <div class="card" >
          <div class="card-block card-title" style="margin-bottom:0;padding-bottom:0;">
            <p class="">{{sellingRow.label}}</p>
            <div class="row" style="margin-left:0px;margin-right:0px">
              <div class="reports-default-tables table-responsive ppp-report-card-table small-content-table">
                <vue-good-table
                  :columns="sellingColumns"
                  :rows="sellingRow.owner_products"
                  :paginate="false"
                  :lineNumbers="false"
                  styleClass="table table-responsive ellipsis"
                  v-if="sellingRow.owner_products.length > 0"
                />
                <p class="table table-responsive ellipsis" v-else>Sem dados de venda.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <DashboardFooter></DashboardFooter>
  <SellingModal v-on:getReport="getReport" :enabledFilters="enabledFilters"></SellingModal>

</div>
</template>

<script>

import moment from 'moment'
import UpperNav from '@/components/common/UpperNav'
import DashboardFooter from '@/components/common/DashboardFooter'
import SellingModal from '@/components/modals/RevenueModal'
import Spinner from '@/components/common/Spinner'

var numeral = require('numeral')

export default {
  name: 'ProductsSellingPurchasingPowerParityReport',
  components: {
    moment,
    UpperNav,
    DashboardFooter,
    SellingModal,
    Spinner,
    numeral
  },
  methods: {
    loadFilters () {
      this.branchFilter = JSON.parse(localStorage.getItem('branchFilter'))
      this.startDate = JSON.parse(localStorage.getItem('startDate'))
      this.endDate = JSON.parse(localStorage.getItem('endDate'))
      this.startDateTime = JSON.parse(localStorage.getItem('startDateTime'))
      this.endDateTime = JSON.parse(localStorage.getItem('endDateTime'))
      this.timeframeFilter = JSON.parse(localStorage.getItem('revenue.timeframeFilter'))

      this.startDateLabel = moment(this.startDate, 'DD/MM/YYYY').format('DD MMMM YYYY')
      this.endDateLabel = moment(this.endDate, 'DD/MM/YYYY').format('DD MMMM YYYY')
    },
    getReport () {
      this.loadFilters()

      const date = moment(this.startDate + ' ' + this.startDateTime, 'DD/MM/YYYY HH:mm')
      const endDate = moment(this.endDate + ' ' + this.endDateTime, 'DD/MM/YYYY HH:mm')

      if (!date.isValid() || !endDate.isValid() || date.isAfter(endDate)) {
        return false
      }

      this.loading = false

      this.$http.get('http://altec-ws-staging-873971210.us-east-1.elb.amazonaws.com/backoffice/reports/v1/ppc_product', { params: {
        branch: this.branchFilter.map(function (branch) { return branch.id }).join(','),
        start_date: this.startDate, // eslint-disable-line
        end_date: this.endDate, // eslint-disable-line
        timeframe: this.timeframeFilter.value // eslint-disable-line
      }})
      .then((response) => {
        this.sellingRows = response.body

        this.loading = false
      })
      .catch((response) => {
        this.loading = false
      })
    }
  },
  mounted () {
    this.getReport()
  },
  data () {
    return {
      enabledFilters: [
        'visualizacao'
      ],
      pageTitle: 'PPC Produto',
      loading: false,
      startDateLabel: '',
      endDateLabel: '',
      branchFilter: [],
      sellingColumns: [
        {
          label: '',
          field: 'description'
        },
        {
          label: 'Itens',
          field: 'total_items'
        },
        {
          label: '%',
          field: 'percent'
        },
        {
          label: 'PPC',
          field: 'ppc'
        }
      ],
      sellingRows: []
    }
  },
  created () {
  }
}
</script>
