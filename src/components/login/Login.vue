<template>
<div class="container login-container">
  <div class="row align-items-center" style="margin-top:60px">

    <div class="col-sm-12 col-md-4 hidden-sm-down login-title">
      <h1>Relatórios gerenciais</h1>
      <h3>Vendas</h3>
    </div>

    <div class="col-sm-12 col-md-2 col-lg-4 hidden-sm-down"></div>

    <div class="col-sm-12 col-md-6 col-lg-4">
      <div class="card login-card">
        <div class="card-block">
          <img class="card-img-top login-logo" src="../../assets/img/logo.svg" alt="Altec">
          <!-- <spinner v-show="loggingIn"></spinner> -->
          <transition name="fade">
            <div class="alert alert-danger" v-if="typeof error === 'string' &&  error">
              <p>{{ error }}</p>
            </div>
          </transition>
          <form v-on:submit.prevent>
            <div class="form-group input-group" v-bind:class="{'has-danger': error.email_address }">
              <span class="input-group-addon"><i class="fa fa-envelope" aria-hidden="true"></i></span>
              <input type="email" class="form-control form-email-login" placeholder="E-mail" v-model="credentials.emailAddress" v-bind:class="{'form-control-danger': error.email_address }">
            </div>
            <div class="form-group input-group" v-bind:class="{'has-danger': error.password }">
              <span class="input-group-addon"><i class="fa fa-lock"></i></span>
              <input type="password" class="form-control" placeholder="Senha" v-model="credentials.password" v-bind:class="{'form-control-danger': error.password }">
            </div>
            <button type="submit" data-id="login.submit" class="btn btn-primary btn-login" @click="submit()">Entrar</button>
            <div class="card-footer login-card-footer">
              <div class="row">
                <div class="col">
                  <div class="form-check abc-checkbox">
                    <input type="checkbox" class="form-check-input" id="keep-alive-login">
                    <label class="form-check-label keep-alive-login" for="keep-alive-login">
                      Manter-se logado
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="full-width-login"></div>
  </div>
  <div class="row copyright-login">
    <div class="col-sm-12 col-md-4 hidden-sm-down"></div>
    <div class="col-sm-12 col-md-2 col-lg-4 hidden-sm-down"></div>
    <div class="col-sm-12 col-md-6 col-lg-4">2017 &copy; Your Company. Todos os direitos reservados.</div>
  </div>
</div>
</template>

<script>
import Spinner from '@/components/common/Spinner'

export default {
  name: 'login',
  components: { Spinner },
  mounted () {
  },
  data () {
    return {
      credentials: {
        emailAddress: '',
        password: ''
      },
      loggingIn: false,
      error: ''
    }
  },
  methods: {
    submit () {
      this.loggingIn = true
      const credentials = {
        emailAddress: this.credentials.emailAddress,
        password: this.credentials.password
      }
      this.$auth.login(credentials, 'Dashboard')
        .then((response) => {
          this.loggingIn = false
          if (response.status !== 200) {
            this.error = utils.getError(response)
          }
        })
    }
  }
}
</script>
