<template>
    <div class="container">
       <TableComponent :headers='headers' class='table-comp-3'></TableComponent>
    </div>
</template>

<style>

div.table-comp-3{
    margin: 0 auto;
    margin-top: 2em;
}

</style>

<script>
import TableComponent from './TableComponent.vue'

/*
    This is the component shows the admin update panel.
    Here you can track users as they register and are helped 
    by the staff.
*/

export default{
    name: 'AdminMainQueue',
    props: [],
    components: {
        TableComponent
    },
    data(){
        return {
            headers: [],
            header_en: [{id: 1, name: 'Name'}, {id: 2, name: 'Description'}, {id:3, name: 'Comments'}, {id:4, name: 'In queue'}],
            header_fr: [{id: 1, name: 'Nom'}, {id: 2, name: 'Description'}, {id:3, name: 'Commentaires'}, {id:4, name: "Fil d'attente"}]
        }
    },
    created(){
        this.getText()
    },
    updated(){
        this.getText()
    },
    methods: {
        getText(){
            // Descriptors of table headers by language
            this.headers = this.language === 'en' ? this.header_en : this.header_fr
        }
    }
}

</script>