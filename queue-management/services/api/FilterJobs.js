import JobServices from './JobServices'

import StaticData from './StaticData'

export default{
    async getJobComp(){
        let collection = await JobServices.getJobs()
        let data = []
        let datum, color
        for(let i in collection){
            color = StaticData.getFacultyColor(collection[i].f_id)
            datum = {'station': {}, 'name':{}, 'faculty': {}}
            datum.station = {'icon': `laptop ${color} icon`, 'name': collection[i].post, 'type': 'str'}
            datum.name = {'icon': `user ${color} icon`, 'name' : collection[i].name, 'type': 'str'}
            datum.faculty = {'icon': `university ${color} icon`, 'name' : collection[i].faculty, 'type' : 'str'}
            data.push(datum)
        }
        return data
    },
    async getAdminComp(){
        let collection = await JobServices.getJobs()
        // let staff = await JobServices.getStaff()
        let data = []
        let datum
        for(let i in collection){
            datum = {'name': {}, 'personnel': {}, 'desc': {}, 'save': {}}
            datum.name = {'icon': 'user icon', 'name': collection[i].name, 'type': 'str'}
            datum.personnel = {'icon': 'user secret icon' ,'name' : '', 'type': 'dropdown'}
            datum.desc = {'name': collection[i].description, 'type': 'str'}
            datum.save = {'icon': 'save icon','name': 'Save', 'type': {'input':'input-plus-button', 'name': 'checkbox'}, 'event': {'name': '@click', 'func': {'input': [], 'button': []}}}
            data.push(datum)
        }
        return data
    },
    getUpdateComp(){

    }
}