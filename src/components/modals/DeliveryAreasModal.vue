<template>
  <modal
   name="delivery-areas-modal"
   :adaptive="true"
   height="100%"
   width="100%"
  >

    <div class="row delivery-form">
      <div class="col-12">

        <div class="row card-header">
          <div class="col-10 col-sm-10 col-md-11 d-flex justify-content-center align-items-center">
            <p class="delivery-settings-modal-title">Adicionar nova Área de Delivery</p>
          </div>
          <div class="col-2 col-sm-2 col-md-1">
            <a class="close-modal-btn large-close-btn" @click="closeModal"><i alt="Fechar" class="material-icons">close</i></a>
          </div>
        </div>

        <div class="card-block">

          <div class="row">

            <div class="form-group col-sm-12">
              <div class="inputDnD">
                <label class="" for="inputFile">Upload de arquivo KML</label>
                <input type="file" enctype="multipart/form-data" class="form-control-file text-primary font-weight-bold" id="inputFile" accept="application/vnd.google-earth.kml+xml" @change="readUrl()" data-title="Arraste e solte o arquivo KML">
              </div>
            </div>

            <div class="col-sm-12 d-flex justify-content-center" style="margin-top:20px;">
              <button class="btn btn-primary btn-manage" @click="submitAndCloseModal">Adicionar KML</button>
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
  name: 'DeliveryAreasModal',
  // props: ['enabledFilters'],
  data () {
    return {
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
    readUrl() {
      let input = document.getElementById('inputFile')
      let fileName = input.value.replace(/C:\\fakepath\\/i, '')
      input.setAttribute("data-title", fileName)
    },
    closeModal () {
      this.$modal.hide('delivery-areas-modal')
    },
    submitAndCloseModal () {
      this.$modal.hide('delivery-areas-modal')
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
