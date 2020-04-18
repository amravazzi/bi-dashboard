<template>
  <modal
   name="add-holiday-modal"
   :adaptive="true"
   height="100%"
   width="100%"
  >

    <div class="row delivery-form">
      <div class="col-12">

        <div class="row card-header">
          <div class="col-10 col-sm-10 col-md-11 d-flex justify-content-center align-items-center">
            <p class="delivery-settings-modal-title">Adicionar turno diferenciado</p>
          </div>
          <div class="col-2 col-sm-2 col-md-1">
            <a class="close-modal-btn large-close-btn" @click="closeModal"><i alt="Fechar" class="material-icons">close</i></a>
          </div>
        </div>

        <div class="card-block">
          <div class="row">

            <div class="form-group col-sm-12">
              <label for="holiday-name" class="" id="holiday-name-label">Título</label>
              <input class="form-control" type="text" placeholder="Feriado de Natal" name="holiday-name" id="holiday-name">
            </div>

            <div class="form-group col-md-3 col-sm-12">
              <label for="holiday-start" class="" id="holiday-start-label">Dia de início</label>
              <input class="form-control" type="text" placeholder="25/12/2017" name="holiday-start" id="holiday-name">
            </div>

            <div class="form-group col-md-3 col-sm-12">
              <label for="holiday-start" class="" id="holiday-start-label">Hora de início</label>
              <input class="form-control" type="text" placeholder="18:00" name="holiday-start" id="holiday-name">
            </div>

            <div class="form-group col-md-3 col-sm-12">
              <label for="holiday-start" class="" id="holiday-start-label">Dia de fim</label>
              <input class="form-control" type="text" placeholder="25/12/2017" name="holiday-start" id="holiday-name">
            </div>

            <div class="form-group col-md-3 col-sm-12">
              <label for="holiday-start" class="" id="holiday-start-label">Hora de fim</label>
              <input class="form-control" type="text" placeholder="23:59" name="holiday-start" id="holiday-name">
            </div>


            <div class="form-group col-sm-12">
              <label for="holiday-start" class="align-top" id="holiday-start-label">Ação</label>

              <div class="col">
                <label for="action" class="align-top" id="holiday-start-label">Loja aberta</label>
                <label class="switch">
                  <input id="action" class="form-control" type="checkbox">
                  <span class="slider round"></span>
                </label>
                <label for="action" class="align-top" id="holiday-start-label">Loja fechada</label>
              </div>

            </div>

            <div class="col-sm-12 d-flex justify-content-center">
              <button class="btn btn-primary btn-manage" @click="submitAndCloseModal">Adicionar Colaborador</button>
              <button class="btn btn-primary btn-outline-secondary" @click="closeModal">Cancelar</button>
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
      this.$modal.hide('add-holiday-modal')
    },
    submitAndCloseModal () {
      this.$modal.hide('add-holiday-modal')
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
