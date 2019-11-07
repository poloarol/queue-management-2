<template>
    <div class="container form">
        <div class="container info-form">
            <div class="ui blue info icon large attached message info-message">
                <i class="info circle icon"></i>
                <div class="content">
                    <div class="header">
                        <b>Welcome to the Techno-Pedagogy Lab</b> 
                    </div>
                    <p class="perso-message">Complete this form to obtain personalized support</p>
                </div>
            </div>
            <form action="" class="ui form attached fluid segment">
                <h4 class="ui dividing header">Your Information</h4>
                <div class="four fields">
                    <div class="two wide field">
                        <label>Computer Station</label>
                        <multiselect v-model="selected_station" :options="station_info"  label="value" track-by="id" @select="selectStation" @remove="deselectStation"></multiselect>
                        
                    </div>
                    <div class="five wide field">
                        <label>First name</label>
                        <input type="text" v-model="f_name" v-validate="'required'" name="first_name">
                        <span v-show="errors.has('first_name')" class="ui pointing red basic label">Please provide your first name</span>
                        
                    </div>
                    <div class="four wide field">
                        <label>Last name</label>
                        <input type="text" v-model="l_name" v-validate="'required'" name='last_name'>
                        <span v-show="errors.has('last_name')" class="ui pointing red basic label">Please provide your last name</span>
                        
                    </div>
                    <div class="five wide field">
                        <label>E-mail address</label>
                        <input type="email" v-model="email" v-validate="'required|email'" name='my_email'>
                        <span v-show="errors.has('my_email')" class="ui pointing red basic label">Please provide your email address</span>
                        
                    </div>
                </div>
                <div class="three fields">
                    <div class="field">
                        <label>Faculty</label>
                        <multiselect v-model="selected_faculty" :options="faculty_info"  label="value" track-by="id" @select="selectFaculty" @remove="deselectFaculty"></multiselect>
                        
                    </div>
                    <div class="field">
                        <label>Role</label>
                         <multiselect v-model="selected_role" :options="role_info"  label="value" track-by="id" @select="selectRole" @remove="deselectRole"></multiselect>
                         
                    </div>
                    <div class="field">
                        <label>Preferred Language</label>
                         <multiselect v-model="selected_lang" :options="langauge_info"  label="value" track-by="id" @#select="selectLangauge" @remove="deselectLanguage"></multiselect>
                    </div>
                </div>
                <h4 class="ui dividing header">What system do you have questions about?</h4>
                <div class="field">
                    <div class="field">
                        <label>Choose a software</label>
                        <multiselect v-model="selected_software" :options="software_info"  label="value" track-by="id" :multiple="true" @select="selectSoftware" @remove="deselectSoftware"></multiselect>
                    </div>
                </div>
                <!-- <div class="two fields">
                    <div class="field">
                        <label>Software</label>
                        <multiselect v-model="selected_software" :options="software_info"  label="value" track-by="id" :multiple="true"></multiselect>
                    </div>
                    <div class="field">
                        <label :for="id">Specific details</label>
                        <multiselect v-model="selected_topics" id="ajax" label="name" group-values="lib" group-label="value" track-by="name" :options="topics" :multiple="true" :searchable="true" :loading="isLoading" :internal-search="false" :close-on-select="false" :show-no-results="false" :hide-selected="true" @search-change="filter_topics">
                            <template slot="tag" slot-scope="{ option, remove }"><span class="custom__tag"><span>{{ option.name }}</span><span class="custom__remove" @click="remove(option)">❌</span></span></template>
                            <template slot="clear" slot-scope="props">
                            <div class="multiselect__clear" v-if="selected_topics.length" @mousedown.prevent.stop="clearAll(props.search)"></div>
                            </template><span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
                        </multiselect>
                    </div>
                </div> -->
                <vue-accordion class="styled-accordion" animatedClass='animated-wrapper' activeClass="active-item" :canOpenMultiple='false' :canClose='false'>
                    <vue-accordion-item>
                        <div slot="title" class="item-title" slot-scope="{ props }">Terms and Conditions</div>
                        <!-- <span>{{props.isActive ? '▼' : '►'}}</span> -->
                        <div slot="content" class="item-content">
                            <div class="ui message">
                                <div class="content">
                                    <div class="header">
                                         <b>Use and Disclosure of Personal Information:</b>
                                    </div>
                                    <p>The information you provide in this form is gathered for
                                        statistical purposes and to help us continuously improve and tailor the services offered. Any personal
                                        information that could identify you will be removed from any disseminated reports.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </vue-accordion-item>
                     <vue-accordion-item>
                        <div slot="title" class="item-title">Permission to Contact</div>
                        <!-- <span>{{props.isActive ? '▼' : '►'}}</span> -->
                        <div slot="content">
                            <div class="ui message">
                                <div class="content">
                                    <div class="header">Personalized service</div>
                                    <p>Please check this box if we can use this information to contact you regarding services that might be
                                    of interest to you (e.g. courses, workshops, events), or for follow-up surveys when relevant research
                                    data is being collected.
                                    </p>
                                </div>
                                <div class="inline field">
                                    <input type="checkbox" tabindex="0" v-model="checkbox"><label>I would like that</label>
                                </div>
                            </div>
                        </div>
                    </vue-accordion-item>
                </vue-accordion>
                <button class="ui blue submit button">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>


