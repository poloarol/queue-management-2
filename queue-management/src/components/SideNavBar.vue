<template>
    <div class="container">
        <div class="ui secondary vertical pointing menu point-menu">
            <a class="item" 
                v-for="value in values" 
                :key="value.id"
                @click="modifySideVal(value.id)"
                :class="{active: value.id === sideVal}"
            >
                {{ value.value }}
            </a>
        </div>
    </div>
</template>

<script>

/**
 * 
 * Side Navigation Bar.
 * 
 */

export default {
    name: 'SideNavBar',
    props: ['values', 'side'],
    data(){
        return {
            sideVal: this.side
        }
    },
    created(){
        
    },
    updated(){

    },
    methods: {
        modifySideVal(val){
            this.sideVal = val
            this.$emit('updateSide', this.sideVal)
        }
    }
}
</script>