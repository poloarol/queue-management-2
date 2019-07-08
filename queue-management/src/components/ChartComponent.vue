<script>

import { Bar, mixins } from 'vue-chartjs'

export default {
    extends: Bar,
    mixins: [mixins.reactiveProp],
    props: ['chartData', 'options'],
    data() {
        return {
            options: {
                legend: {
                    display: true
                },
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    mounted(){
        this.renderChart(this.chartData, this.options)
    }
}
</script>