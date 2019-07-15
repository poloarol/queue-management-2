<template>
    <div class="container">
      <table class="ui purple fixed table">
        <thead>
          <tr>
            <th>Name | Nom</th>
            <th>Faculty | Faculté</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="job in visibleJob" v-bind:key="job.id">
            <td data-label="Name"> 
              <i class="laptop icon"></i>
              {{job.fname}}
            </td>
            <td data-label="Faculty">
              <i :class="icon[0][job.identifier]"></i>
              {{job.ident}}
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
import StaticData from '../../services/api/StaticData'

export default {
    name: 'TableComponent',
    props: ['visibleJob'],
    data(){
        return {
            icon: []
        }
    },
    created(){
        this.icon = StaticData.getFacultyIcon()
    }
}
</script>
