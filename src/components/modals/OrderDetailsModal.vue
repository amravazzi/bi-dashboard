<template>
  <modal
   name="associate-modal"
   :adaptive="true"
   :scrollable="true"
   height="auto"
   width="100%"
   :pivotY="0"
  >

    <div class="row delivery-form">
      <div class="col-12">

        <div class="row card-header">
          <div class="col-10 col-sm-10 col-md-11 d-flex justify-content-center align-items-center">
            <p class="delivery-settings-modal-title">Detalhes do Pedido #123456</p>
          </div>
          <div class="col-2 col-sm-2 col-md-1">
            <a class="close-modal-btn large-close-btn" @click="closeModal"><i alt="Fechar" class="material-icons">close</i></a>
          </div>
        </div>

        <div class="card-block" style="max-height: 2000px; overflow-y: scroll">

          <div class="mold-steps">
            <!-- Status Mobile -->
            <div class="title clearfix"><h3>Aprovado</h3></div>
            <!-- Steps -->
            <div class="steps-wrap clearfix">
            <div class="step-item step-active">
              <h3>Aprovado</h3>
              <svg class="step-svg" viewBox="0 0 41 31" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g class="step-svg" transform="translate(-218.000000, -445.000000)">
                    <path d="M222.134033,472.555284 L254.865967,472.555284 L254.865967,470.239131 L222.134033,470.239131 L222.134033,472.555284 Z M238.5,453.183826 C246.759738,453.183826 253.60874,459.43324 254.710135,467.522363 L222.289865,467.522363 C223.39126,459.43324 230.240262,453.183826 238.5,453.183826 L238.5,453.183826 Z M238.5,447.716687 C239.048855,447.716687 239.495371,448.170431 239.495371,448.728072 C239.495371,449.285712 239.048855,449.739456 238.5,449.739456 C237.951145,449.739456 237.504629,449.285712 237.504629,448.728072 C237.504629,448.170431 237.951145,447.716687 238.5,447.716687 L238.5,447.716687 Z M259,467.522363 L257.405885,467.522363 C256.408672,458.969489 249.89848,452.109876 241.596541,450.724317 C241.958654,450.146744 242.16934,449.4621 242.16934,448.728072 C242.16934,446.672433 240.523254,445 238.5,445 C236.476746,445 234.83066,446.672433 234.83066,448.728072 C234.83066,449.4621 235.041506,450.146744 235.403459,450.724317 C227.10152,452.109794 220.591168,458.969489 219.594115,467.522363 L218,467.522363 L218,470.23905 L219.460145,470.23905 L219.460145,475.27189 L257.539855,475.27189 L257.539855,470.23905 L259,470.23905 L259,467.522363 L259,467.522363 Z"></path>
                  </g>
                </g>
              </svg>
              <p>Pedido aprovado em 28 de outubro de 2015 às 18h00.</p>
            </div>
            <div class="step-item">
              <h3><span>Em</span> Produção</h3>
              <svg class="step-svg" viewBox="0 0 41 31" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g class="step-svg" transform="translate(-218.000000, -445.000000)">
                    <path d="M222.134033,472.555284 L254.865967,472.555284 L254.865967,470.239131 L222.134033,470.239131 L222.134033,472.555284 Z M238.5,453.183826 C246.759738,453.183826 253.60874,459.43324 254.710135,467.522363 L222.289865,467.522363 C223.39126,459.43324 230.240262,453.183826 238.5,453.183826 L238.5,453.183826 Z M238.5,447.716687 C239.048855,447.716687 239.495371,448.170431 239.495371,448.728072 C239.495371,449.285712 239.048855,449.739456 238.5,449.739456 C237.951145,449.739456 237.504629,449.285712 237.504629,448.728072 C237.504629,448.170431 237.951145,447.716687 238.5,447.716687 L238.5,447.716687 Z M259,467.522363 L257.405885,467.522363 C256.408672,458.969489 249.89848,452.109876 241.596541,450.724317 C241.958654,450.146744 242.16934,449.4621 242.16934,448.728072 C242.16934,446.672433 240.523254,445 238.5,445 C236.476746,445 234.83066,446.672433 234.83066,448.728072 C234.83066,449.4621 235.041506,450.146744 235.403459,450.724317 C227.10152,452.109794 220.591168,458.969489 219.594115,467.522363 L218,467.522363 L218,470.23905 L219.460145,470.23905 L219.460145,475.27189 L257.539855,475.27189 L257.539855,470.23905 L259,470.23905 L259,467.522363 L259,467.522363 Z"></path>
                  </g>
                </g>
              </svg>
              <p>Iniciou produção em 28 de outubro de 2015 às 18h10.</p>
            </div>
            <div class="step-item">
              <h3><span>Em</span> Transporte</h3>
              <svg class="step-svg" viewBox="0 0 41 31" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g class="step-svg" transform="translate(-218.000000, -445.000000)">
                    <path d="M222.134033,472.555284 L254.865967,472.555284 L254.865967,470.239131 L222.134033,470.239131 L222.134033,472.555284 Z M238.5,453.183826 C246.759738,453.183826 253.60874,459.43324 254.710135,467.522363 L222.289865,467.522363 C223.39126,459.43324 230.240262,453.183826 238.5,453.183826 L238.5,453.183826 Z M238.5,447.716687 C239.048855,447.716687 239.495371,448.170431 239.495371,448.728072 C239.495371,449.285712 239.048855,449.739456 238.5,449.739456 C237.951145,449.739456 237.504629,449.285712 237.504629,448.728072 C237.504629,448.170431 237.951145,447.716687 238.5,447.716687 L238.5,447.716687 Z M259,467.522363 L257.405885,467.522363 C256.408672,458.969489 249.89848,452.109876 241.596541,450.724317 C241.958654,450.146744 242.16934,449.4621 242.16934,448.728072 C242.16934,446.672433 240.523254,445 238.5,445 C236.476746,445 234.83066,446.672433 234.83066,448.728072 C234.83066,449.4621 235.041506,450.146744 235.403459,450.724317 C227.10152,452.109794 220.591168,458.969489 219.594115,467.522363 L218,467.522363 L218,470.23905 L219.460145,470.23905 L219.460145,475.27189 L257.539855,475.27189 L257.539855,470.23905 L259,470.23905 L259,467.522363 L259,467.522363 Z"></path>
                  </g>
                </g>
              </svg>
              <p>Sai para entrega em 28 de outubro de 2015 às 18h10.</p>
            </div>
            <div class="step-item">
              <h3><span>Em</span> Entregue</h3>
              <svg class="step-svg" viewBox="0 0 41 31" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g class="step-svg" transform="translate(-218.000000, -445.000000)">
                    <path d="M222.134033,472.555284 L254.865967,472.555284 L254.865967,470.239131 L222.134033,470.239131 L222.134033,472.555284 Z M238.5,453.183826 C246.759738,453.183826 253.60874,459.43324 254.710135,467.522363 L222.289865,467.522363 C223.39126,459.43324 230.240262,453.183826 238.5,453.183826 L238.5,453.183826 Z M238.5,447.716687 C239.048855,447.716687 239.495371,448.170431 239.495371,448.728072 C239.495371,449.285712 239.048855,449.739456 238.5,449.739456 C237.951145,449.739456 237.504629,449.285712 237.504629,448.728072 C237.504629,448.170431 237.951145,447.716687 238.5,447.716687 L238.5,447.716687 Z M259,467.522363 L257.405885,467.522363 C256.408672,458.969489 249.89848,452.109876 241.596541,450.724317 C241.958654,450.146744 242.16934,449.4621 242.16934,448.728072 C242.16934,446.672433 240.523254,445 238.5,445 C236.476746,445 234.83066,446.672433 234.83066,448.728072 C234.83066,449.4621 235.041506,450.146744 235.403459,450.724317 C227.10152,452.109794 220.591168,458.969489 219.594115,467.522363 L218,467.522363 L218,470.23905 L219.460145,470.23905 L219.460145,475.27189 L257.539855,475.27189 L257.539855,470.23905 L259,470.23905 L259,467.522363 L259,467.522363 Z"></path>
                  </g>
                </g>
              </svg>
              <p>Rua Juquis, 31 apartamento 105 Moema, São Paulo/SP</p>
            </div>
            </div>
            <!-- Status Mobile -->
            <p>Iniciou produção em 28 de outubro de 2015 às 18h10.</p>
          </div>

          <div class="products-list">

            <div class="product-box">
              <div class="row">
                <div class="col-8 col-sm-9 col-md-10">
                  <p class="main-product-title"><span>1</span>x Black burguer tradicional</p>
                </div>
                <div class="col-4 col-sm-3 col-md-2">
                  <p class="value">R$ 30,00</p>
                </div>
              </div>
              <div class="row">
                <div class="col-8 col-sm-9 col-md-10">
                  <p class="main-product-title"><span>1</span>x Adicional de bacon</p>
                </div>
                <div class="col-4 col-sm-3 col-md-2">
                  <p class="value"><span>+</span> R$ 5,00</p>
                </div>
              </div>
              <div class="row">
                <div class="col-8 col-sm-9 col-md-10">
                  <p class="main-product-title"><span>1</span>x Adicional de bacon</p>
                </div>
                <div class="col-4 col-sm-3 col-md-2">
                  <p class="value"><span>+</span> R$ 5,00</p>
                </div>
              </div>
              <div class="row">
                <div class="col-8 col-sm-9 col-md-10">
                  <p class="main-product-title"><span>1</span>x Adicional de bacon</p>
                </div>
                <div class="col-4 col-sm-3 col-md-2">
                  <p class="value"><span>+</span> R$ 5,00</p>
                </div>
              </div>
              <div class="row">
                <div class="col-8 col-sm-9 col-md-10">
                  <p class="main-product-title"><span>1</span>x Adicional de bacon</p>
                </div>
                <div class="col-4 col-sm-3 col-md-2">
                  <p class="value"><span>+</span> R$ 5,00</p>
                </div>
              </div>
              <div class="row">
                <div class="col-8 col-sm-9 col-md-10">
                  <p class="main-product-title"><span>1</span>x Adicional de bacon</p>
                </div>
                <div class="col-4 col-sm-3 col-md-2">
                  <p class="value"><span>+</span> R$ 5,00</p>
                </div>
              </div>
              <div class="row">
                <div class="col-8 col-sm-9 col-md-10">
                  <p class="main-product-title"><span>1</span>x Adicional de bacon</p>
                </div>
                <div class="col-4 col-sm-3 col-md-2">
                  <p class="value"><span>+</span> R$ 5,00</p>
                </div>
              </div>
              <div class="row">
                <div class="col-8 col-sm-9 col-md-10">
                  <p class="main-product-title"><span>1</span>x Adicional de bacon</p>
                </div>
                <div class="col-4 col-sm-3 col-md-2">
                  <p class="value"><span>+</span> R$ 5,00</p>
                </div>
              </div>
              <div class="row">
                <div class="col-8 col-sm-9 col-md-10">
                  <p class="main-product-title"><span>1</span>x Adicional de bacon</p>
                </div>
                <div class="col-4 col-sm-3 col-md-2">
                  <p class="value"><span>+</span> R$ 5,00</p>
                </div>
              </div>
              <div class="row">
                <div class="col-8 col-sm-9 col-md-10">
                  <p class="main-product-title"><span>1</span>x Adicional de bacon</p>
                </div>
                <div class="col-4 col-sm-3 col-md-2">
                  <p class="value"><span>+</span> R$ 5,00</p>
                </div>
              </div>
              <div class="row">
                <div class="col-8 col-sm-9 col-md-10">
                  <p class="main-product-title"><span>1</span>x Adicional de bacon</p>
                </div>
                <div class="col-4 col-sm-3 col-md-2">
                  <p class="value"><span>+</span> R$ 5,00</p>
                </div>
              </div>
              <div class="row">
                <div class="col-8 col-sm-9 col-md-10">
                  <p class="main-product-title"><span>1</span>x Adicional de bacon</p>
                </div>
                <div class="col-4 col-sm-3 col-md-2">
                  <p class="value"><span>+</span> R$ 5,00</p>
                </div>
              </div>
            </div>

            <div class="product-box">
              <div class="row">
                <div class="col-8 col-sm-9 col-md-10">
                  <p class="main-product-title"><span>1</span>x Black burguer tradicional</p>
                </div>
                <div class="col-4 col-sm-3 col-md-2">
                  <p class="value">R$ 5,00</p>
                </div>
              </div>
            </div>

            <div class="product-box">
              <div class="row">
                <div class="col-8 col-sm-9 col-md-10">
                  <p class="main-product-title"><span>1</span>x Black burguer tradicional</p>
                </div>
                <div class="col-4 col-sm-3 col-md-2">
                  <p class="value">R$ 30,00</p>
                </div>
              </div>
              <div class="row">
                <div class="col-8 col-sm-9 col-md-10">
                  <p class="main-product-title"><span>1</span>x Black burguer tradicional</p>
                </div>
                <div class="col-4 col-sm-3 col-md-2">
                  <p class="value"><span>+</span>R$ 5,00</p>
                </div>
              </div>
            </div>
          </div>

          <hr>

          <div class="address-list">
            <div class="row">
              <div class="col">
                <p>Endereço de entrega:</p>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <p>Rua Maranhão, 600 - Higienópolis, São Paulo/SP 01240-000</p>
              </div>
            </div>
          </div>

          <hr>

          <div class="payment-list">
            <div class="row">
              <div class="col">
                <p>Formas de pagamento: </p>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <p>Cartão de crédito <span>FINAL 2345</span> <span>(Pagamento confirmado em 16/08/2017)</span></p>
              </div>
            </div>
          </div>

          <hr>

          <div class="order-total">
            <div class="row">
              <div class="col-8 col-sm-9 col-md-10">
                <p class="main-product-title">Total do pedido:</p>
              </div>
              <div class="col-4 col-sm-3 col-md-2">
                <p class="value">R$ 1000,00</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </modal>
