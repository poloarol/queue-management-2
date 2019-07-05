import axios from 'axios'

export default {

    getJobs() {
        return axios.get('/')
                    .then(response => {
                        return response.data
                    })
    },

    getInfo(){
        return axios.get('/register')
                    .then(response => {
                        return response.data
                    })
    },

    createJob(credentials) {
        return axios.post('/register', credentials)
    },

    updateJob(id) {
        return axios.put(`/update/${id}`)
    },

    getStaff(){
        return axios.get('/update')
                    .then(response => {
                        return response.data
                    })
    }
}