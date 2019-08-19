<template>
    <div class="container">
       <div class="ui massive fluid twelve item menu top-menu">
           <a class="item" 
                v-for="value in values" 
                :key="value.id"
                @click="modifyTopVal(value.id)"
                :class="{active: value.id === topVal}"
            >
                {{ value.value }}
            </a>
       </div>
    </div>
</template>

<style>

div.top-menu{
    width: 80% !important;
}

</style>

<script>

export default {
    name: 'TabNavBar',
    props: ['values', 'top'],
    data(){
        return {
           topVal: this.top
        }
    },
    created(){
        
    },
    methods: {
        modifyTopVal(val){
            this.topVal = val
            this.$emit('updateTop', this.topVal)
        }
    }
}

</script>
