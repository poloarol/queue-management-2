<template>
    <div class="container">
        <SoftwareUpdateStats></SoftwareUpdateStats>
        <SideNavBar :values='software' :side='activeSoftware' @updateSide='activeSoftware=$event' class="side-bar"></SideNavBar>
    </div>
</template>

<style>
.side-bar{
    margin-top: 10em !important;
}
</style>

<script>

import EN from '../../services/en/text'
import FR from '../../services/fr/text'

// import TabNavBar from './TabNavBar.vue'
import SideNavBar from './SideNavBar.vue'
import SoftwareUpdateStats from './SoftwareUpdateStats.vue'

let date = new Date()

export default {
    name: 'StatisticsComponent',
    props: [],
    components: {
        // TabNavBar,
        SideNavBar,
        SoftwareUpdateStats
    },
    data(){
        return {
            // months: EN.getMonth(),
            software: EN.getPlatform(),
            activeSoftware: 1,
        }
    },
    created(){

    },
    updated(){
        
    },
    computed: {
        updateSide(){
            return this.activeSoftware
        }
    }
}
</script>
