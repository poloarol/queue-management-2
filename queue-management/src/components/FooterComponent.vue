<template>
    <div class="ui inverted vertical footer segment" id="foot">
        <div class="ui center aligned container">
            <img src="../assets/logo.png" class="ui centered mini image" alt="uOttawa logo">
            <!-- <img src="../assets/logo.png" class="ui centered mini image" alt="uOttawa logo"> -->
            <div class="ui horizontal inverted small divided link list">
                <a class="item"
                    v-for="item in items"
                    :key="item.id"
                    :href="'//' + item.value"
                    target="_blank"
                >
                {{ item.title }}
                </a>
            </div>
        </div>
    </div>
</template>

<style>
    div#foot{
        position: fixed;
        bottom: 0;
        width: 100%;
    }

</style>

<script>
import EN from '../../services/en/text'
import FR from '../../services/fr/text'

export default {
    data() {
        return {
            items: EN.getFooter()
        }
    },
    created() {
        // this.items = StaticData.getFooter()
    },
}
</script>

