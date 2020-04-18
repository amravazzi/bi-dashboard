<template>
<div>

  <UpperNav :title="pageTitle" v-on:getReport="getReport"></UpperNav>

  <div class="container-fluid h-100">
    <spinner v-show="loading"></spinner>

    <div class="row">
      <p class="upper-title-reports bold">Período de {{startDateLabel}} a {{endDateLabel}}</p>
    </div>

    <line-chart
      :chart-data="lineChart"
      :options="lineOptions"
      :height="300"
    >
    </line-chart>

    <div class="row">
      <div class="col">
        <div class="card" >
          <div class="card-block card-title">
            <p>RESUMO DO FATURAMENTO POR HORA</p>
            <div class="row" style="margin-left:0px;margin-right:0px;border-bottom:solid 1px #CCC;">
              <div class="col table-responsive reports-default-tables small-content-table byhour-revenue-first-table">
                <vue-good-table
                  :columns="summaryPerHourColumns"
                  :rows="summaryPerHourRows"
                  :paginate="false"
                  :lineNumbers="false"
                  :defaultSortBy="{field: 'label', type: 'asc'}"
                  styleClass="table table-responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <DashboardFooter></DashboardFooter>
  <RevenueModal v-on:getReport="getReport" :enabledFilters="enabledFilters"></RevenueModal>
</div>
</template>

<script>

import moment from 'moment'
import UpperNav from '@/components/common/UpperNav'
import DashboardFooter from '@/components/common/DashboardFooter'
import RevenueModal from '@/components/modals/RevenueModal'
import LineChart from '../../LineChart.js'
import Spinner from '@/components/common/Spinner'

var numeral = require('numeral')

export default {
  name: 'HourRevenueReport',
  components: {
    moment,
    UpperNav,
    DashboardFooter,
    RevenueModal,
    LineChart,
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
      this.indicadorFilter = JSON.parse(localStorage.getItem('revenue.indicadorFilter'))

      this.startDateLabel = moment(this.startDate, 'DD/MM/YYYY').format('DD MMMM YYYY')
      this.endDateLabel = moment(this.endDate, 'DD/MM/YYYY').format('DD MMMM YYYY')

      this.summaryPerHourColumns = [
        {
          label: 'Hora',
          field: 'label'
        }
      ]

      if (this.inArray(1, this.indicadorFilter.map(function (item) { return item.value }))) {
        this.summaryPerHourColumns.push({
          label: 'Faturamento',
          field: 'gross_billing',
          type: 'number'
        })
      }

      if (this.inArray(2, this.indicadorFilter.map(function (item) { return item.value }))) {
        this.summaryPerHourColumns.push({
          label: 'Clientes por hora',
          field: 'total_people',
          type: 'number'
        })
      }

      if (this.inArray(3, this.indicadorFilter.map(function (item) { return item.value }))) {
        this.summaryPerHourColumns.push({
          label: 'Ticket Médio',
          field: 'gross_billing_per_customer',
          type: 'number'
        })
      }
    },
    getReport () {
      this.loadFilters()

      const date = moment(this.startDate + ' ' + this.startDateTime, 'DD/MM/YYYY HH:mm')
      const endDate = moment(this.endDate + ' ' + this.endDateTime, 'DD/MM/YYYY HH:mm')

      if (!date.isValid() || !endDate.isValid() || date.isAfter(endDate)) {
        return false
      }

      this.loading = false

      this.$http.get('http://altec-ws-staging-873971210.us-east-1.elb.amazonaws.com/backoffice/reports/v1/accumulated_billing_per_hour', { params: {
        branch: this.branchFilter.map(function (branch) { return branch.id }).join(','),
        start_date: this.startDate, // eslint-disable-line
        end_date: this.endDate // eslint-disable-line
      }})
      .then((response) => {
        const perHourLines = []
        this.summaryPerHourRows = []

        Array.prototype.forEach.call(response.body.data, function (line) {
          var labelLine = moment(line.label, 'HH:mm - HH:mm')

          if (labelLine.isValid()) {
            labelLine = labelLine.format('HH:00 - HH:mm')
          } else {
            labelLine = line.label
          }

          const perHourLine = {
            label: labelLine,
            gross_billing: 'R$ ' +utils.moneyFormat(line.gross_billing), // eslint-disable-line
            gross_billing_per_customer: 'R$ ' +utils.moneyFormat(line.gross_billing_per_customer), // eslint-disable-line
            total_people: line.total_people.toString(), // eslint-disable-line
          }

          perHourLines.push(perHourLine)
        })

        this.summaryPerHourRows = perHourLines

        this.lineChart = {
          labels: response.body.charts.label,
          datasets: [
            {
              backgroundColor: 'rgba(237, 246, 246, 0.7)',
              borderColor: '#26BEC4',
              pointBackgroundColor: '#4CABAD',
              pointBorderColor: '#fff',
              pointBorderWidth: 1,
              pointRadius: 3,
              pointHoverRadius: 6,
              data: response.body.charts.gross_billing
            }
          ]
        }

        this.loading = false
      })
      .catch((response) => {
        this.loading = false
      })
    },
    inArray (needle, haystack, argStrict) {
      return utils.inArray(needle, haystack, argStrict)
    }
  },
  mounted () {
    this.getReport()
  },
  data () {
    return {
      enabledFilters: [
        'indicadores',
        'visualizacao'
      ],
      pageTitle: 'Faturamento por hora',
      loading: false,
      startDateLabel: '',
      endDateLabel: '',
      branchFilter: [],
      summaryPerHourColumns: [],
      summaryPerHourRows: [],
      lineChart: [],
      lineOptions: {
        animation: false,
        legend: {
          display: false
        },
        tooltips: {
          intersect: false,
          position: 'nearest',
          displayColors: false,
          callbacks: {
            label: function (tooltipItem, data) {
              var value = data.datasets[0].data[tooltipItem.index]
              return 'R$ ' + utils.moneyFormat(value)
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            stacked: true,
            barPercentage: 0.6,
            categoryPercentage: 0.6,
            gridLines: {
              display: false,
              color: 'rgba(0, 0, 0, 0)'
            }
          }],
          yAxes: [{
            gridLines: {
              display: true,
              color: 'rgba(204,204,204, 0.3)'
            },
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 15,
              callback: function (dataLabel, index) {
                return numeral(dataLabel).format('R$0.[000]a')
              }
            }
          }]
        }
      }
    }
  },
  created () {
  }
}
</script>
