<template>
    <div class="container">
        <MenuComponent></MenuComponent>
        <UpdateComponent></UpdateComponent>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script> 
import MenuComponent from './MenuComponent.vue'
import UpdateComponent from './UpdateComponent.vue'
import FooterComponent from './FooterComponent.vue'

export default {
    name: 'AdminComponent',
    components: {
        MenuComponent,
        UpdateComponent,
        FooterComponent
    }
}

</script>

