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

/*

AdminNavBarComponent, provides information on the secondary nav-bar in the admin panel.
Provides an interface to update the AdminMenuComponent when chosen / active i.e. 
showing the active component at the moment.

*/

export default {
    name: 'AdminNavBarComponent',
    props: ['tabs', 'current', 'activeNav'],
    data() {
        return {
            items: [],
            items_fr: FR.getNavBar(),
            items_en: EN.getNavBar(),
            tabular: this.tabs,
            component: this.current,
            active: this.activeNav
        }
    },
    created(){
        this.getText()
    },
    updated(){
        this.getText()
    },
    methods: {
        addActiveClass(value){
            this.active = value
        },
        swap(){
            this.component = this.tabular[this.active]
            this.$emit("swapComponent", this.component)
        },
        getText(){
            this.items = this.language === 'en' ? this.items_en : this.items_fr
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