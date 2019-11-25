const express = require('express')
const mysqlEasier = require('mysql-easier')

const router = express.Router()


const Pool = getPool()

// Get Jobs
router.get('/', async(req, res) => {

    try{
        const connection = await Pool.getConnection()
        const query = 'select job.id as id, job.fname as name, job.software as software, job.station_id as post, job.faculty_id as f_id from lab2019_scheduler.job where job.assisted = false'
        let result = await connection.query(query)
        // console.log(result)
        // res.send(result)
        // connection.done()
    }catch(err){
        console.error('error running query', err.message)
    }
})

// router.get('/register', async(req, res) => {

//     let results = {}
   
//     Pool.connect(async function(err, client, done){
//         if(err){
//             return console.error('could not connect to postgress', err)
//         }
//         const query1 = "SELECT FACULTY.ID, FACULTY.IDENT FROM FACULTY"

//         results['faculty'] = await runQuery(client, query1, done)
//     })

//     Pool.connect(async function(err, client, done){
//         if(err){
//             return console.error('could not connect to postgress', err)
//         }
//         const query2 = "SELECT ROLES.ID, ROLES.IDENT FROM ROLES"
//         results['roles'] = await runQuery(client, query2, done)
//     })

//     Pool.connect(async function(err, client, done){
//         if(err){
//             return console.error('could not connect to postgress', err)
//         }
//         const query3 = "SELECT SOFTWARE.ID, SOFTWARE.IDENT FROM SOFTWARE"
//         results['software'] = await runQuery(client, query3, done)
//     })

//     setTimeout(() => {
//         Pool.connect(async function(err, client, done){
//             if(err){
//                 return console.error('could not connect to postgress', err)
//             }
//             const query = "SELECT * FROM TOPICS INNER JOIN SUB_TOPICS ON TOPICS.ID = SUB_TOPICS.TOPIC_ID"
//             results['sub_topic'] = await runQuery(client, query, done)
//             res.send(results)
//         })
//     }, 500)

// })

// Add Jobs
router.post('/register', async(req, res) => {

    try{
        const connection = await Pool.getConnection()

        let data = req.body

        // let values = [fname, lname, date, faculty, role, lang, station, assisted_by, assisted, text]
        // const query = 'INSERT INTO JOB (FNAME, LNAME, TODAY, FACULTY_ID, ROLES_ID, LANGUANGE, STATION_ID, ASSISTED_BY, ASSISSTED, USER_DESCRIPTION) \
        //                     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING ID;'

        let results = await connection.insert('job',
                            {
                                lname: data.lname, 
                                fname: data.fname, 
                                today: new Date(),
                                faculty_id: data.faculty, 
                                roles_id: data.roles, 
                                lang: data.lang,
                                assisted_by: null, 
                                assisted: false,
                                station_id: data.station, 
                                software: data.software,
                                topics: data.topics,
                                contact: data.contact
                            })
        connection.done()
    }catch(err){
        console.error('error running this query', err.message)
    }

})

router.get('/update', async(req, res) => {

    try{
        const connection = await Pool.getConnection()

        let result = await connection.getAll('staff')
        res.send(result)
        connection.done()
    }catch(err){
        console.error('error running this query', err.message)
    }

})

// Update Jobs
router.put('/update/:id/:staff_id', async(req, res) => {

    try{
        const connection = await Pool.getConnection()
        // let result = connection.updateById('job', {id: req.params.id, assisted_by: req.params.staff_id})
        connection.updateById('job', req.params.id, {assisted_by: req.params.staff_id, assisted: true})
        connection.done()

    }catch(err){
        console.error('error running this query', err.message)
    }
})

router.get('/admin/management', async(req, res) => {

    // let results = {}
   
    // Pool.connect(async function(err, client, done){
    //     if(err){
    //         return console.error('could not connect to postgres', err)
    //     }
    //     const query = "SELECT STAFF.ID, STAFF.IDENT FROM STAFF"
    //     await runQuery(client, query, results, 'staff', done)
    
    // })

    // Pool.connect(async function(err, client, done){
    //     if(err){
    //         return console.error('could not connect to postgres', err)
    //     }
    //     const query = "SELECT FACULTY.ID, FACULTY.IDENT FROM FACULTY"
    //     await runQuery(client, query, results, 'faculty', done)
    // })

    // Pool.connect(async function(err, client, done){
    //     if(err){
    //         return console.error("could not connect to postgress", err)
    //     }
    //     const query = "SELECT SOFTWARE.ID, SOFTWARE.IDENT FROM SOFTWARE"
    //     await runQuery(client, query, results, 'software', done)
    //     res.send(results)
    // })
})

router.get('/admin/:month/:day', async(req, res) => {

    try{
        const connection = await Pool.getConnection()
        const query = "SELECT JOB.TODAY FROM JOB WHERE EXTRACT(MONTH FROM JOB.TODAY) = \
                            ? AND DAYOFWEEK(JOB.TODAY) = ?"
        let result = await connection.query(query, req.params.month, req.params.day)
        let results = {}

        for(let i in result.rows){
            let date = new Date(result.rows[i].today)
            incrementHour(date.getHours(), results.day)
        }
        connection.done()
        res.send(results)

    }catch(err){
        console.error('error running query', err.message)
    }
})

router.get('/admin/:soft/:lang/:faculty/:role', async(req, res) => {

    try{
        const connection = await Pool.getConnection()
        const  query = "SELECT JOB FROM JOB WHERE SOFTWARE_ID = ? AND LANGUANGE = \
                            ? OR FACULTY_ID = ? OR ROLES_ID = ?"
        let results = connection.query(query, req.params.soft, req.params.lang, req.params.faculty, req.params.role)
        connection.done()
        res.send(results.rows)
    }catch(err){
        console.error('error running query', err.message)
    }
})


function getPool() {

    try{
        const Pool = mysqlEasier.createPool({
                host : '137.122.48.140',
                database: 'lab2019_scheduler',
                user : 'polo',
                password : 'Polo@2k19',
                insecureAuth : true
            })
        return Pool
    }catch(err){
        console.error('Connectionn failed ...', err)
    }


}

async function runQuery(client, query, done){
    let value = await client.query(query)
                            .then((result) => {
                                done()
                                return result.rows
                            })
                            .catch((err) => {
                                return console.error('error running query', err)
                            })

    return value
}

function hourDict(){
    let hours = {'8': 0, '9': 0, '10': 0, '11':0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0}
    return hours
}

function incrementHour(hour, value){
    
    if(hour > 7 && hour < 18)
        value[hour.toString()]++
}

function normalizeToPercentage(total, values){
    for(let key in values)
        values[key] = ((values[key]/total) * 100).toFixed(3)
}

module.exports = router