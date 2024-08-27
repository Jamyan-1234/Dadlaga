const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const FormDataModel = require ('./models/FormData');
const FormDataModel1 = require ('./models/Job_Model');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(cors());


const port = 3000;







//mongodb+srv://tester:<password>@database.jm0jwxa.mongodb.net/?retryWrites=true&w=majority&appName=Database

//mongodb://127.0.0.1:27017/Хэрэглэгчдийн_Мэдээлэл

// user name = tester
// Password = tester123456789


//---↓---↓--------↓---Өгөгдлийн сантай холбогдож буй хэсэг---↓-----↓--//
mongoose.connect('mongodb+srv://tester:tester123456789@database.jm0jwxa.mongodb.net/Parent_Database?retryWrites=true&w=majority&appName=Database');
//----↑------↑--------Өгөгдлийн сантай холбогдож буй хэсэг--↑----↑--↑-//










//---↓---↓--------↓--------↓---------↓---------↓-----INSERT буюу Бүртгэл үүсгэх----↓----------↓----↓---------↓-------↓--//

// Энэ хэсэг нь бүртгэл үүсгэж, датаг өгөгдлийн сан руу оруулах хэсэг юм                      (ACTIVE)

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
//----↑------↑-------↑--------↑-----↑-----↑----↑------INSERT буюу Бүртгэл үүсгэх------↑----------↑---------↑--------↑----//












//---↓---↓--------↓--------↓---------↓---------↓SEARCH буюу Өгөгдлийн сангаас мэдээлэл хайх----↓----------↓----↓---------↓------

// Энэ хэсэг нь өгөгдлийн сангаас мэдэээлэл хайх хэсэг юм                         (ACTIVE)

app.post('/login', (req, res)=>{
    // To find record from the database
    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password) {
                res.json("Амжилттай");
            }
            else{
                res.json("Wrong password");
            }
        } 
        else{
            res.json("Хаяг байхгүй");
        }
    })
})
//----↑------↑-------↑--------↑-----↑-----↑--SEARCH буюу Өгөгдлийн сангаас мэдээлэл хайх------↑----------↑---------↑--------↑----






















//---↓---↓--------↓--------↓---------↓---------↓-----Aжлын зар үүсгэх----↓----------↓----↓---------↓-------↓--//

// Энэ хэсэг нь ажлын зар үүсгэж, датаг өгөгдлийн сан руу оруулах хэсэг юм                      (ACTIVE)

app.post('/create_job', (req, res)=>{

  FormDataModel1.create(req.body)
  res.json("success")
  
})
//----↑------↑-------↑--------↑-----↑-----↑----↑------Aжлын зар үүсгэх------↑----------↑---------↑--------↑----//













//---↓---↓--------↓--------↓---------↓---------↓-----Бүх ажлын заруудыг харуулах----↓----------↓----↓---------↓-------↓--//

app.get('/read_jobs', async (req, res) => {     //ACTIVE
  try {
    const job_infos = await FormDataModel1.find({}); 
    res.send(job_infos);
  } catch (err) {
    res.send(err);
  }
});
//----↑------↑-------↑--------↑-----↑-----↑----↑------Бүх ажлын заруудыг харуулах------↑----------↑---------↑--------↑----//


















//---↓---↓--------↓--------↓---------↓---------↓-----Хэрэглэчийн өөрийн ажлын зар FETCH----↓----------↓----↓---------↓-------↓--//

//Хэрэглэгч зөвхөн өөрийн ажлын заруудыг харах                      //ACTIVE
app.post('/read_user_jobs', async (req, res) => {
  try {
    const { userEmail } = req.body;
    
    if (!userEmail) {
      return res.status(400).send("User email is required"); // Handle the case where email is not provided
    }

    // Find documents where user_email matches the specified email
    const job_infos = await FormDataModel1.find({ user_email: userEmail });
    
    res.send(job_infos);
  } catch (err) {
    res.status(500).send(err); // Send a 500 status code for server errors
  }
});
//----↑------↑-------↑--------↑-----↑-----↑----↑------Хэрэглэчийн өөрийн ажлын зар FETCH------↑----------↑---------↑--------↑----//




























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


