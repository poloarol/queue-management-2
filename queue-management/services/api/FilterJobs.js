/*


*/


import JobServices from './JobServices'
import StaticData from './StaticData'

export default{
    async getJobComp(){
        let collection = await JobServices.getJobs()
        let data = []
        let datum, color
        for(let i in collection){
            console.log(collection[i])
            color = StaticData.getFacultyColor(collection[i].f_id)
            datum = {'station': {}, 'name':{}, 'software': {}}
            datum.station = {'icon': `desktop ${color} icon`, 'name': collection[i].post, 'type': 'str'}
            datum.name = {'icon': `user ${color} icon`, 'name' : collection[i].name, 'type': 'str'}
            datum.software = {'icon': `app store ios ${color} icon`, 'name' : collection[i].software, 'type' : 'str'}
            data.push(datum)

        }
        return data
    },
    async getAdminComp(){
        let collection = await JobServices.getJobs()
        let staff = await JobServices.getStaff()
        let data = []
        let datum
        for(let i in collection){
            datum = {'name': {}, 'personnel': {}, 'desc': {}, 'save': {}}
            datum.name = {'icon': 'user icon', 'name': collection[i].name, 'type': 'str'}
            datum.personnel = {'icon': 'user secret icon' ,'name' : staff, 'type': 'dropdown'}
            datum.desc = {'name': 1, 'type': 'textbox'}
            datum.save = {'icon': 'save icon','name': 'Save', 'type': {'input':'input-plus-button', 'name': 'checkbox'}, 'event': collection[i].id}
            data.push(datum)
        }
        return data
    },
    async getUpdateComp(staff){
        await JobServices.updateJob(staff.id, staff.staff)
        await this.getJobComp()
        await this.getAdminComp()
    }
}