import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import '../CSS_files/Welcome.css';
import myImage from '../images/logo.png';

//------------------------------------------------ Welcome Page--------------------------------------------------------------------------------------

function Welcome() {
  const navigate = useNavigate();
  const [foodList, setFoodList] = useState([]);
  const [token, setToken] = useState("");



  useEffect(() => {
    const token = localStorage.getItem('userEmail');
    if (token) {
      navigate('/welcome_logged');
    } else {
      console.log("there is no token") 
    }
  }, []);



  useEffect(() => {
    Axios.get("http://localhost:3001/read_jobs").then((response) => { //FETCH DATA
      setFoodList(response.data);
    });
  }, []);





  




  //welcome_logged
  const handleChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value
    });
  };
























  const [filters, setFilters] = useState({
    salbar: '',
    ajliin_bairnii_tuvshin: '',
    ajillah_tsagiin_turul: '',
    tsalin: '',
    bairshil: '',
    niitlegdsan_hugatsa: ''
  });

  const categories = [
    { label: 'Салбар', value: 'salbar' },
    { label: 'Ажлын байрны түвшин', value: 'ajliin_bairnii_tuvshin' },
    { label: 'Ажиллах цагийн төрөл', value: 'ajillah_tsagiin_turul' },
    { label: 'Цалин', value: 'tsalin' },
    { label: 'Байршил', value: 'bairshil' },
    { label: 'Нийтлэгдсэн хугацаа', value: 'niitlegdsan_hugatsa' }
  ];

  const salbarOptions = [
    { label: 'Автомашин, засвар үйлчилгээ', value: 'Cars' },
    { label: 'Аялал жуулчлал', value: 'Tourism' },
    { label: 'Банк, санхүү, эдийн засаг, даатгал', value: 'Finance' },
    { label: 'Барилга, Инженеринг', value: 'Construction' },
    { label: 'Бизнес менежмент', value: 'Business' },
    { label: 'Боловсрол, нийгмийн ухаан', value: 'Education' },
    { label: 'Дизайн', value: 'Design' },
    { label: 'Дэд бүтэц', value: 'Infrastructure' },
    { label: 'Зочид буудал, ресторан', value: 'Hotels' },
    { label: 'Иргэний нисэх', value: 'Civil_aviation' },
    { label: 'Маркетинг, PR', value: 'Marketing' },
    { label: 'Мэдээлэл технологи', value: 'It' },
    { label: 'Олон улсын байгууллага, суурин төлөөлөгчийн газар', value: 'International_organizations' },
    { label: 'Спорт, Гоо сайхан, Фитнесс', value: 'Sports' },
    { label: 'Тавилга, модон эдлэл үйлдвэрлэл', value: 'wood_products' },
    { label: 'Төрийн болон ТББ, ОУБ', value: 'NGO_IGO' },
    { label: 'Тээвэр, гааль, агуулах', value: 'Shipping' },
    { label: 'Уул уурхай, газрын тос', value: 'Mining' },
    { label: 'Үйлдвэрлэл', value: 'Production' },
    { label: 'Үйлчилгээ', value: 'Service' },
    { label: 'Үл хөдлөх хөрөнгө', value: 'Estate' },
    { label: 'ХАА, Байгаль экологи', value: ' Ecology' },
    { label: 'Харилцаа холбоо', value: 'Communication' },
    { label: 'Харуул хамгаалалт', value: 'Security' },
    { label: 'Худалдаа, Борлуулалт', value: 'Sales' },
    { label: 'Хууль эрх зүй', value: 'Law' },
    { label: 'Хүний нөөц, захиргаа', value: 'HR' },
    { label: 'Хүнсний үйлдвэрлэл', value: 'Food_industry' },
    { label: 'Хэвлэл мэдээлэл, Медиа', value: ' Media' },
    { label: 'Цахилгаан эрчим хүч, дулаан хангамж', value: 'Electricity' },
    { label: 'Шинжлэх ухаан', value: 'Science' },
    { label: 'Энтертайнмент, Соёл урлаг', value: 'Entertainment' },
    { label: 'Эрүүл мэнд', value: 'Health' },
    { label: 'Бусад', value: 'Other1' }
    
  ];
  const ajliin_bairnii_tuvshinOptions = [
    { label: 'Удирдах ажилтан', value: 'Manager' },
    { label: 'Ахлах ажилтан', value: 'Senior' },
    { label: 'Дунд ажилтан', value: 'Middle' },
    { label: 'Анхан ажилтан', value: 'First' },
    { label: 'Гэрээт ажилтан', value: 'Contract' },
    { label: 'Дадлагын ажилтан', value: 'Trainee' },
    { label: 'Цагийн ажилтан', value: 'Parttime' },
    { label: 'Бусад', value: 'Other2' }
  ];

  const ajillah_tsagiin_turulOptions = [
    { label: 'Бүтэн цагийн ажил', value: 'Fulltime' },
    { label: 'Цагийн ажил', value: 'Part_time' },
    { label: 'Ээлжийн ажил, Улирлын чанартай ажил', value: 'Seasonal' },
    { label: 'Зөвлөх, Freelancer', value: 'Freelancer' },
    { label: 'Дадлагын ажил', value: 'Practice' },
    { label: 'Сайн дурын ажил', value: 'Voluntary' },
    { label: 'Бусад', value: 'Other3' }
  ];
  const tsalinOptions = [
    { label: '500,000+', value: '5000000' },
    { label: '1,000,000+', value: '1000000' },
    { label: '1,500,000+', value: '1500000' },
    { label: '2,000,000+', value: '2000000' },
    { label: '2,500,000+', value: '2500000' },
    { label: '3,000,000+', value: '3000000' },
    { label: '4,000,000+', value: '4000000' },
    { label: '5,000,000+', value: '5000000' },
    { label: 'Бусад', value: 'Other4' }
  ];
  const bairshilOptions = [
    { label: 'Улаанбаатар', value: 'Ulaanbaatar' },
    { label: 'Архангай', value: 'Arkhangai' },
    { label: 'Баян-Өлгий', value: 'Bayan_Olgii' },
    { label: 'Баянхонгор', value: 'Bayankhongor' },
    { label: 'Булган', value: 'Bulgan' },
    { label: 'Говь-Алтай', value: 'Gobi_Altai' },
    { label: 'Говьсүмбэр', value: 'Govsumber' },
    { label: 'Дархан-Уул', value: 'Darkhan_Uul' },
    { label: 'Дорноговь', value: 'Dornogovi' },
    { label: 'Дорнод', value: 'Dornod' },
    { label: 'Дундговь', value: 'Dundgovi ' },
    { label: 'Завхан', value: 'Zavkhan' },
    { label: 'Орхон', value: 'Orkhon' },
    { label: 'Сэлэнгэ', value: 'Selenge' },
    { label: 'Сүхбаатар', value: 'Sukhbaatar' },
    { label: 'Төв', value: 'Center' },
    { label: 'Увс', value: 'Uvs' },
    { label: 'Ховд', value: 'Hovd' },
    { label: 'Хэнтий', value: 'Khentii' },
    { label: 'Хөвсгөл', value: 'Khovsgol' },
    { label: 'Өвөрхангай', value: 'Ovorkhangai' },
    { label: 'Өмнөговь', value: 'Omnogovi' },
    { label: 'Бусад', value: 'Other5' }
  ];
  const niitlegdsan_hugatsaOptions = [
    { label: 'Сүүлийн 24 цаг', value: '24_hours' },
    { label: 'Сүүлийн 7 хоног', value: '7_days' },
    { label: 'Сүүлийн 14 хоног', value: '14_days' },
    { label: 'Сүүлийн сар', value: 'month' },
    { label: 'Бусад', value: 'Other6' }
  ];



  

  
  return (
    <div className='Main_container'>
      {/* Navigation Bar буюу App Bar */}
      <div className='navigation_bar'>
        <div className='logo_and_name_container'>
          <img src={myImage} height={60} width={75} alt="My Image" />
          <h1>Атом</h1>
        </div>

        <div className='dial'>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <span className='dial_font'>Home</span>
          </Link>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <span className='dial_font'>Contact</span>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <span className='dial_font'>About us</span>
          </Link>
          <Link to="/create_job" style={{ textDecoration: 'none' }}>
            <span className='dial_font'>Ажлын зар нэмэх</span>
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
      <Box display="flex" justifyContent="space-around" flexWrap="wrap" gap={2} padding={2} marginTop={15}>
        {categories.map((category) => (
          <FormControl key={category.value} variant="outlined" sx={{ minWidth: 120 }}>
            <InputLabel>{category.label}</InputLabel>
            <Select
              value={filters[category.value]}
              onChange={handleChange}
              label={category.label}
              name={category.value}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {category.value === 'salbar' && salbarOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>

              ))}
              {category.value === 'ajliin_bairnii_tuvshin' && ajliin_bairnii_tuvshinOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                
              ))}
              {category.value === 'ajillah_tsagiin_turul' && ajillah_tsagiin_turulOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                
              ))}
              {category.value === 'tsalin' && tsalinOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                
              ))}
               {category.value === 'bairshil' && bairshilOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                
              ))}
               {category.value === 'niitlegdsan_hugatsa' && niitlegdsan_hugatsaOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                
              ))}
            </Select>
          </FormControl>
        ))}
      </Box>

     
      <div className='Database_item_storing_container'>
        {foodList.map((val, key) => (
          <div className='item' key={key}>
            <div className='title_of_job'>
              <h6>{val.job_head}</h6>
            </div>
            <div className='description_of_job'>
              <h6>{val.job_description}</h6>
            </div>
            <h6>{val.name}</h6>
            <h6>{val.jobType}</h6>
            <button>apply</button>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Welcome;
