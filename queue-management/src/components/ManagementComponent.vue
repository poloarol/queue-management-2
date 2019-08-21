<template>
    <div class="container">
        <TableComponent :headers='headers' class="table-comp1"></TableComponent>
        <SideNavBar :values='manager' :side='activeDB' @updateDB='activeDB=$event' class="manage-side-bar"></SideNavBar>
    </div>
</template>

<style>
    div.table-comp1{
        display: -moz-inline-grid;
        margin: 0 auto;
        margin-top: 2em;
        padding-left: 10em;
    }

    div.manage-side-bar{
        position: relative;
        top: 10em;
    }
</style>

<script>
/**
 * 
 * This component allows the management of the DB i.e. users, platforms
 * and faculties. Here the Admin can update who has access to lab resources
 * and many more.
 * 
 */


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
            manager: [],
            manager_fr: FR.manageDB(),
            manager_en: EN.manageDB(),
            activeDB: 0,
            headers: [],
            headers_fr: [{id: 1, name:'Nom'}, {id:2, name: 'Ajouter-Supprimer'}],
            headers_en: [{id: 1, name:'Name'}, {id:2, name: 'Add-Delete'}]
        }
    },
    created(){
        this.getText()
    },
    upated(){
        this.getText()
    },
    methods: {
        getText(){
            this.manager = this.language === 'en' ? this.manager_en : this.manager_fr
            this.headers = this.language === 'en' ? this.headers_en : this.headers_fr
        }
    },
    computed: {
        updateDB(){
            return this.activeDB
        }
    }
}
</script>
