<template>
    <div class="container">
        <MenuComponent></MenuComponent>
        <div class="container secondary-menu">
            <div class="ui fluid inverted large four item menu">
                <a class="item active" :href="'/admin/traffic/:month/:day'">
                    <i class="tachometer alternate icon"></i>
                    Traffic
                </a>
                <a class="item" :href="'/admin/statistics'">
                    <i class="chart bar outline icon"></i>
                    Statistics
                </a>
                <a class="item" :href="'/admin/db'">
                    <i class="users icon"></i>
                    User Management
                </a>
                <a class="item" :href="'/admin/export'">
                    <i class="file excel icon"></i>
                    Export
                </a>
            </div>
        </div>
        <ChartComponent chartData="datacollection"></ChartComponent>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>
import MenuComponent from './MenuComponent.vue'
import FooterComponent from './FooterComponent.vue'
import ChartComponent from './ChartComponent.vue'
import JobServices from '../../services/api/JobServices'

let date = new Date()

export default {
    name: 'AdminMenuComponent',
    components: {
        MenuComponent,
        ChartComponent,
        FooterComponent
    },
    data(){
        return {
            err: '',
            month: date.getMonth()+1, // to match sql values date/month values
            day: date.getDay()+1,
            traffic: null,
            datacollection: null,
            labels: [],
            points: []
        }
    },
    async created(){
        this.updateChart(this.month, this.day)
    },
    methods: {
        async updateChart(month, day){
            try{
                this.traffic = await JobServices.getTraffic(month, day)

                for (let key in this.traffic){
                    this.labels.push(key)
                    this.points.push(this.traffic[key])
                }

                this.datacollection = {
                    labels: this.labels,
                    datasets: [
                        {
                            label: '# of visits',
                            backgroundColor: '#F87979',
                            data: this.points
                        }
                    ]
                }
            }catch(err){
                this.err = err.message
            }
        }
    }
}
</script>


<style>
div.secondary-menu{
    width: 80%;
    margin: 0 auto;
    margin-top: 7em;
}
</style>

