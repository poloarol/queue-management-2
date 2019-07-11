<template>
    <div class="container">
        <MenuComponent></MenuComponent>
        <div class="container secondary-menu">
            <div class="ui fluid inverted large four item menu">
                <a class="item active" :href="'/admin/traffic/:month/:day'">
                    <i class="tachometer alternate icon"></i>
                    Traffic
                </a>
                <a class="item" :href="'/admin/statistics'">
                    <i class="chart bar outline icon"></i>
                    Statistics
                </a>
                <a class="item" :href="'/admin/db'">
                    <i class="users icon"></i>
                    User Management
                </a>
                <a class="item" :href="'/admin/export'">
                    <i class="file excel icon"></i>
                    Export
                </a>
            </div>
        </div>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>
import MenuComponent from './MenuComponent.vue'
import FooterComponent from './FooterComponent.vue'

export default {
    name: 'AdminMenuComponent',
    components: {
        MenuComponent,
        FooterComponent
    }
}
</script>


<style>
div.secondary-menu{
    width: 80%;
    margin: 0 auto;
    margin-top: 7em;
}
</style>

