<template>
    <div class="container">
        <div class="ui large tabular menu">
            <a class="item"
                v-for="item in items"
                :key="item.id"
                :class="{active : tab === item.id}"
                @click="change(item.id)"
            >
            {{ item.value }}
            </a>
        </div>
    </div>
</template>


<script>
export default {
    name : 'TabNavBar',
    props : ['values', 'current'],
    data(){
        return {
            items : this.values,
            tab: this.current
        }
    },
    created(){
        
    },
    methods: {
        change(value){
            this.$emit('addActiveMonth', this.tab)
        }
    }
}
</script>
