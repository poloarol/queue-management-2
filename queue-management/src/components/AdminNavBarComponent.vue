<template>
    <div class="container secondary-menu">
        <div class="ui fluid red large five item inverted menu">
            <a class="item"
                v-for="item in items"
                    :key="item.id"
                    @click="[addActiveClass(item.id), swap()]"
                    :class="item.id === active ? 'garnet' : 'blue'"
            >
            <i :class=item.icon></i>
            {{ item.title }}
            </a>
        </div>
    </div>
</template>


<script>
import EN from '../../services/en/text'
import FR from '../../services/fr/text'

export default {
    name: 'AdminNavBarComponent',
    props: ['tabs', 'current', 'activeNav'],
    data() {
        return {
            items: EN.getNavBar(),
            tabular: this.tabs,
            component: this.current,
            active: this.activeNav
        }
    },
    created(){
        
    },
    updated(){
       
    },
    methods: {
        addActiveClass(value){
            this.active = value
        },
        swap(){
            this.component = this.tabular[this.active]
            this.$emit("swapComponent", this.component)
        }
    }
}
</script>

<style>
div.secondary-menu{
    width: 80%;
    margin: 0 auto;
    margin-top: 7em;
}

.garnet{
    border: 2px solid purple !important;
}

a.blue{

}

</style>