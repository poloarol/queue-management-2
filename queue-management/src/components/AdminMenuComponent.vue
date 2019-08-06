<template>
    <div class="container">
        <MenuComponent></MenuComponent>
        <AdminNavBarComponent :tabs="tabs" :current="currentComponent"
                              :activeNav="activeNav" @swapComponent="current=$event">
        </AdminNavBarComponent>
        <component :is="swapComponent" :chartData="datacollection"></component>
        <!-- <FooterComponent></FooterComponent> -->
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
import MainAdminUpdateComponent from './MainAdminUpdateComponent'

export default {
    name: 'AdminMenuComponent',
    props: ['currentComponent'],
    components: {
        MenuComponent,
        MenuChartComponent,
        StatisticsComponent,
        UserManagementComponent,
        ExportFileComponent,
        FooterComponent,
        AdminNavBarComponent,
        MainAdminUpdateComponent
    },
    data(){
        return {
            activeNav: 0,
            datacollection: {},
            tabs: [MenuChartComponent, StatisticsComponent, MainAdminUpdateComponent, UserManagementComponent, ExportFileComponent],
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
