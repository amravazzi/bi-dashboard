<template>
  <modal
   name="add-shift-modal"
   :adaptive="true"
   height="100%"
   width="100%"
  >

    <div class="row delivery-form">
      <div class="col-12">

        <div class="row card-header">
          <div class="col-10 col-sm-10 col-md-11 d-flex justify-content-center align-items-center">
            <p class="delivery-settings-modal-title">Adicionar novo turno</p>
          </div>
          <div class="col-2 col-sm-2 col-md-1">
            <a class="close-modal-btn large-close-btn" @click="closeModal"><i alt="Fechar" class="material-icons">close</i></a>
          </div>
        </div>

        <div class="card-block">

          <div class="row">

            <div class="form-group col-sm-12">
              <label for="delivery-weekdays" class="" id="delivery-weekdays-label">Dia da semana</label>
              <select name="delivery-weekdays" id="delivery-weekdays" class="form-control">
                <option value="self" disabled>Selecione</option>
                <option value="monday">Segunda-feira</option>
                <option value="tuesday">Terça-feira</option>
                <option value="wednesday">Quarta-feira</option>
                <option value="thursday">Quinta-feira</option>
                <option value="friday">Sexta-feira</option>
                <option value="saturday">Sábado</option>
                <option value="sunday">Domingo</option>
              </select>
            </div>

            <div class="form-group col-sm-6">
              <label for="delivery-associate-name" class="" id="delivery-associate-name-label">Início do turno</label>
              <input class="form-control" type="text" placeholder="13:00" id="delivery-associate-name">
            </div>

            <div class="form-group col-sm-6">
              <label for="delivery-associate-name" class="" id="delivery-associate-name-label">Fim do turno</label>
              <input class="form-control" type="text" placeholder="16:30" id="delivery-associate-name">
            </div>

            <div class="col-sm-12 d-flex justify-content-center">
              <button class="btn btn-primary btn-manage" @click="submitAndCloseModal">Adicionar turno</button>
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
  name: 'DeliveryShiftModal',
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
      this.$modal.hide('add-shift-modal')
    },
    submitAndCloseModal () {
      this.$modal.hide('add-shift-modal')
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
