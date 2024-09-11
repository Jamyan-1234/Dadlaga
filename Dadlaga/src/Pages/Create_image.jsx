import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

function Create_image() {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [error, setError] = useState(null);
  const [uploadedImageId, setUploadedImageId] = useState(null);
  const [fetchedImage, setFetchedImage] = useState(null);



  const [token, setToken] = useState("");
  

  

  useEffect(() => {
    const token = localStorage.getItem('userEmail');
    if (token) {
      console.log("NICE")
    } else {
      navigate('/');
    }
  }, []);






  const cropperRef = useRef(null);

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const onCrop = () => {
    if (!cropperRef.current) return;

    const cropper = cropperRef.current.cropper;
    if (cropper) {
      cropper.getCroppedCanvas().toBlob((blob) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          setCroppedImage(blob); // Set the blob directly here
        };
      }, 'image/jpeg');
    }
  };

  const uploadImage = async () => {
    if (!croppedImage) return;
  
    const formData = new FormData();
    formData.append('image', croppedImage, 'cropped.jpg');
    formData.append('email', localStorage.getItem('userEmail')); // Include the user's email
  
    try {
      const response = await axios.post('http://localhost:3001/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploadedImageId(response.data._id);
      setError(null);
    } catch (error) {
      setError('Failed to upload image. Please try again.');
    }
  };
  
  

  const fetchImage = async () => {
    if (!uploadedImageId) return;

    try {
      const response = await axios.get(`http://localhost:3001/image/${uploadedImageId}`, {
        responseType: 'arraybuffer',
      });
      const imageBlob = new Blob([response.data], { type: response.headers['content-type'] });
      setFetchedImage(URL.createObjectURL(imageBlob));
      setError(null); // Clear any previous errors
    } catch (error) {
      setError('Failed to fetch image. Please try again.');
    }
  };

  useEffect(() => {
    if (uploadedImageId) {
      fetchImage();
    }
  }, [uploadedImageId]);

  return (
    <div className="App">
      <h1>Та өөрийн нүүр зургыг оруулна уу</h1>
      {error && <p className="error">{error}</p>}
      <input type="file" onChange={onImageChange} />
      {image && (
        <Cropper
          style={{ height: 400, width: '100%' }}
          initialAspectRatio={1}
          aspectRatio={1} // Ensure the cropping area is a square
          preview=".img-preview"
          src={image}
          ref={cropperRef}
          viewMode={1}
          guides={false}
          crop={onCrop}
        />
      )}
      {croppedImage && (
        <div>
          
          
          <button onClick={uploadImage}>Upload</button>
        </div>
      )}
      {fetchedImage && (
        <div>
          
        </div>
      )}
    </div>
  );
}

export default Create_image;
