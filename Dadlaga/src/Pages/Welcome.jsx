import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import Swal from 'sweetalert2';


import Full_time_icon from '../images/time.png';
import Part_time_icon from '../images/half.png';
import Intern_icon from '../images/intern.png';
import Eye_icon from '../images/eye.png';
import Hour_Glass from '../images/Hour_Glass.png';
import myImage from '../images/logo.png';







import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import '../CSS_files/Welcome.css';


//------------------------------------------------ Welcome Page--------------------------------------------------------------------------------------

function Welcome() {
  const navigate = useNavigate();
  const [foodList, setFoodList] = useState([]);
  const [filteredFoodList, setFilteredFoodList] = useState([]);
  const [filters, setFilters] = useState({
    salbar: '',
    jobType: '',
    location: '',
    minSalary: '', // Add min salary
    maxSalary: '', // Add max salary
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);


  const salbarOptions = [
    'Автомашин, засвар үйлчилгээ',
    'Аялал жуулчлал',
    'Банк, санхүү, эдийн засаг, даатгал',
    'Барилга, Инженеринг',
    'Бизнес менежмент',
    'Боловсрол, нийгмийн ухаан',
    'Дизайн',
    'Зочид буудал, ресторан',
    'Иргэний нисэх',
    'Маркетинг, PR',
    'Мэдээлэл технологи',
    'Олон улсын байгууллага, суурин төлөөлөгчийн газар',
    'Спорт, Гоо сайхан, Фитнесс',
    'Тавилга, модон эдлэл үйлдвэрлэл',
    'Төрийн болон ТББ, ОУБ',
    'Тээвэр, гааль, агуулах',
    'Уул уурхай, газрын тос',
    'Үйлдвэрлэл',
    'Үйлчилгээ',
    'Үл хөдлөх хөрөнгө',
    'ХАА, Байгаль экологи',
    'Харилцаа холбоо',
    'Харуул хамгаалалт',
    'Худалдаа, Борлуулалт',
    'Хууль эрх зүй',
    'Хүний нөөц, захиргаа',
    'Хүнсний үйлдвэрлэл',
    'ХХэвлэл мэдээлэл, Медиа',
    'Цахилгаан эрчим хүч, дулаан хангамж',
    'Хууль эрх зүй',
    'Энтертайнмент, Соёл урлаг',
    'Эрүүл мэнд',
  ];
  const jobTypeOptions = [
    'Бүтэн цагийн ажил',
    'Цагийн ажил',
    'Сайн дурын ажил',
    'Дадлага',
  ];


  const locationOptions = [
    'Улаанбаатар', // Ulaanbaatar
    'Дархан', // Darkhan
    'Эрдэнэт', // Erdenet
    'Баянзүрх', // Bayanzurkh
    'Хөвсгөл', // Khuvsgul
    'Сүхбаатар', // Sukhbaatar
    'Орхон', // Orkhon
    'Говьсүмбэр', // Govisumber
    'Өвөрхангай', // Ovorkhangai
    'Булган', // Bulgan
    'Сэлэнгэ', // Selenge
    'Хэнтий', // Khentii
    'Төв', // Tuv
    'Дорнод', // Dornod
    'Дорноговь', // Dornogovi
    'Говь-Алтай', // Govi-Altai
    'Увс', // Uvs
    'Архангай', // Arkhangai
    'Сүхбаатар', // Sukhbaatar
    'Завхан', // Zavkhan
    'Өмнөговь', // Omnogovi
    'Баян-Өлгий', // Bayan-Ulgii
    'Дундговь', // Dundgovi
    'Ховд', // Khovd
    'Сайхан', // Saikhan
    'Төв аймаг', // Tuv Aimag
    // Add more locations if needed
];



const daysSincePostedOptions = [
  { label: 'Anytime', value: '' },
  { label: 'Last 24 hours', value: 1 },
  { label: 'Last 3 days', value: 3 },
  { label: 'Last 7 days', value: 7 },
  { label: 'Last 30 days', value: 30 },
];

  

  useEffect(() => {
    Axios.get("http://localhost:3001/read_jobs")
      .then((response) => {
        setFoodList(response.data);
        setFilteredFoodList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching jobs:', error);
      });
  }, []);


  useEffect(() => {
    let filtered = foodList;

    // Filter by salbar
    if (filters.salbar) {
      filtered = filtered.filter((job) => job.salbar === filters.salbar);
    }

    // Filter by jobType
    if (filters.jobType) {
      filtered = filtered.filter((job) => job.jobType === filters.jobType);
    }

    // Filter by location
    if (filters.location) {
      filtered = filtered.filter((job) => job.job_bairshil === filters.location);
    }

    // Filter by salary
    if (filters.minSalary || filters.maxSalary) {
      filtered = filtered.filter((job) => {
        const salary = parseFloat(job.tsalin);
        const minSalary = parseFloat(filters.minSalary) || 0;
        const maxSalary = parseFloat(filters.maxSalary) || Infinity;

        return salary >= minSalary && salary <= maxSalary;
      });
    }

    // Filter by days since posted
    if (filters.daysSincePosted) {
      const now = new Date();
      filtered = filtered.filter((job) => {
        const postDate = new Date(job.job_niitelsen_ognoo);
        const diffInDays = (now - postDate) / (1000 * 60 * 60 * 24); // Difference in days
        return diffInDays <= filters.daysSincePosted;
      });
    }

    setFilteredFoodList(filtered);
  }, [filters, foodList]);
  






  const handleChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value
    });
  };




  

  

  
  
  

  

  useEffect(() => {
    const token = localStorage.getItem('userEmail');
    if (token) {
      navigate('/welcome_logged');
    } else {
      console.log("there is no token") 
    }
  }, []);



 




  




  
  



  const warning = () => {
    Swal.fire({
      title: "Анхаар!",
      text: "Та нэвтэрч орно уу",
      icon: "warning",
      showConfirmButton: true,
      confirmButtonText: "OK",
      customClass: {
        popup: "animate__animated animate__fadeInDown"
      }
    });
  };
  


  const handleEditClick = (id) => {
    
    
    Axios.put(`http://localhost:3001/increment_seen/${id}`)
      .then(() => {
        localStorage.setItem('Songoson_Ajliin_ID', id); 
        navigate('/seeJob_Info');
      })
      .catch(err => {
        console.error("Алдаа гарлаа:", err);
      });
  };







  
  
  

 



  
  return (
    <body>
      <div className='Main_container'>
      {/* Navigation Bar буюу App Bar */}
      <div className='navigation_bar'>
        <div className='logo_and_name_container'>
          <img src={myImage} height={60} width={75} alt="My Image" />
          <h1>Атом</h1>
        </div>

        <div className='dial'>
          
          <Link to="/" style={{ textDecoration: 'none' }}>
            <span className='dial_font'>Contact</span>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <span className='dial_font'>About us</span>
          </Link>
          <Link  style={{ textDecoration: 'none' }}>
            <span className='dial_font' onClick={warning}>Ажлын зар нэмэх</span>
          </Link>
        </div>

        <div className='login'>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <button className='button_radius'>
              Нэвтрэх
            </button>
          </Link>
          <Link to="/signUp" style={{ textDecoration: 'none' }}>
            <button className='sign_up_button'>
              Бүртгүүлэх
            </button>
          </Link>

          
        </div>
      </div>
      {/* End of Navigation Bar буюу App Bar */}

      
















      {/* Search Categories */}
      <form>
        <Box display="flex" justifyContent="space-around" flexWrap="wrap" gap={2} padding={2} marginTop={15}>
          <select name="salbar" value={filters.salbar} onChange={handleChange} required>
            <option value="">Ажлын салбар</option>
            {salbarOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select name="jobType" value={filters.jobType} onChange={handleChange} required>
            <option value="">Ажиллах хэлбэр</option>
            {jobTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>



          <select name="location" value={filters.location} onChange={handleChange} required>
      <option value="">Байршил</option>
      {locationOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>











    <div className='salary-range-container'>
            <label className='salary-range-label' htmlFor="salaryRange"></label>
            <textarea
              className='long-textbox'
              name="salaryRange"
              placeholder="Цалингийн хэмжээ"
              value={filters.salaryRange}
              onChange={handleChange}
            />
          </div>










          









          
        </Box>
      </form>
      

      

     
      <div className='Database_item_storing_container'>
        {filteredFoodList.map((val, key) => (
          <div className='item' key={key}>


            <div className='title_of_job'>
              
              <h4>{val.job_head}</h4>
            </div>


            <div className='description_of_job'>
              <h6>{val.job_description}</h6>
            </div>


            <div className='time_type_of_job'>



              
              <div className='item_1'>


                <div className='image_container_for_item_1'> 
                <img 
                src={
                 val.jobType === 'Бүтэн цагийн ажил' 
                 ? Full_time_icon 
                 : val.jobType === 'Цагийн ажил'
                 ? Part_time_icon
                  : Intern_icon
                } 
                />  {/* Хэрвээ ажиллах цагийн төрөл нь full-time байвал бүтэн цагийг дүрслэх зургыг харуулна,  */}
                </div>
                <h6>{val.jobType}</h6>
                
                
              </div>






              <div className='item_1'>


                <div className='image_container_for_item_1'> 
                  <img 
                  src={Eye_icon} 
                  />  
                </div>
                <h6>Үзсэн {val.job_harsan_too}</h6>
                
                
                
              </div>










              <div className='item_2'>


                <div className='image_container_for_item_1'> 
                <img 
                src={Hour_Glass} 
                />  
                </div>
                <h6>{val.job_niitelsen_ognoo} Өдрийн өмнө</h6>
                <h6></h6>
                
                
              </div>

             

              


            </div>
            






























            <div className='tsalin_bolon_harah_button_container'>

            <h4>₮{val.tsalin} </h4> 
            
            <button className='button_css'   onClick={() => handleEditClick(val._id)}>Харах</button>

            </div>

            





















            
          </div>
        ))}
      </div>
      
    </div>

    

    
    

    
      
    </body>
    
  );
}

export default Welcome;
