const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const FormDataModel = require ('./models/FormData');


const app = express();
app.use(express.json());
app.use(cors());





//---↓---↓--------↓---Өгөгдлийн сантай холбогдож буй хэсэг---↓-----↓--//
mongoose.connect('mongodb://127.0.0.1:27017/practice_mernnn1');
//----↑------↑--------Өгөгдлийн сантай холбогдож буй хэсэг--↑----↑--↑-//










//---↓---↓--------↓--------↓---------↓---------↓-----INSERT буюу Бүртгэл үүсгэх----↓----------↓----↓---------↓-------↓--//

// Энэ хэсэг нь бүртгэл үүсгэж, датаг өгөгдлийн сан руу оруулах хэсэг юм

app.post('/register', (req, res)=>{

    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            res.json("Already registered")
        }
        else{
            FormDataModel.create(req.body)
            .then(log_reg_form => res.json(log_reg_form))
            .catch(err => res.json(err))
        }
    })
    
})
//----↑------↑-------↑--------↑-----↑-----↑----↑------INSERT буюу Бүртгэл үүсгэх------↑----------↑---------↑--------↑----









app.post('/login', (req, res)=>{
    // To find record from the database
    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            // If user found then these 2 cases
            if(user.password === password) {
                res.json("Success");
            }
            else{
                res.json("Wrong password");
            }
        }
        // If user not found then 
        else{
            res.json("No records found! ");
        }
    })
})

app.listen(3001, () => {
    console.log("Server listining on http://127.0.0.1:3001");

});




{/*       ---------------------- Шалгалт хийхгүйгээр шууд өгөгдлийн сан руу хадгална--------------------------
app.post('/register', (req, res) => {
    // To post / insert data into the database

    // Extract the email and password from the request body
    const { email, password } = req.body;

    // Insert the form data into the collection
    FormDataModel.create(req.body)
        .then(log_reg_form => res.json(log_reg_form))
        .catch(err => res.json(err));
});------------------------------------------------------------------------------------------------
*/}
