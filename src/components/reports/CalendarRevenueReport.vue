<template>
<div>

  <UpperNav :title="pageTitle" v-on:getReport="getReport"></UpperNav>

  <div class="container-fluid h-100">
    <spinner v-show="loading"></spinner>

    <div class="row">
      <p class="upper-title-reports bold">Período de {{startDateLabel}} a {{endDateLabel}}</p>
    </div>

    <!--div class="row">

      <div class="col col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
        <div class="card">
          <div class="card-header card-header-report card-inverse report-card-header">
            <div class="row">
              <div class="col-3 card-icon">
                <i class="material-icons">attach_money</i>
              </div>
              <div class="col-9 text-right report-card-header-info">
                <p>R$ 2.480.000,00</p>
                <p>Faturamento bruto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
        <div class="card">
          <div class="card-header card-header-report card-inverse report-card-header">
            <div class="row">
              <div class="col-3 card-icon">
                <i class="material-icons">group</i>
              </div>
              <div class="col-9 text-right report-card-header-info">
                <p>10.850</p>
                <p>Cliente</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
        <div class="card">
          <div class="card-header card-header-report card-inverse report-card-header">
            <div class="row">
              <div class="col-3 card-icon">
                <i class="material-icons">trending_flat</i>
              </div>
              <div class="col-9 text-right report-card-header-info">
                <p>R$ 7.085,67</p>
                <p>Seu Ticket Médio</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div-->

    <div class="row report-weekdays-header">
      <div class="col col-15" v-for="value in header">{{value}}</div>
    </div>

    <div class="row" style="padding:10px">

      <!-- <div class="col-15"><div class="card report-calendar-day-card-blank"></div></div> -->

      <div class="col-15" v-for="day in body">
        <div class="card report-calendar-day-card" v-if="day.label" v-bind:class="{'report-calendar-week-card': day.end_of_week}">
          <div class="row report-calendar-date-line">
            <p>{{day.label}}</p>
          </div>
          <div class="row report-calendar-data-line" v-tooltip="day.gross_billing_percent + '%'">
            <p>Faturamento</p>
            <p>R$ {{moneyFormat(day.gross_billing)}}</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Clientes</p>
            <p>{{day.quantity_people}}</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Ticket Médio</p>
            <p>R$ {{moneyFormat(day.gross_billing_per_customer)}}</p>
          </div>
        </div>
        <div class="card report-calendar-day-card blank" v-else></div>
      </div>
    </div>

    <div class="row" style="padding:10px">
      <div class="col-15" v-for="day in footer">
        <div class="card report-calendar-week-card" v-if="day.label">
          <div class="row report-calendar-date-line">
            <p>{{day.label}}</p>
          </div>
          <div class="row report-calendar-data-line" v-tooltip="day.gross_billing_percent + '%'">
            <p>Faturamento</p>
            <p>R$ {{moneyFormat(day.gross_billing)}}</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Clientes</p>
            <p>{{day.quantity_people}}</p>
          </div>
          <div class="row report-calendar-data-line">
            <p>Ticket Médio</p>
            <p>R$ {{moneyFormat(day.gross_billing_per_customer)}}</p>
          </div>
        </div>
      </div>
    </div>

  </div>

  <DashboardFooter></DashboardFooter>
  <RevenueModal v-on:getReport="getReport" :enabledFilters="enabledFilters"></RevenueModal>
</div>
</template>

<script>
import moment from 'moment'
import UpperNav from '@/components/common/UpperNav'
import DashboardFooter from '@/components/common/DashboardFooter'
import RevenueModal from '@/components/modals/RevenueModal'
import Spinner from '@/components/common/Spinner'

export default {
  name: 'Dashboard',
  components: {
    moment,
    UpperNav,
    DashboardFooter,
    RevenueModal,
    Spinner
  },
  created () {
    this.loadFilters()
  },
  mounted () {
    this.getReport()
  },
  data () {
    return {
      enabledFilters: [
        'faturamento',
        'indicadores',
        'week_start_at'
      ],
      pageTitle: 'Faturamento Calendário',
      loading: false,
      startDateLabel: '',
      endDateLabel: '',
      branchFilter: [],
      header: [],
      body: [],
      footer: []
    }
  },
  methods: {
    loadFilters () {
      this.branchFilter = JSON.parse(localStorage.getItem('branchFilter'))
      this.startDate = JSON.parse(localStorage.getItem('startDate'))
      this.endDate = JSON.parse(localStorage.getItem('endDate'))
      this.startDateTime = JSON.parse(localStorage.getItem('startDateTime'))
      this.endDateTime = JSON.parse(localStorage.getItem('endDateTime'))
      this.faturamentoFilter = JSON.parse(localStorage.getItem('faturamentoFilter')) // TODO: implement faturamentoFilter
      this.weekStartAtFilter = JSON.parse(localStorage.getItem('revenue.weekStartAtFilter'))

      this.startDateLabel = moment(this.startDate, 'DD/MM/YYYY').format('DD [de] MMMM')
      this.endDateLabel = moment(this.endDate, 'DD/MM/YYYY').format('DD [de] MMMM [de] YYYY')
    },
    getReport () {
      this.loadFilters()

      const date = moment(this.startDate + ' ' + this.startDateTime, 'DD/MM/YYYY HH:mm')
      const endDate = moment(this.endDate + ' ' + this.endDateTime, 'DD/MM/YYYY HH:mm')

      if (!date.isValid() || !endDate.isValid() || date.isAfter(endDate)) {
        return false
      }

      this.loading = false

      this.$http.get('http://altec-ws-staging-873971210.us-east-1.elb.amazonaws.com/backoffice/reports/v1/accumulated_billing_calendar', { params: {
        branch: this.branchFilter.map(function (branch) { return branch.id }).join(','),
        start_date: this.startDate, // eslint-disable-line
        end_date: this.endDate, // eslint-disable-line
        week_start_at: this.weekStartAtFilter.value // eslint-disable-line
      }})
      .then((response) => {
        this.header = response.body.header
        this.body = response.body.body
        this.footer = response.body.footer

        this.loading = false
      })
      .catch((response) => {
        this.loading = false
      })
    },
    moneyFormat (value) {
      return utils.moneyFormat(value)
    }
  }
}
</script>
