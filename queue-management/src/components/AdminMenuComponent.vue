<template>
    <div class="container">
        <MenuComponent></MenuComponent>
        <div class="container secondary-menu">
            <div class="ui fluid inverted large four item menu">
                <a class="item">
                    <i class="tachometer alternate icon"></i>
                    Traffic
                </a>
                <a class="item">
                    <i class="chart bar outline icon"></i>
                    Statistics
                </a>
                <a class="item">
                    <i class="users icon"></i>
                    User Management
                </a>
                <a class="item">
                    <i class="file excel icon"></i>
                    Export
                </a>
            </div>
        </div>
        <component :is="comp" :chartData="datacollection"></component>
        <FooterComponent></FooterComponent>
    </div>
</template>

<style>
    div.format-chart{
        width: 40%;
        margin: 0 auto;
    }
</style>

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
            datacollection: {},
            currentTab: 'traffic',
            comp: "ChartComponent"
        }
    },
    async created(){
        this.updateChart(this.month, this.day)
    },
    methods: {
        async updateChart(month, day){
            try{
                let label = []
                let points = []

                let traffic = await JobServices.getTraffic(month, day)

                for (let key in traffic){
                    label.push(key)
                    points.push(traffic[key])
                }

                this.datacollection = {
                    labels: label,
                    datasets: [
                        {
                            label: '# of visits',
                            backgroundColor: '#F87979',
                            data: points
                        }
                    ]
                }

                console.log(this.datacollection)
            }catch(err){
                this.err = err.message
            }
        }
    },
    computed: {
        currentTabComponent: function () {
            return this.currentTab
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

