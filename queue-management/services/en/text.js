export default{
    getPlatform(){
        return [
                {id: 1, value: 'BrightSpace - Virtual Campus'},
                {id: 2, value: 'Maestro - Course creation portal'},
                {id: 3, value: 'Blue - Online Evaluation'},
                {id: 4, value: 'uOSyllabus - Online Syllabus Creation'},
                {id: 7, value: 'ECHO360 ALP - Online Engagment'},
                {id: 5, value: 'Echo360 - Lecture Capture'},
                {id: 6, value: 'OpenCast - Lecture Capture'},
                {id: 8, value: 'Adobe Connect - Web Conference System'}
        ]
    },
    getLang(){
        return [
            {id : 'ENGLISH | ANGLAIS', value : 'ENGLISH | ANGLAIS'},
            {id : 'FRENCH | FRANÇAIS', value : 'FRENCH | FRANÇAIS'},
            {id : 'BOTH | LES DEUX', value : 'BOTH | LES DEUX'}
        ]
    },
    getDay(){
        return [
            {id: 0, value: 'Monday'},
            {id: 1, value: 'Tuesday'},
            {id: 2, value: 'Wednesday'},
            {id: 3, value: 'Thursday'},
            {id: 4, value: 'Friday'}
        ]
    },
    getMonth(){
        return [
            {id: 0, value: 'January'},
            {id: 1, value: 'February'},
            {id: 2, value: 'March'},
            {id: 3, value: 'April'},
            {id: 4, value: 'May'},
            {id: 5, value: 'June'},
            {id: 6, value: 'July'},
            {id: 7, value: 'August'},
            {id: 8, value: 'September'},
            {id: 9, value: 'October'},
            {id: 10, value: 'November'},
            {id: 11, value: 'December'}
        ]
    },
    getNavBar(){
        return [
            {id: 0, icon: 'tachometer alternate icon', title: 'Traffic'},
            {id: 1, icon: 'chart bar outline icon', title: 'Statistics'},
            {id: 2, icon: 'user friends icon', title: 'In Queue'},
            {id: 3, icon: 'database icon', title: 'Database Management'},
            {id: 4, icon: 'file excel icon', title: 'Export Data'}
        ]
    },
    getFooter(){
        return [
            {id: 1, value: 'uottawa.ca/en/employees', title: "VirtuO - Employee Portal"},
            {id: 2, value: 'tlss.uottawa.ca/site/en/', title: 'TLSS - Teaching Services'},
            {id: 3, value: '#', title: 'BrightSpace - Virtual Campus'}
        ]
    },
    getJobHeader(){
        return [
            {id: 1, value: 'Name'},
            {id: 2, value: 'Faculty'}
        ]
    },
    manageDB(){
        return [
            {id: 1, value: 'Users'},
            {id: 2, value: 'Platform'},
            {id: 3, value: 'Faculty'}
        ]
    },
    getFaculty(){
        return [
            {id: 1, value: 'Arts'},
            {id: 2, value: 'Education'},
            {id: 3, value: 'Engineering'},
            {id: 4, value: 'Health Sciences'},
            {id: 5, value: 'Law - Common Law'},
            {id: 6, value: 'Law - Civil Law'},
            {id: 7, value: 'Sciences'},
            {id: 8, value: 'Social Sciences'},
            {id: 9, value: 'Medecine'},
            {id: 10,value: 'Telfer'}
        ]
    }
}