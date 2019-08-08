<template>
    <div class="container">
        <TabNavBar :values="months" :current="activeMonth" @addActiveMonth="activeMonth=$event"></TabNavBar>
        <!-- <div class="ui large secondary vertical pointing menu pointing-menu">
            <a class="item"
                    v-for="software in softwares"
                    :key="software.id"
                    @click="addActiveSoftware(software.id)"
                    :class="{active : activeSoftware===software.id}"
            >
            {{ software.value }}
            </a>
        </div> -->
            <!-- <div class="ui three stackable cards">
                <div class="card" v-for="cardDatum in cardData" :key="cardDatum.id">
                    <div class="image">
                        <img src="">
                    </div>
                    <div class="content">
                        <a class="header">{{ cardDatum.value }}</a>
                        <div class="description">
                            Description
                        </div>
                    </div>
                </div>
            </div> -->
    </div>
</template>

<script>

import StaticData from '../../services/api/StaticData'
import TabNavBar from './TabNavBar.vue'

let date = new Date()

export default {
    name: 'StatisticsComponent',
    props: [],
    components: {
        TabNavBar
    },
    data(){
        return {
            months: [],
            activeMonth: 0,
            activeSoftware: 0
            // softwares: [],
            // values: [{'id': 1, 'value':'Roles | Roles'}, {'id': 2, 'value':'Faculty | Faculte'}, {'id': 3, 'value':'Language | Langage'}, {'id': 4, 'value': 'System | System'}]
        }
    },
    created(){
        this.activeMonth = date.getMonth()
        this.months = StaticData.getMonth()
    },
    updated(){
        // this.cardData = (this.values)
        this.months = StaticData.getMonth()
    },
    methods: {
        addActiveMonth(){
            return this.activeMonth
        },
        addActiveSoftware(value){
            this.activeSoftware = value
        }
    }
}
</script>
