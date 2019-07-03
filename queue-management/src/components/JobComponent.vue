<template>
  <table class="ui purple table">
    <thead>
      <tr>
        <th>Name | Nom</th>
        <th>Faculty | Faculté</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="job in jobs" v-bind:key="job.id">
        <td data-label="Name"> 
          <i class="user icon"></i>
          {{ job.name }} 
        </td>
        <td data-label="Faculty">{{job.names}}</td>
      </tr>
    </tbody>
  </table>
</template>

<style>
  .ui.table{
    width: 80% !important;
    margin: 0 auto !important;
    margin-top: 7% !important;
  }
</style>


<script>
import JobServices from '../../services/api/JobServices'

export default {
  name: 'JobComponent',
  data(){
    return {
      jobs: [],
      error: ''
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
    async updateJob(id){
      await JobServices.updateJob(id)
      this.jobs = await JobServices.getJobs()
    }
  }
}

</script>
