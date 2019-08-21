export default{
    getPlatform(){
        return [
                {id: 1, value: 'BrightSpace - Campus Virtuel'},
                {id: 2, value: 'Maestro - Portaille de création de cours'},
                {id: 3, value: 'Blue - Évaluation en ligne'},
                {id: 4, value: 'uOSyllabus - Création de plan de cours'},
                {id: 7, value: 'ECHO360 ALP - Engagment en ligne'},
                {id: 5, value: "ECHO360 - Outil de capture d'écran"},
                {id: 6, value: "OpenCast - Outil de capture d'écran"},
                {id: 8, value: 'Adobe Connect - System de conférence en-ligne'}
        ]
    },
    getLang(){
        return [
            {id : 'ENGLISH | ANGLAIS', value : 'ANGLAIS'},
            {id : 'FRENCH | FRANÇAIS', value : 'FRANÇAIS'},
            {id : 'BOTH | LES DEUX', value : 'LES DEUX'}
        ]
    },
    getDay(){
        return [
            {id: 0, value: 'Lundi'},
            {id: 1, value: 'Mardi'},
            {id: 2, value: 'Mercredi'},
            {id: 3, value: 'Jeudi'},
            {id: 4, value: 'Vendredi'}
        ]
    },
    getMonth(){
        return [
            {id: 0, value: 'Janvier'},
            {id: 1, value: 'Février'},
            {id: 2, value: 'Mars'},
            {id: 3, value: 'Avril'},
            {id: 4, value: 'Mai'},
            {id: 5, value: 'Juin'},
            {id: 6, value: 'Julliet'},
            {id: 7, value: 'Aôut'},
            {id: 8, value: 'Septembre'},
            {id: 9, value: 'Octobre'},
            {id: 10, value: 'Novembre'},
            {id: 11, value: 'Decembre'}
        ]
    },
    getNavBar(){
        return [
            {id: 0, icon: 'tachometer alternate icon', title: 'Trafic'},
            {id: 1, icon: 'chart bar outline icon', title: 'Statistiques'},
            {id: 2, icon: 'user friends icon', title: "File d'attentes"},
            {id: 3, icon: 'database icon', title: 'Gestion des données'},
            {id: 4, icon: 'file excel icon', title: 'Exporter les données'}
        ]
    },
    getFooter(){
        return [
            {id: 1, value: 'uottawa.ca/en/employees', title: "VirtuO - Portaille des employés"},
            {id: 2, value: 'tlss.uottawa.ca/site/en/', title: "SAEA - Service d'enseignement"},
            {id: 3, value: '#', title: 'BrightSpace - Virtuel Campus'}
        ]
    },
    getJobHeader(){
        return [
            {id: 1, value: 'Nom'},
            {id: 2, value: 'Faculté'}
        ]
    },
    manageDB(){
        return [
            {id: 1, value: 'Utilisateurs'},
            {id: 2, value: 'Platforme'},
            {id: 3, value: 'Faculté'}
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
    },
    getMainNav(){
        return [
            {id: 'logo', value: 'uOttawa', alt: "logo d'uOttawa"},
            {id: 'home', value: 'Home'},
            {id: 'faq', value: 'FAQ'}
        ]
    }
}