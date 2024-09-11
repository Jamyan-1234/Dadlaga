import Axios from 'axios';
import { useState, useEffect } from 'react';
import '../CSS_files/create_job.css';;
import myImage from '../images/logo.png';
import { Link } from 'react-router-dom';
import { height } from '@mui/system';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


function create_job() {


  const warning = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Ажлын зарыг амжилттай нийтэлэв",
      showConfirmButton: false,
      timer: 1500
    });
  };


  const [job_head, setJob_head] = useState('');                     {/* 1.Ажлын гарчиг            */}
  const [salbar, setSalbar] = useState('');                         {/* 2.Салбар                  */}
  const [job_description, setjob_description] = useState('');       {/* 3.Богино Тайлбар          */}
  const [buten_description, setbuten_description] = useState('');   {/* 4.Бүтэн Тайлбар           */}
  const [job_shaardlaga, setjob_shaardlaga] = useState('');         {/* 5.Шаардлага               */}
  const [job_turshlaga, setjob_turshlaga] = useState('');           {/* 6.Туршлага                */}
  const [jobType, setJobType] = useState('');                       {/* 7.Ажлын цагын төрөл       */}
  const [job_bairshil, setjob_bairshil] = useState('');             {/* 8.Байршил                 */}
  const [job_zarlagch, setjob_zarlagch] = useState('');             {/* 9.Зарлагч                 */}
  const [tsalin, setTsalin] = useState('');                         {/* 10.Цалин                  */}
  const [job_utasnii_dugaar, setutasnii_dugaar] = useState('');     {/* 11.Утасны дугаар          */}
  const [job_email, setemail] = useState('');                       {/* 12.Email                  */}
  const [user_email, setUser_email] = useState('');                 {/* 13.Хэрэглэгчийн EMAIL хаяг*/}



  const warninge = () => {
    Swal.fire({
      title: "Та итгэлэтэй байна уу?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Тийм"
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/');
        localStorage.removeItem('userEmail');
      }
    });
  };




  







  


  const Delete_token = () => {
    warninge()
    
  };
  

  useEffect(() => {
    const token = localStorage.getItem('userEmail');
    if (token) {
      setUser_email(token);
    } else {
      navigate('/about');
      console.log(" token алга") 
    }
  }, []);




  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();



  

    const handleChange = (event) => {
        setJobType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3001/create_job', { job_head, salbar, job_description, buten_description, job_shaardlaga, job_turshlaga, jobType, job_bairshil, job_zarlagch, tsalin, job_utasnii_dugaar, job_email, user_email})
      .then(result => {
        console.log(result);
        if (result.data === "Already registered") {
          alert("Бүртгэлтай хаяг байна");
        } else {

        }
      })
      .catch(err => console.log(err));
  }
  

  return (
    <>{
      <body>
        <div className='navigation_bar_for_creating_job'>
          <div className='logo_and_name_container'>
        <img src={myImage} height={60} width={75} alt="My Image"/> 
            <h1>Атом</h1>
          </div>





          
          

          <div className='dial'>
            <Link to="/" style={{ textDecoration: 'none' }}>
            <a className='dial_font'>Home </a>
            </Link>
            <Link to="/" style={{ textDecoration: 'none' }}>
            <a className='dial_font'>Contact </a>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none' }}>
            <a className='dial_font'>About us </a>
            </Link>
            <Link to="/create_job" style={{ textDecoration: 'none' }}>
            <a className='dial_font'>Ажлын зар нэмэх </a>
            </Link>
          </div>








          <div className='login'>
            
              

            <Link style={{ textDecoration: 'none' }} onClick={Delete_token}>
              <button className='sign_up_button'>
                Гарах
              </button>
            </Link>
          </div>
        </div> 
        {/*-↑------↑-------↑--------↑-----↑-----↑--Navigation Bar буюу App Bar------↑----------↑---------↑--------↑---- */}




        <form  className='job_creating_container' onSubmit={handleSubmit}>
          <div className='divider'>

          <div className='title_of_job_container'>
            <h3>Ажлын гарчиг</h3>

            <div>
              <input
              className='job_title_style'
              placeholder='Зөөгч, Савлагч, Нягтлан бодогч гэх мэт'
                type="text"
                required
                onChange={(event) => setJob_head(event.target.value)}
              />
            </div>
          </div>





          <div className='job_hour_type_box'>
            <h3>Ажлын Салбар</h3> 

            <div>
                <select 
                    className='job_hour_type_box_style' 
                    value={salbar} 
                    onChange={(event) => setSalbar(event.target.value)}
                    required
                >
                    <option value="" disabled>Сонгох</option>
                    <option value="Автомашин, засвар үйлчилгээ">Автомашин, засвар үйлчилгээ</option>
                    <option value="Аялал жуулчлал">Аялал жуулчлал</option>
                    <option value="Банк, санхүү, эдийн засаг, даатгал">Банк, санхүү, эдийн засаг, даатгал</option>
                    <option value="Барилга, Инженеринг">Барилга, Инженеринг</option>
                    <option value="Бизнес менежмент">Барилга, Инженеринг</option>
                    <option value="Боловсрол, нийгмийн ухаан">Боловсрол, нийгмийн ухаан</option>
                    <option value="Дизайн">Дизайн</option>
                    <option value="Дэд бүтэц">Дэд бүтэц</option>
                    <option value="Зочид буудал, ресторан">Зочид буудал, ресторан</option>
                    <option value="Иргэний нисэх">Иргэний нисэх</option>
                    <option value="Маркетинг, PR">Маркетинг, PR</option>
                    <option value="Мэдээлэл технологи">Мэдээлэл технологи</option>
                    <option value="Олон улсын байгууллага, суурин төлөөлөгчийн газар">Олон улсын байгууллага, суурин төлөөлөгчийн газар</option>
                    <option value="Спорт, Гоо сайхан, Фитнесс">Спорт, Гоо сайхан, Фитнесс</option>
                    <option value="Тавилга, модон эдлэл үйлдвэрлэл">Тавилга, модон эдлэл үйлдвэрлэл</option>
                    <option value="Төрийн болон ТББ, ОУБ">Төрийн болон ТББ, ОУБ</option>
                    <option value="Тээвэр, гааль, агуулах">Тээвэр, гааль, агуулах</option>
                    <option value="Уул уурхай, газрын тос">Уул уурхай, газрын тос</option>
                    <option value="Үйлдвэрлэл">Үйлдвэрлэл</option>
                    <option value="Үйлчилгээ">Үйлчилгээ</option>
                    <option value="Үл хөдлөх хөрөнгө">Үл хөдлөх хөрөнгө</option>
                    <option value="ХАА, Байгаль экологи">ХАА, Байгаль экологи</option>
                    <option value="Харилцаа холбоо">Харилцаа холбоо</option>
                    <option value="Харуул хамгаалалт">Харуул хамгаалалт</option>
                    <option value="Худалдаа, Борлуулалт">Худалдаа, Борлуулалт</option>
                    <option value="Хууль эрх зүй">Хууль эрх зүй</option>
                    <option value="Хүний нөөц, захиргаа">Хүний нөөц, захиргаа</option>
                    <option value="Хүнсний үйлдвэрлэл">Хүнсний үйлдвэрлэл</option>
                    <option value="ХХэвлэл мэдээлэл, Медиа">Хэвлэл мэдээлэл, Медиа</option>
                    <option value="Цахилгаан эрчим хүч, дулаан хангамж">Цахилгаан эрчим хүч, дулаан хангамж</option>
                    <option value="Шинжлэх ухаан">Шинжлэх ухаан</option>
                    <option value="Энтертайнмент, Соёл урлаг">Энтертайнмент, Соёл урлаг</option>
                    <option value="Эрүүл мэнд">Эрүүл мэнд</option>
                </select>
            </div>
            
          </div>





          <div className='description_of_job_container'>
            <h3>Ажлын товч тайлбар</h3>

            <div>
              <input
              className='job_title_textbox_style'
                type="text"
                required
                onChange={(event) => setjob_description(event.target.value)}
              />
            </div>
          </div>














          <div className='description_of_job_container'>
            <h3>Ажлын бүтэн тайлбар</h3>

            <div>
              <input
              className='job_full_description_textbox_style'
                type="text"
                required
                onChange={(event) => setbuten_description(event.target.value)}
              />
            </div>
          </div>








          <div className='description_of_job_container'>
            <h3>Ажлын шаардлага</h3>

            <div>
              <input
              className='job_shaardlaga_textbox_style'
                type="text"
                required
                onChange={(event) => setjob_shaardlaga(event.target.value)}
              />
            </div>
          </div>

          </div>
















          <div className='divider'>

          <div className='job_hour_type_box'>
            <h3>Туршлага шаардах эсэх</h3> 

            <div>
                <select 
                    className='job_hour_type_box_style' 
                    value={job_turshlaga} 
                    onChange={(event) => setjob_turshlaga(event.target.value)}
                    required
                >
                    <option value="" disabled>Сонгох</option>
                    <option value="Шаардлагатай">Шаардлагатай</option>
                    <option value="Шаардлагагүй">Шаардлагагүй</option>
                </select>
            </div>
            
          </div>
          
          





          <div className='job_hour_type_box'>
            <h3>Ажлийн цагийн төрөл</h3> 

            <div>
                <select 
                    className='job_hour_type_box_style' 
                    value={jobType} 
                    onChange={(event) => setJobType(event.target.value)}
                    required
                >
                    <option value="" disabled>Сонгох</option>
                    <option value="Бүтэн цагийн ажил">Бүтэн цагийн ажил</option>
                    <option value="Цагийн ажил">Цагийн ажил</option>
                    <option value="Дадлага">Дадлага</option>
                    <option value="Сайн дурын ажил">Сайн дурын ажил</option>
                </select>
            </div>
            
          </div>






          <div className='job_hour_type_box'>
            <h3>Байршил</h3> 

            <div>
  <select 
    className='job_hour_type_box_style' 
    value={job_bairshil} 
    onChange={(event) => setjob_bairshil(event.target.value)}
    required
  >
    <option value="" disabled>Сонгох</option>
    <option value="Улаанбаатар">Улаанбаатар</option>
    <option value="Архангай">Архангай</option>
    <option value="Баян-Өлгий">Баян-Өлгий</option>
    <option value="Баянхонгор">Баянхонгор</option>
    <option value="Булган">Булган</option>
    <option value="Говь-Алтай">Говь-Алтай</option>
    <option value="Говьсүмбэр">Говьсүмбэр</option>
    <option value="Дорнод">Дорнод</option>
    <option value="Дорноговь">Дорноговь</option>
    <option value="Дундговь">Дундговь</option>
    <option value="Завхан">Завхан</option>
    <option value="Орхон">Орхон</option>
    <option value="Өвөрхангай">Өвөрхангай</option>
    <option value="Өмнөговь">Өмнөговь</option>
    <option value="Сүхбаатар">Сүхбаатар</option>
    <option value="Сэлэнгэ">Сэлэнгэ</option>
    <option value="Төв">Төв</option>
    <option value="Увс">Увс</option>
    <option value="Ховд">Ховд</option>
    <option value="Хөвсгөл">Хөвсгөл</option>
    <option value="Хэнтий">Хэнтий</option>
    <option value="Дархан-Уул">Дархан-Уул</option>
    <option value="Орхон">Орхон</option>
  </select>
</div>

            
          </div>







          <div className='job_hour_type_box'>
            <h3>Зарлагч</h3> 

            <div>
                <select 
                    className='job_hour_type_box_style' 
                    value={job_zarlagch} 
                    onChange={(event) => setjob_zarlagch(event.target.value)}
                    required
                >
                    <option value="" disabled>Сонгох</option>
                    <option value="Хувь хүн">Хувь хүн</option>
                    <option value="Байгууллга">Байгууллага</option>
                </select>
            </div>
            
          </div>




          <div className='job_hour_type_box'>
            <h3>Цалин</h3> 
            <div>
              <input
              className='ehleh_tsalin_tetbox'
                type="number"
                required
                onChange={(event) => setTsalin(event.target.value)}
              />
            </div>

            
            
          </div>















          <div className='description_of_job_container'>
            <h3>Утасны дугаар</h3>

            <div>
              <input
              className='utasnii_dugaar_textbox_style'
                type="number"
                required
                onChange={(event) => setutasnii_dugaar(event.target.value)}
              />
            </div>
          </div>





          <div className='description_of_job_container'>
            <h3>Email хаяг</h3>

            <div>
              <input
              className='email_textbox_style'
                type="text"
                required
                onChange={(event) => setemail(event.target.value)}
              />
            </div>
          </div>








          <div className='description_of_job_container'>
            <br />
          <button type="submit" onClick={warning} className='zar_nemeh_button_css'>Зар нэмэх</button>
            
          </div>
           

          </div>
          









         
        </form>
       
        
       




       


        



    



      
        

        
        
          
      </body> 
    }    
    </>
    
  );
}



export default create_job;
