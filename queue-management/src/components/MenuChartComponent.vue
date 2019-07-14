<template>
    <div class="container">
        <div class="ui small tabular menu tabular-menu">
            <a class="item" 
                v-for="month in months" 
                :key="month.id"
                @click="addActiveMonth(month.id)"
                :class="{active : activeMonth == month.id}"
            >
                {{ month.value }}
            </a>
        </div>
        <div class="ui large secondary vertical pointing menu pointing-menu">
            <a class="item"
                v-for="day in days"
                :key="day.id"
                @click="addActiveDay(day.id)"
                :class="{active : activeDay == day.id}"
            >
                {{ day.value}}
            </a>
        </div>
        <div class="container chart">
            <ChartComponent :chartData="datacollection"></ChartComponent>
        </div>
    </div>    
</template>

<script>
import ChartComponent from './ChartComponent.vue'

import StaticData from '../../services/api/StaticData'
import JobServices from '../../services/api/JobServices'

let date = new Date()

export default {
    name: 'MenuChartComponent',
    components: {
        ChartComponent
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
    div.tabular-menu{
        display: -webkit-inline-box !important;
        margin: 0 auto;
        margin-top:4em !important;
        margin-left: 15em !important;
    }

    div.pointing-menu{
        position: absolute;
        top: 35%;
        display: inline-grid !important;
        transform: translateY(20%);
        left: 0 !important;
    }

    div.chart{
        display: inline-flex;
        margin-left: 10em;
        margin-top: 5em;
    }

    canvas#bar-chart{
        width: 900px;
        height: 500px;
    }
</style>

