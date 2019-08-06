<template>
    <div class="container">
        <div class="container">
                <div class="ui floating attached success message" id="assist-message">
                    <div class="header">Enregistrez vous | Register</div>
                     <p>Enregistrez vous pour obtenir du soutien sur BrightSpace</p>
                    <p>Register to get BrightSpace help</p>
                </div>
                <div class="ui raised segment" id="my-form">
                <form class="ui form" method="POST" @submit.prevent="register">
                    <div class="ui info floating icon message" id="assist-info-message">
                        <i class="info circle icon"></i>
                        <div class="content">
                            <div class="header">Continuous support | Soutien continue</div>
                            <p>With the provided information, we may contact to offer tips etc.</p>
                            <p>Avec les informations fournies, nous pouvons contacter pour offrir des conseils etc.</p>
                        </div>
                    </div>
                    <h4 class="ui dividing header">Staff Information</h4>
                    <div class="field">
                        <div class="three fields">
                            <div class="field form-group" :class="{'form-group--error' : '$v.firstname.$model'}">
                                <label>First Name | Prenom</label>
                                <input class="form__input" v-model.trim="$v.firstname.$model" type="text" name="firstname" placeholder="Paula">
                            </div>
                            <div class="field">
                                <label>Last Name | Nom de famille</label>
                                <input class="form__input" type="text" name="lastname" placeholder="Poe" v-model.trim='$v.lastname.$model'>
                            </div>
                            <div class="field">
                                <label>Email | Couriel</label>
                                <input type="email" name="email" placeholder="ppoe@uottawa.ca" v-model='$v.email$model'>
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <div class="three fields">
                            <div class="field">
                                <label>Faculty | Faculte</label>
                                <multiselect 
                                    v-model.trim="$v.faculty.$model" 
                                    :options="faculties" 
                                    :searchable="true" 
                                    :close-on-select="true"
                                    label="ident"
                                    :allow-empty="false"
                                    track-by="ident"
                                    @select="selectFaculty"
                                >
                                </multiselect>
                            </div>
                            <div class="field">
                                <label>Role | Rôle</label>
                                <multiselect 
                                    v-model.trim="$v.status.$trim" 
                                    :options="roles" 
                                    :searchable="true" 
                                    :close-on-select="true"
                                    label="ident"
                                    :allow-empty="false"
                                    track-by="ident"
                                    @select="selectRole"
                                >
                                </multiselect>
                            </div>
                            <div class="field">
                                <label>Preferred Language | Langaunge Preferee</label>
                                <multiselect 
                                    v-model.trim="$v.lang.$trim" 
                                    :options="language" 
                                    :searchable="true" 
                                    :close-on-select="true"
                                    label="value"
                                    :allow-empty="false"
                                    track-by="value"
                                    @select="selectLang"
                                >
                                </multiselect>
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <div class="two fields">
                            <div class="field">
                                <label>Which platform do you require help with? | Vous avez besoin d'aide avec quelle platforme? </label>
                                <multiselect 
                                    v-model.trim="$v.software.$model" 
                                    :options="platform" 
                                    :searchable="true" 
                                    :close-on-select="true"
                                    label="ident"
                                    :allow-empty="false"
                                    track-by="ident"
                                    @select="selectSoftware"
                                >
                                </multiselect>
                            </div>
                            <div class="field">
                                <label>Which tool are you having problems with? | Vous avez des problème avec quel outils?</label>
                                <multiselect
                                        v-model.trim="$v.problem.$model"
                                        :options="topic"
                                        :multiple="true"
                                        :group-select="true"
                                        placeholder="Type to search"
                                        group-values="children"
                                        group-label="label"
                                        label="name"
                                        track-by="name"
                                        @select="selectTool"
                                >
                                <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
                               </multiselect>
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <label>Consent to contact | Autorisation pour vous contacter</label>
                    </div>
                    <br>
                    <div class="field btn-field">
                        <button class="ui large primary button" 
                                type="submit"
                                :disabled="submitStatus === 'PENDING'"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<script>
import JobServices from '../../services/api/JobServices'
import StaticData from '../../services/api/StaticData'

import { required, minLength } from 'vuelidate/lib/validators'

export default {
    name: 'FormComponent',
    props : {
        
    },
    components: {
       
    },
    data() {
        return {
            faculties: [],
            roles: [],
            language: [],
            platform:[],
            topics: [],
            topic: [],
            chosen_topic: [],
            user: null,
            firstname: '',
            lastname: '',
            faculty: '',
            status: '',
            lang: '',
            desc: '',
            software: '',
            problem: '',
            email: '',
            err: '',
            current_topic: 0,
            submitStatus: ''
        }
    },
    validations: {
        firstname: {
            required,
            minLength: minLength(2)
        },
        lastname: {
            required,
            minLength: minLength(2)
        },
        faculty: {
            required
        },
        status:  {
            required
        },
        lang: {
            required
        },
        software: {
            required
        },
        email: {
            required
        }
    },
    async created(){
        await this.get_data()
        this.current_topic = 0
        this.filter_topics(this.current_topic)
    },
    async updated() {
        await this.get_data()
        if(this.software === null || this.software === undefined){
            this.current_topic = 0
        }else{
            this.current_topic = this.software.id
        }
        this.filter_topics(this.current_topic)
    },
    methods: {
        async register(){
            this.user = {
                            "fname" : this.firstname,
                            "lname" : this.lastname,
                            "faculty" : this.faculty.id, 
                            "role" : this.status.id, 
                            "lang" : this.lang.id,
                            "software" : this.software.id,
                            "desc" : this.desc
                        }
            await JobServices.createJob(this.user)
        },
        async get_data(){
            try{
                let res = await JobServices.getInfo()
                this.faculties = res['faculty']
                this.roles = res['roles']
                this.language = StaticData.getLang()
                this.platform = res['software']
                this.topics = res['sub_topic']
            }catch(err){
                this.err = err.message
            }
        },
        filter_topics(val){
            let value = this.topics.filter(item => item.software_id == val)

            let options = []
            let parent, prev_child_key = null

            for(let i in value){
                let key = value[i].topic_id
                if(prev_child_key === key){
                    parent.children.push({'id': [value[i].id ,value[i].topic_id], 'name': value[i].sub_topic})
                }else{
                    prev_child_key = value[i].topic_id
                    parent = {}
                    parent['id'] = [value[i].id, value[i].software_id]
                    parent['label'] = value[i].prob
                    parent['children'] = []
                    parent.children.push({'id': [value[i].id ,value[i].topic_id], 'name': value[i].sub_topic})
                    options.push(parent)
                }
    
            }
            this.topic = options
        },
        selectFaculty(option){
            this.faculty = option.id
        },
        selectRole(option){
            this.status = option.id
        },
        selectLang(option){
            this.lang = option.id
        },
        selectSoftware(option){
            this.software = option.id
        },
        selectTool(option){
            // use chosen_topics for submission in db
            console.log(option)
        }
    }
}
</script>

<style>

    div#my-form, div#assist-message{
        max-width: 80%;
        margin: 0 auto;
    }

    div#assist-message{
        top: 2em;
    }

    div#assist-info-message{
      margin-top: -2em;
    }


    div#my-form{
        top: 3em;
        text-align: left !important;
    }
    
    form{
        top: 2em;
        margin-bottom: 2em;
    }

    div.btn-field{
        margin-top: -1em !important;
    }

</style>

