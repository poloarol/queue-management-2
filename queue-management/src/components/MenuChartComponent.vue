<template>
    <div class="container">
        <div class="container chart">
            <TabNavBar :values="months" :top='activeMonth'></TabNavBar>
            <SideNavBar :values="days" :side='activeDay'></SideNavBar>
            <ChartComponent :chartData="datacollection"></ChartComponent>
        </div>
    </div>    
</template>

<script>
import ChartComponent from './ChartComponent.vue'
import SideNavBar from './SideNavBar.vue'
import TabNavBar from './TabNavBar.vue'

import StaticData from '../../services/api/StaticData'
import JobServices from '../../services/api/JobServices'

let date = new Date()

export default {
    name: 'MenuChartComponent',
    components: {
        ChartComponent,
        SideNavBar,
        TabNavBar
    },
    data(){
        return {
            months: [],
            days: [],
            activeMonth: date.getMonth() + 1,
            activeDay: date.getDay() - 1,
            datacollection: {}
        }
    },
    async created(){
        if(this.activeDay === -1)
            this.activeDay = 7
        this.months = StaticData.getMonth()
        this.days = StaticData.getDay()
        this.updateChart(this.activeMonth, this.activeDay)
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
                            label: `Percentage # of visits on ${day}`,
                            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#ff7f00", "#33a02c", "#cab2d6", "#fb9a99", "#01665e"],
                            data: points
                        }
                    ]
                }
            }catch(err){
                this.err = err.message
            }
        },
        async addActiveMonth(value){
            this.activeMonth = value
            await this.updateChart(this.activeMonth, this.activeDay)
        },
        async addActiveDay(value){
            this.activeDay = value
            await this.updateChart(this.activeMonth, this.activeDay)
        }
    }
}
</script>

<style>
    canvas#bar-chart{
        width: 900px !important;
        height: 500px;
        margin: 0 auto !important;
        margin-top: -15em !important;
    }
</style>

