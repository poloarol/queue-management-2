<template>
    <div class="ui massive top fixed menu">
        <router-link class="item" to='/'>
            <img src="../assets/logo.png" alt="uOttawa logo">
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
                <a class="ui primary button" href="">FAQ</a>
            </div>
        </div>
    </div>
</template>

<script>
import EN from '../../services/en/text.js'
import FR from '../../services/fr/text.js'

export default {
    name: 'MenuComponent',
    data(){
        return {
            lang: '',
            languages: [{id: 'fr', name: 'FR'}, {id: 'en', name: 'EN'}]
        }
    },
    created(){
    },
    updated(){
        if(this.lang.id = 'fr')
            this.language = 'fr'
        else
            this.language = 'en'
    },
    methods: {
        chooselang(option){
            // this.lang = option.id
        }
    }
}
</script>