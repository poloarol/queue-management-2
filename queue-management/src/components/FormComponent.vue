<template>
    <div class="container">
        <div class="ui positive message" id="assist-message">
            <div class="header">Enregistrez vous | Register</div>
            <p>Enregistrez vous pour obtenir du soutien sur BrightSpace</p>
            <p>Register to get BrightSpace help</p>
        </div>
        <div class="ui raised segment" id="my-form">
            <form class="ui form" method="post" @submit.prevent='validate_form'>
                <h4 class="ui dividing header">Staff Information</h4>
                <div class="field">
                    <label>Name</label>
                    <div class="two fields">
                        <div class="field">
                            <input type="text" name="firstname" placeholder="Paula" v-model='user.firstname'>
                            <span></span>
                        </div>
                        <div class="field">
                            <input type="text" name="lastname" placeholder="Poe" v-model='user.lastname'>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label>Faculty</label>
                    <v-select label="value" :options="faculties" placeholder="Choose your faculty" v-model="user.faculty"></v-select>
                </div>
                <div class="field">
                    <div class="two fields">
                        <div class="field">
                            <label>Status</label>
                            <v-select label="value" :options="roles" placeholder="Choose a role" v-model="user.status"></v-select>
                        </div>
                        <div class="field">
                            <label>Preferred Language</label>
                            <v-select label="value" :options="language" placeholder="Choose your languange of preference" v-model="user.lang"></v-select>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label>Problem Description</label>
                    <textarea name="desc" v-model='user.desc'></textarea>
                </div>
                <br>
                <div class="field">
                    <button class="ui large primary button" type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
// import JobServices from '../../services/api/JobServices'
import validators from '../assets/js/validators'

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
            errors: '',
            user: {}
        }
    },
    methods: {
        validate_form: function(e){
            this.errors = {}

            const firstname = validators.validFirstName(this.user.name)
            const lastname = validators.validLastName(this.last.name)
            const faculty = validators.validateFaculty(this.user.faculty)
            const status = validators.validateStatus(this.user.status)
            const language = validators.validateLang(this.user.lang)
            const description = validators.validateDescription(this.user.desc)
        }
    }
}
</script>

<style>

    div#assist-message, div#my-form{
        max-width: 80%;
        margin: 0 auto;
    }

    div#assist-message{
        top: 3em;
    }

    div#my-form{
        top: 5em;
        text-align: left !important;
    }

</style>

