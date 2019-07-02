const express = require('express')
const pg = require('pg')


const router = express.Router()

// Get Jobs
router.get('/', async(req, res) => {
    const client = await loadJobRequests()

    await client.connect(function(err){
        if(err){
            return console.error('could not connect to postgress', err)
        }
        client.query("SELECT JOB.ID, JOB.NAME, FACULTY.NAMES FROM JOB INNER JOIN FACULTY ON \
                        JOB.FACULTY_ID = FACULTY.ID WHERE JOB.COMPLETE = FALSE ORDER BY TODAY DESC;", function(err, results){
                            if(err){
                                return console.error('error running query', err)
                            }
                            res.send(results.rows)
                            client.end()
                        })
    })
})

// Add Jobs
router.post('/register', async(req, res) => {
    const client = await loadJobRequests()

    await client.connect(function(err){
        if(err){
            return console.error('could not connect to postgress', err)
        }

        let name = req.body.name
        let faculty = req.body.faculty
        let text = req.body.desc
        let role = req.body.role
        let status = req.body.status
        let date = new Date()
        let complete = false

        let values = [name, faculty, role, status, date, text, complete]
        const query = 'INSERT INTO JOB (NAME, FACULTY_ID, ROLE_ID, STATUS_ID, TODAY, DESCRIPTION, COMPLETE) \
                            VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING ID;'

        client.query(query, values)
                .then(result => {
                    res.sendStatus(201)
                    client.end()
                })
                .catch(e => console.error(e.stack))
        
        
    })
})

// Update Jobs
router.post('/update/:id', async(req, res) => {
    const client = await loadJobRequests()

    await client.connect(function(err){
        if(err){
            return console.error('could not connect to postgres', err)
        }

        let id = req.body.id

        const query = "UPDATE JOB SET COMPLETE = ($1) WHERE ID = ($2)"
        let values = [true, id]
    
        client.query(query,values)
                .then(result => {
                    res.sendStatus(200)
                    client.end()
                })
                .catch(e => console.error(e.stack))
    })
})

// Get faculty, role and status information
router.get('/register', async(req, res) => {

    const client = await loadJobRequests()
    // const client2 = await loadJobRequests()
    // const client3 = await loadJobRequests()

    await client.connect(function(err){
        if(err){
            return console.error('could not connect to postgres', err)
        }
        
        const faculty = "SELECT FACULTY.ID, FACULTY.NAMES FROM FACULTY"

        client.query(faculty)
               .then(result => {
                    console.log(result.rows)
                })
                 .catch(e => console.error(e.stack))
    })

    // let status = await client2.connect(function(err){
    //                     if(err){
    //                         return console.error('could not connect to postgres', err)
    //                     }

    //                     const status = "SELECT STATUS.NAMES FROM STATUS"

    //                     client2.query(stat)
    //                             .then(result => {
    //                                 console.log(result.rows)
    //                             })
    //                             .catch(e => console.error(e.stack))
    //                 })

    // let roles = await client3.connect(function(err){
    //                 if(err){
    //                     return console.error('could not connect to postgres', err)
    //                 }

    //                 const faculty = "SELECT ROLES.NAMES FROM ROLES"

    //                 client3.query(faculty)
    //                         .then(result => {
    //                             console.log(result.rows)
    //                         })
    //                         .catch(e => console.error(e.stack))
    //             })
})

async function loadJobRequests() {
    const conString = "postgres://ynsvtncb:v3StzUeatCf_PrpAfcdIwVe6RW-Qn6rI@isilo.db.elephantsql.com:5432/ynsvtncb"
    const client = await new pg.Client(conString)
    return client
}

module.exports = router