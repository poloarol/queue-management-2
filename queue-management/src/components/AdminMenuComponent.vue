<template>
    <div class="container">
        <MenuComponent></MenuComponent>
        <AdminNavBarComponent :tabs="tabs" :current="currentComponent"
                              :activeNav="activeNav" @swapComponent="current=$event">
        </AdminNavBarComponent>
        <component :is="swapComponent" :chartData="datacollection"></component>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>
import MenuComponent from './MenuComponent.vue'
import FooterComponent from './FooterComponent.vue'
import MenuChartComponent from './MenuChartComponent.vue'
import StatisticsComponent from './StatisticsComponent.vue'
import ManagementComponent from './ManagementComponent.vue'
import ExportFileComponent from './ExportFileComponent.vue'
import AdminNavBarComponent from './AdminNavBarComponent.vue'
import AdminMainQueue from './AdminMainQueue.vue'

export default {
    name: 'AdminMenuComponent',
    props: ['currentComponent'],
    components: {
        MenuComponent,
        MenuChartComponent,
        StatisticsComponent,
        ManagementComponent,
        ExportFileComponent,
        FooterComponent,
        AdminNavBarComponent,
        AdminMainQueue
    },
    data(){
        return {
            activeNav: 0,
            datacollection: {},
            tabs: [MenuChartComponent, StatisticsComponent, AdminMainQueue, ManagementComponent, ExportFileComponent],
            current: this.currentComponent
        }
    },
    created(){
        this.current = this.tabs[this.activeNav]
    },
    computed: {
        swapComponent(){
            return this.current
        }
    }
}
</script>
