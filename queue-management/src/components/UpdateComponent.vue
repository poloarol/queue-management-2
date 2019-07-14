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
                <tr v-for="(job, index) in visibleJob" v-bind:key='index'>
                    <td data-label="Name">
                        <i class="laptop icon"></i>
                        {{job.fname}}
                    </td>
                    <td data-label="Faculty">
                        <i class="university icon"></i>
                        {{job.ident}}
                    </td>
                    <td data-label="staff">
                        <v-select label="ident" :options="staff" :value="staff.id" @input="setSelected"></v-select>
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
            visibleJob: [],
            error: '',
            checkedJob: [],
            checked: false,
            personnel: '',
            currentPage: 0,
            numPage: 7
        }
    },
    async created(){
        try{
            this.jobs = await JobServices.getJobs()
            this.staff = await JobServices.getStaff()
            this.updateVisibleJobs()
        }catch(err){
            this.error = err.message
        }
    },
    methods: {
        async update(id){
            let staff_id = this.personnel
            await JobServices.updateJob(id, staff_id)
            this.jobs = await JobServices.getJobs()
            this.updateVisibleJobs()
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
        },
        setSelected(value){
            this.personnel = value.id
        },
        updatePage(value){
            this.currentPage = value
            this.updateVisibleJobs()
        },
        updateVisibleJobs(){
            this.visibleJob = this.jobs.slice(this.currentPage * this.numPage, [this.currentPage * this.numPage] + this.numPage)

            // if 0 visible page go back 1 page
            if(this.visible.length === 0 && this.currentPage > 0){
                this.updatePage(this.currentPage - 1)
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

