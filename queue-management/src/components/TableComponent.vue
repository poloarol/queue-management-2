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
                    </td>
                </tr>
            </tbody>
        </table>
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

export default {
    name: 'TableComponent',
    props: ['headers', 'jobs'],
    components: {
    },
    data(){
        return {
            data: {}
        }
    },
    create(){
        console.log(this.jobs)
    }
}
</script>

