<template>
    <div class="container container-pagination">
        <button 
            class="ui labeled icon button"
            @click="navigateBack"
        >
            <i class="chevron left icon"></i>
            Prev
        </button>
        <div class="ui pagination menu">
            <a class="item" 
                v-for="(page, index) in pages" 
                :key="index"
                @click="navigate(index)" 
                :class="{active : activeNav === index}"
            >
                {{ page }}
            </a>
        </div>
        <button class="ui right labeled icon button"
            @click="navigateForward"
        >
            <i class="chevron right icon"></i>
            Next
        </button>
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
export default {
    name: 'PaginationComponent',
    props: ["pages"],
    data(){
        return {
            activeNav: 0,
            current: this.visible
        }
    },
    created(){
        console.log(this.pages)
    },
    updated() {
        // don't know why but printing it allows it to work 
        // so it stays. # theBugBecameAFuture
        console.log(this.pages)
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
        }
    }
}
</script>

