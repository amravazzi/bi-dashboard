<template>
<div>

<div class="card text-center not-found-card">
  <div class="card-block">
    <h4 class="card-title">A página não foi encontrada</h4>
    <p class="card-text">Você tentou acessar um recurso que não existe. Verifique se o link está correto e tente novamente. Ou clique no botão abaixo para retornar à Dashboard</p>
    <a href="/" class="btn btn-primary not-found-return-to-home">Ir para a Dashboard</a>
  </div>
</div>

</div>
</template>

<script>
import UpperNav from '@/components/common/UpperNav'
import DashboardFooter from '@/components/common/DashboardFooter'

export default {
  name: 'notFound',
  components: {
    UpperNav,
    DashboardFooter
  }
}
</script>
