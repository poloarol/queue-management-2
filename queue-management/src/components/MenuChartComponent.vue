<template>
    <div class="container">
        <div class="container chart">
            <TabNavBar :values="months" :top='activeMonth' @updateTop='activeMonth=$event' class="top-nav-bar"></TabNavBar>
            <SideNavBar :values="days" :side='activeDay' @updateSide='activeDay=$event' class="side-nav-bar"></SideNavBar>
            <ChartComponent :chartData="datacollection" class="traffic-chart chart"></ChartComponent>
        </div>
    </div>    
</template>

<script>

/**
 * 
 * This shows the traffic of users in the lab by month and day.
 * 
 */


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
            months: [],
            days: [],
            months_fr: FR.getMonth(),
            days_fr: FR.getDay(),
            months_en: EN.getMonth(),
            days_en: EN.getDay(),
            activeMonth: date.getMonth() + 1,
            activeDay: date.getDay() - 1,
            datacollection: {}
        }
    },
    async created(){
        if(this.activeDay === -1)
            this.activeDay = 7
        this.updateChart(this.activeMonth, this.activeDay)
        this.getText()
    },
    updated(){
        this.updateChart(this.activeMonth, this.activeDay)
        this.getText()
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
        getText(){
            this.months = this.language === 'en' ? this.months_en : this.months_fr
            this.days = this.language === 'en' ? this.days_en : this.days_fr
        }
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

    div.top-nav-bar{
        position: relative;
        top: 2.5em;
        left: 10%;
    }

    div.side-nav-bar{
        position: relative;
        top: 15em;
    }

    div.traffic-chart{
        position: relative;
        left: 15%;
        top: -5em;
        width: 75%;
    }
</style>

