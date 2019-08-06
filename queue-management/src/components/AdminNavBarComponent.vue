<template>
    <div class="container secondary-menu">
        <div class="ui fluid large five item menu">
            <a class="item"
                v-for="item in items"
                    :key="item.id"
                    @click="[addActiveClass(item.id), swap()]"
                    :class="[item.id % 2 === 0 ? 'first' : 'second',
                            item.id === active ? 'garnet' : 'blue']"
            >
            <i :class=item.icon></i>
            {{ item.title }}
            </a>
        </div>
    </div>
</template>


<script>
import StaticData from '../../services/api/StaticData'

export default {
    name: 'AdminNavBarComponent',
    props: ['tabs', 'current', 'activeNav'],
    data() {
        return {
            items: [],
            tabular: this.tabs,
            component: this.current,
            active: this.activeNav
        }
    },
    created(){
        this.items = StaticData.getNavBar()
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
    border: 2px solid #781C2E !important;
}

a.first{
    background-color: #3B5998 !important;
}

a.second{
    background-color: #38A1F3 !important;
}

a.blue{

}

</style>