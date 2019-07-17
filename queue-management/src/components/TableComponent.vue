<template>
    <div class="container container-table">
        <table class="ui purple fixed large table">
            <thead>
                <tr>
                    <th v-for="(head, index) in headers" :key="index">{{ head.name }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(job, index) in jobs" :key="index">
                   <td v-for="(j, i) in job" :key="i">
                       <div v-if="['str', 'date', 'number'].includes(j.type)">
                           <i :class="j.icon"></i>
                            {{ j.name }}
                       </div>
                       <div v-else-if="j.type === 'dropdown'">
                           <p>Dropdown</p>
                       </div>
                       <div v-else-if="j.type.input === 'input'">
                           <input type='j.type.name'>
                       </div>
                       <div v-else-if="j.type === 'button'">
                           <button class="ui positive botton">j.name</button>
                       </div>
                       <div v-else-if="j.type.input === 'input-plus-button'">
                           <div class="container">
                               <div class="ui toggle checkbox">
                                   <input :type=j.type.name>
                                   <label></label>
                               </div>
                               <div class="ui positive button">
                                   <i :class="j.name"></i>
                                   {{ j.name }}
                               </div>
                           </div>
                       </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <PaginationComponent></PaginationComponent>
    </div>
</template>

<style>
    div.container-table{
        margin: 0 auto !important;
        width: 80% !important;
        margin-top: 10em !important;
    }
</style>


<script>
import PaginationComponent from './PaginationComponent'

export default {
    name: 'TableComponent',
    props: ['headers', 'jobs', 'perPage'],
    components: {
        PaginationComponent
    },
    data(){
        return {
            currentPage: 0,
            pages: 0,
            activeNav: 0,
            visible: []
        }
    },
    created(){
    },
    updated(){
    },
    methods:{

    }
}
</script>

