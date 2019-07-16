<template>
  <div class="container"> {{ jobs }}</div>
</template>

<style>

</style>


<script>
import VueTable from 'vuetable-2'

import FilterJobs from '../../services/api/FilterJobs'

export default {
  name: 'JobComponent',
  components: {
    VueTable
  },
  data(){
    return {
      jobs: []
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
