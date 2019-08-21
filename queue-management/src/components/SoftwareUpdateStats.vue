<template>
    <div class="container">
        <div class="ui raised form software-dropdown">
            <div class="three fields">
                <div class="field">
                    <label class="ui orange basic label">
                        <i class="large orange language icon"></i> {{ labels[0] }}
                    </label>
                    <multiselect
                        v-model="lang"
                        :options='languages'
                        :searchable='true'
                        :close-on-select='true'
                        label='value'
                        :allow-empty='true'
                        track-by='value'
                    ></multiselect>
                </div>
                <div class="field">
                    <label class="ui teal basic label">
                        <i class="large teal hdd icon"></i> {{ labels[1] }}
                    </label>
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
                    <label class="ui violet basic label">
                        <i class="large violet university icon"></i> {{ labels[2] }}
                    </label>
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

/**
 * 
 * 3 Dropdown menus, which show information about the various languages,
 * educational, software and faculties.
 * 
 */

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
            language_en: EN.getLang(),
            software_en: EN.getPlatform(),
            software_fr: FR.getPlatform(),
            faculty_en: EN.getFaculty(),
            language_fr: FR.getLang(),
            faculty_fr: FR.getFaculty(),
            labels_en: ['Language', 'Platform', 'Faculty'],
            labels_fr: ['Langage', 'Platforme', 'Faculté'],
            labels: [],
            languages: [],
            software: [],
            faculty: []
        }
    },
    created(){
        this.getText()
    },
    updated(){
        this.getText()
    },
    methods: {
        getText(){
            this.languages = this.language === 'en' ? this.language_en : this.language_fr
            this.software = this.language === 'en' ? this.software_en : this.software_fr
            this.labels = this.language === 'en' ? this.labels_en : this.labels_fr
            this.faculty = this.language === 'en' ? this.faculty_en : this.faculty_fr
        }
    }

}
</script>