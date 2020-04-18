<template>
<div>

  <UpperNav :title="pageTitle"></UpperNav>

  <div class="container-fluid h-100">



    <div class="row">
      <p class="upper-title-reports bold">Período de 01 de Março a 10 de Março de 2017</p>
    </div>

    <div class="row">
      <div class="col">
        <div class="card" >
          <div class="card-block card-title">
            <p>SERVIÇO E REPIQUE</p>
            <div class="row" style="margin-left:0px;margin-right:0px;border-bottom:solid 1px #CCC;">
              <div class="col table-responsive reports-default-tables accumulated-revenue-first-table">
                <vue-good-table
                  :columns="pealTipsColumns"
                  :rows="pealTipsRows"
                  :paginate="false"
                  :lineNumbers="false"
                  styleClass="table table-responsive large-width last-line-featured"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="card" >
          <div class="card-block card-title">
            <p>SERVIÇO E REPIQUE - MESA</p>
            <div class="row" style="margin-left:0px;margin-right:0px;border-bottom:solid 1px #CCC;">
              <div class="col table-responsive reports-default-tables small-content-table">
                <vue-good-table
                  :columns="pealTipsByTableColumns"
                  :rows="pealTipsByTableRows"
                  :paginate="false"
                  :lineNumbers="false"
                  styleClass="table table-responsive last-line-featured"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="card" >
          <div class="card-block card-title">
            <p>SERVIÇO E REPIQUE - VENDEDOR</p>
            <div class="row" style="margin-left:0px;margin-right:0px;border-bottom:solid 1px #CCC;">
              <div class="col table-responsive reports-default-tables small-content-table">
                <vue-good-table
                  :columns="pealTipsBySellerColumns"
                  :rows="pealTipsBySellerRows"
                  :paginate="false"
                  :lineNumbers="false"
                  styleClass="table table-responsive last-line-featured"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="card" >
          <div class="card-block card-title">
            <p>SERVIÇO E REPIQUE - COMISSÃO</p>
            <div class="row" style="margin-left:0px;margin-right:0px;border-bottom:solid 1px #CCC;">
              <div class="col table-responsive reports-default-tables small-content-table">
                <vue-good-table
                  :columns="pealTipsCommissionsColumns"
                  :rows="pealTipsCommissionsRows"
                  :paginate="false"
                  :lineNumbers="false"
                  styleClass="table table-responsive last-line-featured"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DashboardFooter></DashboardFooter>
  <RevenueModal></RevenueModal>
</div>
</template>

<script>
import UpperNav from '@/components/common/UpperNav'
import DashboardFooter from '@/components/common/DashboardFooter'
import RevenueModal from '@/components/modals/RevenueModal'
import LineChart from '../../LineChart.js'

var numeral = require('numeral')

