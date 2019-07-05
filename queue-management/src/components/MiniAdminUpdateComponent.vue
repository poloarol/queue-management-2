<template>
    <div class="container">
        <MenuComponent></MenuComponent>
        <MiniUpdateComponent></MiniUpdateComponent>
        <FooterComponent></FooterComponent>
    </div>
</template>


<script>
import MenuComponent from './MenuComponent.vue'
import MiniUpdateComponent from './MiniUpdateComponent.vue'
import FooterComponent from './FooterComponent.vue'
export default {
    name: 'AdminComponent',
    components: {
        MenuComponent,
        MiniUpdateComponent,
        FooterComponent
    }
}
</script>
