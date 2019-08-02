const express = require('express')
const pg = require('pg')

const router = express.Router()

const Pool = getPool()

// Get Jobs
router.get('/', async(req, res) => {

    Pool.connect(async function(err, client, done){
        if(err){
            return console.error('could not connect to postgress', err)
        }
        
        const query = "SELECT JOB.ID AS ID, JOB.FNAME AS NAME, JOB.STATION_ID AS POST,\
                        FACULTY.ID AS F_ID, FACULTY.IDENT AS FACULTY, JOB.USER_DESCRIPTION AS DESCRIPTION\
                        FROM JOB INNER JOIN FACULTY ON JOB.FACULTY_ID = FACULTY.ID \
                        WHERE JOB.ASSISSTED = FALSE AND TODAY::DATE = NOW()::DATE ORDER BY TODAY DESC;"
    
        await client.query(query)
                    .then((result) => {
                        done()
                        res.send(result.rows)
                    })
                    .catch((err) => {
                        return console.error('error running query', err)
                    })
    })
})

router.get('/register', async(req, res) => {

    let results = {}
   
    Pool.connect(async function(err, client, done){
        if(err){
            return console.error('could not connect to postgress', err)
        }
        const query = "SELECT FACULTY.ID, FACULTY.IDENT FROM FACULTY"

        results['faculty'] = await runQuery(client, query, done)
    })

    Pool.connect(async function(err, client, done){
        if(err){
            return console.error('could not connect to postgress', err)
        }
        const query = "SELECT ROLES.ID, ROLES.IDENT FROM ROLES"
        results['roles'] = await runQuery(client, query, done)
    })

    Pool.connect(async function(err, client, done){
        if(err){
            return console.error('could not connect to postgress', err)
        }
        const query = "SELECT STAFF.ID, STAFF.IDENT FROM STAFF"
        results['staff'] = await runQuery(client, query, done)
    })

    Pool.connect(async function(err, client, done){
        if(err){
            return console.error('could not connect to postgress', err)
        }
        const query = "SELECT SOFTWARE.ID, SOFTWARE.IDENT FROM SOFTWARE"
        results['software'] = await runQuery(client, query, done)
    })

    setTimeout(() => {
        Pool.connect(async function(err, client, done){
            if(err){
                return console.error('could not connect to postgress', err)
            }
            const query = "SELECT * FROM TOPICS INNER JOIN SUB_TOPICS ON TOPICS.ID = SUB_TOPICS.TOPIC_ID"
            results['sub_topic'] = await runQuery(client, query, done)
            res.send(results)
        })
    }, 1000)

})

// Add Jobs
router.post('/register', async(req, res) => {

    Pool.connect(async function(err, client, done){
        if(err){
            return console.error('could not connect to postgress', err)
        }

        let data = req.body

        let lname = data.lname
        let fname = data.fname
        let date = new Date()
        let faculty = data.faculty
        let role = data.role
        let lang = data.lang.toString()
        let station = data.station      
        let assisted_by = null
        let assisted = false
        let text = data.desc

        let values = [fname, lname, date, faculty, role, lang, station, assisted_by, assisted, text]
        const query = 'INSERT INTO JOB (FNAME, LNAME, TODAY, FACULTY_ID, ROLES_ID, LANGUANGE, STATION_ID, ASSISTED_BY, ASSISSTED, USER_DESCRIPTION) \
                            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING ID;'
        
        client.query(query, values)
              .then((result) => {
                  res.send(result)
              })
              .catch((err) => {
                return console.error('error running query', err)
              })
        
    })

})

router.get('/update', async(req, res) => {

    Pool.connect(async function(err, client, done){
        if(err){
            return console.error('could not connect to postgres', err)
        }
    })

    const query = "SELECT STAFF.ID, STAFF.IDENT FROM STAFF"

    await client.query(query)
                .then((result) => {
                    done()
                    res.send(result.rows)
                })
                .catch((err) => {
                    return console.error('error running query', err)
                })

})

// Update Jobs
router.put('/update/:id/:staff_id', async(req, res) => {

    Pool.connect(async, function(err, client, done){
       
        if(err){
            return console.error('could not connect to postgres', err)
        }

        let id = req.params.id
        let staff = req.params.staff_id

        const query = "UPDATE JOB SET ASSISTED_BY = ($1), ASSISSTED = ($2) WHERE ID = ($3)"
        let values = [staff, true, id]

        client.query(query, values)
                .then((result) => {
                    res.send(result)
                })
                .catch((err) => {
                    return console.error('error running query', err)
                })
    })
})

router.get('/admin/management', async(req, res) => {

    let results = {}
   
    Pool.connect(async function(err, client, done){
        if(err){
            return console.error('could not connect to postgres', err)
        }
        const query = "SELECT STAFF.ID, STAFF.IDENT FROM STAFF"
        await runQuery(client, query, results, 'staff', done)
    
    })

    Pool.connect(async function(err, client, done){
        if(err){
            return console.error('could not connect to postgres', err)
        }
        const query = "SELECT STATUS.ID, STAFF.IDENT FROM STAFF"
        await runQuery(client, query, results, 'status', done)
        res.send(results)
    
    })


})

router.get('/admin/:month/:day', async(req, res) => {

    Pool.connect(async function(err, client, done){
        if(err){
            return console.error('could not connect to postgress', err)
        }

        let hour = 0
        let month = req.params.month
        let day = req.params.day

        let results = {'day': hourDict()}

        let values = [month, day]
        const query = "SELECT JOB.TODAY FROM JOB WHERE EXTRACT(MONTH FROM JOB.TODAY) = \
                            ($1) AND EXTRACT(DOW FROM JOB.TODAY) = ($2)"

        await client.query(query, values)
                    .then((result) => {
                        let total = result.rowCount
                        for(let i in result.rows){
                            let date = new Date(result.rows[i].today)
                            incrementHour(date.getHours(), results.day)
                        }
                        // normalizeToPercentage(total, results.day)
                        res.send(results.day)
                    })
                    .catch((err) => {
                        return console.error('error running query', err)
                    })

    })
})


function getPool() {
    const conString = "postgres://ynsvtncb:v3StzUeatCf_PrpAfcdIwVe6RW-Qn6rI@isilo.db.elephantsql.com:5432/ynsvtncb"
    const pool = new pg.Pool({connectionString: conString, ssl: true, max:10, idleTimeoutMillis: 30000})
    return pool
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