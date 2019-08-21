<script>
/*

ChartComponent allows for the building of Bar Charts. 
It serves as a visualizing component.

*/

import { Bar,  mixins} from 'vue-chartjs'

export default {  // extending the base class
    extends: Bar,
    mixins: [mixins.reactiveProp],
    data() {
        return {
            options: { // chart.js options
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines: {
                            display: false
                        }
                    }],
                    xAxes: [{
                        gidLines: {
                            display: false
                        }
                    }]
                },
                legend: {
                    display: false
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
