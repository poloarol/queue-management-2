<template>
    <div class="container">
        <div class="ui small tabular menu tabular-menu">
            <a class="item"
                    v-for="month in months"
                    :key="month.id"
                    @click="addActiveMonth(month.id)"
                    :class="{active : activeMonth===month.id}"
            >
                {{ month.value }}
            </a>
        </div>
        <div class="ui large secondary vertical pointing menu pointing-menu">
            <a class="item"
                    v-for="software in softwares"
                    :key="software.id"
                    @click="addActiveSoftware(software.id)"
                    :class="{active : activeSoftware===software.id}"
            >
            {{ software.value }}
            </a>
        </div>
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

export default {
    name: 'StatisticsComponent',
    props: {

    },
    data(){
        return {
            chartData: [],
            cardData: [],
            months: [],
            activeMonth: 0,
            activeSoftware: 0,
            softwares: [],
            values: [{'id': 1, 'value':'Roles | Roles'}, {'id': 2, 'value':'Faculty | Faculte'}, {'id': 3, 'value':'Language | Langage'}, {'id': 4, 'value': 'System | System'}]
        }
    },
    created(){
        let date = new Date()
        this.cardData = (this.values)
        this.months = StaticData.getMonth()
        this.activeMonth = date.getMonth() + 1
        this.softwares = StaticData.getSoftware()
    },
    updated(){
        this.cardData = (this.values)
    },
    methods: {
        addActiveMonth(value){
            this.activeMonth = value
        },
        addActiveSoftware(value){
            this.activeSoftware = value
        }
    }
}
</script>
