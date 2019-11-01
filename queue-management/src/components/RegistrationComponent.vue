<template>
    <div class="container">
        <MenuComponent></MenuComponent>
        <FormComponent></FormComponent>
        <!-- <FooterComponent></FooterComponent> -->
    </div>
</template>
<script>

import MenuComponent from './MenuComponent.vue'
import FormComponent from './FormComponent.vue'
import FooterComponent from './FooterComponent.vue'

export default {
    name: 'RegistrationComponent',
    components: {
        MenuComponent,
        FormComponent,
        FooterComponent
    }
}

</script>
