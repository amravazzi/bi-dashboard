<template>
	<div class="row">

    <div class="logo-drop-menu-wrapper col-4">
      <div class="dropdown-menu dropdown-apps-menu" aria-labelledby="apps-menu">
        <div class="row">
          <div class="col-sm-6 app-icon-wrapper">
            <a class="" href="/">
              <i class="material-icons" id="reports">dashboard</i>
              <span class="hidden-sm-down">Relatórios</span>
              <p class="hidden-sm-up">Relatórios</p>
            </a>
          </div>
          <div class="col-sm-6 app-icon-wrapper">
            <a class="" href="/delivery/dashboard">
              <i class="material-icons" id="delivery">place</i>
              <span class="hidden-sm-down">Delivery</span>
              <p class="hidden-sm-up">Delivery</p>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="logo-drop-menu-wrapper col-4">
      <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" id="account-menu">
        <img style="" class="uppernav-logo" src="../../assets/img/logo.svg" alt="Altec">
      </a>
      <div class="dropdown-menu uppernav-logo-drop-menu" style="margin-left:-10px;" aria-labelledby="account-menu">
        <a class="dropdown-item" href="#">Conta</a>
        <a class="dropdown-item" href="#">Termos</a>
        <a class="dropdown-item" href="#">Suporte</a>
        <a class="dropdown-item" href="#">Sobre</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#" @click="logout()"><b>Sair</b></a>
      </div>
    </div>

	</div>
</template>
<script>

import Auth from '@/auth'

export default {
  name: 'AccountMenu',
  methods: {
    logout () {
      Auth.logout()
    },
    inArray (needle, haystack, argStrict) {
      return utils.inArray(needle, haystack, argStrict)
    }
  }
}
</script>
