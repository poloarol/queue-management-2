<template>
    <div class="container">
        <MenuComponent></MenuComponent>
        <div class="container secondary-menu">
            <div class="ui fluid four item menu">
                <a class="item">Traffic</a>
                <a class="item">Statistics</a>
                <a class="item">DB Managment</a>
                <a class="item">Export Data</a>
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

