<template>
    <div class="container">
        <div class="container">
                <div class="ui floating attached success message" id="assist-message">
                    <div class="header">Enregistrez vous | Register</div>
                     <p>Enregistrez vous pour obtenir du soutien sur BrightSpace</p>
                    <p>Register to get BrightSpace help</p>
                </div>
                <div class="ui raised segment" id="my-form">
                <form class="ui form" method="POST">
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
                            <div class="field"><label>First Name | Prenom</label>
                                <input type="text" name="firstname" placeholder="Paula" v-model='firstname'>
                            </div>
                            <div class="field">
                                <label>Last Name | Nom de famille</label>
                                <input type="text" name="lastname" placeholder="Poe" v-model='lastname'>
                            </div>
                            <div class="field">
                                <label>Email | Couriel</label>
                                <input type="email" name="email" placeholder="poe@uottawa.ca" v-model='email'>
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <div class="three fields">
                            <div class="field">
                                <label>Faculty | Faculte</label>
                                <v-select label="ident" :options="faculties" placeholder="Choose your faculty | Choisissez votre faculte" v-model='faculty'></v-select>
                            </div>
                            <div class="field">
                                <label>Role | Rôle</label>
                                <v-select label="ident" :options="roles" placeholder="Choose a role | Choisissez votre role" v-model='status'></v-select>
                            </div>
                            <div class="field">
                                <label>Preferred Language | Langaunge Preferee</label>
                                <v-select label="value" :options="language" placeholder="Choose your languange of preference | Quelle est votre langue de preference" v-model='lang'></v-select>
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <div class="two fields">
                            <div class="field">
                                <label>Which platform do you require help with? | Vous avez besoin d'aide avec quelle platforme? </label>
                                <v-select label="ident" :options="platform" placeholder="Choose the ... | Choisissez ... " v-model='software'></v-select>
                            </div>
                            <div class="field">
                                <label>Which difficulties did you encounter with this tool? | Quelle sont les difficulte ...</label>
                                <v-select label="prob" :options="filtered_topics" v-model="problem"></v-select>
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <label>Problem Description | Description du Probleme</label>
                        <textarea name="desc" v-model='desc' placeholder="lorep ipsum dolore"></textarea>
                    </div>
                    <br>
                    <div class="field btn-field">
                        <button class="ui large primary button" 
                                type="submit"
                                @click="register"
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
// import Treeselect from 'riophae/vue-treeselect'
// import '@riophae/vue-treeselect/dist/vue-treeselect.css'

import JobServices from '../../services/api/JobServices'
import StaticData from '../../services/api/StaticData'

export default {
    name: 'FormComponent',
    props : {

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
            current_topic: 0
        }
    },
    async created(){
        await this.get_data()
    },
    async updated() {
        await this.get_data()
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
                this.topics = res['topics']
            }catch(err){
                this.err = err.message
            }
        }
    },
    computed: {
        filtered_topics(){
            if(this.software.id)
                console.log(this.software.id)
            else
                console.log(0)
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

