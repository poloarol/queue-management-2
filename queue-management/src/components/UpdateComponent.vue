<template>
    <div class="container">
        <table class="ui purple fixed table">
            <thead>
                <tr>
                    <th>Name | Nom</th>
                    <th>Faculty | Faculté</th>
                    <th>Personel</th>
                    <th>On Queue Currently | Sur la file d'attente</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(job, index) in jobs" v-bind:key='index'>
                    <td data-label="Name">{{job.lname}} {{job.fname}}</td>
                    <td data-label="Faculty">{{job.ident}}</td>
                    <td data-label="staff">
                        <v-select label="ident" :options="staff"  v-model='people'></v-select>
                    </td>
                    <td data-label="unsave" class="center aligned">
                        <div class="container btns">
                            <div class="ui left floated compact segment">
                                <div class="ui fitted checkbox">
                                    <input type="checkbox" @click="check(index)">
                                </div>
                            </div>
                            <div class="ui labeled button" tabindex="0">
                                <div class="ui large disabled button" :id="`${index}`" @click="update(job.id)">
                                    <i class="save icon"></i> Save
                                </div>
                            </div>
                        </div>
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
            staff: [],
            error: '',
            checkedJob: [],
            checked: false,
            people: ''
        }
    },
    async created(){
        try{
            this.jobs = await JobServices.getJobs()
            this.staff = await JobServices.getStaff()
            console.log(this.staff)
        }catch(err){
            this.error = err.message
        }
    },
    methods: {
        async update(id){
            await JobServices.updateJob(id)
            this.jobs = await JobServices.getJobs()
        },
        check(id){
            let btn = document.getElementById(`${id}`)
            if(btn.classList.contains('disabled')){
                btn.classList.remove('disabled')
                btn.classList.add('positive')
            }else{
                btn.classList.add('disabled')
                btn.classList.remove('positive')
            }
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

