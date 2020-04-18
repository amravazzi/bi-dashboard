import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default Line.extend({
  mixins: [reactiveProp],
  props: ['options'],
  mounted () {
    this.options.scales.yAxes[0].ticks.beginAtZero = false

    // this.chartData is created in the mixin
    this.renderChart(this.chartData, this.options)
  }
})
