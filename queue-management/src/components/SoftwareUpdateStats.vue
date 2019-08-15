<template>
    <div class="container">
        <div class="three fields">
            <div class="field">
                <multiselect></multiselect>
            </div>
            <div class="field">
                <multiselect></multiselect>
            </div>
            <div class="field">
                <multiselect></multiselect>
            </div>
        </div>
    </div>    
</template>

<script>

import StaticData from '../../services/api/StaticData'

export default {
    name: 'SoftwareUpdateStats',
    props: '',
    components: {},
    data(){
        return {
            lang: [],
            software: [],
            faculty: []
        }
    },
    created(){
        this.lang = StaticData.getLang()
        this.software = StaticData.getSoftware()
        this.faculty = StaticData.getFacultyColor()
    },
    updated(){

    }
}
</script>