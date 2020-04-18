<template>
<div>
  <!-- <spinner v-show="loggingIn"></spinner> -->

  <UpperNav :title="pageTitle"></UpperNav>

  <UpperNavMobile></UpperNavMobile>

  <div class="dashboard container-fluid h-100">
    <div class="row">

      <div class="col col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
        <div class="card">
          <div class="card-header card-header-graph card-inverse card-faturamento">
            <div class="row">
              <div class="col-3 card-icon">
                <i class="material-icons">attach_money</i>
              </div>
              <div class="col-9 text-right graphHeaderInfo">
                <p>R$ {{billingValue}}</p>
                <p>faturamento {{filters.faturamentoFilter.name}}</p>
              </div>
            </div>
          </div>
          <div class="card-block">
            <div class="card-block graph-upper-data">
              <span>{{billingPercentage}}%</span>
              <span v-bind:class="trendingClass(billingPercentage)"><i class="material-icons">{{trendingClass(billingPercentage)}}</i></span>
              <span>Que a média dos últimos 3 meses</span>
            </div>
            <div>
              <bar-chart
                :chart-data="dataFaturamento"
                :options="barBeginAtZeroOptions"
                :height="300"
              >
              </bar-chart>
            </div>
          </div>
        </div>
      </div>
      <div class="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
        <div class="card">
          <div class="card-header card-header-graph card-inverse card-clientes">
            <div class="row">
              <div class="col-3 card-icon">
                <i class="material-icons">group</i>
              </div>
              <div class="col-9 text-right graphHeaderInfo">
                <p>{{quantityPeopleValue}}</p>
                <p>Clientes</p>
              </div>
            </div>
          </div>
          <div class="card-block">
            <div class="card-block graph-upper-data">
              <span>{{quantityPeoplePercentage}}%</span>
              <span v-bind:class="trendingClass(quantityPeoplePercentage)"><i class="material-icons">{{trendingClass(quantityPeoplePercentage)}}</i></span>
              <span>Que a média dos últimos 3 meses</span>
            </div>
            <div>
              <bar-chart
                :chart-data="dataCliente"
                :options="quantityPeopleOptions"
                :height="300"
              >
              </bar-chart>
            </div>
          </div>
        </div>
      </div>
      <div class="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
        <div class="card">
          <div class="card-header card-header-graph card-inverse card-ticket">
            <div class="row">
              <div class="col-3 card-icon">
                <i class="material-icons">trending_flat</i>
              </div>
              <div class="col-9 text-right graphHeaderInfo">
                <p>R$ {{billingPerCustomerValue}}</p>
                <p>ticket médio</p>
              </div>
            </div>
          </div>
          <div class="card-block">
            <div class="card-block graph-upper-data">
              <span>{{billingPerCustomerPercentage}}%</span>
              <span  v-bind:class="trendingClass(billingPerCustomerPercentage)"><i class="material-icons">{{trendingClass(billingPerCustomerPercentage)}}</i></span>
              <span>Que a média dos últimos 3 meses</span>
            </div>
            <div>
              <bar-chart
                :chart-data="dataTicket"
                :options="barBeginAtZeroOptions"
                :height="300"
                :width="100"
              >
              </bar-chart>
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
              <div class="col-sm-12 col-md-3 dataIndexesInfo">
                <p>Descontos</p>
                <p>R$ {{discount}}</p>
              </div>
              <div class="col-sm-12 col-md-3 dataIndexesInfo">
                <p>Transfências</p>
                <p>R$ {{totalTransferred}}</p>
              </div>
              <div class="col-sm-12 col-md-3 dataIndexesInfo">
                <p>Cancelamentos</p>
                <p>R$ {{totalCanceled}}</p>
              </div>
              <div class="col-sm-12 col-md-3 dataIndexesInfo">
                <p>Serviço</p>
                <p>R$ {{addition}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
        <div class="card" style="padding: 0 20px 0 20px;">
          <div class="card-block card-title">
            <p>FATURAMENTO POR LOJA</p>
            <div class="row" style="margin-left:0px;margin-right:0px;border-bottom:solid 1px #CCC;">
              <div class="col table-responsive reports-default-tables" style="height:300px;">
                <table class="table table-responsive dashboard-store-revenue-table">
                  <thead>
                    <tr>
                      <th>Estabelecimento</th>
                      <th>Faturamento</th>
                      <th>Clientes</th>
                      <th>Ticket Médio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="branch in billingBranch">
                      <th>{{branch.name}}</th>
                      <td>R$ {{branch.billing}}</td>
                      <td>{{branch.quantityPeople}}</td>
                      <td>R$ {{branch.billingPerCustomer}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
        <div class="card">
          <div class="card-block card-title">
            <p>FORMA DE RECEBIMENTO</p>
            <bar-chart
              :chart-data="dataPayment"
              :options="barOptions"
              :height="300"
              :width="100"
            >
            </bar-chart>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
        <div class="card">
          <div class="card-block card-title">
            <p>PRODUTOS MAIS VENDIDOS</p>
            <bar-chart
              :chart-data="dataProductSales"
              :options="SaleProductOptions"
              :height="300"
              :width="100"
            >
            </bar-chart>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
        <div class="card">
          <div class="card-block card-title">
            <p>VENDA POR GRUPO GERENCIAL</p>
            <doughnut-chart
              :chart-data="dataGroupSales"
              :options="DoughnutOptions"
              :height="300"
              :width="100"
            >
            </doughnut-chart>
            <!-- <div class="caption-list">
              <div class="caption">
                <p style="background-color"></p>
                <p>Legenda 1</p>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-block card-title">
            <p>EVOLUÇÃO DE FATURAMENTO</p>
            <line-chart
              :chart-data="dataBillingEvolution"
              :options="barOptions"
              :height="300"
            >
            </line-chart>

            <div class="row text-center">
              <div class="col-sm-12 col-md-4 dataIndexesEvolution">
                <p>Melhor dia: {{bestDay}}</p>
                <p>R$ {{bestDayBilling}}</p>
              </div>
              <div class="col-sm-12 col-md-4 dataIndexesEvolution">
                <p>Pior dia: {{worstDay}}</p>
                <p>R$ {{worstDayBilling}}</p>
              </div>
              <div class="col-sm-12 col-md-4 dataIndexesEvolution">
                <p>Média diária</p>
                <p>R$ {{averageBilling}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <DashboardFooter></DashboardFooter>
</div>

</template>

<script>
import Auth from '@/auth'
import UpperNav from '@/components/common/UpperNav'
import UpperNavMobile from '@/components/common/UpperNavMobile'
import DashboardFooter from '@/components/common/DashboardFooter'
import BarChart from '../../BarChart.js'
import LineChart from '../../LineChart.js'
import DoughnutChart from '../../DoughnutChart.js'
import Spinner from '@/components/common/Spinner'

var numeral = require('numeral')

export default {
  name: 'Dashboard',
  components: {
    UpperNav,
    UpperNavMobile,
    DashboardFooter,
    BarChart,
    LineChart,
    DoughnutChart,
    numeral,
    Spinner
  },
  mounted () {
    this.getDashboard()

    this.interval = setInterval(function () {
      this.getDashboard()
    }.bind(this), 2000)
  },
  created: function () {
    // console.log(this.globalReadOnlyProperty)

    this.barBeginAtZeroOptions = JSON.parse(JSON.stringify(this.$data.barOptions))
    this.barBeginAtZeroOptions.scales = {
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

    this.barBeginAtZeroOptions.tooltips = {
      intersect: false,
      position: 'nearest',
      displayColors: false,
      callbacks: {
        label: function (tooltipItem, data) {
          var value = data.datasets[0].data[tooltipItem.index]
          return 'R$ ' + utils.moneyFormat(value)
        }
      }
    }

    this.quantityPeopleOptions = JSON.parse(JSON.stringify(this.$data.barOptions))
    this.quantityPeopleOptions.tooltips.callbacks = {}

    this.SaleProductOptions = JSON.parse(JSON.stringify(this.$data.barOptions))

    this.SaleProductOptions.scales = {
      xAxes: [{
        barPercentage: 0.6,
        categoryPercentage: 1,
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

    this.SaleProductOptions.tooltips.displayColors = false
    this.SaleProductOptions.tooltips.callbacks = {
      title: function (tooltipItem, data) {
        return data.datasets[tooltipItem[0].datasetIndex].label
      },
      label: function (tooltipItem, data) {
        var value = data.datasets[tooltipItem.datasetIndex].data[0]
        return 'Quantidade: ' + value
      },
      beforeLabel: function (tooltipItem, data) {
        var value = data.datasets[tooltipItem.datasetIndex].totalValue
        if (value) {
          return 'Valor: R$ ' + utils.moneyFormat(value)
        }
      }
    }

    this.SaleProductOptions.legend = {
      display: true,
      position: 'left',
      onClick: false,
      labels: {
        fontColor: '#28322E',
        boxWidth: 12,
        padding: 10
      }
    }

    this.DoughnutOptions = JSON.parse(JSON.stringify(this.$data.barOptions))

    this.DoughnutOptions.legend = {
      display: true,
      position: 'left',
      onClick: false,
      labels: {
        fontColor: '#28322E',
        boxWidth: 12,
        // usePointStyle: true,
        padding: 15
      }
    }

    this.DoughnutOptions.scales = {
      xAxes: [],
      yAxes: []
    }
    this.DoughnutOptions.tooltips = {
      displayColors: false,
      backgroundColor: '#fff',
      titleFontColor: '#000',
      bodyFontColor: '#7D98DC',
      multiKeyBackground: '#000',
      bodyFontStyle: 'bold',
      titleMarginBottom: 16,
      caretSize: 0,
      callbacks: {
        title: function (tooltipItem, data) {
          return data.datasets[0].labels[tooltipItem[0].index]
        },
        label: function (tooltipItem, data) {
          var value = data.datasets[0].data[tooltipItem.index]
          return ' R$ ' + utils.moneyFormat(value)
        },
        beforeLabel: function (tooltipItem, data) {
          var value = data.datasets[0].percent[tooltipItem.index]
          if (value) {
            return value + '%'
          }
        }
      }
    }

    // if (localStorage.getItem('faturamentoFilter') === null) {
    //   localStorage.setItem('faturamentoFilter', JSON.stringify(this.filters.faturamentoFilters[1]))
    // }

    // if (localStorage.getItem('operacaoFilter') === null) {
    //   localStorage.setItem('operacaoFilter', JSON.stringify(this.filters.operacaoFilters[3]))
    // }

    // if (localStorage.getItem('periodoFilter') === null) {
    //   localStorage.setItem('periodoFilter', JSON.stringify(this.filters.periodoFilters[2]))
    // }

    // if (localStorage.getItem('branchFilter') === null) {
    //   localStorage.setItem('branchFilter', JSON.stringify([this.filters.branchFilters[0]]))
    // }

    this.loadFilters()
  },
  data () {
    return {
      pageTitle: 'Dashboard',
      filters: {
        branchFilter: {},
        faturamentoFilter: {},
        operacaoFilter: {},
        periodoFilter: {}
      },
      billingPercentage: '0',
      billingPerCustomerPercentage: '0',
      quantityPeoplePercentage: '0',
      billingValue: '0,00',
      billingPerCustomerValue: '0,00',
      quantityPeopleValue: '0',
      discount: '0,00',
      totalCanceled: '0,00',
      totalTransferred: '0,00',
      addition: '0,00',
      bestDayBilling: '0,00',
      worstDayBilling: '0,00',
      averageBilling: '0,00',
      bestDay: '00/00',
      worstDay: '00/00',
      dataFaturamento: {},
      dataCliente: {},
      dataTicket: {},
      dataPayment: {},
      dataBillingEvolution: {},
      dataProductSales: {},
      dataGroupSales: {},
      billingBranch: [],
      barOptions: {
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
  methods: {
    trendingClass (number) {
      var className = 'trending_up'

      if (number < 0) {
        className = 'trending_down'
      }

      return className
    },
    logout () {
      Auth.logout()
    },
    loadFilters () {
      this.filters.faturamentoFilter = JSON.parse(localStorage.getItem('faturamentoFilter'))
      this.filters.operacaoFilter = JSON.parse(localStorage.getItem('operacaoFilter'))
      this.filters.periodoFilter = JSON.parse(localStorage.getItem('periodoFilter'))
      this.filters.branchFilter = JSON.parse(localStorage.getItem('branchFilter'))

      if (!this.filters.faturamentoFilter) {
        this.filters.faturamentoFilter = []
      }
    },
    getDashboard () {
      if (!this.filters.loggingIn) {
        this.loadFilters()

        if (this.filters.branchFilter) {
          this.filters.loggingIn = true

          this.$http.get('http://altec-ws-staging-873971210.us-east-1.elb.amazonaws.com/backoffice/reports/v1/dashboard', { params: {
            branch: this.filters.branchFilter.map(function (branch) { return branch.id }).join(','),
            period: this.filters.periodoFilter.value,
            operation: this.filters.operacaoFilter.value
          }})
            .then((response) => {
              this.billing = (this.filters.faturamentoFilter.value === 'net_billing') ? response.data.net_billing : response.data.gross_billing

              this.billingValue = utils.moneyFormat(this.billing.data[2])

              this.dataFaturamento = {
                labels: this.billing.labels,
                datasets: [
                  {
                    borderWidth: 1,
                    backgroundColor: ['#8DDAB0', '#8DDAB0', '#50C786'],
                    data: this.billing.data
                  }
                ]
              }

              this.quantityPeopleValue = response.data.quantity_people.data[2]
              this.dataCliente = {
                labels: response.data.quantity_people.labels,
                datasets: [
                  {
                    borderWidth: 1,
                    backgroundColor: ['#B1C2EB', '#B1C2EB', '#839EDF'],
                    data: response.data.quantity_people.data
                  }
                ]
              }

              this.billingPerCustomer = (this.filters.faturamentoFilter.value === 'net_billing') ? response.data.net_billing_per_customer : response.data.gross_billing_per_customer
              this.billingPerCustomerValue = utils.moneyFormat(this.billingPerCustomer.data[2])

              this.dataTicket = {
                labels: this.billingPerCustomer.labels,
                datasets: [
                  {
                    backgroundColor: ['#9B9B9B', '#9B9B9B', '#424242'],
                    data: this.billingPerCustomer.data
                  }
                ]
              }

              this.billingPercentage = this.billing.media.progressive
              this.billingPerCustomerPercentage = this.billingPerCustomer.media.progressive
              this.quantityPeoplePercentage = response.data.quantity_people.media.progressive

              this.dataPayment = {
                labels: response.data.payments.labels,
                datasets: [
                  {
                    backgroundColor: ['#41BD76', '#F5A623', '#38BBF7', '#8763C6', '#00B2B9', '#FFDA4D'],
                    data: response.data.payments.data
                  }
                ]
              }

              this.billingEvolution = (this.filters.faturamentoFilter.value === 'net_billing') ? response.data.net_billing_evolution : response.data.gross_billing_evolution

              this.dataBillingEvolution = {
                labels: this.billingEvolution.labels,
                datasets: [
                  {
                    backgroundColor: 'rgba(237, 246, 246, 0.7)',
                    borderColor: '#26BEC4',
                    pointBackgroundColor: '#4CABAD',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 1,
                    pointRadius: 3,
                    pointHoverRadius: 6,
                    data: this.billingEvolution.data
                  }
                ]
              }

              var datasets = []
              var backgroundColor = ['#554851', '#FFDA4D', '#7894DA', '#41BD76', '#F5A623', '#38BBF7', '#8763C6', '#4CABAD', '#D82502', '#9B9B9B']

              for (var i = 0; i < response.data.sales_product.labels.length; i++) {
                datasets.push({
                  label: response.data.sales_product.labels[i],
                  backgroundColor: backgroundColor[i],
                  totalValue: response.data.sales_product.total_value[i].toString(),
                  data: [response.data.sales_product.data[i]]
                })
              }

              this.dataProductSales = {
                labels: [''],
                datasets: datasets
              }

              var labelsGroup = []
              for (var iGroup = 0; iGroup < response.data.owner_product_groups.labels.length; iGroup++) {
                labelsGroup.push('')
              }

              this.dataGroupSales = {
                labels: response.data.owner_product_groups.labels,
                datasets: [
                  {
                    labels: response.data.owner_product_groups.labels,
                    backgroundColor: ['#554851', '#FFDA4D', '#7894DA', '#41BD76', '#F5A623', '#38BBF7', '#8763C6', '#4CABAD', '#D82502', '#9B9B9B'],
                    data: response.data.owner_product_groups.data,
                    percent: response.data.owner_product_groups.percent
                  }
                ]
              }

              this.discount = utils.moneyFormat(response.data.discount)
              this.totalCanceled = utils.moneyFormat(response.data.total_canceled)
              this.totalTransferred = utils.moneyFormat(response.data.total_transferred)
              this.addition = utils.moneyFormat(response.data.addition)

              this.bestDay = this.billingEvolution.best_day.date
              this.worstDay = this.billingEvolution.worst_day.date
              this.bestDayBilling = utils.moneyFormat((this.filters.faturamentoFilter.value === 'net_billing') ? this.billingEvolution.best_day.net_billing : this.billingEvolution.best_day.gross_billing)
              this.worstDayBilling = utils.moneyFormat((this.filters.faturamentoFilter.value === 'net_billing') ? this.billingEvolution.worst_day.net_billing : this.billingEvolution.worst_day.gross_billing)
              this.averageBilling = utils.moneyFormat(this.billingEvolution.average)

              var branches = []

              this.billingPerBranch = (this.filters.faturamentoFilter.value === 'net_billing') ? response.data.net_billing_per_branch : response.data.gross_billing_per_branch

              this.billingPerBranch.forEach(function (branch) {
                branches.push({
                  'name': branch['name'],
                  'billing': utils.moneyFormat(branch['billing']),
                  'quantityPeople': branch['quantity_people'],
                  'billingPerCustomer': utils.moneyFormat(branch['billing_per_customer'])
                })
              })

              this.billingBranch = branches

              this.filters.loggingIn = false
            })
            .catch((response) => {
              this.filters.loggingIn = false
            })
        }
      }
    }
  },
  beforeDestroy: function () {
    clearInterval(this.interval)
  }
}
</script>
