<template>
    <div class="container">
        <div class="ui secondary vertical menu vertical-menu">
            <a class="item" v-for="bar in bars" :key="bar.id">
                {{ bar.value }}
            </a>
        </div>
    </div>
</template>

<style>
    div.vertical-menu{
        
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
    }
}
</script>
