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

    updateJob(id, staff_id) {
        return axios.put(`/update/${id}/${staff_id}`)
    },

    getStaff(){
        return axios.get('/update')
                    .then(response => {
                        return response.data
                    })
    },

    getAdmin(){
        return axios.get('/admin')
                    .then(response => {
                        return response.data
                    })
    },
    getTraffic(){
        return axios.get('/admin/traffic/:month/:day')
                    .then(response => {
                        return response.data
                    })
    }
}