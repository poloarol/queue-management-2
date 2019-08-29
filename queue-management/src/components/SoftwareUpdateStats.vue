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
                        :options='langs'
                        :searchable='true'
                        :close-on-select='true'
                        label='value'
                        :allow-empty='true'
                        track-by='value'
                        @select="selectLang"
                    ></multiselect>
                </div>
                <div class="field">
                    <label class="ui teal basic label">
                        <i class="large teal university icon"></i> {{ labels[2] }}
                    </label>
                    <multiselect
                        v-model="academic"
                        :options='faculty'
                        :searchable='true'
                        :close-on-select='true'
                        label='value'
                        :allow-empty='true'
                        track-by='value'
                        @select="selectFaq"
                    ></multiselect>
                </div>
                <div class="field">
                    <label class="ui violet basic label">
                        <i class="large violet users icon"></i> {{ labels[1] }}
                    </label>
                    <multiselect
                        v-model='role'
                        :options='status'
                        :searchable='true'
                        :close-on-select='true'
                        label='value'
                        :allow-empty='true'
                        track-by='value'
                        @select="selectRole"
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
    props: ['software', 'labels', 'langs', 'status', 'faculty', 'left', 'middle', 'right'],
    components: {},
    data(){
        return {
            lang: '',
            academic: '',
            role: '',
            lefts: this.left,
            mid: this.middle,
            rights: this.right
        }
    },
    created(){

    },
    updated(){

    },
    methods: {
        selectLang(option){
            this.lefts = option.id
            this.$emit('getLang', this.lefts)
        },
        selectFaq(option){
            this.mid = option.id
            this.$emit('getFaculty', this.mid)
        },
        selectRole(option){
            this.rights = option.id
            this.$emit('getRole', this.rights)
        }
    }
}
</script>