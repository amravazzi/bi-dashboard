<template>
<div>

  <UpperNav :title="pageTitle" v-on:getReport="getReport"></UpperNav>

  <div class="container-fluid h-100">
    <spinner v-show="loading"></spinner>

    <div class="row">
      <p class="upper-title-reports bold">Período de {{startDateLabel}} a {{endDateLabel}}</p>
    </div>

    <div class="row">
      <div class="col">
        <div class="card" >
          <div class="card-block card-title">
            <p>FATURAMENTO POR TIPO DE RECEBIMENTO</p>
            <line-chart
              :chart-data="lineChart"
              :options="lineOptions"
              :height="300"
            >
            </line-chart>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="card" >
          <div class="card-block card-title">
            <p>FATURAMENTO POR TIPO DE RECEBIMENTO</p>
            <div class="row" style="margin-left:0px;margin-right:0px;border-bottom:solid 1px #CCC;">
              <div class="reports-default-tables table-responsive tight small-content-table">
                <vue-good-table
                  :columns="receiptTypeColumns"
                  :rows="receiptTypeRows"
                  :paginate="false"
                  :lineNumbers="false"
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
  name: 'ReceiptTypeRevenueReport',
  components: {
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

      this.$http.get('http://altec-ws-staging-873971210.us-east-1.elb.amazonaws.com/backoffice/reports/v1/billing_type_receipt', { params: {
        branch: this.branchFilter.map(function (branch) { return branch.id }).join(','),
        start_date: this.startDate, // eslint-disable-line
        end_date: this.endDate, // eslint-disable-line
        timeframe: this.timeframeFilter.value // eslint-disable-line
      }})
      .then((response) => {
        const receiptTypeColumns = []
        this.receiptTypeColumns = []

        Array.prototype.forEach.call(response.body.header, function (line, i) {
          const receiptTypeColumn = {
            label: line,
            field: i.toString()
          }

          receiptTypeColumns.push(receiptTypeColumn)
        })

        this.receiptTypeColumns = receiptTypeColumns

        this.receiptTypeRows = []
        const receiptTypeLines = []

        Array.prototype.forEach.call(response.body.body, function (line) {
          const receiptTypeLine = {}

          Array.prototype.forEach.call(line, function (column, i) {
            var elVal = (column.type === 'currency') ? 'R$ ' + utils.moneyFormat(column.value) : column.value.toString()

            receiptTypeLine[i.toString()] = elVal
          })

          receiptTypeLines.push(receiptTypeLine)
        })

        const receiptTypeLine = {}

        Array.prototype.forEach.call(response.body.footer, function (column, i) {
          var elVal = (column.type === 'currency') ? 'R$ ' + utils.moneyFormat(column.value) : column.value.toString()

          receiptTypeLine[i.toString()] = elVal
        })

        receiptTypeLines.push(receiptTypeLine)

        this.receiptTypeRows = receiptTypeLines

        const receiptTypeCharts = []

        for (var key in response.body.charts.data) {
          if (!response.body.charts.data.hasOwnProperty(key)) {
            continue
          }

          const line = response.body.charts.data[key]

          const receiptTypeChart = {
            label: line.label,
            fill: true,
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: 'rgb(' + line.borderColor + ')',
            pointBackgroundColor: 'rgba(' + line.borderColor + ', 0.5)',
            pointBorderColor: '#fff',
            pointBorderWidth: 1,
            pointRadius: 3,
            pointHoverRadius: 6,
            data: line.data
          }

          receiptTypeCharts.push(receiptTypeChart)
        }

        this.lineChart = {
          labels: response.body.charts.label,
          datasets: receiptTypeCharts
        }

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
      pageTitle: 'Tipo de Faturamento',
      loading: false,
      startDateLabel: '',
      endDateLabel: '',
      branchFilter: [],
      receiptTypeColumns: [],
      receiptTypeRows: [],
      lineChart: [],
      lineOptions: {
        animation: false,
        legend: {
          display: true,
          position: 'left',
          onClick: false,
          labels: {
            fontColor: '#28322E',
            boxWidth: 12,
            padding: 15
          }
        },
        tooltips: {
          intersect: false,
          position: 'nearest',
          displayColors: false,
          callbacks: {
            label: function (tooltipItem, data) {
              var label = data.datasets[tooltipItem.datasetIndex].label
              var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
              return label + ': R$ ' + utils.moneyFormat(value)
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
