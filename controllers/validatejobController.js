const jobModel = require('../models/jobmodel')

const getJobID = async(request, response) => {
    const {jobID} = request.body
    try{
        const jobToBeEdited = await jobModel.findOne({jobID:jobID})
        response.status(200).json(jobToBeEdited)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

module.exports = {getJobID}