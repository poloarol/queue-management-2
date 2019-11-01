<template>
    <div class="container">
        <TableComponent :headers="headers" :jobs="jobs" :perPage="perPage" :currentPage="cur" class="table-comp" @getParams="staff=$event"></TableComponent>
    </div>
</template>


<script>
import TableComponent from './TableComponent'
import FilterJobs from '../../services/api/FilterJobs'

export default {
    name : 'UpdateComponent',
    components : {
        TableComponent
    },
    data() {
        return {
            jobs: [],
            headers: [],
            headers_en: [{id: 1, 'name': 'Name'}, {'id': 2, 'name': 'Personnel'}, {'id': 3, 'name': 'Subject Discussed'}, {'id': 3, 'name': 'In Queue'}],
            headers_fr: [{id: 1, 'name': 'Nom'}, {'id': 2, 'name': 'Personnel'}, {'id': 3, 'name': 'Subjet abordés'}, {'id': 3, 'name': "File d'attente"}],
            perPage: 8,
            cur: 0,
            staff: {}
        }
    },
    async created(){
        try{
            this.jobs = await FilterJobs.getAdminComp()
        }catch(err){
            this.error = err.message
        }
        this.getText()
    },
    async updated(){
        try{
            this.jobs = await FilterJobs.getAdminComp()
        }catch(err){
            this.error = err.message
        }
        this.getText()
    },
    computed: {
        getParams(){
            return this.staff
        }
    },
    methods: {
        getText(){
            this.headers = this.language === 'en' ? this.headers_en : this.headers_fr
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
        display: inline-flexbox;
    }

    div.table-comp{
        margin-top: 8em !important;
        margin: 0 auto;
    }
</style>

