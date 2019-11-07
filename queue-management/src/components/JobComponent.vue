<template>
  <div class="container">
    <div class="container container-welcome">
      <div class="ui attached info message">
        <h1 class="ui header">Bienvenue au Laboratoire Techono-Pedagogique | Welcome to the TechnoPedagogic Laboratory</h1>
      </div>
      <div class="ui bottom attached warning message">
        <h1 class="ui large header">Prenez une place et enregistrer pour obtenir de l'aide</h1>
        <br>
        <h1 class="ui large header">Take a seat and register to get help</h1>
      </div>
    </div>
    <TableComponent :headers="headers" :jobs="jobs" :perPage="perPage" :currentPage="cur" class="table-comp-2"></TableComponent>
  </div>
</template>

<style>

div.table-comp-2{
  margin: 0 auto;
  margin-top: 4.5em;
}

div.container-welcome{
  width: 80%;
  margin: 0 auto;
  margin-top: 8.5em;
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
      // headers_fr: [{'id': 1, 'name': 'Poste de travail'}, {'id': 2,'name': 'Nom'}, {'id': 3, 'name': 'Logiciel'}],
      // headers_en: [{'id': 1, 'name': 'Work station'}, {'id': 2,'name': 'Name'}, {'id': 3, 'name': 'Software'}],
      perPage: 10,
      cur: 0
    }
  },
  async created(){
    try{
      // this.getText()
      this.jobs = await FilterJobs.getJobComp()
    }catch(err){
      this.error = err.message
    }
  },
  async updated() {
    try{
      // this.getText()
      this.jobs = await FilterJobs.getJobComp()
    }catch(err){
      return err.message
    }
  },
  methods: {
      // getText(){
      //   this.headers = this.language === 'en' ? this.headers_en : this.headers_fr
      // }
  }
}

</script>
