<template>
    <div class="ui massive top fixed menu">
        <router-link class="header item" to='/'>
            <img class="logo" src="../assets/uOttawa_HOR_BLACK.svg" alt="uOttawa logo">
        </router-link>
        <div class="right menu">
            <div class="item">
                <multiselect
                    v-model='lang'
                    :options='languages'
                    :close-on-select='true'
                    label='name'
                    :allow-empty='false'
                    @select='chooselang'
                ></multiselect>
            </div>
            <div class="item">
               <a
                target='_blank'
                class="ui primary button" 
                :href="'//' + link"
                >FAQ
            </a>
            </div>
        </div>
    </div>
</template>

<style>

img.logo{
    width: 8em !important;
}

</style>

<script>

/**
 * 
 * MenuComponent builds the primary navigation bar.
 * 
 */


import EN from '../../services/en/text.js'
import FR from '../../services/fr/text.js'

export default {
    name: 'MenuComponent',
    data(){
        return {
            lang: '',
            languages: [{id: 'fr', name: 'FR'}, {id: 'en', name: 'EN'}],
            link: '',
            link_en: 'brightspacecommunity.force.com/uottawa/s/',
            link_fr: 'brightspacecommunity.force.com/uottawafr/s/?language=fr_CA'
        }
    },
    created(){
        this.getText()
    },
    updated(){
        document.getElementsByTagName('html')[0].setAttribute('lang', this.lang.id)
    },
    methods: {
        chooselang(option){
            this.lang = option.id
        },
        getText(){
            this.link = this.language === 'en' ? this.link_en : this.link_fr
        }
    }
}
</script>