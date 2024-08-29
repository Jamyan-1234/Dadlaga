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

app.get('/read_jobs', async (req, res) => {
  try {
    const job_infos = await FormDataModel1.find({});
    
    // Ажлын зарыг нийтэлснээс хойш хэдэн хоног өнгөрснийг тооцоолоод бүх заруудыг харуулна
    const jobsWithDays = job_infos.map(job => {
      const today = new Date();
      const postedDate = new Date(job.job_niitelsen_ognoo);
      const job_niitelsen_ognoo = Math.floor((today - postedDate) / (1000 * 60 * 60 * 24)); 
      return { ...job.toObject(), job_niitelsen_ognoo }; 
    });

    res.send(jobsWithDays);
  } catch (err) {
    res.status(500).send(err);
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























//---↓---↓--------↓--------↓---------↓---------↓-----Хэрэглэч ямар нэг зар харах----↓----------↓----↓---------↓-------↓--//
// Хэрэглэгч ямар нэг зар хархаар товч дарах үед тухайн ажлын ID-г авч өөр хуудас руу шилжинэ

app.get('/get_job/:id', async (req, res) => {
  try {
    const jobId = req.params.id;                                              //(ACTIVE)
    const jobInfo = await FormDataModel1.findById(jobId);
    if (!jobInfo) {
      return res.status(404).send("Олдсонгүй");
    }
    res.json([jobInfo]); // ARRAY болгоод буцаана
  } catch (err) {
    res.status(500).send(err);
  }
});
//----↑------↑-------↑--------↑-----↑-----↑----↑------Хэрэглэч ямар нэг зар харах------↑----------↑---------↑--------↑----//









//---↓---↓--------↓--------↓---------↓---------↓-----Ажлын зар харсан бол тухайн зарын харсан тоог 1-ээр ихэсгэнэ ----↓----------↓----↓---------↓-------↓--//
app.put('/increment_seen/:id', async (req, res) => {
  try {
    const jobId = req.params.id;                                                    //ACTIVE

    
    const jobInfo = await FormDataModel1.findByIdAndUpdate(
      jobId,
      { $inc: { job_harsan_too: 1 } },
      { new: true } 
    );

    if (!jobInfo) {
      return res.status(404).send("Job not found");
    }

    res.json(jobInfo);
  } catch (err) {
    console.error('Error incrementing job_harsan_too:', err);
    res.status(500).send("Internal server error");
  }
});
//----↑------↑-------↑--------↑-----↑-----↑----↑------Ажлын зар харсан бол тухайн зарын харсан тоог 1-ээр ихэсгэнэ------↑----------↑---------↑--------↑----//















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


