<template>
    <div class="ui inverted vertical footer segment" id="foot">
        <div class="ui center aligned container">
            <img src="../assets/uottawa_ver.png" class="ui centered tiny image" alt="uOttawa logo">
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

/**
 * 
 * FooterComponent provides links and text for the footer.
 * 
 */


import EN from '../../services/en/text'
import FR from '../../services/fr/text'

export default {
    data() {
        return {
            items: [],
            items_en: EN.getFooter(),
            items_fr: FR.getFooter()
        }
    },
    created() {
        this.getText()
    },
    updated(){
        this.getText()
    },
    methods: {
        getText(){
            this.items = this.language === 'en' ? this.items_en : this.items_fr
        }
    }
}
</script>

