<template>
    <div class="container container-pagination">
        <button 
            class="ui labeled icon button"
            @click="[navigateBack(), move()]"
            :class="{disabled : activeNav === 0}">
            <i class="chevron left icon"></i>
            Previous
        </button>
        <div class="ui pagination menu">
            <a class="item" v-for="(page, index) in pages" 
                :key="index"
                @click="[navigate(index), move()]">
                {{ page }}
            </a>
        </div>
        <button class="ui right labeled icon button"
            @click="[navigateForward(), move()]"
            :class="{disabled : activeNav === (pages-1)}">
            <i class="chevron right icon"></i>
            Next
        </button>
        <!-- Bind class conditionally 'ui col circular label' -->
    </div>
</template>

<style>

    div.container-pagination{
        display: inline-flex;
    }

    div.ui.pagination.menu{
        margin: 0 0.5em 0 0.5em;
    }

</style>


<script>

/**
 * 
 * Works with the TableComponent, and allows navigation across the table.
 * 
 */


export default {
    name: 'PaginationComponent',
    props: ["pages", "currentPage"],
    data(){
        return {
            activeNav: 0,
            current: this.currentPage
        }
    },
    created(){
        // console.log(this.pages)
    },
    updated() {
        // don't know why but printing it allows it to work 
        // so it stays. # theBugBecameAFuture
        // console.log(this.pages)
        // console.log('--------------------------')
        // console.log(this.current)
    },
    methods: {
        navigate(value){
            this.activeNav = value
        },
        navigateBack(){
            if(this.activeNav > 0)
                this.activeNav--
            else
                this.activeNav = 0
        },
        navigateForward(){
            if(this.activeNav < (this.pages-1))
                this.activeNav++
            else
                this.activeNav = this.pages-1
        },
        move(){
            this.current = this.activeNav
            this.$emit("moveable", this.current)
        }
    }
}
</script>

