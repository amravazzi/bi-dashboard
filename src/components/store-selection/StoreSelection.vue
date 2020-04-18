<template>
<div style="background-color:#f6fafa">
  <nav class="row navbar navbar-light main-nav">
    <div class="row align-items-center">
      <div class="col-6 col-md-6" style="margin-left:0px">
        <span class="uppernav-title" style="font-weight:500;font-size:1.25rem;line-height:1px;">Selecione um estabelecimento</span>
      </div>
      <div class="col hidden-md-down"></div>
      <div class="col" style="margin:0;padding:0;">
        <AccountMenu></AccountMenu>
      </div>
    </div>
  </nav>

  <div class="container">

    <div class="row">
      <p class="store-upper-title">Seu usuário está vinculado a mais de um estabelecimento. Selecione uma ou mais opções abaixo para prosseguir.</p>
    </div>

    <div class="row">
      <div style="position:absolute;right:15px;margin-top:-30px;text-transform:uppercase"><a href="#">Selecionar Todos</a></div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <div class="card store-select-card">
          <label class="form-check-label" for="store-1">
            <div class="card-block">
              <div class="row">
                <div class="col-2 col-md-2 col-lg-1">
                  <input type="checkbox" class="form-check-input checkbox-round" id="store-1">
                </div>
                <div class="col-10 col-md-10 col-lg-11">
                  <h3 class="card-title-store">Matriz Ibirapuera</h3>
                  <p class="card-text-store">Rua Lorem Ipsum 999, Moema - São Paulo, SP</p>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>

      <div class="col-sm-6">
        <div class="card store-select-card">
          <label class="form-check-label" for="store-2">
            <div class="card-block">
              <div class="row">
                <div class="col-2 col-md-2 col-lg-1">
                  <input type="checkbox" class="form-check-input checkbox-round" id="store-2">
                </div>
                <div class="col-10 col-md-10 col-lg-11">
                  <h3 class="card-title-store">Matriz Ibirapuera</h3>
                  <p class="card-text-store">Rua Lorem Ipsum 999, Moema - São Paulo, SP</p>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>

      <div class="col-sm-6">
        <div class="card store-select-card">
          <label class="form-check-label" for="store-3">
            <div class="card-block">
              <div class="row">
                <div class="col-2 col-md-2 col-lg-1">
                  <input type="checkbox" class="form-check-input checkbox-round" id="store-3">
                </div>
                <div class="col-10 col-md-10 col-lg-11">
                  <h3 class="card-title-store">Matriz Ibirapuera</h3>
                  <p class="card-text-store">Rua Lorem Ipsum 999, Moema - São Paulo, SP</p>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>




      <div class="col-sm-12">
        <button type="submit" data-id="login.submit" class="btn btn-primary btn-login btn-continue">Continuar</button>
      </div>

    </div>

  </div>

  <DashboardFooter></DashboardFooter>

</div>
</template>

<script>
import DashboardFooter from '@/components/common/DashboardFooter'
import AccountMenu from '@/components/common/AccountMenu'

export default {
  name: 'store-selection',
  components: {
    DashboardFooter,
    AccountMenu
  },
  mounted () {
  },
  data () {
    return {}
  },
  methods: {
  }
}
</script>
