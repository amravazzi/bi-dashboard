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
            <p>DESCONTOS</p>
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
            <p>CONSOLIDADO DE DESCONTOS</p>
            <div class="row" style="margin-left:0px;margin-right:0px;border-bottom:solid 1px #CCC;">
              <div class="col table-responsive reports-default-tables accumulated-revenue-first-table">
                <vue-good-table
                  :columns="discountsColumns"
                  :rows="discountsRows"
                  :paginate="false"
                  :lineNumbers="false"
                  styleClass="table table-responsive large-width audit-discounts-table last-line-featured"
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
            <p>DESCONTOS POR OPERADOR DE CAIXA</p>
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
            <p>DESCONTOS POR OPERADOR DE CAIXA</p>
            <div class="row" style="margin-left:0px;margin-right:0px;border-bottom:solid 1px #CCC;">
              <div class="col table-responsive reports-default-tables accumulated-revenue-first-table">
                <vue-good-table
                  :columns="discountsByCashierColumns"
                  :rows="discountsByCashierRows"
                  :paginate="false"
                  :lineNumbers="false"
                  styleClass="table table-responsive large-width audit-discounts-table last-line-featured"
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
            <p>DESCONTOS POR VENDEDOR</p>
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
            <p>DESCONTOS POR VENDEDOR</p>
            <div class="row" style="margin-left:0px;margin-right:0px;border-bottom:solid 1px #CCC;">
              <div class="col table-responsive reports-default-tables accumulated-revenue-first-table">
                <vue-good-table
                  :columns="discountsBySellerColumns"
                  :rows="discountsBySellerRows"
                  :paginate="false"
                  :lineNumbers="false"
                  styleClass="table table-responsive large-width audit-discounts-table last-line-featured"
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
            <p>DESCONTOS POR AUTORIZANTE</p>
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
            <p>DESCONTOS POR AUTORIZANTE</p>
            <div class="row" style="margin-left:0px;margin-right:0px;border-bottom:solid 1px #CCC;">
              <div class="col table-responsive reports-default-tables accumulated-revenue-first-table">
                <vue-good-table
                  :columns="discountsByAuthorizationColumns"
                  :rows="discountsByAuthorizationRows"
                  :paginate="false"
                  :lineNumbers="false"
                  styleClass="table table-responsive large-width audit-discounts-table last-line-featured"
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
            <p>DESCONTOS - PROMOÇÃO A</p>
            <div class="row" style="margin-left:0px;margin-right:0px;border-bottom:solid 1px #CCC;">
              <div class="col table-responsive reports-default-tables accumulated-revenue-first-table">
                <vue-good-table
                  :columns="discountsReasonAColumns"
                  :rows="discountsReasonARows"
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
  name: 'CancellationsAuditReport',
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
      pageTitle: 'Descontos',
      discountsColumns: [{
        label: 'Data',
        field: 'date'
      }, {
        label: 'Mesa',
        field: 'table'
      }, {
        label: 'Valor',
        field: 'value'
      }, {
        label: 'Horário',
        field: 'time'
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
      discountsRows: [
        { date: '03/04/2017', table: 'Mesa 1', value: 'R$ 19,00', time: '19:44', cashier: 'John Snow', seller: 'Jaufrey', authorization: 'Ned Stark', reason: 'razão 1' },
        { date: '03/04/2017', table: 'Mesa 1', value: 'R$ 19,00', time: '19:44', cashier: 'John Snow', seller: 'Jaufrey', authorization: 'Ned Stark', reason: 'razão 1' },
        { date: '03/04/2017', table: 'Mesa 1', value: 'R$ 19,00', time: '19:44', cashier: 'John Snow', seller: 'Jaufrey', authorization: 'Ned Stark', reason: 'razão 1' },
        { date: '03/04/2017', table: 'Mesa 1', value: 'R$ 19,00', time: '19:44', cashier: 'John Snow', seller: 'Jaufrey', authorization: 'Ned Stark', reason: 'razão 1' },
        { date: '03/04/2017', table: 'Mesa 1', value: 'R$ 19,00', time: '19:44', cashier: 'John Snow', seller: 'Jaufrey', authorization: 'Ned Stark', reason: 'razão 1' },
        { date: '03/04/2017', table: 'Mesa 1', value: 'R$ 19,00', time: '19:44', cashier: 'John Snow', seller: 'Jaufrey', authorization: 'Ned Stark', reason: 'razão 1' },
        { date: '03/04/2017', table: 'Mesa 1', value: 'R$ 19,00', time: '19:44', cashier: 'John Snow', seller: 'Jaufrey', authorization: 'Ned Stark', reason: 'razão 1' },
        { date: 'TOTAL', table: '', value: 'R$ 54.000,00' }
      ],
      discountsByCashierColumns: [{
        label: 'Operador de Caixa',
        field: 'cashier'
      }, {
        label: 'Valor',
        field: 'value'
      }],
      discountsByCashierRows: [
        { cashier: 'John Snow', value: 'R$ 19,00' },
        { cashier: 'John Snow', value: 'R$ 19,00' },
        { cashier: 'John Snow', value: 'R$ 19,00' },
        { cashier: 'John Snow', value: 'R$ 19,00' },
        { cashier: 'John Snow', value: 'R$ 19,00' },
        { cashier: 'John Snow', value: 'R$ 19,00' },
        { cashier: 'John Snow', value: 'R$ 19,00' },
        { cashier: 'TOTAL', value: 'R$ 54.000,00' }
      ],
      discountsBySellerColumns: [{
        label: 'Vendedor',
        field: 'seller'
      }, {
        label: 'Valor',
        field: 'value'
      }],
      discountsBySellerRows: [
        { seller: 'John Snow', value: 'R$ 19,00' },
        { seller: 'John Snow', value: 'R$ 19,00' },
        { seller: 'John Snow', value: 'R$ 19,00' },
        { seller: 'John Snow', value: 'R$ 19,00' },
        { seller: 'John Snow', value: 'R$ 19,00' },
        { seller: 'John Snow', value: 'R$ 19,00' },
        { seller: 'John Snow', value: 'R$ 19,00' },
        { seller: 'TOTAL', value: 'R$ 54.000,00' }
      ],
      discountsByAuthorizationColumns: [{
        label: 'Autorizante',
        field: 'authorization'
      }, {
        label: 'Valor',
        field: 'value'
      }],
      discountsByAuthorizationRows: [
        { authorization: 'John Snow', value: 'R$ 19,00' },
        { authorization: 'John Snow', value: 'R$ 19,00' },
        { authorization: 'John Snow', value: 'R$ 19,00' },
        { authorization: 'John Snow', value: 'R$ 19,00' },
        { authorization: 'John Snow', value: 'R$ 19,00' },
        { authorization: 'John Snow', value: 'R$ 19,00' },
        { authorization: 'John Snow', value: 'R$ 19,00' },
        { authorization: 'TOTAL', value: 'R$ 54.000,00' }
      ],
      discountsReasonAColumns: [{
        label: 'Data',
        field: 'date'
      }, {
        label: 'Mesa',
        field: 'table'
      }, {
        label: 'Valor',
        field: 'value'
      }, {
        label: 'Horário',
        field: 'time'
      }, {
        label: 'Operador',
        field: 'cashier'
      }, {
        label: 'Vendedor',
        field: 'seller'
      }, {
        label: 'Autorização',
        field: 'authorization'
      }],
      discountsReasonARows: [
        { date: '03/04/2017', table: 'Mesa 1', value: 'R$ 19,00', time: '19:44', cashier: 'John Snow', seller: 'Jaufrey', authorization: 'Ned Stark' },
        { date: '03/04/2017', table: 'Mesa 1', value: 'R$ 19,00', time: '19:44', cashier: 'John Snow', seller: 'Jaufrey', authorization: 'Ned Stark' },
        { date: '03/04/2017', table: 'Mesa 1', value: 'R$ 19,00', time: '19:44', cashier: 'John Snow', seller: 'Jaufrey', authorization: 'Ned Stark' },
        { date: '03/04/2017', table: 'Mesa 1', value: 'R$ 19,00', time: '19:44', cashier: 'John Snow', seller: 'Jaufrey', authorization: 'Ned Stark' },
        { date: '03/04/2017', table: 'Mesa 1', value: 'R$ 19,00', time: '19:44', cashier: 'John Snow', seller: 'Jaufrey', authorization: 'Ned Stark' },
        { date: '03/04/2017', table: 'Mesa 1', value: 'R$ 19,00', time: '19:44', cashier: 'John Snow', seller: 'Jaufrey', authorization: 'Ned Stark' },
        { date: '03/04/2017', table: 'Mesa 1', value: 'R$ 19,00', time: '19:44', cashier: 'John Snow', seller: 'Jaufrey', authorization: 'Ned Stark' },
        { date: '03/04/2017', table: 'Mesa 1', value: 'R$ 19,00', time: '19:44', cashier: 'John Snow', seller: 'Jaufrey', authorization: 'Ned Stark' },
        { date: 'TOTAL', table: '', value: 'R$ 54.000,00' }
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
