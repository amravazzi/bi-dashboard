<template>
<div>
  
  <UpperNav :filters="filters" @getDashboard="getDashboard"></UpperNav>

  <div class="container-fluid h-100">
    
    <div class="row">
      <p class="upper-title-reports bold">Período de 01 de Março a 10 de Março de 2017</p>
    </div>

    <div class="row">
      <div class="col">
        <div class="card" >
          <div class="card-block card-title">
            <p>PRODUTOS EXLCUÍDOS</p>
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
            <p>CONSOLIDADO DE LOJAS</p>
            <div class="row" style="margin-left:0px;margin-right:0px;border-bottom:solid 1px #CCC;">
              <!-- <div class="col-4 table-responsive accumulated-revenue-first-table">
                <table class="table table-responsive">
                  <thead>
                    <tr>
                      <th>Período</th>
                      <th>Faturamento Diário</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">01 MAR 2017</th>
                      <td>R$17.043,00</td>
                    </tr>
                    <tr>
                      <th scope="row">01 MAR 2017</th>
                      <td>R$17.043,00</td>
                    </tr>
                    <tr>
                      <th scope="row">01 MAR 2017</th>
                      <td>R$17.043,00</td>
                    </tr>
                    <tr>
                      <th scope="row">01 MAR 2017</th>
                      <td>R$17.043,00</td>
                    </tr>
                    <tr>
                      <th scope="row">01 MAR 2017</th>
                      <td>R$17.043,00</td>
                    </tr>
                    <tr>
                      <th scope="row">01 MAR 2017</th>
                      <td>R$17.043,00</td>
                    </tr>
                    <tr>
                      <th scope="row">01 MAR 2017</th>
                      <td>R$17.043,00</td>
                    </tr>
                    <tr>
                      <th scope="row">01 MAR 2017</th>
                      <td>R$17.043,00</td>
                    </tr>
                    <tr>
                      <th scope="row">01 MAR 2017</th>
                      <td>R$17.043,00</td>
                    </tr>
                  </tbody>
                </table>
              </div> -->
              <div class="col table-responsive reports-default-tables accumulated-revenue-first-table">
                <table class="table table-responsive table-column-index">
                  <thead>
                    <tr>
                      <th>
                        Período
                        <!-- <a href="#" v-on="click: sortBy(column)" v-class="active: sortKey == column"> -->
                        <a href="#">
                          <i class="fa fa-long-arrow-down" aria-hidden="true"></i>
                          <i class="fa fa-long-arrow-up active" aria-hidden="true"></i>
                        </a>
                      </th>
                      <th>
                        Faturamento Diário
                        <a href="#">
                          <i class="fa fa-long-arrow-down" aria-hidden="true"></i>
                          <i class="fa fa-long-arrow-up" aria-hidden="true"></i>
                        </a>
                      </th>
                      <th>
                        Loja 1
                        <a href="#">
                          <i class="fa fa-long-arrow-down" aria-hidden="true"></i>
                          <i class="fa fa-long-arrow-up" aria-hidden="true"></i>
                        </a>
                      </th>
                      <th>
                        Loja 2
                        <a href="#">
                          <i class="fa fa-long-arrow-down" aria-hidden="true"></i>
                          <i class="fa fa-long-arrow-up" aria-hidden="true"></i>
                        </a>
                      </th>
                      <th>
                        Loja 3
                        <a href="#">
                          <i class="fa fa-long-arrow-down" aria-hidden="true"></i>
                          <i class="fa fa-long-arrow-up" aria-hidden="true"></i>
                        </a>
                      </th>
                      <th>
                        Loja 4
                        <a href="#">
                          <i class="fa fa-long-arrow-down" aria-hidden="true"></i>
                          <i class="fa fa-long-arrow-up" aria-hidden="true"></i>
                        </a>
                      </th> 
                      <th>
                        Loja 5
                        <a href="#">
                          <i class="fa fa-long-arrow-down" aria-hidden="true"></i>
                          <i class="fa fa-long-arrow-up" aria-hidden="true"></i>
                        </a>
                      </th>                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">01 MAR 2017</th>
                      <td>R$3</td>
                      <td>R$1</td>
                      <td>R$17.043,00</td>
                      <td>R$17.043,00</td>
                      <td>R$17.043,00</td>
                      <td>R$17.043,00</td>
                    </tr>
                    <tr>
                      <th scope="row">01 MAR 2017</th>
                      <td>R$3</td>
                      <td>R$1</td>
                      <td>R$17.043,00</td>
                      <td>R$17.043,00</td>
                      <td>R$17.043,00</td>
                      <td>R$17.043,00</td>
                    </tr>
                    <tr>
                      <th scope="row">01 MAR 2017</th>
                      <td>R$3</td>
                      <td>R$1</td>
                      <td>R$17.043,00</td>
                      <td>R$17.043,00</td>
                      <td>R$17.043,00</td>
                      <td>R$17.043,00</td>
                    </tr>
                    <tr>
                      <th scope="row">01 MAR 2017</th>
                      <td>R$3</td>
                      <td>R$1</td>
                      <td>R$17.043,00</td>
                      <td>R$17.043,00</td>
                      <td>R$17.043,00</td>
                      <td>R$17.043,00</td>
                    </tr>
                    <tr>
                      <th scope="row">01 MAR 2017</th>
                      <td>R$3</td>
                      <td>R$1</td>
                      <td>R$17.043,00</td>
                      <td>R$17.043,00</td>
                      <td>R$17.043,00</td>
                      <td>R$17.043,00</td>
                    </tr>
                    <tr>
                      <th scope="row">01 MAR 2017</th>
                      <td>R$3</td>
                      <td>R$1</td>
                      <td>R$17.043,00</td>
                      <td>R$17.043,00</td>
                      <td>R$17.043,00</td>
                      <td>R$17.043,00</td>
                    </tr>
                  </tbody>
                </table>
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
import UpperNav from '@/components/common/UpperNav'
import DashboardFooter from '@/components/common/DashboardFooter'
import LineChart from '../../LineChart.js'
// import BarChart from '../../BarChart.js'

var numeral = require('numeral')

export default {
  name: 'AuditExclusionReport',
  components: {
    UpperNav,
    DashboardFooter,
    numeral,
    LineChart
    // BarChart
  },
  mounted () {
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
          data: []
        }
      ]
    }
    // var A
    // for (A of document.querySelectorAll('*')) A.style.outline = `solid hsl(${(A + A).length * 9},99%,50%)1px`
  },
  data () {
    return {
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
    // sortKey: 'name',
    // reverse: false,
  },
  methods: {
    // sortBy: function (sortKey) {
    //   this.reverse = (this.sortKey === sortKey) ? !this.reverse : false
    //   this.sortKey = sortKey
    // }sortBy: function (sortKey) {
    //   this.reverse = (this.sortKey === sortKey) ? !this.reverse : false
    //   this.sortKey = sortKey
    // }
  }
}
</script>