export default {
  name: 'GratuityAuditReport',
  components: {
    UpperNav,
    DashboardFooter,
    RevenueModal,
    numeral,
    LineChart
  },
  mounted () {
    this.dataBillingEvolution = {
      labels: [],
      datasets: [
        {
          backgroundColor: 'rgba(237, 246, 246, 0.7)',
          borderColor: '#26BEC4',
          pointBackgroundColor: '#4CABAD',
          pointBorderColor: '#fff',
          pointBorderWidth: 1,
          pointRadius: 3,
          pointHoverRadius: 6,
          data: []
        }
      ]
    }

    // for (var A of document.querySelectorAll('*')) A.style.outline = `solid hsl(${(A + A).length * 9},99%,50%)1px`
  },
  data () {
    return {
      pageTitle: 'Serviço e repique',
      pealTipsColumns: [{
        label: 'Data',
        field: 'date'
      }, {
        label: 'Mesa',
        field: 'table'
      }, {
        label: 'Operador',
        field: 'cashier'
      }, {
        label: 'Vendedor',
        field: 'seller'
      }, {
        label: 'Serviço Recebido',
        field: 'receivedService'
      }, {
        label: 'Repique',
        field: 'pealTip'
      }, {
        label: 'Total',
        field: 'total'
      }],
      pealTipsRows: [
        { date: '03/04/2017', table: 'Mesa 1', cashier: 'Operador 1', seller: 'Vendedor 1', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' },
        { date: '03/04/2017', table: 'Mesa 1', cashier: 'Operador 1', seller: 'Vendedor 1', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' },
        { date: '03/04/2017', table: 'Mesa 1', cashier: 'Operador 1', seller: 'Vendedor 1', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' },
        { date: '03/04/2017', table: 'Mesa 1', cashier: 'Operador 1', seller: 'Vendedor 1', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' },
        { date: '03/04/2017', table: 'Mesa 1', cashier: 'Operador 1', seller: 'Vendedor 1', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' },
        { date: '03/04/2017', table: 'Mesa 1', cashier: 'Operador 1', seller: 'Vendedor 1', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' },
        { date: '03/04/2017', table: 'Mesa 1', cashier: 'Operador 1', seller: 'Vendedor 1', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' },
        { date: '03/04/2017', table: 'Mesa 1', cashier: 'Operador 1', seller: 'Vendedor 1', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' },
        { date: 'TOTAL', table: '', cashier: '', seller: '', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' }
      ],
      pealTipsByTableColumns: [{
        label: 'Data',
        field: 'date'
      }, {
        label: 'Mesa',
        field: 'table'
      }, {
        label: 'Repique',
        field: 'pealTip'
      }, {
        label: 'Total',
        field: 'total'
      }],
      pealTipsByTableRows: [
        { date: '03/04/2017', table: 'Mesa 1', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' },
        { date: '03/04/2017', table: 'Mesa 1', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' },
        { date: '03/04/2017', table: 'Mesa 1', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' },
        { date: '03/04/2017', table: 'Mesa 1', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' },
        { date: '03/04/2017', table: 'Mesa 1', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' },
        { date: '03/04/2017', table: 'Mesa 1', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' },
        { date: '03/04/2017', table: 'Mesa 1', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' },
        { date: '03/04/2017', table: 'Mesa 1', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' },
        { date: '03/04/2017', table: 'Mesa 1', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' },
        { date: '03/04/2017', table: 'Mesa 1', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' },
        { date: 'TOTAL', table: '', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' }
      ],
      pealTipsBySellerColumns: [{
        label: 'Data',
        field: 'date'
      }, {
        label: 'Vendedor',
        field: 'seller'
      }, {
        label: 'Repique',
        field: 'pealTip'
      }, {
        label: 'Total',
        field: 'total'
      }],
      pealTipsBySellerRows: [
        { date: '03/04/2017', seller: 'Vendedor 1', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' },
        { date: '03/04/2017', seller: 'Vendedor 1', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' },
        { date: '03/04/2017', seller: 'Vendedor 1', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' },
        { date: '03/04/2017', seller: 'Vendedor 1', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' },
        { date: '03/04/2017', seller: 'Vendedor 1', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' },
        { date: '03/04/2017', seller: 'Vendedor 1', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' },
        { date: '03/04/2017', seller: 'Vendedor 1', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' },
        { date: '03/04/2017', seller: 'Vendedor 1', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' },
        { date: 'TOTAL', seller: '', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' }
      ],
      pealTipsCommissionsColumns: [{
        label: 'Data',
        field: 'date'
      }, {
        label: 'Serviço Cobrado',
        field: 'billedService'
      }, {
        label: 'Desconto',
        field: 'discount'
      }, {
        label: 'Serviço não pago',
        field: 'unpaidService'
      }, {
        label: 'Serviço Recebido',
        field: 'receivedService'
      }, {
        label: 'Repique',
        field: 'pealTip'
      }, {
        label: 'Total a pagar',
        field: 'total'
      }],
      pealTipsCommissionsRows: [
        { date: '03/04/2017', billedService: 'R$ 230.000,00', discount: 'R$ 800,00', unpaidService: 'R$ 23,00', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' },
        { date: '03/04/2017', billedService: 'R$ 230.000,00', discount: 'R$ 800,00', unpaidService: 'R$ 23,00', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' },
        { date: '03/04/2017', billedService: 'R$ 230.000,00', discount: 'R$ 800,00', unpaidService: 'R$ 23,00', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' },
        { date: '03/04/2017', billedService: 'R$ 230.000,00', discount: 'R$ 800,00', unpaidService: 'R$ 23,00', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' },
        { date: '03/04/2017', billedService: 'R$ 230.000,00', discount: 'R$ 800,00', unpaidService: 'R$ 23,00', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' },
        { date: '03/04/2017', billedService: 'R$ 230.000,00', discount: 'R$ 800,00', unpaidService: 'R$ 23,00', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' },
        { date: '03/04/2017', billedService: 'R$ 230.000,00', discount: 'R$ 800,00', unpaidService: 'R$ 23,00', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' },
        { date: '03/04/2017', billedService: 'R$ 230.000,00', discount: 'R$ 800,00', unpaidService: 'R$ 23,00', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' },
        { date: 'TOTAL', billedService: 'R$ 230.000,00', discount: 'R$ 800,00', unpaidService: 'R$ 23,00', receivedService: 'R$ 100,00', pealTip: 'R$ 5,00', total: 'R$ 105,00' }
      ],
      dataBillingEvolution: {},
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
  },
  created () {
  }
}
</script>
