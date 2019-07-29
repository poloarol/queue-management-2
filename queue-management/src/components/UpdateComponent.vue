<template>
    <div class="container">
        <TableComponent 
            :headers="headers" 
            :jobs="jobs" 
            :perPage="perPage"
            @getParams="currentStaffParams=$event"
        >
        </TableComponent>
    </div>
</template>


<script>
import TableComponent from './TableComponent'
import FilterJobs from '../../services/api/FilterJobs';
import JobServices from '../../services/api/JobServices'

export default {
    name : 'UpdateComponent',
    props : ['staffParams'],
    components : {
        TableComponent
    },
    data() {
        return {
            jobs: [],
            headers: [{id: 1, 'name': 'Name | Nom'}, {'id': 2, 'name': 'Personnel'}, {'id': 3, 'name': 'Description'}, {'id': 3, 'name': 'In Queue'}],
            perPage: 8,
            currentStaffParams: this.staffParams
        }
    },
    async created(){
        try{
            this.currentStaffParams = {'id': '', 'staff': ''}
            this.jobs = await FilterJobs.getAdminComp()
        }catch(err){
            this.error = err.message
        }
    },
    async updated(){
        try{
            // this.JobServices.updateJob(this.params.id, this.params.staff)
            this.jobs = await FilterJobs.getAdminComp()
            // console.log(this.currentStaffParams)
        }catch(err){
            this.error = err.message
        }
    },
    computed: {
        getParams(){
            return this.currentStaffParams
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

