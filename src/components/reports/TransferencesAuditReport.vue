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
            <p>PRODUTOS TRANSFERIDOS POR QUANTIDADE</p>
            <line-chart
              :chart-data="dataBillingEvolution"
              :options="barOptions"
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
            <p>PRODUTOS TRANSFERIDOS</p>
            <div class="row" style="margin-left:0px;margin-right:0px;border-bottom:solid 1px #CCC;">
              <div class="col table-responsive reports-default-tables accumulated-revenue-first-table">
                <vue-good-table
                  :columns="transferredProductsColumns"
                  :rows="transferredProductsRows"
                  :paginate="false"
                  :lineNumbers="false"
                  styleClass="table table-responsive large-width audit-cancellation-table last-line-featured"
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
  name: 'TransferencesAuditReport',
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
      pageTitle: 'Transferências',
      transferredProductsColumns: [{
        label: 'Código',
        field: 'code'
      }, {
        label: 'Produto',
        field: 'product'
      }, {
        label: 'Quantidade',
        field: 'quantity'
      }, {
        label: 'Valor Unitário',
        field: 'unitValue'
      }, {
        label: 'Total',
        field: 'total'
      }, {
        label: 'Mesa de origem',
        field: 'originTable'
      }, {
        label: 'Mesa de destino',
        field: 'destinyTable'
      }, {
        label: 'Hora da Comanda',
        field: 'badgeTime'
      }, {
        label: 'Transferência',
        field: 'transferenceTime'
      }, {
        label: 'Operador',
        field: 'cashier'
      }, {
        label: 'Vendedor',
        field: 'seller'
      }, {
        label: 'Autorização',
        field: 'authorization'
      }, {
        label: 'Motivo',
        field: 'reason'
      }],
      transferredProductsRows: [
        { code: 'Code 1', product: 'Produto 1', quantity: '123', unitValue: 'R$ 43,00', total: 'R$ 42,00', originTable: 'Mesa 1', destinyTable: 'Mesa 2', badgeTime: '12:34', transferenceTime: '12:50', cashier: 'John Snow', seller: 'Jaufrey', authorization: 'Ned Stark', reason: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit' },
        { code: 'Code 1', product: 'Produto 1', quantity: '123', unitValue: 'R$ 43,00', total: 'R$ 42,00', originTable: 'Mesa 1', destinyTable: 'Mesa 2', badgeTime: '12:34', transferenceTime: '12:50', cashier: 'John Snow', seller: 'Jaufrey', authorization: 'Ned Stark', reason: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit' },
        { code: 'Code 1', product: 'Produto 1', quantity: '123', unitValue: 'R$ 43,00', total: 'R$ 42,00', originTable: 'Mesa 1', destinyTable: 'Mesa 2', badgeTime: '12:34', transferenceTime: '12:50', cashier: 'John Snow', seller: 'Jaufrey', authorization: 'Ned Stark', reason: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit' },
        { code: 'Code 1', product: 'Produto 1', quantity: '123', unitValue: 'R$ 43,00', total: 'R$ 42,00', originTable: 'Mesa 1', destinyTable: 'Mesa 2', badgeTime: '12:34', transferenceTime: '12:50', cashier: 'John Snow', seller: 'Jaufrey', authorization: 'Ned Stark', reason: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit' },
        { code: 'Code 1', product: 'Produto 1', quantity: '123', unitValue: 'R$ 43,00', total: 'R$ 42,00', originTable: 'Mesa 1', destinyTable: 'Mesa 2', badgeTime: '12:34', transferenceTime: '12:50', cashier: 'John Snow', seller: 'Jaufrey', authorization: 'Ned Stark', reason: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit' },
        { code: 'Code 1', product: 'Produto 1', quantity: '123', unitValue: 'R$ 43,00', total: 'R$ 42,00', originTable: 'Mesa 1', destinyTable: 'Mesa 2', badgeTime: '12:34', transferenceTime: '12:50', cashier: 'John Snow', seller: 'Jaufrey', authorization: 'Ned Stark', reason: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit' },
        { code: 'Code 1', product: 'Produto 1', quantity: '123', unitValue: 'R$ 43,00', total: 'R$ 42,00', originTable: 'Mesa 1', destinyTable: 'Mesa 2', badgeTime: '12:34', transferenceTime: '12:50', cashier: 'John Snow', seller: 'Jaufrey', authorization: 'Ned Stark', reason: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit' },
        { code: 'Code 1', product: 'Produto 1', quantity: '123', unitValue: 'R$ 43,00', total: 'R$ 42,00', originTable: 'Mesa 1', destinyTable: 'Mesa 2', badgeTime: '12:34', transferenceTime: '12:50', cashier: 'John Snow', seller: 'Jaufrey', authorization: 'Ned Stark', reason: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit' },
        { code: 'Code 1', product: 'Produto 1', quantity: '123', unitValue: 'R$ 43,00', total: 'R$ 42,00', originTable: 'Mesa 1', destinyTable: 'Mesa 2', badgeTime: '12:34', transferenceTime: '12:50', cashier: 'John Snow', seller: 'Jaufrey', authorization: 'Ned Stark', reason: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit' },
        { code: 'TOTAL', product: '', quantity: '10023', unitValue: '', total: 'R$ 54.000,00' }
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