</template>

<script>

export default {
  name: 'DeliveryAssociateModal',
  // props: ['enabledFilters'],
  data () {
    return {
      pageTitle: 'Your Company Delivery',
      dashboardPermission: '',
      productsPermission: '',
      ordersPermission: '',
      customersPermission: '',
      configsPermission: ''
    }
  },
  mounted () {
  },
  created: function () {
    // if (localStorage.getItem('revenue.indicadorFilter') === null) {
    //   localStorage.setItem('revenue.indicadorFilter', JSON.stringify(this.indicadores))
    // }

    // this.faturamentoFilter = JSON.parse(localStorage.getItem('faturamentoFilter'))
  },
  watch: {

  },
  methods: {
    // emitReport () {
    //   if (this.timeout) {
    //     clearTimeout(this.timeout)
    //     this.timeout = null
    //   }

    //   this.timeout = setTimeout(function () {
    //     this.$emit('getReport')
    //   }.bind(this), 5000)
    // },
    closeModal () {
      this.$modal.hide('associate-modal')
    },
    submitAndCloseModal () {
      this.$modal.hide('associate-modal')
    },
    beforeOpen (event) {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    },
    beforeClose (event) {
      document.getElementsByTagName('body')[0].style.overflow = 'scroll'
    },
    inArray (needle, haystack, argStrict) {
      return utils.inArray(needle, haystack, argStrict)
    }
  }
}
</script>
