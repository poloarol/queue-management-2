<template>
    <div class="container">
        <MenuComponent></MenuComponent>
        <div class="container secondary-menu">
            <div class="ui fluid inverted large four item menu">
                <a class="item first" @click="addActiveClass(0)" :class="{garnet : activeNav == 0}">
                    <i class="tachometer alternate icon"></i>
                    Traffic
                </a>
                <a class="item second" @click="addActiveClass(1)" :class="{garnet : activeNav == 1}">
                    <i class="chart bar outline icon"></i>
                    Statistics
                </a>
                <a class="item first" @click="addActiveClass(2)" :class="{garnet : activeNav == 2}">
                    <i class="users icon"></i>
                    User Management
                </a>
                <a class="item second" @click="addActiveClass(3)" :class="{garnet : activeNav == 3}">
                    <i class="file excel icon"></i>
                    Export
                </a>
            </div>
        </div>
        <div>
            <component :is="currentComponent" :chartData="datacollection"></component>
        </div>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>
import MenuComponent from './MenuComponent.vue'
import FooterComponent from './FooterComponent.vue'
import MenuChartComponent from './MenuChartComponent.vue'
import StatisticsComponent from './StatisticsComponent.vue'
import UserManagementComponent from './UserManagementComponent.vue'
import ExportFileComponent from './ExportFileComponent.vue'

export default {
    name: 'AdminMenuComponent',
    components: {
        MenuComponent,
        MenuChartComponent,
        StatisticsComponent,
        UserManagementComponent,
        ExportFileComponent,
        FooterComponent
    },
    data(){
        return {
            datacollection: {},
            currentTab: 'traffic',
            activeNav: 0,
            tabs: [MenuChartComponent, StatisticsComponent, UserManagementComponent, ExportFileComponent],
            currentComponent: MenuChartComponent
        }
    },
    async created(){
        
    },
    methods: {
        addActiveClass(value){
            this.activeNav = value
            this.currentComponent = this.tabs[value]
        }
    }
}
</script>


<style>
div.secondary-menu{
    width: 80%;
    margin: 0 auto;
    margin-top: 7em;
}

.garnet{
    border: 2px solid #781C2E !important;
}

a.first{
    background-color: #3B5998 !important;
}

a.second{
    background-color: #38A1F3 !important;
}

</style>
