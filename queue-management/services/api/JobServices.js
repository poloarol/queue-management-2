import axios from 'axios'

export default {

    getJobs() {
        return axios.get('/')
                    .then(response => {
                        return response.data
                    })
    },

    createJob(credentials) {
        return axios.post('/register', credentials)
    },

    updateJob(id) {
        return axios.put(`/update/${id}`, id)
    }
}