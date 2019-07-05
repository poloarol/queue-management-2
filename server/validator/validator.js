export default {
    validateName (name){
        return name.length > 0
    },

    validateID(id){
        return !isNaN(id)
    },

    validateDesc(text){
        return text.length > 5
    }
}