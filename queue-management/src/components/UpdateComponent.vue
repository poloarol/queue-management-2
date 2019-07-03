<template>
    <div class="container">
        <table class="ui purple table">
            <thead>
                <tr>
                    <th>Name | Nom</th>
                    <th>Faculty | Faculté</th>
                    <th>On Queue Currently | Sur la file d'attente</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="job in jobs" v-bind:key='job.id'>
                    <td data-label="Name">{{job.name}}</td>
                    <td data-label="Faculty">{{job.names}}</td>
                    <td data-label="unsave">
                        <input class="ui checkbox" type="checkbox" @click="update(job.id)">
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
import JobServices from '../../services/api/JobServices'

export default {
    name : 'UpdateComponent',
    data() {
        return {
            jobs: [],
            error: '',
            checkedJob: []
        }
    },
    async created(){
        try{
            this.jobs = await JobServices.getJobs()
        }catch(err){
            this.error = err.message
        }
    },
    methods: {
        async update(id){
            await JobServices.updateJob(id)
            this.jobs = await JobServices.getJobs()
        }
    }
}

</script>
