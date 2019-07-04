<template>
    <div class="container">
        <div class="ui info floating icon message" id="assist-icon-message">
            <i class="info circle icon"></i>
            <div class="content">
                <div class="header">Continuous support | Soutien continue</div>
                <p>With the provided information, we may contact to offer tips etc.</p>
                <p>Avec les informations fournies, nous pouvons contacter pour offrir des conseils etc.</p>
            </div>
        </div>
        <div class="ui raised segment" id="my-form">
            <div class="ui floating attached message" id="assist-message">
                <div class="header">Enregistrez vous | Register</div>
                <p>Enregistrez vous pour obtenir du soutien sur BrightSpace</p>
                <p>Register to get BrightSpace help</p>
            </div>
            <form class="ui form">
                <h4 class="ui dividing header">Staff Information</h4>
                <div class="field">
                    <div class="two fields">
                        <div class="field"><label>First Name | Prenom</label>
                            <input type="text" name="firstname" placeholder="Paula" v-model='firstname'>
                        </div>
                        <div class="field">
                            <label>Last Name | Nom de famille</label>
                            <input type="text" name="lastname" placeholder="Poe" v-model='lastname'>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <div class="two fields">
                        <div class="field">
                            <label>Faculty | Faculte</label>
                            <v-select label="value" :options="faculties" placeholder="Choose your faculty | Choisissez votre faculte" v-model='faculty'></v-select>
                        </div>
                        <div class="field">
                            <label>Status | Statut</label>
                            <v-select label="value" :options="roles" placeholder="Choose a role | Choisissez votre role" v-model='status'></v-select>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <div class="two fields">
                        <div class="field">
                            <label>Computer ID | ID de l'ordinateur</label>
                            <v-select label="value" :options="postes" placeholder="Choose the computer ID | Choisissez l'identifiant de l'ordinateur" v-model='posts'></v-select>
                        </div>
                        <div class="field">
                            <label>Preferred Language | Langaunge Preferee</label>
                            <v-select label="value" :options="language" placeholder="Choose your languange of preference | Quelle est votre langue de preference" v-model='lang'></v-select>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label>Problem Description | Description du Probleme</label>
                    <textarea name="desc" v-model='desc' placeholder="lorep ipsum dolore"></textarea>
                </div>
                <br>
                <div class="field">
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
</template>

<script>
import JobServices from '../../services/api/JobServices'
// import validators from '../assets/js/validators'

export default {
    name: 'FormComponent',
    props : {

    },
    data() {
        return {
            faculties: [
                {
                    id : 1,
                    value : 'Arts'
                },
                {
                    id : 2,
                    value : 'Education | Éducation'
                },
                {
                    id : 3,
                    value : 'Engineering | Génie'
                },
                {
                    id : 4,
                    value : 'Health Sciences | Science de la Santé'
                },
                {
                    id : 5,
                    value : 'Law & Civil Law | Droit & Droit Civil'
                },
                {
                    id : 6,
                    value : 'Medecine | Médécine'
                },
                {
                    id : 7,
                    value: 'Social Sciences | Science Social'
                },
                {
                    id : 8,
                    value : 'Science | Science'
                }
            ],
            roles: [
                {
                    id : 1,
                    value : 'Full time Professor | Professeur Régulier'
                },
                {
                    id : 2,
                    value : 'Part time Professor | Professeur en temps partiel'
                },
                {
                    id : 3,
                    value : "Teaching Assistant | Assistant d'enseignement"
                },
                {
                    id : 4,
                    value : 'Practicuum Student | Étudiant (Practicuum)'
                },
                {
                    id : 5,
                    value : 'Personnel'
                },
                {
                    id : 6,
                    value : 'Other | Autre'
                }
            ],
            language: [
                {
                    id : 1,
                    value : 'English | Anglais'
                },
                {
                    id : 2,
                    value : 'French | Français'
                },
                {
                    id : 3,
                    value : 'Both | Les deux'
                }
            ],
            postes:[
                {
                    id: 1,
                    value: 2
                },
                {
                    id: 2,
                    value: 2
                },
                {
                    id: 3,
                    value: 3
                },
                {
                    id: 4,
                    value: 4
                },
                {
                    id: 5,
                    value: 5
                },
                {
                    id: 6,
                    value: 6
                },
                {
                    id: 8,
                    value: 8
                },
                {
                    id: 9,
                    value: 9
                },
                {
                    id: 10,
                    value: 10
                },
                {
                    id: 11,
                    value: 11
                },
                {
                    id: 12,
                    value: 12
                },
                {
                    id: 13,
                    value: 13
                },
                {
                    id: 14,
                    value: 14
                },
                {
                    id: 15,
                    value: 15
                },
                {
                    id: 16,
                    value: 16
                }
            ],
            user: null,
            firstname: '',
            lastname: '',
            faculty: '',
            status: '',
            lang: '',
            desc: '',
            posts: ''
        }
    },
    methods: {
        async register(){
            let val = `${this.firstname} ${this.lastname}`
            this.user = {
                            "name" : val, 
                            "faculty" : this.faculty.id, 
                            "role" : this.status.id, 
                            "status" : this.lang.id, 
                            "desc" : 'Course creation'
                        }
            await JobServices.createJob(this.user)
        }
    },
}
</script>

<style>

    div#my-form, div#assist-icon-message{
        max-width: 80%;
        margin: 0 auto;
    }

    div#assist-message{
       text-align: center;
    }

    div#assist-icon-message{
        top: 4em;
    }

    div#my-form{
        top: 5em;
        text-align: left !important;
    }
    
    form{
        top: 2em;
    }

</style>

