{/** */}import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Add Link import
import '../CSS_files/CompanyRegistration.css';
import myImage from '../images/logo.png';

const CompanyRegistration = () => {
    const [formData, setFormData] = useState({
        companyType: '',
        companyID: '',
        companyName: '',
        companyNameEng: '',
        brandName: '',
        establishedYear: '',
        industry: '',
        country: '',
        address: '',
        companySize: '',
        phone: '',
        email: '',
        website: '',
        facebook: '',
        instagram: '',
        linkedin: '',
        youtube: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className='background'>
            <div className='box'>
                <div className='logo'>
                    <div>
                        <img src={myImage} height={65} width={75} alt="Company Logo" />
                    </div>
                    <h1 className='logo_name'><strong></strong>Атом</h1>
                </div>
                <div className='dial'>
                    <Link to="/" className='dial_font'>Home</Link>
                    <Link to="/" className='dial_font'>Contact</Link>
                    <Link to="/about" className='dial_font'>About us</Link>
                    <Link to="/company" className='dial_font'>Ажлын зар нэмэх</Link>
                </div>
            </div>
            <div className="company-registration">
                <h2>Компани бүртгүүлэх</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Компанийн хэлбэр *</label>
                        <input type="text" name="companyType" value={formData.companyType} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Компанийн РД *</label>
                        <input type="text" name="companyID" value={formData.companyID} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Компанийн нэр *</label>
                        <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Компанийн нэр /Англи/ *</label>
                        <input type="text" name="companyNameEng" value={formData.companyNameEng} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Компанийн бренд нэр *</label>
                        <input type="text" name="brandName" value={formData.brandName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Байгуулагдсан он *</label>
                        <input type="date" name="establishedYear" value={formData.establishedYear} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Үйл ажиллагааны салбар *</label>
                        <input type="text" name="industry" value={formData.industry} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Улс *</label>
                        <input type="text" name="country" value={formData.country} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Дэлгэрэнгүй хаяг *</label>
                        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Компанийн хэмжээ /ажилтны тоо/ *</label>
                        <input type="text" name="companySize" value={formData.companySize} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Утасны дугаар *</label>
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>И-мэйл *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Website холбоос</label>
                        <input type="url" name="website" value={formData.website} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Facebook холбоос</label>
                        <input type="url" name="facebook" value={formData.facebook} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Instagram холбоос</label>
                        <input type="url" name="instagram" value={formData.instagram} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Linkedin холбоос</label>
                        <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Youtube холбоос</label>
                        <input type="url" name="youtube" value={formData.youtube} onChange={handleChange} />
                    </div>
                    <button type="submit">Үргэлжлүүлэх</button>
                </form>
            </div>
        </div>
    );
};

export default CompanyRegistration;