import EN from '../../services/en/text'
import FR from '../../services/fr/text'
import JobServices from '../../services/api/JobServices'

import { VueAccordion, VueAccordionItem } from 'vue-accordion-styless'

export default {
    components: {
        VueAccordion,
        VueAccordionItem,
    },

    data(){
        return{
            f_name: '',
            l_name: '',
            email: '',
            selected_faculty: undefined,
            selected_role: undefined,
            selected_lang: undefined,
            selected_software: undefined,
            selected_topics: undefined,
            selected_station: undefined,
            faculty_info: [],
            role_info: [],
            langauge_info: [],
            software_info: [],
            topics_info: [],
            station_info: [
                {id: '1', value: '1'},
                {id: '2', value: '2'},
                {id: '3', value: '3'},
                {id: '4', value: '4'},
                {id: '5', value: '5'},
                {id: '6', value: '6'},
                {id: '7', value: '7'},
                {id: '8', value: '8'},
                {id: '9', value: '9'},
                {id: '10', value: '10'},
                {id: '11', value: '11'},
                {id: '12', value: '12'},
                {id: '13', value: '13'},
                {id: '14', value: '14'},
                {id: '15', value: '15'},
                {id: '16', value: '16'},
                ],
            topics: [],
            en_faculty: EN.getFaculty(),
            fr_faculty: FR.getFaculty(),
            en_role: EN.getStatus(),
            fr_role: FR.getStatus(),
            en_lang: EN.getLang(),
            fr_lang: FR.getLang(),
            en_soft: EN.getPlatform(),
            fr_soft: FR.getPlatform(),
            en_topics: EN.getTopics(),
            lang_topics: [],
            fr_topics: [],
            isLoading: false,
            checkbox: false
        }
    },

    created(){
        this.getText()
        // this.verify()
        // this.filter_topics(1)
    },

    updated(){
        this.getText()
        this.verify()
        // if(this.selected_software[0] !== undefined){
        //     this.filter_topics(this.selected_software[0].id)
        // }else{
        //     this.filter_topics(0)
        // }
    },

    methods: {
        getText(){
            this.faculty_info = this.language === 'en' ? this.en_faculty : this.fr_faculty
            this.role_info = this.language === 'en' ? this.en_role : this.fr_role
            this.langauge_info = this.language === 'en' ? this.en_lang : this.fr_lang
            this.software_info = this.language === 'en' ? this.en_soft : this.fr_soft
            this.lang_topics = this.language === 'en' ? this.en_topics : this.fr_topics
        },
        filter_topics(value){
            this.isLoading = true
            this.topics = this.lang_topics.filter(candidate => candidate.id === value)[0].topics
            this.isLoading = false
        },
        onSubmit(){
            let software_str = ''
            let issues_str = ''

            software_str = this.extract_name(this.selected_software)
            let job = {
                    fname: this.f_name,
                    lname: this.l_name,
                    faculty: this.selected_faculty,
                    roles: this.selected_role,
                    lang: this.selected_lang,
                    station: this.selected_station,
                    software: software_str,
                    topics: issues_str,
                    contact: this.checkbox
                }
            JobServices.createJob(job)
        },
        extract_name(object){
            let the_str = ''
            for(let i in object){
                if(the_str.length === 0)
                    the_str += object[i].value
                else
                    the_str = the_str + ", " + object[i].value
            }
            return the_str
        },
        verify(){
            let btn = document.querySelector('.ui.blue.submit.button')
            if(this.f_name === '' || this.l_name === '' || this.email === '' || this.selected_faculty === 'undefined' || this.selected_role === 'undefined' || this.selected_lang === 'undefined' || this.selected_software[0] === 'undefined' || this.selected_station[0] === 'undefined' || this.checkbox === false){
                btn.classList.add('disabled')
            }else{
               btn.classList.remove('disabled')
            }
        },
        selectFaculty(option){
            this.selected_faculty = option.id
        },
        selectRole(option){
            this.selected_role = option.id
        },
        selectSoftware(option){
            this.selected_software = option.id
        },
        selectLangauge(option){
            this.selected_lang = option.id
        },
        selectStation(option){
            this.selected_station = option.id
        },
        deselectStation(){
            this.selected_station = undefined
        },
        deselectRole(){
            this.selected_role = undefined
        },
        deselectSoftware(){
            this.selected_software = undefined
        },
        deselectLanguage(){
            this.selected_lang = undefined
        },
        deselectFaculty(){
            this.selected_faculty = undefined
        }
    }
}
</script>

<style>

    div.container.info-form{
        width: 80% !important;
        margin: 0 auto;
        text-align: left;
        margin-top: 10em;
    }

    p.perso-message{
        color: #4C4C4C;
    }

    .styled-accordion{
        border: 1px solid #BFC4DA;
        margin-bottom: 10px;
        border-radius: 5px;
        color: #555
    }

    .animated-wrapper{
        transition: all 0.5s ease-in-out;
    }

    .item-content{
        border-top: 1px solid #BFC4DA;
        padding: 10px;
    }

    .item-title{
        padding: 10px;
        cursor: pointer;
    }

    .active-item{
        background: #EAEDF7
    }

</style>