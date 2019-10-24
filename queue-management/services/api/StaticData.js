export default {
    getLang(){
        return [
            {id : 'ENGLISH | ANGLAIS', value : 'ENGLISH | ANGLAIS'},
            {id : 'FRENCH | FRANÇAIS', value : 'FRENCH | FRANÇAIS'},
            {id : 'BOTH | LES DEUX', value : 'BOTH | LES DEUX'}
        ]
    },
    getDay(){
        return [
            {id: 0,
                value: 'Monday | Lundi'
            },
            {
                id: 1,
                value: 'Tuesday | Mardi'
            },
            {
                id: 2,
                value: 'Wednesday | Mercredi'
            },
            {
                id: 3,
                value: 'Thursday | Jeudi'
            },
            {
                id: 4,
                value: 'Friday | Vendredi'
            }
        ]
    },
    getMonth(){
        return [
            {
                id: 1,
                value: 'January | Janvier'
            },
            {
                id: 2,
                value: 'February | Fevrier'
            },
            {
                id: 3,
                value: 'March | Mars'
            },
            {
                id: 4,
                value: 'April | Avril'
            },
            {
                id: 5,
                value: 'May | Mai'
            },
            {
                id: 6,
                value: 'June | Juin'
            },
            {
                id: 7,
                value: 'July | Juillet'
            },
            {
                id: 8,
                value: 'August | Août'
            },
            {
                id: 9,
                value: 'September | Septembre'
            },
            {
                id: 10,
                value: 'October | Octobre'
            },
            {
                id: 11,
                value: 'November | Novembre'
            },
            {
                id: 12,
                value: 'December | Decembre'
            }
        ]
    },
    getNavBar(){
        return [
            {
                id: 0,
                icon: 'tachometer alternate icon',
                title: 'Traffic'
            },
            {
                id: 1,
                icon: 'chart bar outline icon',
                title: 'Statistics'
            },
            {
                id: 2,
                icon: 'user friends icon',
                title: 'In Queue'
            },
            {
                id: 3,
                icon: 'database icon',
                title: 'Database Management'
            },
            {
                id: 4,
                icon: 'file excel icon',
                title: 'Export Data'
            }
        ]
    },
    getFooter(){
        return [
            {
                id: 1,
                value: 'uottawa.ca/en/employees',
                title: "VirtuO | Employee Access"
            },
            {
                id: 2,
                value: 'tlss.uottawa.ca/site/en/',
                title: 'TLSS | SAEA'
            },
            {
                id: 3,
                value: '#',
                title: 'Virtual Campus | Campus Virtuel'
            }
        ]
    },
    getFacultyColor(id){
        
        let color = {  
                        1 : "white",
                        2 : "blue",
                        3 : "orange",
                        4 : "olive",
                        5 : "pink",
                        6 : "pink",
                        7 : "yellow",
                        8 : "teal",
                        9 : "purple",
                        10 : "red"
                    }
        return color[id]
    },
    getJobHeader(){
        return [
            {
                id: 1,
                value: 'Name | Nom'
            },
            {
                id: 2,
                value: 'Faculty | Faculté'
            }
        ]
    },
    getSoftware(){
        return [
            {
                id: 1,
                value: 'BrightSpace'
            },
            {
                id: 2,
                value: 'Maestro',
            },
            {
                id: 3,
                value: 'Blue'
            },
            {
                id: 4,
                value: 'uOSyllabus'
            },
            {
                id: 6,
                value: "Echo"
            },
            {
                id: '5',
                value: 'Other | Autre'
            },
            {
                id: 7,
                value: 'Lecture Capture'
            }
        ]
    },
    manageDB(){
        return [
            {
                id: 1,
                value: 'Users'
            },
            {
                id: 2,
                value: 'Software'
            },
            {
                id: 3,
                value: 'Faculty'
            }
        ]
    },
    getFaculty(){
        return [
            {
                'id': 1,
                'value': 'Arts'
            },
            {
                'id': 2,
                'value': 'Education | Éducation'
            },
            {
                'id': 3,
                'value': 'Engineering | Génie'
            },
            {
                'id': 4,
                'value': 'Health Sciences | Science de la Santé'
            },
            {
                'id' : 5,
                'value': 'Law | Droit'
            },
            {
                'id': 6,
                'value': 'Sciences'
            },
            {
                'id': 7,
                'value': 'Social Sciences | Science Sociale'
            },
            {
                'id': 8,
                'value': 'Medecine | Médécine'
            },
            {
                'id': 9,
                'value': 'Telfer'
            }
        ]
    },
    getMainNav(){
        return [
            {id: 'logo', value: '../assets/logo.png', alt: "logo d'uOttawa"},
            {id: 'home', value: 'uOttawa'},
            {id: 'faq', value: 'FAQ'}
        ]
    }
}