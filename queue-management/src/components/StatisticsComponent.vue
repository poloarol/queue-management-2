<template>
    <div class="container">
        <SoftwareUpdateStats class="software"></SoftwareUpdateStats>
        <SideNavBar :values='software' :side='activeSoftware' @updateSide='activeSoftware=$event' class="side-bar"></SideNavBar>
        <ChartComponent :chartData='datacollection' class='stats-chart'></ChartComponent>
    </div>
</template>

<style>
.side-bar{
    position: relative;
    margin-top: 7.5em !important;
    left: 2.5%;
}

div.software{
    position: relative;
    top: 2em;
    left: 20%;
}

div.stats-chart{
    position: relative;
    top: -26.5em;
    left: 20%;
    width: 70%;
}

</style>

<script>

/**
 * 
 * Provides charts about the various platforms, languages and others.
 * Works with the SoftwareUpdateStats component.
 * 
 */

import EN from '../../services/en/text'
import FR from '../../services/fr/text'

// import TabNavBar from './TabNavBar.vue'
import SideNavBar from './SideNavBar.vue'
import SoftwareUpdateStats from './SoftwareUpdateStats.vue'
import ChartComponent from './ChartComponent.vue'

let date = new Date()

export default {
    name: 'StatisticsComponent',
    props: [],
    components: {
        // TabNavBar,
        SideNavBar,
        SoftwareUpdateStats,
        ChartComponent
    },
    data(){
        return {
            // months: EN.getMonth(),
            software: [],
            software_fr: FR.getPlatform(),
            software_en: EN.getPlatform(),
            activeSoftware: 1,
            datacollection: {}
        }
    },
    created(){
        this.getText()
        this.datacollection = {
            labels : '',
            datasets: [
                {
                    label: '',
                    backgroundColor: [],
                    data: []
                }
            ]
        }
    },
    updated(){
        this.getText()
        this.datacollection = {
            labels : '',
            datasets: [
                {
                    label: '',
                    backgroundColor: [],
                    data: []
                }
            ]
        }
    },
    computed: {
        updateSide(){
            return this.activeSoftware
        }
    },
    methods: {
        getText(){
            this.software = this.language === 'en' ? this.software_en : this.software_fr
        }
    }
}
</script>
