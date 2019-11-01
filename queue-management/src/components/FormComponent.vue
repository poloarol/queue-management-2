<template>
    <div class="container form">
        <div class="container info-form">
            <div class="ui big info icon attached message info-message">
                <i class="info circle icon"></i>
                <div class="content">
                    <div class="header">
                        <b>Welcome to the Techno-Pedagogy Lab</b> 
                    </div>
                    <p>Complete this form to obtain personalized support</p>
                </div>
            </div>
            <form action="" class="ui big form attached fluid segment" @submit.prevent="onSubmit">
                <h4 class="ui dividing header">Your Information</h4>
                <div class="three fields">
                    <div class="field">
                        <label>First name</label>
                        <input type="text" v-model="f_name" v-validate="'required'" name="first_name">
                        <span v-show="errors.has('first_name')" class="ui pointing red basic label">Please provide your first name</span>
                    </div>
                    <div class="field">
                        <label>Last name</label>
                        <input type="text" v-model="l_name" v-validate="'required'" name='last_name'>
                        <span v-show="errors.has('last_name')" class="ui pointing red basic label">Please provide your last name</span>
                    </div>
                    <div class="field">
                        <label>E-mail address</label>
                        <input type="email" v-model="email" v-validate="'required|email'" name='my_email'>
                        <span v-show="errors.has('my_email')" class="ui pointing red basic label">Please provide your email address</span>
                    </div>
                </div>
                <div class="three fields">
                    <div class="field">
                        <label>Faculty</label>
                        <multiselect v-model="selected_faculty" :options="faculty_info"  label="value" track-by="id"></multiselect>
                    </div>
                    <div class="field">
                        <label>Role</label>
                         <multiselect v-model="selected_role" :options="role_info"  label="value" track-by="id"></multiselect>
                    </div>
                    <div class="field">
                        <label>Preferred Language</label>
                         <multiselect v-model="selected_lang" :options="langauge_info"  label="value" track-by="id"></multiselect>
                    </div>
                </div>
                <h4 class="ui dividing header">What system do you have questions about?</h4>
                <div class="three fields">
                    <div class="field">
                        <label>Station</label>
                        <multiselect v-model="selected_station" :options="station_info"  label="value" track-by="id"></multiselect>
                    </div>
                <div class="field">
                    <label>Software</label>
                     <multiselect v-model="selected_software" :options="software_info"  label="value" track-by="id" :multiple="true"></multiselect>
                </div>
                <div class="field">
                    <label>Specific details</label>
                    <!-- <multiselect 
                        v-model="selected_topics" 
                        :options="topics" 
                        :multiple="true"
                        group-label="value"
                        group-values="lib"
                        :group-select="true"
                        track-by="name"
                        label='name'>
                    </multiselect> -->
                </div>
                </div>
                <h4 class="ui dividing header">Permission to Contact</h4>
                <div class="ui message">
                    <div class="header">Personalized service</div>
                    <p>Please check this box if we can use this information to contact you regarding services that might be
                        of interest to you (e.g. courses, workshops, events), or for follow-up surveys when relevant research
                        data is being collected.
                    </p>
                    <div class="inline field">
                        <input type="checkbox" tabindex="0"><label>I would like that</label>
                    </div>
                </div>
                 <h4 class="ui dividing header">Terms and Conditions</h4>
                <div class="ui info floating icon message">
                    <i class="info circle icon"></i>
                    <div class="content">
                        <div class="header">
                             <b>Use and Disclosure of Personal Information:</b>
                        </div>
                        <p>The information you provide in this form is gathered for
                            statistical purposes and to help us continuously improve and tailor the services offered. Any personal
                            information that could identify you will be removed from any disseminated reports.
                        </p>
                        <div class="inline field">
                            <input type="checkbox" tabindex="0"><label>I agree to the <b>Terms and Conditions</b>.</label>
                        </div>
                    </div>
                </div>
                <button class="ui blue submit button">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>


import EN from '../../services/en/text'
import FR from '../../services/fr/text'
import JobServices from '../../services/api/JobServices'

export default {
    components: {

    },

    data(){
        return{
            f_name: '',
            l_name: '',
            email: '',
            selected_faculty: '',
            selected_role: '',
            selected_lang: '',
            selected_software: '',
            selected_topics: '',
            selected_station: '',
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
            topics:[],
            en_faculty: EN.getFaculty(),
            fr_faculty: FR.getFaculty(),
            en_role: EN.getStatus(),
            fr_role: FR.getStatus(),
            en_lang: EN.getLang(),
            fr_lang: FR.getLang(),
            en_soft: EN.getPlatform(),
            fr_soft: FR.getPlatform(),
            en_topics: EN.getTopics(),
        }
    },

    created(){
        this.getText()
    },

    updated(){
        this.getText()
        if(typeof this.selected_software[0] !== 'undefined')
            this.topics = this.fiter_topics(this.selected_software[0].id)
    },

    methods: {
        getText(){
            this.faculty_info = this.language === 'en' ? this.en_faculty : this.fr_faculty
            this.role_info = this.language === 'en' ? this.en_role : this.fr_role
            this.langauge_info = this.language === 'en' ? this.en_lang : this.fr_lang
            this.software_info = this.language === 'en' ? this.en_soft : this.fr_soft
        },
        fiter_topics(software_id){
            return this.en_topics.filter(selected => selected.id == software_id)
        },
        onSubmit(){
            let software_str = ''
            let issues_str = ''

            if(this.f_name === '' || this.l_name === '' || this.email === '' || this.selected_faculty === 'undefined' || this.selected_role === 'undefined' || this.selected_lang === 'undefined' || this.selected_software === 'undefined' || this.selected_station === 'undefined'){
                let a = 1
                // Add error messages to be shown
            }else{
                // let date = new Date()
                software_str = this.extract_name(this.selected_software)
                let job = {
                        fname: this.f_name,
                        lname: this.l_name,
                        faculty: this.selected_faculty.id,
                        roles: this.selected_role.id,
                        lang: this.selected_lang.id,
                        station: this.selected_station.id,
                        software: software_str,
                        topics: issues_str,
                        contact: false
                }
                JobServices.createJob(job)
            }
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

</style>