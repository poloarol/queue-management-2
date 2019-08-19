<template>
    <div class="container">
        <div class="container chart">
            <TabNavBar :values="months" :top='activeMonth' @updateTop='activeMonth=$event' class="top-nav-bar"></TabNavBar>
            <!-- <SideNavBar :values="days" :side='activeDay' @updateSide='activeDay=$event' class="side-nav-bar"></SideNavBar> -->
            <!-- <ChartComponent :chartData="datacollection"></ChartComponent> -->
        </div>
    </div>    
</template>

<script>
import ChartComponent from './ChartComponent.vue'
import SideNavBar from './SideNavBar.vue'
import TabNavBar from './TabNavBar.vue'

import EN from '../../services/en/text'
import FR from '../../services/fr/text'
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
            months: EN.getMonth(),
            days: EN.getDay(),
            activeMonth: date.getMonth() + 1,
            activeDay: date.getDay() - 1,
            datacollection: {}
        }
    },
    async created(){
        if(this.activeDay === -1)
            this.activeDay = 7
        this.updateChart(this.activeMonth, this.activeDay)
    },
    updated(){
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
    },
    computed: {
        updateTop(){
            return this.activeMonth
        },
        updateSide(){
            return this.activeDay
        }
    }
}
</script>

<style>

    /* div.top-nav-bar{
        margin: 0 auto !important;
    } */

    /* canvas#bar-chart{
        position: absolute;
        left: 25em;
        top: 25em;
    }

    div.side-nav-bar{
        position: absolute;
        top: 30em;
    } */
</style>

