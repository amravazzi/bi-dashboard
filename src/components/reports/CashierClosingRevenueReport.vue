<template>
<div>

  <UpperNav ></UpperNav>

  <div class="container-fluid h-100">

    <div class="row">
      <p class="upper-title-reports bold">Período de 01 de Março a 10 de Março de 2017</p>
    </div>

    <div class="row">
      <div class="col">
        <div class="card" >
          <div class="card-block card-title">
            <p>FECHAMENTO DE CAIXA</p>
            <div class="row" style="margin-left:0px;margin-right:0px;border-bottom:solid 1px #CCC;">
              <div class="col table-responsive reports-default-tables byhour-revenue-first-table small-content-table">
                <vue-good-table
                  :columns="cashierClosingColumns"
                  :rows="cashierClosingRows"
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
    <div class="row">
      <div class="col-6">
        <div class="card" >
          <div class="card-block card-title">
            <p>FATURAMENTO BRUTO</p>
            <div class="row" style="margin-left:0px;margin-right:0px;border-bottom:solid 1px #CCC;">
              <div class="col table-responsive reports-default-tables byhour-revenue-first-table">
                <vue-good-table
                  :columns="grossRevenueColumns"
                  :rows="grossRevenueRows"
                  :paginate="false"
                  :lineNumbers="false"
                  styleClass="table table-responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card" >
          <div class="card-block card-title">
            <p>FATURAMENTO LÍQUIDO</p>
            <div class="row" style="margin-left:0px;margin-right:0px;border-bottom:solid 1px #CCC;">
              <div class="col table-responsive reports-default-tables byhour-revenue-first-table">
                <vue-good-table
                  :columns="netRevenueColumns"
                  :rows="netRevenueRows"
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
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-block" style="padding-top:0;padding-bottom:0">
            <div class="row text-center">
              <div class="col-24 dataIndexesInfo">
                <p>Atendimentos</p>
                <p>123</p>
              </div>
              <div class="col-24 dataIndexesInfo">
                <p>Clientes</p>
                <p>123</p>
              </div>
              <div class="col-24 dataIndexesInfo">
                <p>Ticket Médio</p>
                <p>123</p>
              </div>
              <div class="col-24 dataIndexesInfo">
                <p>Serviço não pago</p>
                <p>123</p>
              </div>
              <div class="col-24 dataIndexesInfo">
                <p>QTD de carros</p>
                <p>123</p>
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
              <div class="col-4 dataIndexesInfo">
                <p>Permuta (+)</p>
                <p>R$0,00</p>
              </div>
              <div class="col-4 dataIndexesInfo">
                <p>Permuta (-)</p>
                <p>R$0,00</p>
              </div>
              <div class="col-4 dataIndexesInfo">
                <p>Saldo</p>
                <p>R$0,00</p>
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

export default {
  name: 'HourRevenueReport',
  components: {
    UpperNav,
    DashboardFooter
  },
  mounted () {
    // var A
    // for (A of document.querySelectorAll('*')) A.style.outline = `solid hsl(${(A + A).length * 9},99%,50%)1px`
  },
  data () {
    return {
      cashierClosingColumns: [{
        label: 'Tipo',
        field: 'type'
      }, {
        label: 'Formas de pagamento',
        field: 'paymentForms'
      }, {
        label: 'Sistema',
        field: 'system'
      }, {
        label: 'Caixa',
        field: 'cashier'
      }, {
        label: 'Diferença',
        field: 'difference'
      }],
      cashierClosingRows: [
        { type: 'C', paymentForms: 'Dinheiro', system: 'R$850,00', cashier: 'R$890,00', difference: 'R$3.900,00' },
        { type: 'C', paymentForms: 'Dinheiro', system: 'R$850,00', cashier: 'R$890,00', difference: 'R$3.900,00' },
        { type: 'C', paymentForms: 'Dinheiro', system: 'R$850,00', cashier: 'R$890,00', difference: 'R$3.900,00' },
        { type: '', paymentForms: 'TOTAL', system: 'R$850,00', cashier: 'R$890,00', difference: 'R$3.900,00' },
        { type: 'D', paymentForms: 'Cielo', system: 'R$850,00', cashier: 'R$890,00', difference: 'R$3.900,00' },
        { type: 'D', paymentForms: 'Cielo', system: 'R$850,00', cashier: 'R$890,00', difference: 'R$3.900,00' },
        { type: 'D', paymentForms: 'Cielo', system: 'R$850,00', cashier: 'R$890,00', difference: 'R$3.900,00' },
        { type: '', paymentForms: 'TOTAL', system: 'R$850,00', cashier: 'R$890,00', difference: 'R$3.900,00' },
        { type: '', paymentForms: 'CONSOLIDADO', system: 'R$850,00', cashier: 'R$890,00', difference: 'R$3.900,00' }
      ],
      grossRevenueColumns: [{
        label: 'Tipo',
        field: 'type'
      }, {
        label: 'Valor',
        field: 'value'
      }],
      grossRevenueRows: [
        { type: 'Cartão de crédito', value: 'R$1928,00' },
        { type: 'Cartão de crédito', value: 'R$1928,00' },
        { type: 'Cartão de crédito', value: 'R$1928,00' },
        { type: 'Cartão de crédito', value: 'R$1928,00' },
        { type: 'TOTAL', value: 'R$1928,00' },
        { type: 'FATURAMENTO BRUTO', value: 'R$1928,00' }
      ],
      netRevenueColumns: [{
        label: 'Tipo',
        field: 'type'
      }, {
        label: 'Valor',
        field: 'value'
      }],
      netRevenueRows: [
        { type: 'Cartão de débito', value: 'R$1928,00' },
        { type: 'Cartão de débito', value: 'R$1928,00' },
        { type: 'Cartão de débito', value: 'R$1928,00' },
        { type: 'Cartão de débito', value: 'R$1928,00' },
        { type: 'TOTAL', value: 'R$1928,00' },
        { type: 'FATURAMENTO LÍQUIDO', value: 'R$1928,00' }
      ]
    }
  },
  methods: {
  },
  created () {
  }
}
</script>
