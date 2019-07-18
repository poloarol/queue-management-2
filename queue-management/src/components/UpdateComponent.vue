<template>
    <div class="container">
        <TableComponent :headers="headers" :jobs="jobs" :perPage="perPage"></TableComponent>
    </div>
</template>


<script>
import TableComponent from './TableComponent'
import FilterJobs from '../../services/api/FilterJobs';

export default {
    name : 'UpdateComponent',
    components : {
        TableComponent
    },
    data() {
        return {
            jobs: [],
            headers: [{id: 1, 'name': 'Name | Nom'}, {'id': 2, 'name': 'Personnel'}, {'id': 3, 'name': 'Description'}, {'id': 3, 'name': 'In Queue'}],
            perPage: 7
        }
    },
    async created(){
        try{
            this.jobs = await FilterJobs.getAdminComp()
        }catch(err){
            this.error = err.message
        }
    },
    async updated(){
        try{
            this.jobs = await FilterJobs.getAdminComp()
        }catch(err){
            this.error = err.message
        }
    }
}

</script>

<style>

    div.ui.labeled.button{
        margin: 0 auto;
        margin-top: 2%;
    }

    div.btns{
        display: inline-block;
    }
</style>

