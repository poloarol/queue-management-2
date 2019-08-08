<template>
    <div class="container">

    </div>
</template>

<style>
    div.vertical-menu{
        margin-top: 15em !important;
    }
</style>



<script>
import StaticData from '../../services/api/StaticData'

export default {
    name: 'UserManagementComponent',
    props: {

    },
    data(){
        return {
            bars: [],
            activeBar: 0
        }
    },
    created(){
        this.activeBar = 0
        this.bars = StaticData.manageDB()
    },
    updated(){
        this.bars = StaticData.manageDB()
    },
    methods: {
        addActiveBar(value){
            this.activeBar = value
        }
    }
}
</script>
