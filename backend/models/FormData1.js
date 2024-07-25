
const mongoose = require('mongoose');
const FormDataSchema = new mongoose.Schema({
    sender: String,
    message: String,
})

const FormDataModel1 = mongoose.model('test', FormDataSchema); //Энэ хэсэгт Collection нэрийг зааж өгнө

module.exports = FormDataModel1;    //  <---   Export хийснээр өөр кодонд ашиглах боломжтой болно






