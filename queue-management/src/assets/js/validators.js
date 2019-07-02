export default {

    validFirstName(name) {
        if(!name.length){
            return {valid: false, error: 'Enter your first name'}
        }
        return {valid: true, error: null}
    },

    validLastName(name){
        if(!name.length){
            return {valid: false, error: 'Enter your last name'}
        }
        return {valid: true, error: null}
    },

    validateFaculty(faculty){
        if(!faculty.length){
            return {valid: false, error: 'Enter your home faculty information'}
        }
        return {valid: true, error: null}
    },

    validateStatus(status){
        if(!status.length){
            return {valid: false, error: 'Which University department do you belong to'}
        }
        return {valid: true, error: null}
    },

    validateLang(lang){
        if(!lang.length){
            return {valid: false, error: 'Choose your preferred language of service'}
        }
        return {valid: true, error: null}
    },

    validateDescription(desc){
        if(!desc.length){
            return {valid: false, error: 'What is the purpose of your visit?'}
        }
        return {valid: true, error: null}
    }
}