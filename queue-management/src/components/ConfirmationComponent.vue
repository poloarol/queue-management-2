<template>
    <div class="container">
        <MenuComponent></MenuComponent>
        <div class="ui massive positive message">
            <!-- <i class="spinner circle loading icon"></i> -->
            <div class="content">
                <div class="header"> Merci, vous étes actuellement dans la file d'attente, et quelqu'un sera avec vous sous peu. </div>
                <br>
                <div class="header"> Thank you, you have been added to the queue and someone will be with you shortly. </div>
            </div>
        </div>
        <FooterComponent></FooterComponent>
    </div>
</template>

<style>

div.ui.positive.message{
    width: 70%;
    margin: 0 auto;
    margin-top: 12.5em;
}

</style>

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