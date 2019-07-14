<template>
    <div class="container">
        <MenuComponent></MenuComponent>
        <AdminNavBarComponent :tabs="tabs" :current="currentComponent" :activeNav="activeNav" :swap="swapComponent"></AdminNavBarComponent>
        <component :is="currentComponent" :chartData="datacollection"></component>
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
import AdminNavBarComponent from './AdminNavBarComponent.vue'

export default {
    name: 'AdminMenuComponent',
    components: {
        MenuComponent,
        MenuChartComponent,
        StatisticsComponent,
        UserManagementComponent,
        ExportFileComponent,
        FooterComponent,
        AdminNavBarComponent
    },
    data(){
        return {
            activeNav: 0,
            datacollection: {},
            tabs: [MenuChartComponent, StatisticsComponent, UserManagementComponent, ExportFileComponent],
            currentComponent: MenuChartComponent
        }
    },
    methods: {
        swapComponent(){
            this.currentComponent = this.tabs[this.activeNav]
        }
    },
}
</script>
