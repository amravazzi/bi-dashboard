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
            <p>GRUPOS MAIS VENDIDOS</p>
            <bar-chart
              :chart-data="barChart"
              :options="barOptions"
              :height="300"
            >
            </bar-chart>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="card" >
          <div class="card-block card-title">
            <p>GRUPOS</p>
            <div class="row" style="margin-left:0px;margin-right:0px;border-bottom:solid 1px #CCC;">
              <div class="reports-default-tables table-responsive small-content-table">
                <vue-good-table
                  :columns="productsSellingColumns"
                  :rows="productsSellingPerHourRows"
                  :paginate="false"
                  :lineNumbers="false"
                  :defaultSortBy="{field: 'quantity', type: 'desc'}"
                  styleClass="table table-responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-block" style="padding-top:0;padding-bottom:0">
            <div class="row text-center">
              <div class="col-sm-12 col-md-6 dataIndexesInfo">
                <p>Total</p>
                <p>R$ {{totalValue}}</p>
              </div>
              <div class="col-sm-12 col-md-6 dataIndexesInfo">
                <p>Produtos</p>
                <p>{{quantity}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <DashboardFooter></DashboardFooter>
  <RevenueModal v-on:getReport="getReport"></RevenueModal>

</div>
</template>

<script>

import moment from 'moment'
import UpperNav from '@/components/common/UpperNav'
import DashboardFooter from '@/components/common/DashboardFooter'
import RevenueModal from '@/components/modals/RevenueModal'
import BarChart from '../../BarChart.js'
import Spinner from '@/components/common/Spinner'

var numeral = require('numeral')

export default {
  name: 'GroupsSellingReport',
  components: {
    moment,
    UpperNav,
    DashboardFooter,
    RevenueModal,
    BarChart,
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

      this.$http.get('http://altec-ws-staging-873971210.us-east-1.elb.amazonaws.com/backoffice/reports/v1/sales_products', { params: {
        branch: this.branchFilter.map(function (branch) { return branch.id }).join(','),
        start_date: this.startDate, // eslint-disable-line
        end_date: this.endDate // eslint-disable-line
      }})
      .then((response) => {
        const Lines = []

        this.totalValue = utils.moneyFormat(response.body.total_value)
        this.quantity = response.body.quantity

        this.productsSellingPerHourRows = []

        Array.prototype.forEach.call(response.body.groups.data, function (line) {
          const ProductLine = {
            code: line.code.toString(),
            item: line.description.toString(),
            quantity: line.quantity,
            totalPrice: 'R$ ' + utils.moneyFormat(line.total_value),
            perCent: (line.percent / 100).toString()
          }

          Lines.push(ProductLine)
        })

        this.productsSellingPerHourRows = Lines

        var datasets = []
        var backgroundColor = ['#554851', '#FFDA4D', '#7894DA', '#41BD76', '#F5A623', '#38BBF7', '#8763C6', '#4CABAD', '#D82502', '#9B9B9B']

        for (var i = 0; i < response.body.groups.top.labels.length; i++) {
          datasets.push({
            label: response.body.groups.top.labels[i],
            backgroundColor: backgroundColor[i],
            quantity: response.body.groups.top.quantity[i].toString(),
            data: [response.body.groups.top.data[i]]
          })
        }

        this.barChart = {
          labels: [''],
          datasets: datasets
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
      pageTitle: 'Grupos',
      loading: false,
      startDateLabel: '',
      endDateLabel: '',
      branchFilter: [],
      barChart: {},
      barOptions: {
        animation: false,
        legend: {
          display: true,
          position: 'left',
          onClick: false,
          labels: {
            fontColor: '#28322E',
            boxWidth: 15,
            padding: 12
          }
        },
        tooltips: {
          intersect: false,
          position: 'nearest',
          displayColors: false,
          callbacks: {
            title: function (tooltipItem, data) {
              return data.datasets[tooltipItem[0].datasetIndex].label
            },
            label: function (tooltipItem, data) {
              var value = data.datasets[tooltipItem.datasetIndex].data[0]
              return 'Valor: R$ ' + utils.moneyFormat(value)
            },
            beforeLabel: function (tooltipItem, data) {
              var value = data.datasets[tooltipItem.datasetIndex].quantity
              if (value) {
                return 'Quantidade: ' + value
              }
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            barPercentage: 0.4,
            categoryPercentage: 0.9,
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
      },
      productsSellingColumns: [{
        label: 'Código',
        field: 'code',
        width: '150px'
      }, {
        label: 'Nome',
        field: 'item',
        width: '300px'
      }, {
        label: 'Quantidade',
        field: 'quantity',
        type: 'number'
      }, {
        label: 'Total',
        field: 'totalPrice'
      }, {
        label: '%',
        field: 'perCent',
        type: 'percentage'
      }],
      productsSellingPerHourRows: [],
      totalValue: utils.moneyFormat(0),
      quantity: 0
    }
  }
}
</script>
