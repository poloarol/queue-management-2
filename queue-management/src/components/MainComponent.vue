<template>
    <div class="container">
        <MenuComponent></MenuComponent>
        <JobComponent></JobComponent>
        <!-- <FooterComponent></FooterComponent> -->
    </div>
</template>

<script>
import MenuComponent from './MenuComponent.vue'
import JobComponent from './JobComponent.vue'
import FooterComponent from './FooterComponent.vue'

export default{
    name: 'MainComponent',
    components: {
        MenuComponent,
        JobComponent,
        FooterComponent
    }
}

</script>
