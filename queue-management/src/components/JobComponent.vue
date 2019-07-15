<template>
  <TableComponent :visibleJob="visibleJob"></TableComponent>
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
import TableComponent from './TableComponent'

export default {
  name: 'JobComponent',
  components: {
    TableComponent
  },
  data(){
    return {
      jobs: [],
      error: '',
      visibleJob: [],
      currentPage: 0,
      numPage: 15,
    }
  },
  async created(){
    try{
      this.jobs = await JobServices.getJobs()
      this.updateVisibleJobs()
    }catch(err){
      this.error = err.message
    }
  },
  async updated() {
    try{
      this.jobs = await JobServices.getJobs()
      this.updateVisibleJobs()
    }catch(err){
      return err.message
    }
  },
  methods: {
    async updatePage(value){
      this.currentPage = value
      this.updateVisibleJobs()
    },
    updateVisibleJobs(){
       this.visibleJob = this.jobs.slice(this.currentPage * this.numPage, [this.currentPage * this.numPage] + this.numPage)

      // if 0 visible page go back 1 page
      if(this.visibleJob.length === 0 && this.currentPage > 0){
        this.updatePage(this.currentPage - 1)
      }
    }
  }
}

</script>
