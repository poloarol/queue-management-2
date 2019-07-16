import JobServices from './JobServices'

export default{
    getJobComp(){
        let collection = JobServices.getJobs()
        let data = []
        let datum = {'Station': 0, 'Name': '', 'Faculty': '', 'id': 0}
        for(let i in collection){
            datum.Station = collection[i].post
            datum.Name = collection[i].name
            datum.Faculty = collection[i].faculty
            datum.id = collection[i].f_id

            data.push(datum)
        }
        return data
    },
    getAdminComp(){

    },
    getUpdateComp(){

    }
}