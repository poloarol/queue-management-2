export default {
    getPlatform(){
        return [
                    {
                        id: 1,
                        value: 'BrightSpace - Virtual Campus | Campus Virtuel'
                    },
                    {
                        id: 2,
                        value: "Lecture Capture | Outil de capture d'écran"
                    },
                    {
                        id: 3,
                        value: 'Maestro - Course creation portal | Portail de création de cours'
                    },
                    {
                        id: 4,
                        value: 'uOSyllabus - Online course plan '
                    },
                    {
                        id: 5,
                        value: 'Blue - Online Evaluation | Évaluation en ligne'
                    }
                ]
    },
    getLang(){
        return [{
            id : 'ENGLISH | ANGLAIS',
            value : 'ENGLISH | ANGLAIS'
        },
        {
            id : 'FRENCH | FRANÇAIS',
            value : 'FRENCH | FRANÇAIS'
        },
        {
            id : 'BOTH | LES DEUX',
            value : 'BOTH | LES DEUX'
        }]
    },
    getDay(){
        return [
            {
                id: 0,
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
                        5 : "red",
                        6 : "yellow",
                        7 : "teal",
                        8 : "purple"
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
    }
}