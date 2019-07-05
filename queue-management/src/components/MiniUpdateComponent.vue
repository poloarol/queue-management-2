<template>
    <div class="container ctn">
        <div class="ui form">
            <div class="ui icon info floating message">
                <i class="inbox icon"></i>
                <div class="content">
                    <div class="header">
                        Please for staff only | Seulement pour le personnel SVP
                    </div>
                    <p>One of our agents would be with you</p>
                    <p>Un de nos agents sera avec vous bientot</p>
                </div>
            </div>
            <div class="two fields">
                <div class="field">
                    <v-select label="value" :options="staffs" v-model='staff'></v-select>
                </div>
                <div class="field">
                    <button class="ui positive submit button" 
                        type="submit"
                    >
                    Submit
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    div.ctn{
        width: 80%;
        margin: 0 auto;
    }
</style>


<script>
export default {
    name: 'MiniUpdateComponent',
    data(){
        return{
            staff: '',
            staffs: [
                {
                    id : 1,
                    value: 'DM'
                },
                {
                    id: 2,
                    value: 'EC'
                },
                {
                    id : 3,
                    value: 'GL'
                },
                {
                    id: 4,
                    value: 'JP'
                },
                {
                    id: 5,
                    value: 'MB'
                },
                {
                    id: 6,
                    value: 'MP'
                },
                {
                    id: 7,
                    value: 'NV'
                },
                {
                    id: 8,
                    value: 'RR'
                },
                {
                    id: 9,
                    value: 'SL'
                },
                {
                    id: 10,
                    value: 'SV'
                },
                {
                    id: 11,
                    value: 'PW'
                }
            ]
        }
    }
}
</script>

