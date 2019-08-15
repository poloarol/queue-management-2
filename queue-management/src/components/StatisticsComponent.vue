<template>
    <div class="container">
        <SideNavBar :values='software' :side='activeSoftware' @updateSide='activeSoftware=$event' class="side-bar"></SideNavBar>
    </div>
</template>

<style>
.side-bar{
    margin-top: 15em !important;
}
</style>

<script>

import StaticData from '../../services/api/StaticData'
import TabNavBar from './TabNavBar.vue'
import SideNavBar from './SideNavBar'

let date = new Date()

export default {
    name: 'StatisticsComponent',
    props: [],
    components: {
        TabNavBar,
        SideNavBar
    },
    data(){
        return {
            months: StaticData.getMonth(),
            software: StaticData.getSoftware(),
            activeSoftware: 0,
            activeDay: 0
        }
    },
    created(){

    },
    updated(){
        
    },
    computed: {
        updateSide(){
            return this.activeSoftware
        },
        updateTop(){
            return this.activeMonth
        }
    }
}
</script>
