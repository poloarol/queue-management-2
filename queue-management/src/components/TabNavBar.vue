<template>
    <div class="container">
       <div class="ui large tabular menu tab-menu">
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

div.tab-menu{
    width: 70%;
    margin: 5em !important;
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
