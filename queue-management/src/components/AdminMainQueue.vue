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

export default{
    name: 'AdminMainQueue',
    props: [],
    components: {
        TableComponent
    },
    data(){
        return {
            headers: [{id: 1, name: 'Name'}, {id: 2, name: 'Description'}, {id:3, name: 'Comments'}, {id:4, name: 'In queue'}]
        }
    },
    created(){

    },
    updated(){
        // this.headers = [{id: 1, name: 'Nom'}, {id: 2, name: 'Description'}, {id:3, name: 'Commentaire'}, {id:4, name: "Sur la fil d'attente"}] 
    }
}

</script>