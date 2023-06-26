const express = require('express')
const router = express.Router()
const {getAllJobs, addNewJob, updateJob} = require('../controllers/jobsController')

router.route('/').get(getAllJobs).post(addNewJob).patch(updateJob)

module.exports = router