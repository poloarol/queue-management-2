<template>
    <div class="container">
        <SoftwareUpdateStats 
                :labels="labels" :langs="langs" :status="status" :faculty="faculty"
                :left="lang_val" :middle="faculty_val" :right="role_val"
                @getLang="lang_val=$event" @getFaculty="faculty_val=$event" @getRole="role_val=$event"
            class="software">
        </SoftwareUpdateStats>
        <SideNavBar :values='software' :side='activeSoftware' @updateSide='activeSoftware=$event' class="side-bar"></SideNavBar>
        <!-- <ChartComponent :chartData='datacollection' class='stats-chart'></ChartComponent> -->
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
        // ChartComponent
    },
    data(){
        return {
            // months: EN.getMonth(),
            software: [],
            language: [],
            faculty: [],
            labels: [],
            status: [],
            langs: [],
            labels_en: ['Language', 'Roles', 'Faculty'],
            labels_fr: ['Langue', 'Rôles', 'Faculté'],
            lang_en: EN.getLang(),
            lang_fr: FR.getLang(),
            faculty_en: EN.getFaculty(),
            faculty_fr: FR.getFaculty(),
            software_fr: FR.getPlatform(),
            software_en: EN.getPlatform(),
            status_en: EN.getStatus(),
            status_fr: FR.getStatus(),
            activeSoftware: 1,
            datacollection: {},
            lang_val: 0,
            faculty_val: 0,
            role_val: 0
        }
    },
    async created(){
        this.getText()
        await this.updateChart()
    },
    async updated(){
        this.getText()
        await this.updateChart()
    },
    computed: {
        updateSide(){
            return this.activeSoftware
        },
        getLang(){
            return this.lang_val
        },
        getFaculty(){
            return this.faculty_val
        },
        getRole(){
            return this.role_val
        }
    },
    methods: {
        getText(){
            this.software = this.language === 'en' ? this.software_en : this.software_fr
            this.labels = this.language === 'en' ? this.labels_en : this.labels_fr
            this.faculty = this.language === 'en' ? this.faculty_en : this.faculty_fr
            this.status = this.language === 'en' ? this.status_en : this.status_fr
            this.langs = this.language === 'en' ? this.lang_en : this.lang_fr
        },
        async updateChart(){
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
        }
    }
}
</script>
