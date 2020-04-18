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
            <p>TEMPO DE DELIVERY - LOJA: TESTE</p>
            <div class="row" style="margin-left:0px;margin-right:0px;border-bottom:solid 1px #CCC;">
              <div class="col table-responsive reports-default-tables">
                <vue-good-table
                  :columns="deliverTimeColumns"
                  :rows="deliverTimeRows"
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

    <div class="row report-weekdays-header">
      <div class="col col-15">Segunda</div>
      <div class="col col-15">Terça</div>
      <div class="col col-15">Quarta</div>
      <div class="col col-15">Quinta</div>
      <div class="col col-15">Sexta</div>
      <div class="col col-15">Sábado</div>
      <div class="col col-15">Domingo</div>
      <div class="col col-15">Total</div>
    </div>

    <div class="row" style="padding:10px">

      <!-- <div class="col-15"><div class="card report-calendar-day-card-blank"></div></div> -->

      <div class="col-15">
        <div class="card report-calendar-day-card">
          <div class="row report-calendar-data-line">
            <p>Pedidos</p>
            <p>150</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Tempo Médio Preparo</p>
            <p>0:15:00</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Tempo médio entrega</p>
            <p>0:45:00</p>
          </div>
        </div>
      </div>
      <div class="col-15">
        <div class="card report-calendar-day-card">
          <div class="row report-calendar-data-line">
            <p>Pedidos</p>
            <p>150</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Tempo Médio Preparo</p>
            <p>0:15:00</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Tempo médio entrega</p>
            <p>0:45:00</p>
          </div>
        </div>
      </div>
      <div class="col-15">
        <div class="card report-calendar-day-card">
          <div class="row report-calendar-data-line">
            <p>Pedidos</p>
            <p>150</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Tempo Médio Preparo</p>
            <p>0:15:00</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Tempo médio entrega</p>
            <p>0:45:00</p>
          </div>
        </div>
      </div>
      <div class="col-15">
        <div class="card report-calendar-day-card">
          <div class="row report-calendar-data-line">
            <p>Pedidos</p>
            <p>150</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Tempo Médio Preparo</p>
            <p>0:15:00</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Tempo médio entrega</p>
            <p>0:45:00</p>
          </div>
        </div>
      </div>
      <div class="col-15">
        <div class="card report-calendar-day-card">
          <div class="row report-calendar-data-line">
            <p>Pedidos</p>
            <p>150</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Tempo Médio Preparo</p>
            <p>0:15:00</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Tempo médio entrega</p>
            <p>0:45:00</p>
          </div>
        </div>
      </div>
      <div class="col-15">
        <div class="card report-calendar-day-card">
          <div class="row report-calendar-data-line">
            <p>Pedidos</p>
            <p>150</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Tempo Médio Preparo</p>
            <p>0:15:00</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Tempo médio entrega</p>
            <p>0:45:00</p>
          </div>
        </div>
      </div>
      <div class="col-15">
        <div class="card report-calendar-day-card">
          <div class="row report-calendar-data-line">
            <p>Pedidos</p>
            <p>150</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Tempo Médio Preparo</p>
            <p>0:15:00</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Tempo médio entrega</p>
            <p>0:45:00</p>
          </div>
        </div>
      </div>
      <div class="col-15">
        <div class="card report-calendar-day-card">
          <div class="row report-calendar-data-line">
            <p>Pedidos</p>
            <p>150</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Tempo Médio Preparo</p>
            <p>0:15:00</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Tempo médio entrega</p>
            <p>0:45:00</p>
          </div>
        </div>
      </div>

    </div>

    <div class="row" style="padding:10px">
      <div class="col-15">
        <div class="card report-calendar-week-card">
          <div class="row report-calendar-data-line">
            <p>Pedidos</p>
            <p>150</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Tempo Médio Preparo</p>
            <p>0:15:00</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Tempo médio entrega</p>
            <p>0:45:00</p>
          </div>
        </div>
      </div>
      <div class="col-15">
        <div class="card report-calendar-week-card">
          <div class="row report-calendar-data-line">
            <p>Pedidos</p>
            <p>150</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Tempo Médio Preparo</p>
            <p>0:15:00</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Tempo médio entrega</p>
            <p>0:45:00</p>
          </div>
        </div>
      </div>
      <div class="col-15">
        <div class="card report-calendar-week-card">
          <div class="row report-calendar-data-line">
            <p>Pedidos</p>
            <p>150</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Tempo Médio Preparo</p>
            <p>0:15:00</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Tempo médio entrega</p>
            <p>0:45:00</p>
          </div>
        </div>
      </div>
      <div class="col-15">
        <div class="card report-calendar-week-card">
          <div class="row report-calendar-data-line">
            <p>Pedidos</p>
            <p>150</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Tempo Médio Preparo</p>
            <p>0:15:00</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Tempo médio entrega</p>
            <p>0:45:00</p>
          </div>
        </div>
      </div>
      <div class="col-15">
        <div class="card report-calendar-week-card">
          <div class="row report-calendar-data-line">
            <p>Pedidos</p>
            <p>150</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Tempo Médio Preparo</p>
            <p>0:15:00</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Tempo médio entrega</p>
            <p>0:45:00</p>
          </div>
        </div>
      </div>
      <div class="col-15">
        <div class="card report-calendar-week-card">
          <div class="row report-calendar-data-line">
            <p>Pedidos</p>
            <p>150</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Tempo Médio Preparo</p>
            <p>0:15:00</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Tempo médio entrega</p>
            <p>0:45:00</p>
          </div>
        </div>
      </div>
      <div class="col-15">
        <div class="card report-calendar-week-card">
          <div class="row report-calendar-data-line">
            <p>Pedidos</p>
            <p>150</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Tempo Médio Preparo</p>
            <p>0:15:00</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Tempo médio entrega</p>
            <p>0:45:00</p>
          </div>
        </div>
      </div>
      <div class="col-15">
        <div class="card report-calendar-week-card">
          <div class="row report-calendar-data-line">
            <p>Pedidos</p>
            <p>150</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Tempo Médio Preparo</p>
            <p>0:15:00</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Tempo médio entrega</p>
            <p>0:45:00</p>
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
  name: 'DeliveryTimeAuditReport',
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
      pageTitle: 'Tempo de Delivery',
      deliverTimeColumns: [{
        label: 'No do Pedido',
        field: 'orderNumber'
      }, {
        label: 'Contato',
        field: 'contact'
      }, {
        label: 'Cliente',
        field: 'client'
      }, {
        label: 'Entregador',
        field: 'deliver'
      }, {
        label: 'Atendimento',
        field: 'service'
      }, {
        label: 'Produção',
        field: 'production'
      }, {
        label: 'Expedição',
        field: 'dispatch'
      }, {
        label: 'Tempo de preparo',
        field: 'preparingTime'
      }, {
        label: 'Tempo de entrega',
        field: 'deliveryTime'
      }],
      deliverTimeRows: [
        { orderNumber: '123', contact: '1199999999', client: 'Fulano de Tal', deliver: 'Fulano', service: '00:15:00', production: '00:25:00', dispatch: '0:40:00', preparingTime: '0:15:00', deliveryTime: '01:15:00' },
        { orderNumber: '123', contact: '1199999999', client: 'Fulano de Tal', deliver: 'Fulano', service: '00:15:00', production: '00:25:00', dispatch: '0:40:00', preparingTime: '0:15:00', deliveryTime: '01:15:00' },
        { orderNumber: '123', contact: '1199999999', client: 'Fulano de Tal', deliver: 'Fulano', service: '00:15:00', production: '00:25:00', dispatch: '0:40:00', preparingTime: '0:15:00', deliveryTime: '01:15:00' },
        { orderNumber: '123', contact: '1199999999', client: 'Fulano de Tal', deliver: 'Fulano', service: '00:15:00', production: '00:25:00', dispatch: '0:40:00', preparingTime: '0:15:00', deliveryTime: '01:15:00' },
        { orderNumber: '123', contact: '1199999999', client: 'Fulano de Tal', deliver: 'Fulano', service: '00:15:00', production: '00:25:00', dispatch: '0:40:00', preparingTime: '0:15:00', deliveryTime: '01:15:00' },
        { orderNumber: '123', contact: '1199999999', client: 'Fulano de Tal', deliver: 'Fulano', service: '00:15:00', production: '00:25:00', dispatch: '0:40:00', preparingTime: '0:15:00', deliveryTime: '01:15:00' },
        { orderNumber: '123', contact: '1199999999', client: 'Fulano de Tal', deliver: 'Fulano', service: '00:15:00', production: '00:25:00', dispatch: '0:40:00', preparingTime: '0:15:00', deliveryTime: '01:15:00' },
        { orderNumber: '123', contact: '1199999999', client: 'Fulano de Tal', deliver: 'Fulano', service: '00:15:00', production: '00:25:00', dispatch: '0:40:00', preparingTime: '0:15:00', deliveryTime: '01:15:00' },
        { orderNumber: '123', contact: '1199999999', client: 'Fulano de Tal', deliver: 'Fulano', service: '00:15:00', production: '00:25:00', dispatch: '0:40:00', preparingTime: '0:15:00', deliveryTime: '01:15:00' },
        { orderNumber: '123', contact: '1199999999', client: 'Fulano de Tal', deliver: 'Fulano', service: '00:15:00', production: '00:25:00', dispatch: '0:40:00', preparingTime: '0:15:00', deliveryTime: '01:15:00' },
        { orderNumber: '123', contact: '1199999999', client: 'Fulano de Tal', deliver: 'Fulano', service: '00:15:00', production: '00:25:00', dispatch: '0:40:00', preparingTime: '0:15:00', deliveryTime: '01:15:00' },
        { orderNumber: '123', contact: '1199999999', client: 'Fulano de Tal', deliver: 'Fulano', service: '00:15:00', production: '00:25:00', dispatch: '0:40:00', preparingTime: '0:15:00', deliveryTime: '01:15:00' },
        { orderNumber: '', contact: '', client: '', deliver: '', service: '', production: '00:25:00', dispatch: '', preparingTime: '', deliveryTime: '01:15:00' }
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
