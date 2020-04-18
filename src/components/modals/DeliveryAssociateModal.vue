<template>
  <modal
   name="associate-modal"
   :adaptive="true"
   height="100%"
   width="100%"
  >

    <div class="row delivery-form">
      <div class="col-12">

        <div class="row card-header">
          <div class="col-10 col-sm-10 col-md-11 d-flex justify-content-center align-items-center">
            <p class="delivery-settings-modal-title">Adicionar novo colaborador</p>
          </div>
          <div class="col-2 col-sm-2 col-md-1">
            <a class="close-modal-btn large-close-btn" @click="closeModal"><i alt="Fechar" class="material-icons">close</i></a>
          </div>
        </div>

        <div class="card-block">

          <div class="row">

            <div class="form-group col-sm-12">
              <label for="delivery-associate-name" class="" id="delivery-associate-name-label">Nome completo</label>
              <input class="form-control" type="text" placeholder="José da Silva" id="delivery-associate-name">
            </div>

            <div class="form-group col-sm-6">
              <label for="delivery-associate-email" class="" id="delivery-associate-email-label" style="">E-mail</label>
              <input class="form-control" type="email" placeholder="email@exemplo.com.br" id="delivery-associate-email">
            </div>

            <div class="form-group col-sm-6">
              <label for="delivery-associate-role" class="" id="delivery-associate-role-label" style="">Perfil</label>
              <select class="form-control" id="delivery-associate-role">
                <option value="none" disabled>Selecione</option>
                <option value="administrator">Administrador</option>
                <option value="employee">Funcionário</option>
              </select>
            </div>

            <div class="col-sm-12">
              <label id="delivery-associate-permissions-label" style="">Permissões de Acesso</label>
              <div class="card">
                <div class="card-block row">

                  <div class="form-group col-12 col-sm-12 col-md-6">
                    <label class="switch">
                      <span>Dashboard</span>
                      <input type="checkbox" v-model="dashboardPermission">
                      <span class="slider round"></span>
                    </label>
                  </div>

                  <div class="form-group col-12 col-sm-12 col-md-6">
                    <label class="switch">
                      <span>Pedidos</span>
                      <input type="checkbox" v-model="ordersPermission">
                      <span class="slider round"></span>
                    </label>
                  </div>

                  <div class="form-group col-12 col-sm-12 col-md-6">
                    <label class="switch">
                      <span>Produtos</span>
                      <input type="checkbox" v-model="productsPermission">
                      <span class="slider round"></span>
                    </label>
                  </div>

                  <div class="form-group col-12 col-sm-12 col-md-6">
                    <label class="switch">
                      <span>Clientes</span>
                      <input type="checkbox" v-model="customersPermission">
                      <span class="slider round"></span>
                    </label>
                  </div>

                  <div class="form-group col-12 col-sm-12 col-md-6">
                    <label class="switch">
                      <span>Configurações</span>
                      <input type="checkbox" v-model="configsPermission">
                      <span class="slider round"></span>
                    </label>
                  </div>

                </div>
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
