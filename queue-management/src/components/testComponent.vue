<template>
    <ChartComponent :chartData="datacollection"></ChartComponent>
</template>

<script>
import ChartComponent from './ChartComponent'
export default {
    name: 'testComponent',
    components: {
        ChartComponent
    },
    data(){
       return {
           datacollection: null
       }
    },
    mounted(){
        this.fillData()
    },
    methods: {
        fillData(){
            this.datacollection = {
                labels: ['Art | Arts', 'Droit " Law', 'Genie | Engineering', 'Éducation | Education', 'Science de la Santé | Health Sciences', 'Telfer', 'Médécine | Medicine', 'Science', 'Science Sociale | Social Sciences'],
                datasets: {
                    label: '# of visits per faculty',
                    backgroundColor: ['white', '#CB4154', 'orange', '#4682b4 ', '#8db600', '#781C2E', 'purple', 'yellow', '#40E0D0'],
                    data: [10, 20, 25, 15, 5, 8, 9, 6]
                }
            }
        }
    }
}
</script>

