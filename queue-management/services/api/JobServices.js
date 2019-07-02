import axios from 'axios'

export default {

    getJobs() {
        return axios.get('/')
                    .then(response => {
                        return response.data
                    })
    },

    createJob(formdata) {
        return axios.post('/register', formdata)
    },

    updateJob(id) {
        return axios.put(`/update/${id}`, id)
    },

    getFaculty(){
        return axios.get('/register')
                    .then(response => {
                        return response.data
                    })
    }
}