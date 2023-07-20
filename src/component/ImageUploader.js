import React, { useState } from 'react';

const ImageUploader = () => {
  const [previewImage, setPreviewImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataURL = reader.result;
        setPreviewImage(imageDataURL);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='d_book_img'>
      <input className='d_add_file' type="file" onChange={handleFileChange} />
      {previewImage && <img src={previewImage} alt="Preview" />}
      {/* ... */}
    </div>
  );
};

export default ImageUploader;

