<template>
    <div class="container">
        <TableComponent :headers='headers' class="table-comp1"></TableComponent>
        <SideNavBar :values='manager' :side='activeDB' @updateDB='activeDB=$event' class="side-bar"></SideNavBar>
    </div>
</template>

<style>
    div.table-comp1{
        display: -moz-inline-grid;
        margin: 0 auto;
        margin-top: 2em;
        padding-left: 10em;
    }
</style>

<script>
import EN from '../../services/en/text'
import FR from '../../services/fr/text'

import SideNavBar from './SideNavBar.vue'
import TableComponent from './TableComponent.vue'

export default {
    name: 'ManagementComponent',
    props: {

    },
    components:{
        SideNavBar,
        TableComponent
    },
    data(){
        return {
            manager: EN.manageDB(),
            activeDB: 0,
            headers: [{id: 1, name:'Name | Nom'}, {id:2, name: 'Add-Delete | Ajouter-Supprimer'}]
        }
    },
    created(){
       
    },
    computed: {
        updateDB(){
            return this.activeDB
        }
    }
}
</script>
