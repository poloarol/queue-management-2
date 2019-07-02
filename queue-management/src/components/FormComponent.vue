<template>
    <div class="container">
        <div class="ui positive message" id="assist-message">
            <div class="header">Enregistrez vous | Register</div>
            <p>Enregistrez vous pour obtenir du soutien sur BrightSpace</p>
            <p>Register to get BrightSpace help</p>
        </div>
        <div class="ui raised segment" id="my-form">
            <form class="ui form" action="/register" method="post">
                <h4 class="ui dividing header">Staff Information</h4>
                <div class="field">
                    <label>Name</label>
                    <div class="two fields">
                        <div class="field">
                            <input type="text" name="firstname" placeholder="Paula">
                        </div>
                        <div class="field">
                            <input type="text" name="lastname" placeholder="Poe">
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label>Faculty</label>
                    <div class="ui fluid selection dropdown" id="select">
                        <input type="hidden" name="faculty">
                        <i class="dropdown icon"></i>
                        <div class="default text">Select Faculty</div>
                        <div class="menu">
                            <div class="item" 
                                v-for="(faculty, index) in faculties"
                                v-bind:key="index"
                                data-value=faculty.id>
                                {{ faculty.names }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <div class="two fields">
                        <div class="field">
                            <label>Role</label>
                            <div class="ui selection dropdown">
                                <input type="hidden" name="role">
                                <div class="default text">Role</div>
                                <i class="dropdown icon"></i>
                                <div class="menu"></div>
                            </div>
                        </div>
                        <div class="field">
                            <label>Status</label>
                            <div class="ui selection dropdown">
                                <input type="hidden" name="status">
                                <div class="default text">Status</div>
                                <i class="dropdown icon"></i>
                                <div class="menu"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label>Problem Description</label>
                    <textarea name="desc"></textarea>
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
import $ from 'jquery'
import JobServices from '../../services/api/JobServices'

$('#select').dropdown()

export default {
    name: 'FormComponent',
    data() {
        return {
            faculties: [],
            error: ''
        }
    },
    async created(){
        try{
            this.faculties = JobServices.getFaculty()
        }catch(err){
            this.error = err.message
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

