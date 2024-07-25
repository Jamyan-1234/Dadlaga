
const mongoose = require('mongoose');
const FormDataSchema = new mongoose.Schema({
    email: String,
    password: String,
})

const FormDataModel = mongoose.model('Хэрэглэгчдийн_Мэдээлэл', FormDataSchema); //Энэ хэсэгт Collection нэрийг зааж өгнө

module.exports = FormDataModel;    //  <---   Export хийснээр өөр кодонд ашиглах боломжтой болно






