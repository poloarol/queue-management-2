<template>
  <div class="container">
    <TableComponent :headers="headers" :jobs="jobs"></TableComponent>
  </div>
</template>

<style>

</style>


<script>
import FilterJobs from '../../services/api/FilterJobs'

import TableComponent from './TableComponent'

export default {
  name: 'JobComponent',
  components: {
    TableComponent
  },
  data(){
    return {
      jobs: [],
      headers: [{'id': 1, 'name': 'Station'}, {'id': 2,'name': 'Name'}, {'id': 3, 'name': 'Faculty'}]
    }
  },
  async created(){
    try{
      this.jobs = await FilterJobs.getJobComp()
    }catch(err){
      this.error = err.message
    }
  },
  async updated() {
    try{
      this.jobs = await FilterJobs.getJobComp()
    }catch(err){
      return err.message
    }
  }
}

</script>
