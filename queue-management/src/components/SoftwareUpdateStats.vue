<template>
    <div class="container">
        <div class="ui raised form software-dropdown">
            <div class="three fields">
                <div class="field">
                    <label>{{ labels[0] }}</label>
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
                    <label>{{ labels[1] }}</label>
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
                    <label>{{ labels[2] }}</label>
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
            faculty: EN.getFaculty(),
            labels: ['Language', 'Platform', 'Faculty']
        }
    },
    created(){

    },
    updated(){
        // this.labels: ['Langage', 'Platform', 'Faculté'] when global languange variable toggles between en and fr
    }
}
</script>