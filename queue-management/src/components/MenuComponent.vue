<template>
    <div class="ui massive top fixed menu">
        <router-link class="item" to='/'>
            <img src="../assets/logo.png" alt="uOttawa logo">
        </router-link>
        <div class="right menu">
            <div class="item">
                <multiselect
                    v-model='lang_value'
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
            lang_value: '',
            languages: [{id: 'en', name: 'FR'}, {id: 'fr', name: 'EN'}]
        }
    },
    created(){
        // console.log(this.lang)
    },
    updated(){
        // console.log(this.lang)
    },
    methods: {
        chooselang(option){
            // this.lang = option.id
        }
    }
}
</script>