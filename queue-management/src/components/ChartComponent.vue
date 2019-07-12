<script>
import { Bar,  mixins} from 'vue-chartjs'

const { reactiveProp } = mixins

export default {  // extending the base class
    extends: Bar,
    mixins: [reactiveProp],

    data() {
        return {
            options: { // chart.js options
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines: {
                            display: true
                        }
                    }],
                    xAxes: [{
                        gidLines: {
                            display: true
                        }
                    }]
                },
                legend: {
                    display: true
                },
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    mounted() {
        // this.chartData is created in the mixin
        this.renderChart(this.chartData, this.options)
    }
}

</script>
