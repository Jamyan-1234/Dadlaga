const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    data: Buffer, // Store image data in binary format
    contentType: String, // Store the content type of the image (e.g., 'image/jpeg')
  },
});

const FormDataModel = mongoose.model('Хэрэглэгчдийн_Мэдээлэл', FormDataSchema);

module.exports = FormDataModel;