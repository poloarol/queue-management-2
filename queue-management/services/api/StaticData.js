let university = 'university'
let icon = 'icon'

export default {
    getCompID(){
        return [
                    {
                        id: 1,
                        value: '1'
                    },
                    {
                        id: 2,
                        value: '2'
                    },
                    {
                        id: 3,
                        value: '3'
                    },
                    {
                        id: 4,
                        value: '4'
                    },
                    {
                        id: 5,
                        value: '5'
                    },
                    {
                        id: 6,
                        value: '6'
                    },
                    {
                        id: 8,
                        value: '8'
                    },
                    {
                        id: 9,
                        value: '9'
                    },
                    {
                        id: 10,
                        value: '10'
                    },
                    {
                        id: 11,
                        value: '11'
                    },
                    {
                        id: 12,
                        value: '12'
                    },
                    {
                        id: 13,
                        value: '13'
                    },
                    {
                        id: 14,
                        value: '14'
                    },
                    {
                        id: 15,
                        value: '15'
                    },
                    {
                        id: 16,
                        value: '16'
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
                icon: 'users icon',
                title: 'User Management'
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
    getFacultyIcon(){
        return [
            {  
                1 : `${university} white ${icon}`,
                2 : `${university} #4682B4 ${icon}`,
                3 : `${university} orange ${icon}`,
                4 : `${university} #ADFF2F ${icon}`,
                5 : `${university} #CB4154 ${icon}`,
                6 : `${university} yellow ${icon}`,
                7 : `${university} #158277 ${icon}`,
                8 : `${university} #800080 ${icon}`
            }
        ]
    }
}