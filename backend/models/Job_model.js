
const mongoose = require('mongoose');
const FormDataSchema = new mongoose.Schema({
    user_email:String,
    job_head: String,
    job_description: String,
    jobType: String,
})

const FormDataModel1 = mongoose.model('job_details', FormDataSchema); //Энэ хэсэгт Collection нэрийг зааж өгнө

module.exports = FormDataModel1;    //  <---   Export хийснээр өөр кодонд ашиглах боломжтой болно










