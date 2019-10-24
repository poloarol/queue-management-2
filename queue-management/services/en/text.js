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
            {id : 1, value : 'ENGLISH'},
            {id : 2, value : 'FRENCH'},
            {id : 3, value : 'BOTH'}
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
            {id: 5, value: 'Law - Common Law Section'},
            {id: 6, value: 'Law - Civil Law Section'},
            {id: 7, value: 'Sciences'},
            {id: 8, value: 'Social Sciences'},
            {id: 9, value: 'Medecine'},
            {id: 10,value: 'Telfer School of Management'}
        ]
    },
    getStatus(){
        return [
            {id: 1, value: 'Full-time Professor'},
            {id: 2, value: 'Part-time Professor'},
            {id: 3, value: 'Postdoctoral Fellow'},
            {id: 4, value: 'Support Staff'},
            {id: 5, value: 'Teaching Assistant'},
            {id: 6, value: 'Other'}
        ]
    },
    getFormLabels(){
        return [
            {header: 'Registration', message: 'Please register to get assistance in the Techno-Pedagogy Lab'},
            {header: 'Continuos support', bold: 'Continuos support',
                    message: "The information you provide in this \
                                form is gathered for statistical purposes \
                                and to help us continuously improve and \
                                tailor the services offered. Any personal \
                                information that could identify you will be \
                                removed from any disseminated reports."
            },
            {header: 'Staff Information', 
                personel: [
                    {
                        label: 'First Name', 
                        message: 'Please enter your first name', 
                        type: 'text'
                    },
                    {
                        label: 'Last Name', 
                        message: 'Please enter your last name', 
                        type: 'text'
                    },
                    {
                        label: 'Address courriel', 
                        message: 'Please enter your email', 
                        type: 'email'
                    }
                ],
                faculty: [
                    {
                        label: 'Faculty', 
                        data: this.getFaculty(),
                    },
                    {
                        label: 'Role', 
                        data: this.getStatus(),
                    },
                    {
                        label: 'Preffered Language', 
                        data: this.getLang(),
                    }
                ]
            },
            {header: '', 
                platform: [
                    {
                        label: 'Which platform do you require assistance with?', 
                        data: this.getPlatform()
                    },
                    {
                        label: 'Which tool are you having problems with?', data: []
                    }
                ]
            },
            {contact: 'Please check this box if we can use this information to contact you regarfing services that might \
                        be of interest to you e.g. courses, workshops, events etc. or for follow-up surveys when relevant research \
                        data is being collected'},
            {submit: 'Submit'}
        ]
    },
    getTopics(){
        return [
            {
                id: 1,
                topics: [
                    {
                        id: 11, 
                        value: 'Unable to login',
                        lib: []
                    },
                    {
                        id: 12, 
                        value: 'Add / Delete Files or Import Content',
                        lib: []
                    },
                    {
                        id: 13, 
                        value: 'Grade book',
                        lib: [
                            {name: 'Setup the grade book'},
                            {name: 'Add or Modify an Evaluation column'},
                            {name: 'Import or Export Grades'},
                            {name: 'Hide or Show columns to students'}
                        ]
                    },
                    {
                        id: 14, 
                        value: 'Groups',
                        lib: [
                            {name: 'Setup groups'}
                        ]
                    },
                    {
                        id: 15, 
                        value: 'Discussions',
                        lib: [
                            {name: 'Create an open discussion'},
                            {name: 'Create a group discussion'},
                            {name: 'Create discussions'},
                            {name: 'Create a journal - single user discussion space'},
                            {name: 'Hide or Show discussion to student'},
                            {name: 'Attach a rubric to a discussion'}
                        ]
                    },
                    {
                        id: 16, 
                        value: 'Assignments',
                        lib: [
                            {name: 'Create an assignment'},
                            {name: 'Create a group assignment'},
                            {name: 'Attach a rubric'},
                            {name: 'Attach assignment to grade book'},
                            {name: 'Make evaluation visible to students'}
                        ]
                    },
                    {
                        id: 17, 
                        value: 'Quizzes',
                        lib: [
                            {name: 'Create a quiz'},
                            {name: 'Automatically grade quiz'},
                            {name: 'Automatically export grades to grade book'},
                            {name: 'Hide or Show evaluation to students'}
                        ]
                    }
                ]
            },
            {
                id: 2,
                topics: [
                    {
                        id: 21,
                        value: 'Unable to login',
                        lib: []
                    },
                    {
                        id: 22,
                        value: "Can't find my courses",
                        lib: []
                    }
                ]
            },
            {
                id: 5,
                topics: [
                    {
                        id: 51,
                        value: 'Unable to login',
                        lib: []
                    },
                    {
                        id: 52,
                        value: "Account Creation",
                        lib: []
                    },
                    {
                        id: 53,
                        value: 'Scheduling',
                        lib: []
                    },
                    {
                        id: 54,
                        value: 'Recording',
                        lib: []
                    },
                    {
                        id: 55,
                        value: 'Editing',
                        lib: []
                    },
                    {
                        id: 56,
                        value: 'Giving access to students',
                        lib: []
                    },
                    {
                        id: 57,
                        value: 'Creating content',
                        lib: []
                    }
                ]
            },
            {
                id: 4,
                topics: [
                    {
                        id: 41,
                        value: 'Unable to login',
                        lib: []
                    },
                    {
                        id: 42,
                        value: "Can't find my courses",
                        lib: []
                    },
                    {
                        id: 43,
                        value: 'Account creation',
                        lib: []
                    },
                    {
                        id: 44,
                        value: 'Giving access to students',
                        lib: []
                    },
                    {
                        id: 45,
                        value: 'Creating content',
                        lib: []
                    }
                ]
            }
        ]
    }
}