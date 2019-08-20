<template>
    <div class="container">
       <div class="ui grey twelve item inverted menu top-menu">
           <a class="item" 
                v-for="value in values" 
                :key="value.id"
                @click="modifyTopVal(value.id)"
                :class="{selected: value.id === topVal}"
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

.selected{
    border: 2px purple solid;
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
