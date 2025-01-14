import React, { useState } from 'react';

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbQPCST5aZa9LuTC7uVYtL7rHz4tmJFdKwTA&s", alt: "Darbhanga Fort" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS96pW3gPnktXcwJhBwd8c8-wDY0j5Xn4wStQ&s", alt: "Mithila Painting" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScv-7jdrQxUlhe6sSsSYcuMPw8U_WTXFqk6Q&s", alt: "Darbhanga Lake" },
    { src: "https://images.tv9hindi.com/wp-content/uploads/2024/11/chhath-puja-right-date.jpg", alt: "Local Festival" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZAzBA94Z2ps4kod6gX3NTjeUba3edFR6gQ&s", alt: "Traditional Dance" },
    { src: "https://www.shutterstock.com/image-photo/shyama-mai-temple-darbhanga-bihar-600nw-2016672179.jpg", alt: "City Skyline" },
    { src: "https://cdn.s3waas.gov.in/s3beed13602b9b0e6ecb5b568ff5058f07/uploads/bfi_thumb/2018031218-olwciwq5hhc01zc45014nb674jjqonk9vxsg1xupls.gif", alt: "City Skyline" },
    { src: "https://images.pexels.com/photos/10211232/pexels-photo-10211232.jpeg?cs=srgb&dl=pexels-rohan-dewangan-2844320-10211232.jpg&fm=jpg", alt: "City Skyline" },
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2>Gallery</h2>
        <div className="grid">
          {images.map((image, index) => (
            <div key={index} className="image-wrapper" onClick={() => setSelectedImage(image)}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage.src} alt={selectedImage.alt} />
        </div>
      )}
    </section>
  );
};
