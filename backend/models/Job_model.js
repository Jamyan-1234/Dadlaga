
const mongoose = require('mongoose');
const FormDataSchema = new mongoose.Schema({
    user_email:String,
    job_head: String,
    salbar: String,
    job_description: String,
    buten_description: String,
    job_shaardlaga: String,
    job_turshlaga: String,
    jobType: String,
    job_bairshil: String,
    job_zarlagch: String,
    tsalin: String,
    job_utasnii_dugaar: String,
    job_email: String,
    job_harsan_too: { type: Number, default: 0 },
    job_niitelsen_ognoo: { type: Date, default: Date.now }
    
})

const FormDataModel1 = mongoose.model('job_details', FormDataSchema); //Энэ хэсэгт Collection нэрийг зааж өгнө

module.exports = FormDataModel1;    //  <---   Export хийснээр өөр кодонд ашиглах боломжтой болно










