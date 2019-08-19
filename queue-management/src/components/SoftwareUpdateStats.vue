<template>
    <div class="container">
        <div class="ui raised form software-dropdown">
            <div class="three fields">
                <div class="field">
                    <label>Language | Langage</label>
                    <multiselect
                        v-model="lang"
                        :options='language'
                        :searchable='true'
                        :close-on-select='true'
                        label='value'
                        :allow-empty='true'
                        track-by='value'
                    ></multiselect>
                </div>
                <div class="field">
                    <label>Platform | Platforme</label>
                    <multiselect
                        v-model='platform'
                        :options='software'
                        :searchable='true'
                        :close-on-select='true'
                        label='value'
                        :allow-empty='true'
                        track-by='value'
                    ></multiselect>
                </div>
                <div class="field">
                    <label>Faculty | Faculté</label>
                    <multiselect
                        v-model="academic"
                        :options='faculty'
                        :searchable='true'
                        :close-on-select='true'
                        label='value'
                        :allow-empty='true'
                        track-by='value'
                    ></multiselect>
                </div>
            </div>
        </div>
    </div>    
</template>

<style>

div.software-dropdown{
    width: 70%;
    margin: 0 auto;
    top: 2.5em;
}

</style>

<script>

import EN from '../../services/en/text'
import FR from '../../services/fr/text'

export default {
    name: 'SoftwareUpdateStats',
    props: '',
    components: {},
    data(){
        return {
            lang: '',
            platform: '',
            academic: '',
            language: EN.getLang(),
            software: EN.getPlatform(),
            faculty: EN.getFaculty()
        }
    },
    created(){

    },
    updated(){

    }
}
</script>