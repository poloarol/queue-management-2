<template>
    <div class="container">
        <MenuComponent></MenuComponent>
        <div class="container">
            <div class="ui icon message">
                <i class="spinner circle loading icon"></i>
                <div class="content">
                    <div class="header">Just one second</div>
                </div>
                <p>A member of our staff would be with you shortly, as indicated by waitlist ahead.</p>
            </div>
        </div>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>

import MenuComponent from './MenuComponent'
import FooterComponent from './FooterComponent'

export default {
    name: 'ConfirmationComponent',
    components: {
        MenuComponent,
        FooterComponent
    }
}
</script>