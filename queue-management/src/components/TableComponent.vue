<template>
    <div class="container container-table">
        <table class="ui purple fixed large table">
            <thead>
                <tr>
                    <th v-for="(head, index) in headers" :key="index">{{ head.name }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(job, index) in getPages" :key="index">
                   <td v-for="(j, i) in job" :key="i">
                       <div v-if="['str', 'date', 'number'].includes(j.type)">
                           <i :class="j.icon"></i>
                            {{ j.name }}
                       </div>
                           <!-- <v-select label="ident" :options=j.name @input="setSelected"></v-select> -->
                        <multiselect v-else-if="j.type === 'dropdown'" 
                                        v-model="setValue[index]" :options="j.name" 
                                        track-by="ID" label="IDENT" style="position: static !important;" @select="setSelected"></multiselect>
                       <div v-else-if="j.type.input === 'input'">
                           <input type='j.type.name'>
                       </div>
                       <div v-else-if="j.type === 'button'">
                           <button class="ui positive botton">j.name</button>
                       </div>
                       <div v-else-if="j.type === 'textbox'" class="field">
                           <div class="field">
                               <textarea cols="30" rows="2" v-model="textValue[index]"></textarea>
                           </div>
                       </div>
                       <div v-else-if="j.type.input === 'input-plus-button'">
                                <div class="ui disabled button" 
                                    :id="`b_${index}`"
                                    @click="parentEvent(j.event)">
                                   <i :class="j.name"></i>
                                   {{ j.name }}
                               </div>
                       </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <PaginationComponent :pages="pages" @moveable="current=$event"></PaginationComponent>
    </div>
</template>
 
<style>
    div.container-table{
        /* margin: 0 auto !important; */
        width: 70% !important;
        /* margin-top: 2.5em !important; */
    };

    /* .multiselect{
        position: static !important;
    }*/

    /* .multiselect__content-wrapper{
        width: 16.5% !important;
    } */

    
</style>


<script>
import PaginationComponent from './PaginationComponent'

export default {
    name: 'TableComponent',
    props: ['headers', 'jobs', 'perPage', 'currentPage'],
    components: {
        PaginationComponent
    },
    data(){
        return {
            current: this.currentPage,
            pages: [],
            activeNav: 0,
            visible: [],
            staff: 0,
            setValue: [],
            textValue: [],
            selected_staff: '',
            input_text: '',
            currentParams: this.currentStaffParams
        }
    },
    created(){
        this.current = 0
        this.setPages()
        this.currentParams = {'id': '', 'staff': ''}
    },
    updated(){
        this.setPages()
    },
    methods:{
        setPages(){
            this.pages = Math.ceil(this.jobs.length / this.perPage)
        },
        check(value){
            // let box = document.querySelector(`#p_${value}`)
            // if(box.checked){
            //     let btn = document.querySelector(`#b_${value}`)
            //     btn.classList.remove('disabled')
            //     btn.classList.add('positive')
            // }else{
            //     let btn = document.querySelector(`#b_${value}`)
            //     btn.classList.add('disabled')
            //     btn.classList.remove('positive')
            // }
            if(this.selected_staff){
                let btn = document.querySelector(`#p_{value}`)
                btn.classList.remove('disabled')
                btn.classList.add('positive')
            }else{
                let btn = document.querySelector(`#p_{value}`)
                btn.classList.remove('disabled')
                btn.classList.add('positive')
            }
        },
        parentEvent(value){
            this.currentParams.id = value
            this.currentParams.staff = this.staff
        },
        setSelectedStaff(value){
            this.selected_staff = value.id
        },
        setInputText(value){

        },
        parameters(){
            this.$emit('getParams', this.currentParams)
        }
    },
    computed: {
        moveable(){
            return this.current
        },
        getPages(){
            this.visible = this.jobs.slice(this.current * this.perPage, (this.current * this.perPage) + this.perPage)
            return this.visible
        }
    }
}
</script>

