<template>
    <div class="container container-form">
        <div class="ui positive raised floating icon message">
            <i class="registered outline icon"></i>
            <div class="content">
                <div class="header"> {{ form_labels[0].header }} </div>
                <p>{{ form_labels[0].message }}</p>
            </div>
        </div>
        <form action="" class="ui equal width raised form attached fluid segment">
            <div class="ui info icon message">
                <i class="info circle icon"></i>
                <div class="content">
                    <div class="header">{{ form_labels[1].header }}</div>
                    <p>
                        <b>{{ form_labels[1].bold }}:</b> {{form_labels[1].message }}
                    </p>
                </div>
            </div>
            <div class="field">
                <h4 class="ui dividing header">{{ form_labels[2].header }}</h4>
                <div class="field">
                    <div class="fields">
                        <div class="field" v-for="(datum, index) in form_labels[2].personel" :key="index">
                            <label>{{ datum.label }}</label>
                            <input :type="datum.type">
                        </div>
                    </div>
                </div>
                <div class="field">
                    <div class="fields">
                        <div class="field" v-for="(datum, index) in form_labels[2].faculty" :key="index">
                            <label>{{ datum.label }}</label>
                            <multiselect
                                :options="datum.data"
                                :searchable="true"
                                track-by="id"
                                label="value"
                                :allows-empty="false"
                            >
                            </multiselect>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <h4 class="ui dividing header">{{ form_labels[3].header }}</h4>
                    <div class="fields">
                        <div class="field" v-for="(datum, index) in form_labels[3].platform" :key="index">
                            <label>{{ datum.label }}</label>
                            <multiselect
                                :options="datum.data"
                                :searchable="true"
                                track-by="id"
                                label="value"
                                :allows-empty="false"
                            >
                            </multiselect>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <div class="ui checkbox">
                        <input type="checkbox">
                        <label>{{ form_labels[4].contact }}</label>
                    </div>
                </div>
                <div class="field">
                    <div class="ui primary large button" tabindex="0">{{ form_labels[5].submit }}</div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import EN from '../../services/en/text.js'
import FR from '../../services/fr/text.js'

export default {
    name: 'FormComponent',
    data(){
        form_labels: []
        models: this.getModels()
    },
    created(){
        this.getText()
    },
    updated(){
        this.getText()
    },
    methods: {
        getText(){
            this.form_labels = EN.getFormLabels()
        },
        getModels(){
            return [
                {
                    personel: [
                        {firstname: ''},
                        {lastname: ''},
                        {email: ''}
                    ]
                },
                {
                    faculty: [
                        {faculty: ''},
                        {role: ''},
                        {language: ''}
                    ]
                },
                {
                    platform: [
                        {topics: []},
                        {sub_topics: []}
                    ]
                }
            ]
        }
    }
}
</script>

<style>
    div.container-form{
        width: 80% !important;
        margin: 0 auto;
        position: relative;
        top: 5em;
        text-align: initial;
    }
</style>