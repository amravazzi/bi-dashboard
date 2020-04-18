<template>
<div>

  <UpperNav></UpperNav>

  <div class="container-fluid h-100">

    <div class="row">
      <p class="upper-title-reports bold">Período de 01 de Março a 10 de Março de 2017</p>
    </div>

    <div class="row">
      <div class="col-4">
        <div class="card" >
          <div class="card-block card-title" style="margin-bottom:0;padding-bottom:0;">
            <p>CONSOLIDADO DE GRUPOS</p>
            <div class="row" style="margin-left:0px;margin-right:0px;border-bottom:solid 1px #CCC;">
              <div class="reports-default-tables table-responsive ppp-report-card-table">
                <vue-good-table
                  :columns="consolidateColumns"
                  :rows="consolidateRows"
                  :paginate="false"
                  :lineNumbers="false"
                  styleClass="table table-responsive"
                />
              </div>
            </div>
            <div class="reports-default-tables table-responsive ppp-report-card-table">
              <table class="table table-responsive store-total-revenue">
                <tr>
                  <td>Total</td>
                  <td>R$500.000</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card" >
          <div class="card-block card-title" style="margin-bottom:0;padding-bottom:0;">
            <p>LOJA 1</p>
            <div class="row" style="margin-left:0px;margin-right:0px;border-bottom:solid 1px #CCC;">
              <div class="reports-default-tables table-responsive ppp-report-card-table">
                <vue-good-table
                  :columns="consolidateColumns"
                  :rows="consolidateRows"
                  :paginate="false"
                  :lineNumbers="false"
                  styleClass="table table-responsive"
                />
              </div>
            </div>
            <div class="reports-default-tables table-responsive ppp-report-card-table">
              <table class="table table-responsive store-total-revenue">
                <tr>
                  <td>Total</td>
                  <td>R$500.000</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card" >
          <div class="card-block card-title" style="margin-bottom:0;padding-bottom:0;">
            <p>LOJA 2</p>
            <div class="row" style="margin-left:0px;margin-right:0px;border-bottom:solid 1px #CCC;">
              <div class="reports-default-tables table-responsive ppp-report-card-table">
                <vue-good-table
                  :columns="consolidateColumns"
                  :rows="consolidateRows"
                  :paginate="false"
                  :lineNumbers="false"
                  styleClass="table table-responsive"
                />
              </div>
            </div>
            <div class="reports-default-tables table-responsive ppp-report-card-table">
              <table class="table table-responsive store-total-revenue">
                <tr>
                  <td>Total</td>
                  <td>R$500.000</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card" >
          <div class="card-block card-title" style="margin-bottom:0;padding-bottom:0;">
            <p>LOJA 3</p>
            <div class="row" style="margin-left:0px;margin-right:0px;border-bottom:solid 1px #CCC;">
              <div class="reports-default-tables table-responsive ppp-report-card-table">
                <vue-good-table
                  :columns="consolidateColumns"
                  :rows="consolidateRows"
                  :paginate="false"
                  :lineNumbers="false"
                  styleClass="table table-responsive"
                />
              </div>
            </div>
            <div class="reports-default-tables table-responsive ppp-report-card-table">
              <table class="table table-responsive store-total-revenue">
                <tr>
                  <td>Total</td>
                  <td>R$500.000</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card" >
          <div class="card-block card-title" style="margin-bottom:0;padding-bottom:0;">
            <p>LOJA 4</p>
            <div class="row" style="margin-left:0px;margin-right:0px;border-bottom:solid 1px #CCC;">
              <div class="reports-default-tables table-responsive ppp-report-card-table">
                <vue-good-table
                  :columns="consolidateColumns"
                  :rows="consolidateRows"
                  :paginate="false"
                  :lineNumbers="false"
                  styleClass="table table-responsive"
                />
              </div>
            </div>
            <div class="reports-default-tables table-responsive ppp-report-card-table">
              <table class="table table-responsive store-total-revenue">
                <tr>
                  <td>Total</td>
                  <td>R$500.000</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card" >
          <div class="card-block card-title" style="margin-bottom:0;padding-bottom:0;">
            <p>LOJA 5</p>
            <div class="row" style="margin-left:0px;margin-right:0px;border-bottom:solid 1px #CCC;">
              <div class="reports-default-tables table-responsive ppp-report-card-table">
                <vue-good-table
                  :columns="consolidateColumns"
                  :rows="consolidateRows"
                  :paginate="false"
                  :lineNumbers="false"
                  styleClass="table table-responsive"
                />
              </div>
            </div>
            <div class="reports-default-tables table-responsive ppp-report-card-table">
              <table class="table table-responsive store-total-revenue">
                <tr>
                  <td>Total</td>
                  <td>R$500.000</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>

  <DashboardFooter></DashboardFooter>

</div>
</template>

<script>
import UpperNav from '@/components/common/UpperNav'
import DashboardFooter from '@/components/common/DashboardFooter'

var numeral = require('numeral')

export default {
  name: 'GroupsSellingPurchasingPowerParityReport',
  components: {
    UpperNav,
    DashboardFooter,
    numeral
  },
  mounted () {
    // for (var A of document.querySelectorAll('*')) A.style.outline = `solid hsl(${(A + A).length * 9},99%,50%)1px`
  },
  data () {
    return {
      consolidateColumns: [{
        label: 'Período',
        field: 'period'
      }, {
        label: 'Faturamento',
        field: 'revenue'
      }],
      consolidateRows: [
        { period: '01 MAR 2017', revenue: 'R$22.000,00' },
        { period: '01 MAR 2017', revenue: 'R$22.000,00' },
        { period: '01 MAR 2017', revenue: 'R$22.000,00' },
        { period: '01 MAR 2017', revenue: 'R$22.000,00' },
        { period: '01 MAR 2017', revenue: 'R$22.000,00' },
        { period: '01 MAR 2017', revenue: 'R$22.000,00' },
        { period: '01 MAR 2017', revenue: 'R$22.000,00' },
        { period: '01 MAR 2017', revenue: 'R$22.000,00' },
        { period: '01 MAR 2017', revenue: 'R$22.000,00' },
        { period: '01 MAR 2017', revenue: 'R$22.000,00' },
        { period: '01 MAR 2017', revenue: 'R$22.000,00' },
        { period: '01 MAR 2017', revenue: 'R$22.000,00' },
        { period: '01 MAR 2017', revenue: 'R$22.000,00' },
        { period: '01 MAR 2017', revenue: 'R$22.000,00' },
        { period: '01 MAR 2017', revenue: 'R$22.000,00' },
        { period: '01 MAR 2017', revenue: 'R$22.000,00' },
        { period: '01 MAR 2017', revenue: 'R$22.000,00' }
      ]
    }
  },
  methods: {
  },
  created () {
  }
}
</script>
