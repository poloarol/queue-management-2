<template>
  <div class="container">
    <div class="container-welcome">
      <div class="ui attached blue message">
        <h1 class="ui header">Bienvenue au Lab technopédagogique | Welcome to the Techno-Pedagogy Lab</h1>
      </div>
      <div class="ui bottom attached warning message">
        <h1 class="ui large header">SVP prenez une place et enregistrer vous pour obtenir de l'aide</h1>
        <br>
        <h1 class="ui large header">Please take a sit and register, to obtain help</h1>
      </div>
    </div>
    <TableComponent :headers="headers" :jobs="jobs" :perPage="perPage" :currentPage="cur"></TableComponent>
  </div>
</template>

<style>

/* div.table-comp-2{
  margin: 0 auto !important;
  margin-top: 2em !important;
} */

.container-welcome{
  width: 80%;
  margin: 0 auto;
  margin-top: 7em;
}

</style>


<script>
import FilterJobs from '../../services/api/FilterJobs'
import TableComponent from './TableComponent'

/**
 * 
 * JobComponent shows the work station at which participants have arrived the lab.
 * Automatically gets updated as users get assisted.
 * 
 */

export default {
  name: 'JobComponent',
  components: {
    TableComponent
  },
  data(){
    return {
      jobs: [],
      headers: [{'id': 1, 'name': 'Poste de travail | Work Station'}, {'id': 2,'name': 'Nom | Name'}, {'id': 3, 'name': 'Logiciel | Software'}],
      perPage: 10,
      cur: 0
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
